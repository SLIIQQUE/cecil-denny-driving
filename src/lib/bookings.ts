export interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function validateBooking(data: unknown): BookingRequest {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid request data");
  }

  const { name, email, phone, message } = data as Record<string, unknown>;

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    throw new Error("Name is required (minimum 2 characters)");
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    throw new Error("Valid email is required");
  }

  if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
    throw new Error("Phone number is required");
  }

  return {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    message: typeof message === "string" ? message.trim() : "",
  };
}
