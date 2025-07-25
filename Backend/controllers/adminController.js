import bcrypt from 'bcrypt';
import validator from 'validator';
import Doctor from '../models/doctorModel.js';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import jwt from 'jsonwebtoken';

// ✅ Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Add Doctor Controller
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      specialization,
      degree,
      experience,
      feesPerConsultation,
      timings,
      email,
      password,
      address,
      about,
    } = req.body;

    const imageFile = req.file;

    const requiredFields = {
      name,
      specialization,
      degree,
      experience,
      feesPerConsultation,
      timings,
      email,
      password,
      address,
      about,
      profilePic: imageFile ? imageFile.path : null,
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => value === undefined || value === null || value === '')
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(', ')}`,
      });
    }
    const parsedFees = Number(feesPerConsultation);
if (isNaN(parsedFees)) {
  return res.status(400).json({ message: 'Invalid consultation fee' });
}

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      return res.status(400).json({
        message:
          'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.',
      });
    }

    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: 'Doctor with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let profilePicUrl = '';



if (req.file) {
  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: 'doctor_profiles',
    
  });
  profilePicUrl = result.secure_url;
  fs.unlinkSync(req.file.path); // delete local file after upload
}

const newDoctor = new Doctor({
  name,
  specialization,
  degree,
  experience: Number(experience),
  feesPerConsultation: parsedFees,
  timings,
  email: email.toLowerCase().trim(),
  password: hashedPassword,
  address,
  profilePic: profilePicUrl,
  date: Date.now(),
});


    await newDoctor.save();

    res.status(201).json({
      success: true,
      message: 'Doctor added successfully',
      doctor: newDoctor,
    });
  } catch (error) {
    console.error('Error adding doctor:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ✅ Admin Login Controller
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const jwtSecret = process.env.JWT_SECRET;

    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ email }, jwtSecret, { expiresIn: '1h' });

    res.status(200).json({
      message: true,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
// api to get all doctors list
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({}).select('-password'); // Exclude password from response
    res.status(200).json({
      success: true,
      doctors,
    });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


export { addDoctor, loginAdmin ,getAllDoctors};
