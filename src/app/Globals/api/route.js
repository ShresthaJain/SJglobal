import { sendEmail } from "../nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    await sendEmail(body);

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return new Response("Email failed", { status: 500 });
  }
}
