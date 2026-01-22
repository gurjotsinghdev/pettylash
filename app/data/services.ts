export type ServiceItem = {
  name: string;
  price?: string;
  details?: string[];
  note?: string;
};

export const servicesIntro = {
  loungeName: "The Petty Beauty Lounge",
  tagline: "Luxury Beauty Services on Lock",
  instagram: "@pettylashhh",
};

export const tanningServices: ServiceItem[] = [
  {
    name: "Express Tan",
    price: "$100",
    note: "Shower time: 2-5 hours after application.",
  },
  {
    name: "Petty Glow Tan",
    price: "$100",
    note: "Shower time: about 12 hours after application.",
  },
];

export const tanningPackages: ServiceItem[] = [
  {
    name: "Don't Be Petty Package",
    price: "$400 (regular $500)",
    details: ["Buy 4 tans, get 1 on us", "Must be purchased as a package"],
  },
  {
    name: "Triple Threat Package",
    price: "$80 per person or $240 total",
    details: [
      "Three friends, three flawless tans",
      "Save $20 each when booked together",
      "Regular $100 each / $300 total",
    ],
  },
  {
    name: "Glow Gang Package",
    price: "$120 per person or $600 total",
    details: [
      "Custom + mobile tans for 5 friends at a group rate",
      "Perfect for birthdays, girls' nights, or bachelorette plans",
      "Save $30 each",
      "Regular $150 each / $750 total",
    ],
  },
];

export const mobileTanningService: ServiceItem = {
  name: "Mobile Custom Tan",
  price: "$150",
  details: [
    "Mobile custom spray tans brought to your space for a luxe, private experience.",
    "Stay relaxed while your tan develops as we bring the setup to you.",
  ],
};

export const hairExtensions = {
  intro:
    "Pricing includes consultation, hair, install, and styling.",
  lengths: [
    { length: "18\"", weight: "100g", price: "$620", bundleAddOn: "$120" },
    { length: "20\"", weight: "100g", price: "$670", bundleAddOn: "$130" },
    { length: "22\"", weight: "100g", price: "$720", bundleAddOn: "$140" },
    { length: "24\"", weight: "100g", price: "$770", bundleAddOn: "$150" },
    { length: "26\"", weight: "100g", price: "$800", bundleAddOn: "$160" },
  ],
  note: "Custom lengths available upon request.",
};

export const hairMaintenance = {
  items: [
    { bundles: "4 bundles", price: "$160" },
    { bundles: "5 bundles", price: "$190" },
    { bundles: "6 bundles", price: "$220" },
  ],
  note: "Each additional bundle after that is +$25",
};

export const lashServices = {
  megaVolume: {
    name: "Mega Volume",
    items: [
      { label: "New Set", price: "$195" },
      { label: "Fill", price: "$100" },
      { label: "Touch Up (within 7 days)", price: "$65" },
    ],
  },
  volumeHybridClassic: {
    name: "Volume / Hybrid / Classic",
    items: [
      { label: "New Set", price: "$180" },
      { label: "Fill", price: "$90" },
      { label: "Touch Up (within 7 days)", price: "$55" },
    ],
  },
};

export const teethWhiteningService = {
  name: "Petty Glo Teeth Whitening",
  price: "$150",
  summary:
    "Petty Glo Teeth Whitening delivers bright results fast without the sting.",
  details: [
    "In about 20 minutes, your smile can lift up to five shades with zero sensitivity.",
    "Our vegan, cruelty-free formula whitens effectively without stripping enamel.",
    "Quick, safe, and high-impact because subtle was never the goal.",
  ],
};

export const browLaminationService = {
  name: "PETTY BROWS - Brow Lamination & Tint",
  summary:
    "PETTY BROWS is the ultimate brow refresh. This service smooths, lifts, and sets the brow hairs into your desired shape while a custom tint adds depth and definition for a fuller, more polished look.",
  details: [
    "Brow lamination can last up to four weeks, depending on hair growth, skin type, and proper aftercare.",
    "Results vary from client to client, but longevity comes down to aftercare - keep brows dry for the first 24 hours and maintain them with a nourishing brow oil to keep them lifted, glossy, and petty-perfect.",
  ],
  pricing: [
    { name: "Brow Lamination + Tint / Touch Up (Combo)", price: "$115 (bundle & save)" },
    { name: "Brow Lamination only", price: "$100" },
    { name: "Brow Tint", price: "$25" },
  ],
};

export const permanentBrowsService = {
  name: "Petty Brows",
  price: "Limited time $250 (reg $600)",
  summary:
    "Petty Brows offers custom Microblading, Nano Brows, Microshading, and Ombre Powder Brows for brows that always show up.",
  details: [
    "Each technique is tailored to your face, skin type, and vibe, from soft and natural to bold and defined.",
    "From hair-like strokes to seamless shading, we create long-lasting, low-maintenance brows.",
    "Smudge-proof, sweat-proof, and effortlessly elevated for mornings that start ready.",
  ],
};

export const serviceAddOns: ServiceItem[] = [
  { name: "Foreign Fill", price: "$15" },
  { name: "After Hours (before 9am, after 5:30pm)", price: "$40" },
  { name: "Mobile Service", price: "$100" },
  { name: "Weekend Appointment", price: "$50" },
];

export const serviceNotes = [
  "Sparkles, lash decals, and colored lashes are available at no extra cost.",
  "All e-transfers and card payments are subject to 5% GST.",
];
