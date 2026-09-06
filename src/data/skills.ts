export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & APIs",
    skills: [
      { name: ".NET Core / C#", level: 90 },
      { name: "Node.js / Express", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "SignalR & gRPC", level: 80 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "SQL Server", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Elasticsearch", level: 75 },
    ],
  },
  {
    title: "DevOps & Infra",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Git & GitHub Actions", level: 90 },
      { name: "RabbitMQ / MassTransit", level: 80 },
      { name: "Nginx & VPS Deployment", level: 75 },
    ],
  },
  {
    title: "Architecture & Design",
    skills: [
      { name: "Clean Architecture", level: 90 },
      { name: "Microservices", level: 85 },
      { name: "SOLID & Design Patterns", level: 85 },
      { name: "CQRS & MediatR", level: 80 },
    ],
  },
];
