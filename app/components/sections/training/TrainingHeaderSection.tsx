import SiteHeader, { NavLink } from "@/app/components/sections/shared/SiteHeader";

const trainingNavLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Contact Us", href: "#contact" },
];

export default function TrainingHeaderSection() {
  return (
    <SiteHeader
      announcement="A new chapter starts here - January enrollment special: $1,000 off"
      navLinks={trainingNavLinks}
      activeHref="/training"
    />
  );
}
