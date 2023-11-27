import express from 'express';
import {
  getUsers,
  login,
  register,
  updateUserProfile,
} from '../controllers/userController.js';
import { admin, protect } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:email',getUserByEmail);
export default router;
