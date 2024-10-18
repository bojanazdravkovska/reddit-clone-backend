"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer = require("nodemailer");
const sendEmail = async (to, html) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "svj5p7z7hdqgnvbj@ethereal.email",
            pass: "dCy29Dk8Z27QTz44Dy",
        },
    });
    let info = await transporter.sendMail({
        from: '"Tikva Tikvarski" <t@example.com>',
        to: to,
        subject: "Change Password",
        html,
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=sendEmail.js.map