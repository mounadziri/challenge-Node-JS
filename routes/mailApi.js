const express = require('express');
const router = express.Router();
const path = require ('path');
const fs = require('fs');
const ejs = require('ejs');
const Transporter= require('../utils/transpoter.js')

router.post('/sendmail', async(req,res)=>{
try{
    

    // 2.0 create mail option 
    //2.1read template path
    const template_path = path.resolve('./mail_template','register_notification.html');
    // console.log('template_path');

    // 2.2read template 
    const template= fs.readFileSync(template_path, {encoding:'utf-8'});
    // console.log(template);

    //2.3 render template
    mailparametres = {
        name: 'test1'
    };
    const render = ejs.render(template, mailparametres);
    
    const mailoption = {
        from: process.env.MAIL, //sender
        to:'mona.dziri@gmail.com, mouna.dz2105@gmail.com', //receiver
        subject: 'hello', // Subject line
        html:render, // html body
    };

        // 3.0 send mail  
        const info = await Transporter.sendMail(mailoption)
        res.json({message:'check your mail'});

        

res.json({message : 'check your mail'});
}catch(error){
    console.log(error);
    res.status(500).json({message : 'internal server error'});
}
});


router.post('/sendmailAttachment', async(req,res)=>{
    try{

        const mailoption = {
            from: process.env.MAIL, //sender
            to:'mona.dziri@gmail.com, mouna.dz2105@gmail.com', //receiver
            subject: 'hello', // Subject line
            attachments: [
                {   // utf-8 string as an attachment
                    filename: 'text.txt',
                    content: 'hello world!'
                },
            ]
        };
    
            // 3.0 send mail  
            const info = await Transporter.sendMail(mailoption)
            res.json({message:'check your mail'});
    
            
    
    res.json({message : 'check your mail'});
    }catch(error){
        console.log(error);
        res.status(500).json({message : 'internal server error'});
    }
    });
    









module.exports=router; 