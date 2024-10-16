import { sendEmail } from "@/lib/mailgun";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message, company } = await req.json();

  if (!email || !name || !message || !company) {
    return NextResponse.json(
      { error: "Email, Name, Message and Comapny are required" },
      { status: 400 }
    );
  }

  try {
    const subject = `New message from ${name}`;
    const text = `You received a new message from ${name} (${email}) at ${company}:

${message}`;

    await sendEmail(
      process.env.NEXT_BTRUST_EMAIL || "info@btrust.tech",
      subject,
      text
    );
    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const message = "Error sending message";

    console.log(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
