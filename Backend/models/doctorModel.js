import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  feesPerConsultation: {
    type: Number,
    required: true,
  },
  timings: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  // ✅ Optional fields (not required)
  available: {
    type: Boolean,
    default: true,
  },
  profilePic: {
    type: String,
    default: '',
  },
  about: {
    type: String,
    default: '',
  },
  dateSlotsBooked: {
    type: Object,
    default: {},
  },
}, {
  minimize: false, // Ensures {} is saved to DB
  timestamps: true,
});

// ✅ Hash password before saving
doctorSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;
