// Create microservice for sending the emails to the client.
// You should use node mailer package for it.
// Make sure your code will be written in typescript and you will have nodemon for running the code base.
// All code base should be written and wrapped with Docker file and docker compose.
// You should create scheduler to send an email for every 5 minute ( take a look into croon jobs functionality)

import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: process.env.user, 
      pass: process.env.password, 
    },
  });

  let info = await transporter.sendMail({
    from: '"Sirusho Martikyan" <sirushomartikyan77@gmail.com>', 
    to: "bar@example.com, baz@example.com", 
    subject: "Hello ", 
    text: "Hello world", 
    html: "<b>Hello world</b>", 
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
setInterval( main, 50000 )


