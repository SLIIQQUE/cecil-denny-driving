import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingEmail({
  customerName,
  email,
  phone,
  message,
}: {
  customerName: string;
  email: string;
  phone: string;
  message: string;
}) {
  const contactEmail = process.env.CONTACT_EMAIL || "hello@cecildennydriving.co.uk";

  const { data, error } = await resend.emails.send({
    from: "Cecil Denny Driving <onboarding@resend.dev>",
    to: [contactEmail],
    subject: `New Booking Inquiry from ${customerName}`,
    html: `
      <h2>New Booking Inquiry</h2>
      <p><strong>Name:</strong> ${customerName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr />
      <p><small>This inquiry was submitted via the Cecil Denny Driving School website.</small></p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    throw new Error("Failed to send email");
  }

  return data;
}
