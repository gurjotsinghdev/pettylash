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
  image: string;
  details?: ProductDetail[];
  notes?: string[];
};

export const products: Product[] = [
  {
    slug: "lash-adhesive-10-ml",
    name: "Lash Adhesive - 10 ml",
    category: "Adhesive",
    price: "$50",
    summary: "Fast-dry adhesive for secure, long-lasting retention.",
    image: "/products/lash-glue.jpg",
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
    image: "/products/lash-glue.jpg",
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
    name: "Tweezers - 40 per tweezer",
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
