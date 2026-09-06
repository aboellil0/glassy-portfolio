export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Freelance Backend Developer",
    company: "Self-Employed",
    period: "Apr 2024 — Present",
    location: "Remote, Egypt",
    description:
      "Delivering production-ready backend systems for clients across .NET Core, Node.js, and cloud infrastructure.",
    highlights: [
      "Al Rouba Group — Built a multi-division corporate marketing platform (Node.js, Express, MongoDB)",
      "Helaq — Designed a Quran education management SaaS with CQRS and Clean Architecture (.NET Core)",
      "CubeCharm — Architected a microservices-based real-estate platform with RabbitMQ, Docker, and SignalR",
    ],
  },
  {
    role: "Technical Specialist & Former Web Head",
    company: "IEEE SCU Student Branch",
    period: "Jan 2023 — 2025",
    location: "Ismailia, Egypt",
    description:
      "Leading the web development committee and mentoring junior developers in full-stack engineering.",
    highlights: [
      "Led a ~25 member web development committee",
      "Organized technical bootcamps with ~100 attendees",
      "Mentored junior developers in backend architecture and best practices",
    ],
  },
  {
    role: "Electronics & Communications Engineering",
    company: "Suez Canal University",
    period: "Sep 2021 — Jul 2026",
    location: "Ismailia, Egypt",
    description:
      "B.Sc. in Electronics & Communications Engineering with a GPA of 3.55/4.0 (B+).",
    highlights: [
      "Coursework in data structures, algorithms, and digital design",
      "Member of IEEE SCU and ICPC",
      "Competed in weekly algorithmic contests",
    ],
  },
];
