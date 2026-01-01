import SiteHeader, { NavLink } from "@/app/components/sections/shared/SiteHeader";

type ShopHeaderSectionProps = {
  activeHref?: string;
  announcement?: string;
};

const shopNavLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/#founder" },
  { label: "Contact Us", href: "/#contact" },
];

export default function ShopHeaderSection({
  activeHref,
  announcement = "New arrivals drop every Friday - complimentary shipping over $120",
}: ShopHeaderSectionProps) {
  return (
    <SiteHeader
      announcement={announcement}
      navLinks={shopNavLinks}
      activeHref={activeHref}
    />
  );
}
