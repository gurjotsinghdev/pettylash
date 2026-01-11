export type ProductDetail = {
  label: string;
  value: string | string[];
};

export type ProductOption = {
  label: string;
  values: string[];
  required?: boolean;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  summary: string;
  image: string;
  details?: ProductDetail[];
  options?: ProductOption[];
  notes?: string[];
};

const lashTrayLengths = Array.from({ length: 18 }, (_, index) => {
  const length = index + 8;
  return `${length} mm`;
});

export const products: Product[] = [
  {
    slug: "luxury-lash-trays",
    name: "Luxury Lash Trays",
    category: "Lash Trays",
    price: "$24",
    summary: "Luxury lash extensions with 16 rows for custom styling.",
    image: "/images/service-lash.jpeg",
    details: [
      {
        label: "Rows",
        value: "16 rows",
      },
      {
        label: "Diameter options",
        value: ["0.03", "0.05", "0.07", "0.15", "0.20"],
      },
      {
        label: "Length range",
        value: "8-25 mm",
      },
      {
        label: "Curl options",
        value: ["C", "CC", "D", "DD", "J", "L"],
      },
    ],
    options: [
      {
        label: "Diameter",
        values: ["0.03", "0.05", "0.07", "0.15", "0.20"],
        required: true,
      },
      {
        label: "Length",
        values: lashTrayLengths,
        required: true,
      },
      {
        label: "Curl",
        values: ["C", "CC", "D", "DD", "J", "L"],
        required: true,
      },
    ],
    notes: [
      "Luxury lash extensions designed for professional sets.",
      "Choose a diameter, length, and curl before checkout.",
    ],
  },
  {
    slug: "lash-adhesive",
    name: "Lash Adhesive",
    category: "Adhesive",
    price: "$35-$50",
    summary: "Fast-dry adhesive with size and drying time options.",
    image: "/products/lash-glue.jpg",
    details: [
      {
        label: "Sizes",
        value: ["5 ml", "10 ml"],
      },
      {
        label: "Drying time options",
        value: ["0.5 seconds", "1-2 seconds", "2-3 seconds"],
      },
    ],
    options: [
      {
        label: "Size",
        values: ["5 ml", "10 ml"],
        required: true,
      },
      {
        label: "Drying time",
        values: ["0.5 seconds", "1-2 seconds", "2-3 seconds"],
        required: true,
      },
    ],
  },
  {
    slug: "lash-cooling-gel-pads",
    name: "Lash Cooling Gel Pads",
    category: "Petty Necessities",
    price: "$20",
    summary: "Cooling gel pads that stay in place during services.",
    image: "/products/Lash-cooling-gel-pads.jpg",
  },
  {
    slug: "lash-primer",
    name: "Lash Primer",
    category: "Prep",
    price: "$18",
    summary: "Prep solution that balances oils for improved retention.",
    image: "/products/Lash-primer.jpg",
  },
  {
    slug: "beauty-cute-fan",
    name: "Beauty Cute Fan",
    category: "Petty Necessities",
    price: "$30",
    summary: "Compact fan to speed up drying and client comfort.",
    image: "/products/Beauty-cute-fan.jpg",
  },
  {
    slug: "lash-shampoo",
    name: "Lash Shampoo",
    category: "Aftercare",
    price: "$22",
    summary: "Foaming cleanser to keep lashes fresh between fills.",
    image: "/products/Lash-shampoo.jpg",
  },
  {
    slug: "petty-lash-super-bonder",
    name: "Petty Lash Super Bonder",
    category: "Petty Necessities",
    price: "$45",
    summary: "Seals adhesive and reduces sensitivity on contact.",
    image: "/products/super-bonder.jpg",
  },
  {
    slug: "lash-remover",
    name: "Lash Remover",
    category: "Petty Necessities",
    price: "$25",
    summary: "Safe removal solution for clean, efficient take-offs.",
    image: "/products/lash-remover.jpg",
  },
  {
    slug: "tweezers-40-per-tweezer",
    name: "Tweezers",
    category: "Tools",
    price: "$28",
    summary: "Precision 40-degree tweezers for clean isolation and pickup.",
    image: "/products/Tweezers-40pertweezer.jpg",
  },
];

export const brandDetails = {
  name: "Petty Lash",
  instagram: "@pettylashhh",
};
