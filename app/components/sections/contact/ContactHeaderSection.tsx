import SiteHeader, { NavLink } from "@/app/components/sections/shared/SiteHeader";

const contactNavLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Contact Us", href: "/contact" },
];

export default function ContactHeaderSection() {
  return (
    <SiteHeader
      announcement="We reply within 24 hours - share your goals with us"
      navLinks={contactNavLinks}
      activeHref="/contact"
    />
  );
}
