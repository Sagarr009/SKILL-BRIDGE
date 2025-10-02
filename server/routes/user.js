const express = require('express');
const router = express.Router();
const User = require('../models/User');

// ✅ Register user (no password)
// router.post('/register', async (req, res) => {
//   try {
//     const newUser = new User(req.body); // Save raw form data
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (err) {
//     console.error('❌ Registration Error:', err);
//     res.status(500).json({ message: 'User error', error: err.message });
//   }
// });

// ✅ Match users who can teach a specific skill
router.post('/match', async (req, res) => {
  const { skill } = req.body;

  console.log("🔍 Matching for skill:", skill);

  if (!skill || typeof skill !== 'string') {
    return res.status(400).json({ message: 'Skill must be a non-empty string' });
  }

  try {
    const matches = await User.find({
      skillsCanTeach: {
        $elemMatch: {
          $regex: new RegExp(skill, 'i') // partial, case-insensitive
        }
      }
    });

    res.status(200).json(matches);
  } catch (error) {
    console.error('❌ Match Error:', error);
    res.status(500).json({ message: 'Server error during skill match' });
  }
});

// ✅ Debug: Get all users (optional)
router.get('/debug-all-users', async (req, res) => {
  try {
    const users = await User.find();
    console.log("🧠 All Users in DB:", users);
    res.json(users);
  } catch (err) {
    console.error("❌ Error fetching users:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ Get a user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user', error: err.message });
  }
});

// ✅ Send a match request
router.post('/send-request', async (req, res) => {
  const { fromUserId, toUserId, skill } = req.body;

  try {
    const targetUser = await User.findById(toUserId);
    if (!targetUser) return res.status(404).json({ message: 'Target user not found' });

    targetUser.matchRequests.push({ fromUserId, skill });
    await targetUser.save();

    res.status(200).json({ message: 'Request sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending request', error: error.message });
  }
});

// ✅ Export the router at the end
module.exports = router;

// View received match requests
router.get('/requests/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate('matchRequests.fromUserId', 'name email');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user.matchRequests);
  } catch (error) {
    console.error('❌ Error fetching requests:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Get all match requests received by a user
router.get('/requests/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate('matchRequests.fromUserId', 'name email');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user.matchRequests);
  } catch (error) {
    console.error('❌ Error fetching match requests:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
