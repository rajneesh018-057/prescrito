import express from 'express';
import mongoose from 'mongoose';   
import cors from 'cors';
import connectToMongoDB from './config/mongodb.js'; // MongoDB connection function
import dotenv from 'dotenv';
import connectToCloudinary from './config/cloudinary.js'; // Cloudinary connection function
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import Userrouter from './routes/UserRoute.js'; // User routes

// app config
const app = express();
const port = process.env.PORT || 5000;  
dotenv.config();

// middleware
app.use(express.json());
app.use(cors());

// connect to MongoDB
connectToMongoDB();
// connect to Cloudinary
connectToCloudinary();

// api endpoints
app.use('/api/admin', adminRouter); // Admin routes
// local imports for other routes
app.use('/api/doctor', doctorRouter)
 // Doctor routes

 app.use('/api/user', Userrouter); // User routes
app.get('/', (req, res) => {
  res.send('API is running great');
});

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
