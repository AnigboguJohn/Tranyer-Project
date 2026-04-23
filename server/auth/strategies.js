// server/auth/strategies.js
// Passport strategies for Google, Apple, Microsoft, and Local authentication
// You must provide CLIENT_ID and CLIENT_SECRET for each provider
// Replace 'YOUR_GOOGLE_CLIENT_ID', etc. with your actual credentials

const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const AppleStrategy = require('passport-apple'); // Uncomment if using Apple
// const MicrosoftStrategy = require('passport-microsoft').Strategy; // Uncomment if using Microsoft
const users = require('../models/users');

module.exports = function(passport) {
  // Serialize/deserialize user
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    const user = users.findById(id);
    done(null, user);
  });

  // Local Strategy (Email/Password)
  passport.use(new LocalStrategy({ usernameField: 'email' },
    (email, password, done) => {
      // Find user by email
      const user = users.findByEmail(email);
      if (!user) return done(null, false, { message: 'Incorrect email.' });
      if (!users.validatePassword(user, password)) return done(null, false, { message: 'Incorrect password.' });
      return done(null, user);
    }
  ));

  // Google OAuth Strategy
  passport.use(new GoogleStrategy({
    clientID: 'YOUR_GOOGLE_CLIENT_ID',
    clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    callbackURL: '/auth/google/callback',
  }, (accessToken, refreshToken, profile, done) => {
    // Find or create user in DB
    let user = users.findOrCreateOAuth('google', profile);
    return done(null, user);
  }));

  // Apple and Microsoft strategies can be added similarly
  // If you need help with API keys, let me know!
};
