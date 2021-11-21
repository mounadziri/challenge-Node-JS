const nodemailer = require("nodemailer");

//1.0 create transporter
    const Transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:process.env.MAIL, // generaate auth user
            pass: process.env.PASSWORD,// generate auth user
        }
    });

    
    module.exports=Transporter; 