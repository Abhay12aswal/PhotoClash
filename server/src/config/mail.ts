import nodemailer from "nodemailer"
//import logger from "./logger.js";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, 
    auth: {
      user:process.env.SMTP_USER ,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  console.log(process.env.SMTP_HOST);
  export const  sendMail = async (to:string ,subject:string , html:string) => {
    try {
      await transporter.sendMail({
        from: process.env.FROM_EMAIL,
        to: to, 
        subject: subject, 
        html: html, 
      });
    } catch (error) {
        //logger.error({type:"Email Error" ,error})
        console.log("error ")
    }
  }