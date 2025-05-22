import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Dysol Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Sending to yourself
    replyTo: req.body.email, // User's email from form
    subject: `New message from ${req.body.name}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${req.body.name}</p>
      <p><strong>Company:</strong> ${req.body.company}</p>
      <p><strong>Email:</strong> ${req.body.email}</p>
      <p><strong>Phone:</strong> ${req.body.phone}</p>
      <p><strong>Message:</strong></p>
      <p>${req.body.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.',
    });
  }
}
