import SiteHeader, { NavLink } from "@/app/components/sections/shared/SiteHeader";

const homeNavLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Contact Us", href: "/contact" },
];

export default function HomeHeaderSection() {
  return (
    <SiteHeader
      announcement="A new chapter starts here - January enrollment special: $1,000 off"
      navLinks={homeNavLinks}
    />
  );
}
