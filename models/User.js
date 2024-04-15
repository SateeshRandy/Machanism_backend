const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // User model definition
});

module.exports = mongoose.model('User', UserSchema);