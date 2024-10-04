const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());

// Replace this with your actual User model or database query.
const users = [{ email: 'user@example.com', password: 'hashed_password' }];

// Your secret key for JWT (should be stored securely)
const JWT_SECRET = 'your_jwt_secret';

app.post('/forgot-password', (req, res) => {
  const { email } = req.body;

  // Check if the user exists
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Create a password reset token
  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '15m' });

  // Configure nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: user.email,
    subject: 'Password Reset Request',
    text: `Click the link to reset your password: http://your-frontend-url.com/reset-password/${token}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: 'Error sending email' });
    }
    res.json({ message: 'Password reset link sent' });
  });
});

// Route to reset the password
app.post('/reset-password', (req, res) => {
  const { token, newPassword } = req.body;

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = users.find((u) => u.email === decoded.email);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Hash the new password and update the user's password
    const hashedPassword = bcrypt.hashSync(newPassword, 10);
    user.password = hashedPassword;

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(400).json({ error: 'Invalid or expired token' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
