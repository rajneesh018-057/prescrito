import express from 'express';
import mongoose from 'mongoose';   
import cors from 'cors';
import connectToMongoDB from './config/mongodb.js'; // MongoDB connection function
import 'dotenv/config';
import connectToCloudinary from './config/cloudinary.js'; // Cloudinary connection function
import adminRouter from './routes/adminRoute.js';

// app config
const app = express();
const port = process.env.PORT || 5000;  

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

app.get('/', (req, res) => {
  res.send('API is running great');
});

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
