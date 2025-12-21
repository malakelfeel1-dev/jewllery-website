import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import { login, signup } from '../controllers/authController.js';
import { getUserInfo } from '../controllers/userController.js';
import authenticate from '../middlewares/authenticate.js';

const router = express.Router();

// SIGN UP
router.post('/auth/signup', signup);

// LOGIN
router.post('/auth/login', login);

router.get('/', authenticate, getUserInfo);

export default router;
