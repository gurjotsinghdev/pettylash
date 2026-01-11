import SiteHeader, { NavLink } from "@/app/components/sections/shared/SiteHeader";

type ShopHeaderSectionProps = {
  activeHref?: string;
  announcement?: string;
};

const shopNavLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Education", href: "/training" },
  { label: "Contact Us", href: "/contact" },
];

export default function ShopHeaderSection({
  activeHref,
  announcement = "Get rich off lashes. Claim 2026 as your year.",
}: ShopHeaderSectionProps) {
  return (
    <SiteHeader
      announcement={announcement}
      navLinks={shopNavLinks}
      activeHref={activeHref}
    />
  );
}
