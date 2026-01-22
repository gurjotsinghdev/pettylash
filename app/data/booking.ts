export type BookingServiceCategory = {
  category: string;
  note?: string;
  items: { name: string; duration: string }[];
};

export const bookingHours = {
  standard: "Monday to Friday, 9:00 AM - 5:30 PM",
  requestOnly:
    "Evenings, weekends, or outside standard hours are request-only and require manual approval. Additional fees may apply.",
};

export const bookingSequenceRules = [
  "Appointments are scheduled back-to-back within standard hours.",
  "Next available start times begin right after the previous appointment ends.",
  "Clients cannot select arbitrary gaps within the workday.",
];

export const bookingServices: BookingServiceCategory[] = [
  {
    category: "Lashes",
    items: [
      { name: "Lash touch-ups", duration: "45 minutes" },
      { name: "Lash fills", duration: "1 hour 15 minutes" },
      { name: "New sets", duration: "2 hours" },
      { name: "Removal", duration: "30 minutes" },
    ],
  },
  {
    category: "Spray Tans",
    items: [
      { name: "In-studio spray tan", duration: "30 minutes" },
      { name: "Mobile spray tans", duration: "Request-only (not auto-bookable)" },
    ],
  },
  {
    category: "Petty Teeth Whitening",
    items: [{ name: "Service", duration: "30 minutes" }],
  },
  {
    category: "Nano Beads / Hair Extensions",
    note: "Timing varies by client, so some flexibility is required.",
    items: [
      { name: "Consultation", duration: "15 minutes" },
      { name: "Maintenance", duration: "Minimum 2-hour booking" },
      { name: "New install", duration: "3-hour booking" },
    ],
  },
  {
    category: "Permanent Brows / Permanent Makeup",
    items: [
      { name: "Consultation", duration: "15 minutes" },
      { name: "Service", duration: "Minimum 4-hour booking window" },
    ],
  },
  {
    category: "Brow Lamination + Tint",
    items: [{ name: "Service", duration: "1 hour" }],
  },
];
