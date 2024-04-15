const router = require('express').Router();
const { sendOtp, register } = require('../controllers/auth');

router.post('/send-otp', sendOtp);

router.post('/register', register);

module.exports = router;
