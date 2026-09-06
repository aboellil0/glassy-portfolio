export interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: "mohamed.aboellil0@gmail.com",
    href: "mailto:mohamed.aboellil0@gmail.com",
    icon: "mail",
  },
  {
    label: "GitHub",
    value: "github.com/aboellil0",
    href: "https://github.com/aboellil0",
    icon: "code",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mohammedaboellil",
    href: "https://linkedin.com/in/mohammedaboellil",
    icon: "work",
  },
];
