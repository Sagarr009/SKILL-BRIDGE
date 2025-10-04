// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const router = express.Router();

// const JWT_SECRET = process.env.JWT_SECRET || 'fallbacksecret';

// // ✅ SIGNUP
// router.post('/signup', async (req, res) => {
//   const { name, email, password, skillsCanTeach, skillsWantToLearn, bio } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: 'Email already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       skillsCanTeach,
//       skillsWantToLearn,
//       bio,
//     });

//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Signup error', error: error.message });
//   }
// });

// // ✅ LOGIN
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   console.log('📥 Login Request:', email);

//   try {
//     const user = await User.findOne({ email });
//     console.log('🔍 Found user:', user);

//     if (!user) return res.status(404).json({ message: 'User not found' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     console.log('✅ Password match:', isMatch);

//     if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

//     // ✅ KEY FIX: Send `_id` instead of `id` for frontend compatibility
//     res.json({
//       message: 'Login successful',
//       token,
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         skillsCanTeach: user.skillsCanTeach,
//         skillsWantToLearn: user.skillsWantToLearn,
//         bio: user.bio,
//       }
//     });
//   } catch (error) {
//     console.error('❌ Login error:', error);
//     res.status(500).json({ message: 'Login error', error: error.message });
//   }
// });

// module.exports = router;


// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const sendEmail = require('../utils/mailer');

// const router = express.Router();

// const JWT_SECRET = process.env.JWT_SECRET || 'fallbacksecret';

// // ✅ SIGNUP
// router.post('/signup', async (req, res) => {
//   const { name, email, password, skillsCanTeach, skillsWantToLearn, bio } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: 'Email already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       skillsCanTeach,
//       skillsWantToLearn,
//       bio,
//     });

//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Signup error', error: error.message });
//   }
// });

// // ✅ LOGIN
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

//     res.json({
//       message: 'Login successful',
//       token,
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         skillsCanTeach: user.skillsCanTeach,
//         skillsWantToLearn: user.skillsWantToLearn,
//         bio: user.bio,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Login error', error: error.message });
//   }
// });

// // ✅ FORGOT PASSWORD - Generate token
// router.post('/forgot-password', async (req, res) => {
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     // generate reset token valid for 15 minutes
//     const resetToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '15m' });

//     // 👉 change localhost:3000 to your frontend URL
//     const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

//     // For now, just log the link (replace with nodemailer for real emails)
//    await transporter.sendMail({
//       from: `"SkillBridge Support" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "Reset your password",
//       html: `
//         <h2>Password Reset</h2>
//         <p>Click the link below to reset your password. This link is valid for 15 minutes.</p>
//         <a href="${resetLink}" style="color:blue;">${resetLink}</a>
//       `
//     });

//     res.json({ message: 'Reset link sent to email (check console)', resetLink });
//   } catch (err) {
//     res.status(500).json({ message: 'Error generating reset link', error: err.message });
//   }
// });

// // ✅ RESET PASSWORD - Use token
// router.post('/reset-password/:token', async (req, res) => {
//   const { token } = req.params;
//   const { newPassword } = req.body;

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     const user = await User.findById(decoded.id);
//     if (!user) return res.status(404).json({ message: 'Invalid token or user not found' });

//     const hashed = await bcrypt.hash(newPassword, 10);
//     user.password = hashed;
//     await user.save();

//     res.json({ message: 'Password reset successful. Please log in with your new password.' });
//   } catch (err) {
//     res.status(400).json({ message: 'Invalid or expired token', error: err.message });
//   }
// });

// module.exports = router;



const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const sendEmail = require('../utils/mailer'); // ✅ use your mailer helper

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'fallbacksecret';

// ======================
// SIGNUP
// ======================
router.post('/signup', async (req, res) => {
  const { name, email, password, skillsCanTeach, skillsWantToLearn, bio } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      skillsCanTeach,
      skillsWantToLearn,
      bio,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Signup error', error: error.message });
  }
});

// ======================
// LOGIN
// ======================
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({
      message: 'Login successful',
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        skillsCanTeach: user.skillsCanTeach,
        skillsWantToLearn: user.skillsWantToLearn,
        bio: user.bio,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Login error', error: error.message });
  }
});

// ======================
// FORGOT PASSWORD
// ======================
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // generate reset token valid for 15 minutes
    const resetToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '15m' });

    // 👉 update to your deployed frontend URL
    const resetLink = `https://skill-bridge-front.onrender.com/reset-password/${resetToken}`;

    // ✅ send email using mailer.js
    await sendEmail(
      user.email,
      'Reset your password',
      `Click the link to reset your password: ${resetLink}`, // fallback plain text
      `
        <h2>Password Reset</h2>
        <p>Click the link below to reset your password. This link is valid for 15 minutes.</p>
        <a href="${resetLink}" style="color:blue;">${resetLink}</a>
      `
    );

    res.json({ message: 'Reset link sent to your email address' });
  } catch (err) {
    res.status(500).json({ message: 'Error generating reset link', error: err.message });
  }
});

// ======================
// RESET PASSWORD
// ======================
router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: 'Invalid token or user not found' });

    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    await user.save();

    res.json({ message: 'Password reset successful. Please log in with your new password.' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid or expired token', error: err.message });
  }
});

module.exports = router;
