// server/controllers/googleJwtController.js
// Handles Google JWT authentication from frontend

const users = require('../models/users');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('82808533077-ms8m672p8d0uoj2dsr1hr58jjar6425j.apps.googleusercontent.com');

const googleJwtController = async (req, res) => {
  const { credential } = req.body;
  if (!credential) {
    return res.status(400).json({ message: 'Missing credential' });
  }
  try {
    // Verify JWT
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: '82808533077-ms8m672p8d0uoj2dsr1hr58jjar6425j.apps.googleusercontent.com',
    });
    const payload = ticket.getPayload();
    // Find or create user
    let user = users.findByEmail(payload.email);
    if (!user) {
      user = users.create(payload.email, null);
      user.provider = 'google';
      user.providerId = payload.sub;
      user.displayName = payload.name;
      user.picture = payload.picture;
    }
    // Set cookie for session
    req.session.userId = user.id;
    res.cookie('auth_token', credential, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(401).json({ message: 'Invalid credential', error: err.message });
  }
};

googleJwtController.logout = (req, res) => {
  res.clearCookie('auth_token');
  req.session.destroy(() => {
    res.json({ message: 'Logged out' });
  });
};

module.exports = googleJwtController;
