import jwt from 'jsonwebtoken';
import 'dotenv/config';

const authAdmin = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log('Decoded:', decoded);

    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ message: 'Access denied, not an admin' });
    }

    next(); // Admin verified
  } catch (error) {
    return res.status(401).json({ message: 'Token is not valid', error: error.message });
  }
};

export default authAdmin;
