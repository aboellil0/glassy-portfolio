import { SMTPClient } from "emailjs";

const emailTemplate = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:40px 16px">
          <table role="presentation" width="540" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06)">
            <tr>
              <td style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:32px 40px;text-align:center">
                <h1 style="margin:0;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.3px">
                  ✉️ New Portfolio Message
                </h1>
                <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.85)">
                  Someone reached out from your portfolio
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 40px">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding-bottom:16px">
                      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:#a1a1aa;margin-bottom:4px">Name</div>
                      <div style="font-size:15px;color:#18181b;font-weight:500">${name}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom:16px">
                      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:#a1a1aa;margin-bottom:4px">Email</div>
                      <a href="mailto:${email}" style="font-size:15px;color:#6366f1;font-weight:500;text-decoration:none">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom:8px">
                      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:#a1a1aa;margin-bottom:8px">Message</div>
                      <div style="font-size:14px;color:#3f3f46;line-height:1.7;background:#f4f4f5;border-radius:8px;padding:16px;white-space:pre-wrap">${message}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 40px 24px;text-align:center">
                <hr style="border:none;border-top:1px solid #e4e4e7;margin:0 0 16px">
                <p style="margin:0;font-size:12px;color:#a1a1aa">
                  Sent from your portfolio contact form
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    const client = new SMTPClient({
      user: process.env.EMAIL_USER,
      password: process.env.EMAIL_PASS,
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      tls: true,
    });

    await client.sendAsync({
      from: `"${name}" <${process.env.EMAIL_FROM}>`,
      to: "mohamed.aboellil0@gmail.com",
      subject: `Portfolio Contact — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      attachment: [
        { data: emailTemplate(name, email, message), alternative: true },
      ],
      reply: email,
    });

    client.smtp.close();

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
