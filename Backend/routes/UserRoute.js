import express from 'express';
import { registerUser,loginUser } from '../controllers/UserController.js';


const Userrouter = express.Router();
// Route to register a new user
Userrouter.post('/register', registerUser);
Userrouter.post('/login', loginUser);
export default Userrouter;