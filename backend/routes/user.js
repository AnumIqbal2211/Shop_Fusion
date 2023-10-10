import { Router } from 'express';
// import express from 'express';
import {register, login, changePassword, forgotPassword}  from '../controllers/user.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';
import {validateInput} from '../middlewares/validationMiddleware.js';

const router = Router();

//registration routes
router.post('/register', validateInput, register);

//login route
router.get('/login', validateInput, login);

//change password routes
router.post('/changepassword', authenticateUser, changePassword);

//forgot password route
router.post('/forgot', forgotPassword);

export default router;