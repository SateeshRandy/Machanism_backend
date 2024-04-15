const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

// Use routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
