const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

router.post('/sendmail', async(req,res)=>{
try{
    // 1.0 create transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:process.env.MAIL, // generaate auth user
            pass: process.env.PASSWORD,// generaate auth user
        }
    });

    // 2.0 create mail option 
    const mailoption = {
        from: process.env.MAIL, //sender
        to:'mona.dziri@gmail.com', //receiver
        subject: 'hello', // Subject line
        html:'<b>Bonjour</b>', // html body
    };

        // 3.0 send mail  
        const info = await transporter.sendMail(mailoption)
        res.json({message:'check your mail'});


res.json({message : 'check your mail'});
}catch(error){
    console.log(error);
    res.status(500).json({message : 'internal server error'});
}
});

module.exports=router; 