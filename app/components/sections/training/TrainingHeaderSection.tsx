import SiteHeader, { NavLink } from "@/app/components/sections/shared/SiteHeader";

const trainingNavLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Education", href: "/training" },
  { label: "Contact Us", href: "/contact" },
];

export default function TrainingHeaderSection() {
  return (
    <SiteHeader
      announcement="Get rich off lashes. Claim 2026 as your year."
      navLinks={trainingNavLinks}
      activeHref="/training"
    />
  );
}
