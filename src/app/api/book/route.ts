import { NextRequest, NextResponse } from "next/server";
import { validateBooking } from "@/lib/bookings";
import { sendBookingEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const booking = validateBooking(body);

    await sendBookingEmail({
      customerName: booking.name,
      email: booking.email,
      phone: booking.phone,
      message: booking.message || "No message provided",
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent. We'll be in touch soon!",
    });
  } catch (error) {
    console.error("Booking API error:", error);

    if (error instanceof Error && error.message.includes("required")) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
