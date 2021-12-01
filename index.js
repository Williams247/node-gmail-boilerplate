const nodemailer = require("nodemailer");

// Creates a terminal interface for input
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to send an email
function sendEmail(gmail) {
  console.log(`Sending mail to ${gmail} ......`);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Your gmail address",
      pass: "Your gmail address password",
    },
  });

  const mailOptions = {
    from: "nodegmrv1@gmail.com",
    to: gmail,
    subject: "Test mail!",
    text: `A message from Node Gmailer to ${gmail}, saying hello!`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`We've sent a mail to this gmail address = ${gmail}!`);
      console.log("NOTE: If you did not get the mail in your primary mail, check your spam.")
    }
  });
}

// Regular expression to validate emails
const emailRegX = /^[^\s@]+@[^\s@]+$/;

// Gets, Sends and validate emails
readline.question(("What's your gmail address, let's say hi to you!!!\n"), gmail => {
  if (!gmail || !emailRegX.test(gmail)) {
    console.log("Enter your valid gmail address");
    readline.close();
    return false;
  }
  sendEmail(gmail);
  readline.close();
});
