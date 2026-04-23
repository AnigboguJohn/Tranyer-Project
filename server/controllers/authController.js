// server/controllers/authController.js
// Handles signup, signin, OAuth, remember me, forgot password

const passport = require('passport');
const users = require('../models/users');

exports.signup = (req, res, next) => {
  const { email, password } = req.body;
  if (users.findByEmail(email)) {
    return res.status(400).json({ message: 'Email already exists' });
  }
  const user = users.create(email, password);
  req.login(user, (err) => {
    if (err) return next(err);
    res.json({ message: 'Signup successful', user });
  });
};

exports.signin = passport.authenticate('local', {
  successRedirect: '/auth/success',
  failureRedirect: '/auth/failure',
});

exports.success = (req, res) => {
  res.json({ message: 'Signin successful', user: req.user });
};

exports.failure = (req, res) => {
  res.status(401).json({ message: 'Signin failed' });
};

exports.logout = (req, res) => {
  req.logout(() => {
    res.json({ message: 'Logged out' });
  });
};

// OAuth routes (Google example)
exports.google = passport.authenticate('google', { scope: ['profile', 'email'] });
exports.googleCallback = passport.authenticate('google', {
  successRedirect: '/auth/success',
  failureRedirect: '/auth/failure',
});

// Add Apple, Microsoft, forgot password, remember me as needed
