import express from 'express';
import { doctorlist,getDoctorById } from '../controllers/doctorController.js';
 
const doctorRouter = express.Router();
doctorRouter.get('/list', doctorlist);
doctorRouter.get('/:id', getDoctorById); 
export default doctorRouter;
 