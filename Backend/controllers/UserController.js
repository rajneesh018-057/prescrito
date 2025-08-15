import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import { v2 as cloudinary } from 'cloudinary';

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Please fill all fields' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email format' });
    }

    if (password.length < 8) {
      return res.status(400).json({ success: false, message: 'Password must be at least 8 characters long' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
      },
    });

  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please fill all fields' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found with email:", email);
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Incorrect password for:", email);
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
      },
    });

  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
// api to get user profile data 
const getUserProfile = async (req, res) => {
  try {       
const 
userId = req.user.id; // Assuming user ID is stored in req.user after authentication
    const user = await User.findById(userId).select('-password');
    res.json({success:true,user}) // Exclude password from response
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};  
 const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // From auth middleware
    const { name, address, dob, phone, gender } = req.body;

    const profilePicUrl = req.file ? req.file.path : null; // From multer

    // Input validation
    if (!name || !gender || !address || !dob || !phone ) {
      return res.status(400).json({ success: false, message: 'Please fill all fields' });
    }

    let imageurl;

    if (profilePicUrl) {
      const image = await cloudinary.uploader.upload(profilePicUrl, {
        folder: 'profile_pics',
        width: 150,
        crop: 'scale',
      });
      imageurl = image.secure_url;
    }

    // Build update object
    const updateData = {
      name,
      address,
    dob,
      phone,
      gender,
      
    };

    if (imageurl) {
      updateData.profilePic = imageurl;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: 'User profile updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};




export { registerUser, loginUser , getUserProfile, updateUserProfile  };
