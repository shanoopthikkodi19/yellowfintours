/* Shared by every page. Edit contact details and menu here once. */
export const BRAND = {
  name: "Yellow Fin Tours",
  suffix: "Tours & Travels",
  phone: "+91 96795 73417",
  phone2: "+91 80895 08728",
  whatsapp: "919679573417", // country code + number, no + or spaces
  email: "hello@yellowfintours.in", // placeholder: replace with your real email
  address: "Andaman & Nicobar Islands",
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const NAV: NavItem[] = [
  { label: "Group Packages", href: "/group-packages" },
  {
    label: "Family Tour Package",
    href: "/andaman-family-tour-package5-6",
    children: [
      { label: "5 Nights / 6 Days", href: "/andaman-family-tour-package5-6" },
      { label: "3 Nights / 4 Days", href: "/andaman-family-tour-package3-4" },
    ],
  },
  { label: "Honeymoon Package", href: "/honeymoon-package-a" },
];

export const tel = (p: string) => `tel:${p.replace(/\s/g, "")}`;
