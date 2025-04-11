

export type NavLink = {
    name: string;
    href: string;
    children?: NavLink[]; // Optional sublinks (recursive)
  };

  export const navLinks: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    {
      name: "Services",
      href: "#services", // Can still point to the main section
      children: [
        { name: "IT Consulting", href: "#consulting" },
        { name: "Cybersecurity", href: "#cybersecurity" },
        { name: "Digital Transformation", href: "#transformation" },
      ],
    },
    { name: "Contact", href: "#contact" },
  ];
  