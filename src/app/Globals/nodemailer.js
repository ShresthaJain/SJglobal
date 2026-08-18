import nodemailer from "nodemailer";

import { contactTemplate } from "./contactTemplate";
import { partnerTemplate } from "./partnerTemplate";
import { talentTemplate } from "./talentTemplate";

export async function sendEmail(data) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let email;

  switch (data.formType) {
    case "talent":
      email = talentTemplate(data);
      break;
    case "contact":
      email = contactTemplate(data);
      break;
    case "partner":
      email = partnerTemplate(data);
      break;
    default:
      throw new Error("Unknown form type");
  }

  await transporter.sendMail({
    from: `"Website Forms" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: email.subject,
    html: email.html,
    text: email.text,
  });
}
