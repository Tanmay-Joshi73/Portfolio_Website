
const expreess=require('express')
const axios=require('axios')
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
    console.log("Email is send")
}
catch(err){
    console.log(err)
}
}

exports.EmailVerifier=async(Email)=>{
    try{
        //ZeroBounce API code
        // const API_KEY=process.env.Email_Checker;
        // const API_URL = `https://api.zerobounce.net/v2/validate?api_key=${API_KEY}&email=${Email}`;
        // const responce=await axios.get(API_URL)
        // console.log(responce.data)
        // if(responce.data.status='Valid')
        // {
        //     console.log("Email is valid");
        //     return true;
        // }
        // else{
        //     console.log("Email is not valid");
        //     return false;
        // }

        //Abstract API code
        const API_KEY=process.env.Abstract_Api_key
        const api_url=`https://emailvalidation.abstractapi.com/v1/?api_key=${API_KEY}&email=${Email}`;
        const result = await axios.get(api_url);
        if (
          result.data.is_valid_format.value === true && 
          result.data.is_mx_found.value === true && 
          result.data.is_smtp_valid.value === true 
        ) 
        {
          return true;
        } 
        else
         {
          return false;
        }
        
        
    
    }
    catch(err){
        console.log(err)
    }
}