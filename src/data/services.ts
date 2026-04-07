export const SERVICES = [
  {
    id: "lessons",
    title: "Driving Lessons",
    description:
      "Structured lessons covering all aspects of driving, from basic controls to advanced maneuvers. Perfect for beginners and those needing a refresh.",
    features: [
      "DVSA-approved syllabus",
      "Flexible scheduling",
      "Mock driving tests",
      "Theory test preparation",
    ],
    icon: "Car",
    price: "Contact for pricing",
  },
  {
    id: "manual",
    title: "Manual Transmission",
    description:
      "Master the art of driving a manual car. Learn clutch control, gear changes, and hill starts in various traffic conditions.",
    features: [
      "Smooth gear transitions",
      "Clutch control mastery",
      "Hill start techniques",
      "All terrains covered",
    ],
    icon: "Gauge",
    price: "Contact for pricing",
  },
] as const;

export const PACKAGES = [
  {
    id: "starter",
    name: "Starter Package",
    lessons: 5,
    description: "Perfect for trying out driving lessons",
    features: [
      "5 driving lessons",
      "Basic manoeuvres",
      "Road awareness",
      "Beginner friendly",
    ],
    popular: false,
  },
  {
    id: "standard",
    name: "Standard Package",
    lessons: 10,
    description: "Our most popular choice for beginners",
    features: [
      "10 driving lessons",
      "All basic manoeuvres",
      "Roundabout practice",
      "Mock test included",
    ],
    popular: true,
  },
  {
    id: "complete",
    name: "Complete Package",
    lessons: 20,
    description: "Comprehensive preparation for test day",
    features: [
      "20 driving lessons",
      "Advanced techniques",
      "Mock test + review",
      "Test day transport",
    ],
    popular: false,
  },
] as const;
