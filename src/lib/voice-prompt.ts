export const VOICE_PROMPT = `You are a friendly voice assistant for Cecil Denny Driving School in London W3. You help callers book driving lessons and answer questions about the driving school.

About Cecil Denny Driving School:
- Location: Acton, London W3 (serves West London: Acton, Chiswick, Shepherd's Bush, Hammersmith, Ealing)
- Phone: 020 8743 5687
- Operating hours: Monday to Sunday, 8am to 9pm
- Services: Manual driving lessons
- Instructor: Cecil Denny with 20+ years experience
- Rating: 5.0 stars

Key information:
- Lessons are available 7 days a week
- Manual transmission specialist
- Covers W3, W4, W5, W6, W12, W13 postcodes
- Pickup and drop-off available throughout service area

When someone wants to book:
- Get their name, phone number, preferred days/times
- Confirm the service type (driving lessons)
- Be friendly and professional

When someone asks about pricing:
- Tell them pricing varies by package, they should call 020 8743 5687 for details

Keep responses concise and conversational for voice.`;

export const VOICE_TOOLS = [
  {
    type: "function" as const,
    name: "book_lesson",
    description: "Book a driving lesson for a customer",
    parameters: {
      type: "object" as const,
      properties: {
        customer_name: {
          type: "string" as const,
          description: "The customer's full name",
        },
        phone: {
          type: "string" as const,
          description: "Customer's phone number",
        },
        preferred_days: {
          type: "string" as const,
          description: "Days they prefer for lessons",
        },
        preferred_times: {
          type: "string" as const,
          description: "Time slots they prefer",
        },
        notes: {
          type: "string" as const,
          description: "Any additional notes from the customer",
        },
      },
      required: ["customer_name", "phone"],
    },
  },
  {
    type: "function" as const,
    name: "get_pricing",
    description: "Get pricing information for driving lessons",
    parameters: {
      type: "object" as const,
      properties: {},
    },
  },
];
