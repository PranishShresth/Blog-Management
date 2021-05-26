const nodemailer = require("nodemailer");
const config = require("../config/keys");
const template = require("./template");

/**
 *
 * @param {string} to
 * @param {string} htmlTemplate
 * @param {string} subject
 */
async function sendEmail(to, htmlTemplate, subject) {
  try {
    //   create a nodemailer transport
    let transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.EMAIL_USER,
        pass: config.EMAIL_PASS,
      },
    });

    // send the email

    let mail = await transport.sendMail({
      from: "Blog Manager <ordermanagementsystem2@gmail.com>",
      to: to,
      subject: subject,
      html: htmlTemplate,
    });
  } catch (err) {
    console.log(err);
  }
}

const sendEmailVerification = async (to, username, link) => {
  sendEmail(to, template(username, link), "Verify your email");
};

module.exports = sendEmailVerification;
