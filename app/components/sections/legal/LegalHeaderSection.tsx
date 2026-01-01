import SiteHeader, { NavLink } from "@/app/components/sections/shared/SiteHeader";

const legalNavLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Contact Us", href: "/contact" },
];

export default function LegalHeaderSection() {
  return (
    <SiteHeader
      announcement="Policies and terms for Petty Lash"
      navLinks={legalNavLinks}
    />
  );
}
