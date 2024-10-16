import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.NEXT_MAILGUN_API_KEY || "", // Your Mailgun API key
});

export const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    const result = await mg.messages.create(
      process.env.MAILGUN_DOMAIN || "blog.btrust.tech",
      {
        from: `Btrust Website <mail@${
          process.env.MAILGUN_DOMAIN || "blog.btrust.tech"
        }>`,
        to: [to],
        subject: subject,
        text: text,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
    throw new Error(`Error sending email: ${JSON.stringify(error)}`);
  }
};
