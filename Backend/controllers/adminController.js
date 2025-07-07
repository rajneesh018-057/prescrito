import bcrypt from 'bcrypt';
import validator from 'validator';
import Doctor from '../models/doctorModel.js';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import jwt from 'jsonwebtoken';

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
    } = req.body;

    const imageFile = req.file;

    console.log('Received Fields:', {
      name,
      specialization,
      degree,
      experience,
      feesPerConsultation,
      timings,
      email,
      password,
      address,
    });

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
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => value === undefined || value === null || value === '')
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(', ')}`,
      });
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

    let imageUrl = '';
    if (imageFile) {
      const result = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: 'image',
        folder: 'doctor_profiles',
      });
      imageUrl = result.secure_url;
      fs.unlinkSync(imageFile.path);
    }

    const parsedExperience = Number(experience);
    const parsedFees = Number(feesPerConsultation);

    const newDoctor = new Doctor({
      name,
      specialization,
      degree,
      experience: parsedExperience,
      feesPerConsultation: parsedFees,
      timings,
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      address,
      profilePic: imageUrl,
      date: Date.now(),
    });

    await newDoctor.save();

    res.status(201).json({
      message: 'Doctor added successfully',
      doctor: newDoctor,
    });
  } catch (error) {
    console.error('Error adding doctor:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ✅ Admin Login Controller with JWT
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

    // ✅ Generate JWT Token
    const token = jwt.sign({ email }, jwtSecret, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Admin logged in successfully',
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ✅ Export Controllers
export { addDoctor, loginAdmin };
