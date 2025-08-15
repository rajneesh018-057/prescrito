import express from 'express';
import { registerUser,loginUser,getUserProfile,updateUserProfile } from '../controllers/UserController.js';
import authUser from '../middlewares/authUser.js';
import User from '../models/userModel.js';
import upload from '../middlewares/multer.js'; // Assuming you have a middleware for handling file uploads

const Userrouter = express.Router();
// Route to register a new user
Userrouter.post('/register', registerUser);
Userrouter.post('/login', loginUser);
Userrouter.get('/getprofile',authUser, getUserProfile); // Protected route to get user profile
Userrouter.post('/updateprofile', upload.single('profilePic'), authUser, updateUserProfile); // Protected route to update user profile{
export default Userrouter;