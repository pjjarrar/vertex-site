const express = require('express');
require('dotenv').config();
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 3000;

// Rate Limiter Middleware
const formLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // Limit each IP to 5 requests per windowMs
  message: { message: "Too many requests, please try again later." },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(__dirname + '/public'));

// Nodemailer Configuration Function
async function sendContactEmail(formData) {
  const { name, email, message } = formData;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // Sending to self
    subject: `New Contact Form Submission from ${name}`,
    html: `
            <h3>New Contact Request</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Server-Side Express Route
app.post('/submit-form', formLimiter, async (req, res) => {
  // Honeypot Check
  if (req.body.website) {
    console.log('Honeypot triggered. Rejecting submission silently.');
    // Deceptive success response
    return res.status(200).json({ message: "Success!" });
  }

  try {
    await sendContactEmail(req.body);
    res.status(200).json({ message: "Success!" });
  } catch (error) {
    res.status(500).json({ message: "Error sending email" });
  }
});

// Handle requests for the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});