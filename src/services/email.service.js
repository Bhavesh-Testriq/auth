import config from "../config/config.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // Shortcut for Gmail's SMTP settings - see Well-Known Services
  auth: {
    type: "OAuth2",
    user: config.GOOGLE_USER,
    clientId: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    refreshToken: config.GOOGLE_REFRESH_TOKEN,
  },
});

// console.log({
//   user: config.GOOGLE_USER,
//   id: config.GOOGLE_CLIENT_ID,
//   secret: config.GOOGLE_CLIENT_SECRET,
//   refresh: config.GOOGLE_REFRESH_TOKEN,
// });

// Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Function to send email
const sendEmail = async (to, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Auth" <${config.GOOGLE_USER}>`, // sender address
      to,
      subject: "Verify your email", // Subject line
      html, // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;