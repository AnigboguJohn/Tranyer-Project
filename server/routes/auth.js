// server/routes/auth.js
// Express routes for authentication (signup, signin, OAuth, etc.)

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Signup
router.post('/signup', authController.signup);
// Signin (local)
router.post('/signin', authController.signin);
// Success/failure
router.get('/success', authController.success);
router.get('/failure', authController.failure);
// Logout
router.post('/logout', authController.logout);

// Google OAuth
router.get('/google', authController.google);
router.get('/google/callback', authController.googleCallback);

// TODO: Add Apple, Microsoft, forgot password, remember me endpoints
// Google JWT endpoint for frontend Google Identity Services
const googleJwtController = require('../controllers/googleJwtController');
router.post('/google-jwt', googleJwtController);
router.post('/google-jwt/logout', googleJwtController.logout);

module.exports = router;
