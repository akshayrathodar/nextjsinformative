import nodemailer from "nodemailer";

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
// export default async (req, res) => {
//   const { name, email, enquiryType, mobileNumber, message } = req.body;
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   try {
//      await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: "info@astha-group.co.uk",
//       subject: `Contact form submission from ${name}`,
//       html: `<p>You have a contact form submission</p><br>
//         <p><strong>Email: </strong> ${email}</p><br>
//         <p><strong>Enquiry Type: </strong> ${enquiryType}</p><br>
//         <p><strong>P: </strong> ${mobileNumber}</p><br>
//         <p><strong>Message: </strong> ${message}</p><br>
//       `,
//     });
//     return res.status(200).json({ error: "" });
//   } catch (error) {
//     return res.status(500).json({ error: error.message || error.toString() });
//   }


// };
