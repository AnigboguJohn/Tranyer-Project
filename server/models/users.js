// server/models/users.js
// In-memory user store for demonstration. Replace with DB in production.
// User object: { id, email, password, provider, providerId, ... }

const users = [];
let idCounter = 1;

module.exports = {
  findById: (id) => users.find(u => u.id === id),
  findByEmail: (email) => users.find(u => u.email === email),
  validatePassword: (user, password) => user.password === password, // Replace with hash check in production
  findOrCreateOAuth: (provider, profile) => {
    let user = users.find(u => u.provider === provider && u.providerId === profile.id);
    if (!user) {
      user = {
        id: idCounter++,
        email: profile.emails && profile.emails[0] ? profile.emails[0].value : '',
        provider,
        providerId: profile.id,
        displayName: profile.displayName || '',
      };
      users.push(user);
    }
    return user;
  },
  create: (email, password) => {
    const user = { id: idCounter++, email, password };
    users.push(user);
    return user;
  },
  // Add more user management functions as needed
};
