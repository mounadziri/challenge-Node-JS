const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
const path = require ('path');
const fs = require('fs');
const ejs = require('ejs');

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
    //2.1read template path
    const template_path = path.resolve('./mail_template','register_notification.html');
    // console.log('template_path');

    // 2.2read template 
    const template= fs.readFileSync(template_path, {encoding:'utf-8'});
    // console.log(template);
    
    const mailoption = {
        from: process.env.MAIL, //sender
        to:'mona.dziri@gmail.com, mouna.dz2105@gmail.com', //receiver
        subject: 'hello', // Subject line
        html:template, // html body
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