import * as sgMail from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import CONFIG from "@Src/config";

sgMail.setApiKey(CONFIG.KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message, subject } = req.body;
  const html = `
    <h4>Mensage de:${name} (${email})</h4>
    <span>
      ${message}
    </span>
  `;

  const msg = {
    to: "me@willskr.com",
    from: "sengrid@willskr.com",
    subject: `${subject}`,
    text: `${message}`,
    html: html,
  };
  const SendPromise = new Promise((resolve, reject) => {
    sgMail
      .send(msg)
      .then(() => {
        resolve(true);
      })
      .catch((error) => {
        reject(error);
      });
  });
  const send = await SendPromise;
  if (!send) throw new Error("Error sending email");
  res.status(200).json(msg);
};
