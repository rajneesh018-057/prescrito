import jwt from 'jsonwebtoken';
import 'dotenv/config'; 
import User from '../models/userModel.js';

const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;   
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({success:false, message: 'No token provided, authorization denied' });
    }       
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  
    console.log('Decoded:', decoded);
    req.user = { id: decoded.id };      
    next(); // User verified
    } catch (error) {   
    return res.status(401).json({success:false, message: 'Token is not valid', error: error.message });
    }
 
  }
   export default authUser; 