import express from 'express';
import { login, register, registerAdmin, resetPassword, sendEmail } from '../controllers/auth.controller.js';

const router = express.Router();

//Register

router.post("/register", register);

//login
router.post("/login", login);

//Register as Admin
router.post("/register-admin", registerAdmin);

//Send reset email

router.post("/send-email", sendEmail);

//reset password
router.post("/reset-password", resetPassword)

export default router;