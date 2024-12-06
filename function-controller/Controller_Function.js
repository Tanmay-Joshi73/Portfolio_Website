
const expreess=require('express')
const nodemailer=require("nodemailer")

exports.SendEmail=async(Username,toEmail,Message)=>{
    try{
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Email service (e.g., Gmail)
        auth: {
            user: process.env.Email, // Your email from .env
            pass: process.env.Password // Your email password or app password from .env
        }
    });
    const mailOptions = {
        from: process.env.Email, // Sender address
        to: toEmail, // Recipient email
        subject: `Hello ${Username}, thanks for reaching out!`,
        text: `Hi ${Username},\n\nThank you for your message:\n"${Message}"\n\nWe will get back to you shortly.\n\nBest regards,\nYour Team`
    };
    await transporter.sendMail(mailOptions)
}
catch(err){
    console.log(err)
}
}