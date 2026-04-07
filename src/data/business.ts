export const BUSINESS = {
  name: "Cecil Denny Driving School",
  owner: "Cecil Denny",
  phone: "020 8743 5687",
  email: "info@cecildennydriving.co.uk",
  address: {
    street: "Flat 90/Burghley Tower, Trinity Way",
    city: "London",
    postcode: "W3 7HS",
    area: "Acton",
  },
  location: {
    lat: 51.5089,
    lng: -0.2654,
  },
  hours: {
    monday: { open: "08:00", close: "21:00" },
    tuesday: { open: "08:00", close: "21:00" },
    wednesday: { open: "08:00", close: "21:00" },
    thursday: { open: "08:00", close: "21:00" },
    friday: { open: "08:00", close: "21:00" },
    saturday: { open: "08:00", close: "21:00" },
    sunday: { open: "08:00", close: "21:00" },
  },
  rating: 5.0,
  reviewCount: 50,
  yearsExperience: 20,
  services: ["Driving Lessons", "Manual Transmission"],
  social: {
    facebook: null,
    twitter: null,
    instagram: null,
  },
} as const;

export const AREAS_SERVED = [
  "Acton",
  "Chiswick",
  "Shepherd's Bush",
  "Hammersmith",
  "Ealing",
  "West Kensington",
  "Fulham",
  "Turnham Green",
  "Boston Manor",
  "South Acton",
] as const;

export type Area = (typeof AREAS_SERVED)[number];
