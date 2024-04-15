const User = require('../models/User');

const sendOtp = async (req, res) => {
  // Send OTP logic
}

const register = async (req, res) => { 
  // Register user logic
}

module.exports = {
  sendOtp,
  register
}

// models/User.js 
module.exports = mongoose.model('User', UserSchema);
