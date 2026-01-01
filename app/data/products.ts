export type ProductDetail = {
  label: string;
  value: string | string[];
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  summary: string;
  details?: ProductDetail[];
  notes?: string[];
};

export const products: Product[] = [
  {
    slug: "lash-trays",
    name: "Lash Trays",
    category: "Lashes",
    price: "$24",
    summary: "Soft lash trays with multiple curl and length options.",
    details: [
      {
        label: "Curls available",
        value: ["B", "C", "CC", "D", "DD", "L", "M", "LB", "LC", "LD", "U", "J"],
      },
      {
        label: "Lengths",
        value: "6-25 mm",
      },
    ],
    notes: [
      "Mixed trays available",
      "Color options available",
      "Sparkle options available",
    ],
  },
  {
    slug: "lash-adhesive-10-ml",
    name: "Lash Adhesive - 10 ml",
    category: "Adhesive",
    price: "$50",
    summary: "Fast-dry adhesive for secure, long-lasting retention.",
    details: [
      {
        label: "Size",
        value: "10 ml",
      },
      {
        label: "Drying time options",
        value: ["1-2 seconds", "0.5 seconds"],
      },
    ],
  },
  {
    slug: "lash-adhesive-5-ml",
    name: "Lash Adhesive - 5 ml",
    category: "Adhesive",
    price: "$35",
    summary: "Smaller adhesive size for easy kit rotation.",
    details: [
      {
        label: "Size",
        value: "5 ml",
      },
      {
        label: "Drying time options",
        value: ["1-2 seconds", "0.5 seconds"],
      },
    ],
  },
  {
    slug: "non-slip-gel-eyepads",
    name: "Non-Slip Gel Eyepads",
    category: "Petty Necessities",
    price: "$20",
    summary: "Cooling gel pads that stay in place during services.",
  },
  {
    slug: "sensitivity-tape",
    name: "Sensitivity Tape",
    category: "Petty Necessities",
    price: "$10",
    summary: "Gentle tape for sensitive clients and seamless taping.",
  },
  {
    slug: "beary-cute-mini-fan",
    name: "Beary Cute Mini Fan",
    category: "Petty Necessities",
    price: "$30",
    summary: "Compact fan to speed up drying and client comfort.",
  },
  {
    slug: "nano-mister",
    name: "Nano Mister",
    category: "Petty Necessities",
    price: "$25",
    summary: "Fine mist tool to cure adhesive and lock in bonds.",
  },
  {
    slug: "petty-lash-super-bonder",
    name: "Petty Lash Super Bonder",
    category: "Petty Necessities",
    price: "$45",
    summary: "Seals adhesive and reduces sensitivity on contact.",
  },
  {
    slug: "remover",
    name: "Remover",
    category: "Petty Necessities",
    price: "$25",
    summary: "Safe removal solution for clean, efficient take-offs.",
  },
];

export const brandDetails = {
  name: "Petty Lash",
  instagram: "@pettylashhh",
};
