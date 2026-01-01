import SiteHeader, { NavLink } from "@/app/components/sections/shared/SiteHeader";

const servicesNavLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/#founder" },
  { label: "Contact Us", href: "#contact" },
];

export default function ServicesHeaderSection() {
  return (
    <SiteHeader
      announcement="Luxury Beauty Services on Lock"
      navLinks={servicesNavLinks}
      activeHref="/services"
    />
  );
}
