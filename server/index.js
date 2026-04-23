// server/index.js
// Express.js server for authentication system
// Features: Signup/Signin with Google, Apple, Microsoft, Email/Password
// Includes: Remember Me, Forgot Password
// Uses Passport.js for OAuth and local strategies

const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
// Passport strategies
// (Google, Apple, Microsoft, Local)
// You must provide API keys for each provider below
// See the comments in the strategies section

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 } // 1 week
}));
app.use(passport.initialize());
app.use(passport.session());

// --- Passport Strategies Setup ---
// See server/auth/strategies.js for details
require('./auth/strategies')(passport);

// --- Auth Routes ---
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// --- Home Route ---
app.get('/', (req, res) => {
  res.send('Authentication Server Running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
