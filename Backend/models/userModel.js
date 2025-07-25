import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: {
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

  phone: {
    type: String,
    default: '',
  },

  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    default: 'Other',
  },

  dob: {
    type: Date,
    default: null,
  },

  address: {
    type: String,
    default: '',
  },

  profilePic: {
    type: String,
    default: 'https://res.cloudinary.com/demo/image/upload/v1680000000/default-profile.png',
  },
}, {
  timestamps: true,
});

// // ✅ Hash password before saving
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

const User = mongoose.model('User', userSchema);
export default User;
