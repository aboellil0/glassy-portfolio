export interface Project {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  freelance: boolean;
  image: string;
  images: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Helaq — Quran Circle Management Platform - SAAS",
    description:
      "An all-in-one SaaS platform for managing Quran memorization circles — replacing paper records and spreadsheets with a unified system for scheduling, attendance, progress tracking, payments, and reporting across 2,000+ teachers and 15,000+ students.",
    tags: [".NET", "PostgreSQL", "EF Core", "Clean Architecture", "DDD", "Docker", "Hangfire", "SSE", "Redis", "JWT", "Serilog"],
    features: [
      "Four-layer Clean Architecture with Domain-Driven Design: 47 domain entities, 39 CQRS-style application services",
      "Real-time notification system using Server-Sent Events with in-memory channel broadcasting",
      "6 Hangfire recurring background jobs for session generation, expiry management, reminders",
      "Payment analytics engine with student health scoring and churn risk detection",
    ],
    freelance: true,
    image: "/images/projects/helaq/main.png",
    images: ["/images/projects/helaq/main.png"],
    liveUrl: "https://helaq.org",
  },
  {
    title: "CubeCharm — Real Estate Social Marketplace",
    description:
      "A full-stack real estate platform built with .NET 10 microservices, featuring property listings, real-time chat, payment subscriptions, and social features.",
    tags: [".NET", "ASP.NET Core", "Docker", "YARP", "PostgreSQL", "MassTransit", "RabbitMQ", "SignalR", "Redis", "gRPC"],
    features: [
      "YARP API Gateway with JWT validation and Swagger aggregation across 4 microservices",
      "Identity Service with full auth, JWT refresh tokens, Google/Facebook OAuth",
      "Property Service with Elasticsearch-powered search and social posts",
      "Messaging & Notification Service with SignalR real-time chat",
    ],
    freelance: true,
    image: "/images/projects/CubeCharm microservices/main.png",
    images: ["/images/projects/CubeCharm microservices/main.png"],
    liveUrl: "https://cubecharm.com",
  },
  {
    title: "Al Rouba Group — Multi-Division Corporate Website",
    description:
      "Full-stack corporate website for an Omani industrial group with three divisions. Features admin dashboard and Docker-based deployment.",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Docker", "Nginx"],
    features: [
      "Layered backend architecture with CustomResult monad pattern for explicit error handling",
      "Dual-token authentication with token rotation and device tracking",
      "Secure file upload pipeline with parallel image compression via sharp",
      "Docker Compose orchestration with 5 services",
    ],
    freelance: true,
    image: "/images/projects/alrouba/image.png",
    images: ["/images/projects/alrouba/image.png"],
    liveUrl: "https://www.alrouba.com",
  },
  {
    title: "Quran Memorization Platform — RESTful API",
    description:
      "A comprehensive Express.js/TypeScript backend API for Quran memorization and Islamic education, connecting students with qualified teachers.",
    tags: ["Node.js", "Express.js", "TypeScript", "MongoDB", "JWT", "Docker", "Google OAuth"],
    features: [
      "Multi-role JWT authentication with access + refresh token rotation",
      "Credit-based lesson system with automatic credit management",
      "Full lesson lifecycle with scheduling, homework, attendance tracking",
      "Docker multi-stage production build with Swagger documentation",
    ],
    freelance: true,
    image: "/images/projects/yaqeinacademy/main.png",
    images: ["/images/projects/yaqeinacademy/main.png"],
    liveUrl: "https://yaqeinacademy.com",
  },
  {
    title: "EventsCandy — Event Booking System",
    description:
      "A full-stack event booking platform with JWT-authenticated user registration, role-based admin dashboard, and Blazor WebAssembly SPA frontend.",
    tags: [".NET", "ASP.NET Core", "Entity Framework Core", "SQL Server", "JWT", "Blazor WebAssembly"],
    features: [
      "Clean Architecture with 4 layers — Api, Core, Infrastructure, and Blazor frontend",
      "JWT authentication with refresh token rotation and role-based authorization",
      "Full RESTful API with CRUD operations for events and bookings",
      "Admin dashboard with real-time statistics",
    ],
    freelance: false,
    image: "/images/projects/EventBookingSystem/main.png",
    images: ["/images/projects/EventBookingSystem/main.png"],
    repoUrl: "https://github.com/aboellil0/EventBookingSystem",
  },
  {
    title: "Services Booking System",
    description:
      "A full-stack ASP.NET Core MVC booking platform where users can browse services, book appointments, and manage their bookings.",
    tags: [".NET", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Identity"],
    features: [
      "Three-layer architecture with Generic Repository pattern",
      "ASP.NET Core Identity with three roles (Admin, User, Technician)",
      "Full booking lifecycle with status workflow",
      "Admin dashboard with aggregate statistics",
    ],
    freelance: false,
    image: "/images/projects/servicebookingsystem/main.png",
    images: ["/images/projects/servicebookingsystem/main.png"],
    repoUrl: "https://github.com/BasselRaafat/Services-Booking-System",
  },
];

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Freelance", value: "freelance" },
  { label: ".NET", value: ".NET" },
  { label: "Node.js", value: "Node.js" },
];
