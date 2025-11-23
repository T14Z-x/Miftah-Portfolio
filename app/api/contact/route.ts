import { NextRequest, NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  botField?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const { name = "", email = "", message = "", botField = "" } = body;

  // Simple honeypot: ignore submissions that fill this field.
  if (botField.trim()) {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  if (!name.trim()) errors.name = "Name is required.";
  if (!email.trim() || !isValidEmail(email)) errors.email = "Valid email is required.";
  if (!message.trim()) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Validation failed.", details: errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO || "ashfiqun1727@gmail.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL || "portfolio@your-domain.com";

  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      { error: "Email service is not configured. Set RESEND_API_KEY and RESEND_FROM_EMAIL." },
      { status: 500 }
    );
  }

  const payload = {
    from: fromEmail,
    to: [toEmail],
    reply_to: email,
    subject: `Portfolio inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: error?.message || "Failed to send email." },
        { status: response.status }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send error:", error);
    return NextResponse.json(
      { error: "Unexpected error sending email." },
      { status: 500 }
    );
  }
}
