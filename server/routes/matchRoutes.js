// const express = require('express');
// const router = express.Router();
// const MatchRequest = require('../models/MatchRequest');
// const User = require('../models/User');
// const sendEmail = require('../utils/mailer');

// // ✅ Send match request — renamed to match frontend route
// router.post('/send-request', async (req, res) => {
//   const { fromUserId, toUserId, skill } = req.body;

//   // 🛡️ Check for missing fields
//   if (!fromUserId || !toUserId || !skill) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }

//   try {
//     // ⛔ Prevent sending request to self
//     if (fromUserId === toUserId) {
//       return res.status(400).json({ message: 'You cannot send a request to yourself' });
//     }

//     // 🔍 Check for duplicate
//     const existing = await MatchRequest.findOne({ fromUser: fromUserId, toUser: toUserId, skill });
//     if (existing) return res.status(400).json({ message: 'Match request already sent' });

//     // ✅ Create new match request
//     const match = new MatchRequest({ fromUser: fromUserId, toUser: toUserId, skill });
//     await match.save();

//     // 🔁 Update users
//     await User.findByIdAndUpdate(fromUserId, {
//       $addToSet: { matchRequestsSent: match._id }
//     });
//     await User.findByIdAndUpdate(toUserId, {
//       $addToSet: { matchRequestsReceived: match._id }
//     });

//     res.status(201).json({ message: 'Match request sent', match });
//   } catch (error) {
//     console.error('❌ Error sending match request:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // ✅ View requests received by a user
// router.get('/received/:userId', async (req, res) => {
//   try {
//     const requests = await MatchRequest.find({ toUser: req.params.userId })
//       .populate('fromUser', 'name email');
//     res.json(requests);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching received requests' });
//   }
// });

// // ✅ View requests sent by a user
// router.get('/sent/:userId', async (req, res) => {
//   try {
//     const requests = await MatchRequest.find({ fromUser: req.params.userId })
//       .populate('toUser', 'name email');
//     res.json(requests);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching sent requests' });
//   }
// });

// // ✅ Accept / Reject match request
// router.put('/respond/:requestId', async (req, res) => {
//   const { status } = req.body;
//   if (!['accepted', 'rejected'].includes(status)) {
//     return res.status(400).json({ message: 'Invalid status' });
//   }

//   try {
//     const updated = await MatchRequest.findByIdAndUpdate(
//       req.params.requestId,
//       { status },
//       { new: true }
//     );
//     res.json({ message: 'Response updated', updated });
//   } catch (err) {
//     console.error('❌ Error updating request:', err);
//     res.status(500).json({ message: 'Error updating request' });
//   }
// });




// router.post('/send-request', async (req, res) => {
//   const { fromUserId, toUserId, skill } = req.body;

//   // 🛡️ Check for missing fields
//   if (!fromUserId || !toUserId || !skill) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }

//   try {
//     // ⛔ Prevent sending request to self
//     if (fromUserId === toUserId) {
//       return res.status(400).json({ message: 'You cannot send a request to yourself' });
//     }

//     // 🔍 Check for duplicate
//     const existing = await MatchRequest.findOne({ fromUser: fromUserId, toUser: toUserId, skill });
//     if (existing) return res.status(400).json({ message: 'Match request already sent' });

//     // ✅ Create new match request
//     const match = new MatchRequest({ fromUser: fromUserId, toUser: toUserId, skill });
//     await match.save();

//     // 🔁 Update users
//     await User.findByIdAndUpdate(fromUserId, {
//       $addToSet: { matchRequestsSent: match._id }
//     });
//     await User.findByIdAndUpdate(toUserId, {
//       $addToSet: { matchRequestsReceived: match._id }
//     });

//     // 📩 Email Notification Logic
//     const sender = await User.findById(fromUserId);
//     const receiver = await User.findById(toUserId);

//     if (receiver?.email) {
//       await sendEmail(
//         receiver.email,
//         'New SkillBridge Match Request!',
//         `${sender.name} wants to connect with you to exchange skills in "${skill}". Log in to SkillBridge to accept or reject the request.`
//       );
//     }

//     res.status(201).json({ message: 'Match request sent and email sent', match });
//   } catch (error) {
//     console.error('❌ Error sending match request:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;


// ✅ Send Match Request with Email
// router.post('/send-request', async (req, res) => {
//   const { fromUserId, toUserId, skill } = req.body;

//   if (!fromUserId || !toUserId || !skill) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }

//   try {
//     if (fromUserId === toUserId) {
//       return res.status(400).json({ message: 'You cannot send a request to yourself' });
//     }

//     const existing = await MatchRequest.findOne({ fromUser: fromUserId, toUser: toUserId, skill });
//     if (existing) return res.status(400).json({ message: 'Match request already sent' });

//     const match = new MatchRequest({ fromUser: fromUserId, toUser: toUserId, skill });
//     await match.save();

//     await User.findByIdAndUpdate(fromUserId, {
//       $addToSet: { matchRequestsSent: match._id }
//     });
//     await User.findByIdAndUpdate(toUserId, {
//       $addToSet: { matchRequestsReceived: match._id }
//     });

//     // ✅ Email notification
//     const sender = await User.findById(fromUserId);
//     const receiver = await User.findById(toUserId);

//     if (receiver?.email) {
//       await sendEmail(
//         receiver.email,
//         'New SkillBridge Match Request!',
//         `${sender.name} wants to connect with you to exchange skills in "${skill}". Log in to SkillBridge to accept or reject the request.`
//       );
//     }

//     res.status(201).json({ message: 'Match request sent and email sent', match });
//   } catch (error) {
//     console.error('❌ Error sending match request:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // ✅ Get Sent Requests
// router.get('/sent/:userId', async (req, res) => {
//   try {
//     const requests = await MatchRequest.find({ fromUser: req.params.userId })
//       .populate('toUser', 'name email');
//     res.json(requests);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching sent requests' });
//   }
// });

// // ✅ Get Received Requests
// router.get('/received/:userId', async (req, res) => {
//   try {
//     const requests = await MatchRequest.find({ toUser: req.params.userId })
//       .populate('fromUser', 'name email');
//     res.json(requests);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching received requests' });
//   }
// });

// // ✅ Respond to Match Request
// router.put('/respond/:requestId', async (req, res) => {
//   const { status } = req.body;
//   if (!['accepted', 'rejected'].includes(status)) {
//     return res.status(400).json({ message: 'Invalid status' });
//   }

//   try {
//     const updated = await MatchRequest.findByIdAndUpdate(
//       req.params.requestId,
//       { status },
//       { new: true }
//     );
//     res.json({ message: 'Response updated', updated });
//   } catch (err) {
//     console.error('❌ Error updating request:', err);
//     res.status(500).json({ message: 'Error updating request' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const MatchRequest = require('../models/MatchRequest');
const User = require('../models/User');
const sendEmail = require('../utils/mailer');

// ✅ Send Match Request with Email
router.post('/send-request', async (req, res) => {
  const { fromUserId, toUserId, skill } = req.body;

  if (!fromUserId || !toUserId || !skill) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    if (fromUserId === toUserId) {
      return res.status(400).json({ message: 'You cannot send a request to yourself' });
    }

    const existing = await MatchRequest.findOne({ fromUser: fromUserId, toUser: toUserId, skill });
    if (existing) return res.status(400).json({ message: 'Match request already sent' });

    const match = new MatchRequest({ fromUser: fromUserId, toUser: toUserId, skill });
    await match.save();

    await User.findByIdAndUpdate(fromUserId, {
      $addToSet: { matchRequestsSent: match._id }
    });
    await User.findByIdAndUpdate(toUserId, {
      $addToSet: { matchRequestsReceived: match._id }
    });

    const sender = await User.findById(fromUserId);
    const receiver = await User.findById(toUserId);

    if (receiver?.email) {
      await sendEmail(
        receiver.email,
        'New SkillBridge Match Request!',
        `${sender.name} wants to connect with you to exchange skills in "${skill}".\nLog in to SkillBridge to accept or reject the request.`
      );
    }

    res.status(201).json({ message: 'Match request sent and email sent', match });
  } catch (error) {
    console.error('❌ Error sending match request:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Get Sent Requests
router.get('/sent/:userId', async (req, res) => {
  try {
    const requests = await MatchRequest.find({ fromUser: req.params.userId })
      .populate('toUser', 'name email');
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching sent requests' });
  }
});

// ✅ Get Received Requests
router.get('/received/:userId', async (req, res) => {
  try {
    const requests = await MatchRequest.find({ toUser: req.params.userId })
      .populate('fromUser', 'name email');
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching received requests' });
  }
});

// ✅ Accept / Reject Match Request with Email
router.put('/respond/:requestId', async (req, res) => {
  const { status } = req.body;
  if (!['accepted', 'rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  try {
    const updated = await MatchRequest.findByIdAndUpdate(
      req.params.requestId,
      { status },
      { new: true }
    )
    .populate('fromUser', 'name email')
    .populate('toUser', 'name email');

    // Send notification email to the sender
    if (updated?.fromUser?.email) {
      const subject = status === 'accepted'
        ? '🎉 Your SkillBridge Request Was Accepted!'
        : '❌ Your SkillBridge Request Was Rejected';

      const message = status === 'accepted'
        ? `${updated.toUser.name} has accepted your skill exchange request for "${updated.skill}". Log in to start learning together!`
        : `${updated.toUser.name} has rejected your skill exchange request for "${updated.skill}". You may try requesting someone else.`;

      await sendEmail(updated.fromUser.email, subject, message);
    }

    res.json({ message: 'Response updated and email sent', updated });
  } catch (err) {
    console.error('❌ Error updating request:', err);
    res.status(500).json({ message: 'Error updating request' });
  }
});

module.exports = router;
