// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// async function sendEmail(to, subject, text) {
//   const mailOptions = {
//     from: `"SkillBridge 👥" <${process.env.EMAIL_USER}>`,
//     to,
//     subject,
//     text,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('✅ Email sent to', to);
//   } catch (err) {
//     console.error('❌ Failed to send email:', err.message);
//   }
// }

// module.exports = sendEmail;


const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ supports both plain text + HTML
async function sendEmail(to, subject, text, html = null) {
  const mailOptions = {
    from: `"SkillBridge 👥" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent to', to);
  } catch (err) {
    console.error('❌ Failed to send email:', err.message);
  }
}

module.exports = sendEmail;
