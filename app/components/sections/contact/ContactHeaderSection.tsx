import SiteHeader, { NavLink } from "@/app/components/sections/shared/SiteHeader";

const contactNavLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Education", href: "/training" },
  { label: "Contact Us", href: "/contact" },
];

export default function ContactHeaderSection() {
  return (
    <SiteHeader
      announcement="Get rich off lashes. Claim 2026 as your year."
      navLinks={contactNavLinks}
      activeHref="/contact"
    />
  );
}
