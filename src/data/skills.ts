export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: [
      { name: "C#" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "SQL" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: "api",
    skills: [
      { name: ".NET Core" },
      { name: "ASP.NET" },
      { name: "Entity Framework" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "SignalR" },
      { name: "gRPC" },
      { name: "MediatR" },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      { name: "PostgreSQL" },
      { name: "SQL Server" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "Elasticsearch" },
      { name: "MongoDB" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    skills: [
      { name: "Docker" },
      { name: "Git" },
      { name: "GitHub Actions" },
      { name: "CI/CD" },
      { name: "Nginx" },
      { name: "RabbitMQ" },
      { name: "MassTransit" },
      { name: "VPS Deployment" },
    ],
  },
  {
    title: "Architecture & Design",
    icon: "architecture",
    skills: [
      { name: "Clean Architecture" },
      { name: "Microservices" },
      { name: "SOLID Principles" },
      { name: "Design Patterns" },
      { name: "CQRS" },
      { name: "Domain-Driven Design" },
      { name: "RESTful APIs" },
    ],
  },
  {
    title: "Tools",
    icon: "build",
    skills: [
      { name: "Visual Studio" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Swagger / OpenAPI" },
      { name: "SSMS" },
      { name: "DBeaver" },
    ],
  },
];
