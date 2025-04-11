export type NavLink = {
    name: string;
    href: string;
    children?: NavLink[]; // Optional sublinks (recursive)
  };

  export const navLinks: NavLink[] = [
    { name: "Home", 
      href: "#home",       
    },
    { name: "About", 
      href: "#about", 
      children: [
        { name: "Our Story", href: "#ourstory" },
      ]
    },
    {
      name: "Services",
      href: "#services", // Can still point to the main section
      children: [
        { name: "Strategic Consulting", href: "#consulting" },
        { name: "Security & Protection", href: "#cybersecurity" },
        { name: "Innovation Services", href: "#transformation" },
      ],
    },
    { name: "Contact", href: "#contact" },
  ];
  