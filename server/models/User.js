const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: { type: String, required: false },
  skillsCanTeach: [String],
  skillsWantToLearn: [String],
  bio: String,

  // ✅ Separate sent and received match requests
  matchRequestsSent: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MatchRequest' }],
matchRequestsReceived: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MatchRequest' }]
})

module.exports = mongoose.model('User', userSchema);



