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
  lightImage?: boolean;
}

export const projects: Project[] = [
  {
    title: "Helaq — Quran Circle Management Platform - SAAS",
    description:
      "An all-in-one SaaS platform for managing Quran memorization circles — replacing paper records and spreadsheets with a unified system for scheduling, attendance, progress tracking, payments, and reporting across 2,000+ teachers and 15,000+ students.",
    tags: [".NET", "PostgreSQL", "EF Core", "Clean Architecture", "DDD", "Docker", "Hangfire", "SSE", "Redis", "JWT", "Serilog"],
    features: [
      "Four-layer Clean Architecture with Domain-Driven Design: 47 domain entities, 39 CQRS-style application services, EF Core + Npgsql infrastructure, and 40 API controllers with JWT auth and FluentValidation",
      "Real-time notification system using Server-Sent Events with in-memory channel broadcasting and concurrent connection management",
      "6 Hangfire recurring background jobs for session generation, expiry management, reminders, and subscription lifecycle",
      "Payment analytics engine with student health scoring, churn risk detection, cash-flow forecasting, and cohort retention analysis",
      "Subscription gating with plan-based feature flags enforced at both API middleware and application layer",
    ],
    freelance: true,
    image: "/images/projects/helaq/main.png",
    images: [
      "/images/projects/helaq/main.png",
      "/images/projects/helaq/screenshot-1783521283321.png",
      "/images/projects/helaq/screenshot-1783521943082.png",
      "/images/projects/helaq/Screenshot_8-7-2026_174357_helaq.dev.jpeg",
    ],
    liveUrl: "https://helaq.org",
    lightImage: false,
  },
  {
    title: "CubeCharm — Real Estate Social Marketplace - Microservices",
    description:
      "A full-stack real estate platform built with .NET 10 microservices, featuring property listings, real-time chat, payment subscriptions, and social features. Uses Clean Architecture with CQRS, event-driven messaging via RabbitMQ, and a YARP API Gateway.",
    tags: [".NET", "ASP.NET Core", "Docker", "YARP", "PostgreSQL", "EF Core", "MassTransit", "RabbitMQ", "SignalR", "Redis", "gRPC", "Elasticsearch", "JWT", "Serilog", "MinIO", "FluentValidation"],
    features: [
      "YARP API Gateway with JWT validation, header-based identity propagation, Swagger aggregation across 4 microservices, and route-based reverse proxy with path stripping",
      "Identity Service with full auth (register, login, JWT refresh tokens with rotation/theft detection, Google/Facebook OAuth, OTP email verification, forgot/reset password), profile management, and role-based admin controls",
      "Property Service with property CRUD, hierarchical categories, interactive floor plans, Elasticsearch-powered search, social posts with likes/comments, ephemeral stories, follow/block system, favorites, reports, and subscription-based feature limits",
      "Payment Service with subscription plans, add-on purchasing, transaction idempotency, time-bound discounts, and admin audit logging — all publishing events via RabbitMQ",
      "Messaging & Notification Service with SignalR real-time chat (text/image/video/document/location/property-share messages, typing indicators, delivery/read receipts), SignalR push notifications with Redis backplane, and MassTransit consumers for domain events",
    ],
    freelance: true,
    image: "/images/projects/CubeCharm microservices/main.png",
    images: [
      "/images/projects/CubeCharm microservices/main.png",
      "/images/projects/CubeCharm microservices/image.png",
      "/images/projects/CubeCharm microservices/screenshot-1783523753107.png",
      "/images/projects/CubeCharm microservices/screenshot-1783523784957.png",
    ],
    lightImage: false,
  },
  {
    title: "CubeCharm — Real Estate Social Marketplace - Monolithic",
    description:
      "A feature-rich real estate platform API that blends property listings with social networking — enabling users to buy, rent, and sell properties while posting stories, albums, following others, and messaging in real time.",
    tags: [".NET", "ASP.NET Core", "Clean Architecture", "CQRS", "MediatR", "EF Core", "SQL Server", "JWT", "Identity", "SSE", "FluentValidation", "Serilog", "Docker", "Swagger"],
    features: [
      "Clean Architecture (4 layers: Domain, Application, Infrastructure, API) with CQRS via MediatR pipeline behaviors and FluentValidation for robust request validation",
      "JWT authentication with refresh tokens, OTP email verification, Google/Facebook external login, and ASP.NET Core Identity for comprehensive user management",
      "Real-time messaging via Server-Sent Events (SSE) with sliding window rate limiting, conversation management, and online presence tracking",
      "Grid-based floor plans with per-cell multi-height image uploads, 360° image support, pro mode listings, and social features (posts, stories, albums, favorites, follows, blocks, reports)",
      "Subscription and plan system with promotional offers, usage-based limits, transaction tracking, and admin approval workflows",
    ],
    freelance: true,
    image: "/images/projects/Cubecharm/main.png",
    images: [
      "/images/projects/Cubecharm/main.png",
      "/images/projects/Cubecharm/screenshot-1783523753107.png",
      "/images/projects/Cubecharm/screenshot-1783523784957.png",
    ],
    liveUrl: "https://cubecharm.com",
    lightImage: false,
  },
  {
    title: "Al Rouba Group — Multi-Division Corporate Website",
    description:
      "Full-stack corporate website for an Omani industrial group with three divisions (Trading/Valves, Electrical, Projects). Features a public-facing catalog with product/media/project browsing, contact forms, admin dashboard, and Docker-based deployment.",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Docker", "Nginx", "Brevo", "Multer"],
    features: [
      "Layered backend architecture (Routes → Controllers → Services → Models) with CustomResult monad pattern for explicit error handling across 13 resource modules",
      "Dual-token authentication (short-lived JWT access + opaque SHA-256 refresh tokens) with token rotation and device tracking",
      "Secure file upload pipeline with MIME whitelist, safe extension mapping, parallel image compression via sharp, and sequential video compression via ffmpeg",
      "Three-division theming system with per-division layouts, SEO metadata, JSON-LD schemas, and division-scoped content filtering across products, clients, and feedback",
      "Docker Compose orchestration with 5 services (MongoDB, Express backend, Next.js frontend, Nginx reverse proxy, Certbot SSL)",
    ],
    freelance: true,
    image: "/images/projects/alrouba/image.png",
    images: ["/images/projects/alrouba/image.png"],
    liveUrl: "https://alrouba.com/",
    lightImage: true,
  },
  {
    title: "Computech — Custom WordPress E-Commerce Theme",
    description:
      "A fully custom WordPress theme for Computech (كمبيوتيك), an Arabic RTL e-commerce store selling computers and accessories — replacing a static site with a dynamic WooCommerce experience including unlimited-depth product categories and AJAX filtering.",
    tags: ["WordPress", "WooCommerce", "PHP", "MySQL", "AJAX", "RTL"],
    features: [
      "Custom WordPress theme with product architecture layer supporting unlimited-depth hierarchical categories, visibility toggles, featured products, and per-product meta fields for brand, model, specs, and warranty",
      "WooCommerce integration with custom page templates featuring live AJAX filtering, search, sort, and pagination without page reloads",
      "Complete admin settings ecosystem with site identity manager, header/footer controls, home page section toggles, and custom meta boxes with Media Library integration",
      "Clean URL routing system with permalink stripping and fallback request mapper for WooCommerce URLs on misconfigured servers",
      "Fully responsive RTL front-end with dynamic hero slider, marquee, and IntersectionObserver-based scroll animations",
    ],
    freelance: false,
    image: "/images/projects/computech/main.png",
    images: [
      "/images/projects/computech/main.png",
      "/images/projects/computech/Screenshot 2026-07-11 171137.png",
      "/images/projects/computech/Screenshot 2026-07-11 171111.png",
      "/images/projects/computech/Screenshot 2026-07-11 171210.png",
      "/images/projects/computech/Screenshot 2026-07-11 171259.png",
    ],
    repoUrl: "https://github.com/aboellil0/computech",
    liveUrl: "https://computech.wasmer.app/",
    lightImage: false,
  },
  {
    title: "Quran Memorization Platform — RESTful API for Islamic Education",
    description:
      "A comprehensive Express.js/TypeScript backend API for Quran memorization and Islamic education, connecting students with qualified teachers through live sessions, progress tracking, and admin management.",
    tags: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Mongoose", "JWT", "Swagger", "Docker", "Google OAuth"],
    features: [
      "Multi-role JWT authentication (student/teacher/admin) with access + refresh token rotation via HTTP-only cookies and Google OAuth integration",
      "Credit-based lesson system — deducts private credits first, then public, and auto-adds teacher credits on lesson completion",
      "Full lesson lifecycle management with scheduling, homework assignment, attendance tracking, and memorization progress reporting with surah-level granularity",
      "Manual payment flow via WhatsApp with admin-confirmed credit top-ups, plus a free trial lesson system for newly verified users",
      "Docker multi-stage production build with rate limiting, Helmet security headers, CORS origin restriction, and Swagger/OpenAPI auto-generated documentation",
    ],
    freelance: true,
    image: "/images/projects/yaqeinacademy/main.png",
    images: [
      "/images/projects/yaqeinacademy/main.png",
      "/images/projects/yaqeinacademy/screenshot-1759323355422.png",
      "/images/projects/yaqeinacademy/screenshot-1770659567578.png",
    ],
    liveUrl: "https://yaqeinacademy.com",
    repoUrl: "https://github.com/aboellil0/educational-project",
  },
  {
    title: "EventsCandy — Event Booking System",
    description:
      "A full-stack event booking platform with JWT-authenticated user registration, role-based admin dashboard, and Blazor WebAssembly SPA frontend. Users can browse, filter, search events by category/date/price, and book tickets.",
    tags: [".NET", "ASP.NET Core", "Entity Framework Core", "SQL Server", "JWT", "Clean Architecture", "Blazor WebAssembly", "Swagger"],
    features: [
      "Clean Architecture with 4 layers — Api, Core, Infrastructure, and Blazor WebAssembly frontend — promoting separation of concerns and testability",
      "JWT authentication with refresh token rotation, HttpOnly cookies, and role-based authorization (User/Admin) using ASP.NET Core Identity",
      "Full RESTful API with CRUD operations for events, bookings, and users — including filtering events by category, date, and price",
      "Admin dashboard providing real-time statistics — total users, events, bookings, and revenue — with recent bookings and events overview",
      "Booking system with duplicate booking prevention; users can view their bookings, book events, and cancel existing bookings",
    ],
    freelance: false,
    image: "/images/projects/EventBookingSystem/main.png",
    images: [
      "/images/projects/EventBookingSystem/main.png",
      "/images/projects/EventBookingSystem/Screenshot 2025-09-15 213936.png",
      "/images/projects/EventBookingSystem/Screenshot 2025-09-15 213947.png",
    ],
    repoUrl: "https://github.com/aboellil0/EventBookingSystem",
  },
  {
    title: "Services Booking System — Multi-Tier Service Booking Platform",
    description:
      "A full-stack ASP.NET Core MVC booking platform where users can browse service categories, view technician profiles, book appointments, and manage their bookings. Technicians can manage their portfolio and booking queue, while admins have full CRUD and dashboard oversight.",
    tags: [".NET", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Identity"],
    features: [
      "Three-layer architecture (PL → BLL → DAL) with Generic Repository pattern and dependency injection via custom extension methods",
      "ASP.NET Core Identity with three roles (Admin, User, Technician) and auto-seeded admin account",
      "Full booking lifecycle — users book technicians with Pending/Confirmed/Completed/Missed status workflow and price management",
      "Technician portfolio page with editable bio/name, service catalog with pricing, and add/delete service management",
      "Admin dashboard with aggregate statistics (users, technicians, bookings, categories, services) and paginated user management",
    ],
    freelance: false,
    image: "/images/projects/servicebookingsystem/main.png",
    images: [
      "/images/projects/servicebookingsystem/main.png",
      "/images/projects/servicebookingsystem/Screenshot 2025-09-15 205445.png",
      "/images/projects/servicebookingsystem/Screenshot 2025-09-15 205547.png",
      "/images/projects/servicebookingsystem/Screenshot 2025-09-15 212209.png",
    ],
    repoUrl: "https://github.com/BasselRaafat/Services-Booking-System",
  },
  {
    title: "APIlady — Department Management Web API with JWT Auth",
    description:
      "A .NET 8 RESTful Web API for managing departments with full CRUD operations, secured by JWT-based authentication and refresh token rotation using ASP.NET Core Identity.",
    tags: [".NET", "ASP.NET Core Web API", "Entity Framework Core", "SQL Server", "JWT", "Identity", "Swagger"],
    features: [
      "RESTful CRUD endpoints (GET, POST, PUT, PATCH) for department entities with SQL Server persistence via Entity Framework Core code-first migrations",
      "JWT token authentication with custom claims (JTI, NameIdentifier, Name, Roles) using symmetric HMAC-SHA256 signing",
      "ASP.NET Core Identity integration for user registration and login with password hashing",
      "Refresh token rotation stored as owned entities on ApplicationUser, generated via RNGCryptoServiceProvider and delivered in HttpOnly cookies",
      "Swagger/OpenAPI auto-documentation and CORS open policy for cross-origin testing",
    ],
    freelance: false,
    image: "/images/projects/apilady/Screenshot 2025-09-15 154844.png",
    images: ["/images/projects/apilady/Screenshot 2025-09-15 154844.png"],
  },
  {
    title: "Real-Time Chat Application — ASP.NET Core & SignalR",
    description:
      "A real-time chat application built with ASP.NET Core and SignalR, supporting public group conversations and private group chats with an easy join/leave system and a responsive UI.",
    tags: [".NET", "ASP.NET Core", "SignalR", "JWT", "Entity Framework Core", "SQL Server"],
    features: [
      "Real-time messaging using SignalR WebSocket connections with automatic reconnection",
      "Public chat room for all members and private group chats with join/leave functionality",
      "User authentication with JWT tied to SignalR hub connections for secure messaging",
      "Persistent message history stored via Entity Framework Core with SQL Server",
      "Responsive and lightweight front-end interface for seamless cross-device chat",
    ],
    freelance: false,
    image: "/images/projects/Real-Time Chat Application/Screenshot 2025-09-15 215615.png",
    images: ["/images/projects/Real-Time Chat Application/Screenshot 2025-09-15 215615.png"],
  },
  {
    title: "Course Management System — ASP.NET MVC with Identity",
    description:
      "An MVC architecture training project for managing training courses, built with ASP.NET MVC and Identity, providing secure authentication and role-based access for instructors and students with full CRUD operations.",
    tags: ["ASP.NET MVC", "Entity Framework Core", "SQL Server", "Identity", "Razor"],
    features: [
      "Role-based authentication with ASP.NET Identity for Instructor and Student access control",
      "Full CRUD operations for courses, instructors, and students with MVC controller separation",
      "Clean MVC architecture with models, views, and controllers following standard conventions",
      "Database-first design with Entity Framework Core and SQL Server for persistent storage",
      "Razor view engine with form validation and responsive layout for cross-device usability",
    ],
    freelance: false,
    image: "/images/projects/course management system/Screenshot 2025-09-15 152739.png",
    images: [
      "/images/projects/course management system/Screenshot 2025-09-15 152739.png",
      "/images/projects/course management system/Screenshot 2025-09-15 152812.png",
      "/images/projects/course management system/Screenshot 2025-09-15 152845.png",
    ],
  },
  {
    title: "Al-Redwan Courses Center — Full-Stack Educational Management Platform",
    description:
      "A comprehensive educational center management platform with role-based dashboards for students, parents, instructors, and admins. Features course/enrollment management, fingerprint-based instructor attendance with real-time WebSocket updates, payment processing, exam management, and QR-code student ID card generation.",
    tags: ["Django", "Django REST Framework", "PostgreSQL", "Redis", "Docker", "Django Channels", "JWT", "Cloudinary"],
    features: [
      "Role-based authentication using phone number login with JWT, supporting students, parents, instructors, and admins with automatic token refresh",
      "Real-time fingerprint attendance system with WebSocket broadcasting (Django Channels + Redis) providing live instructor check-in/out updates to the admin dashboard",
      "Complete enrollment-to-payment pipeline with approval workflow, partial payments, refund processing, and automatic course completion when end date passes",
      "Dual-server containerized deployment — Gunicorn (WSGI) for REST API on port 8000 and Uvicorn (ASGI) for WebSocket on port 8001, both managed by Supervisor inside Docker",
      "Arabic-first RTL frontend with server-rendered pages, a reusable DataView system with URL-based filtering/sorting/pagination, and QR-code student ID card generation with Arabic text",
    ],
    freelance: true,
    image: "/images/projects/elradwan/image.png",
    images: ["/images/projects/elradwan/image.png"],
  },
  {
    title: "Stripe Shopping Service — Payment Integration Learning Platform",
    description:
      "A comprehensive Node.js Express TypeScript application demonstrating Stripe payment integration with checkout sessions, payment intents, subscriptions, refunds, customer management, and product management.",
    tags: ["Node.js", "Express.js", "Stripe", "TypeScript", "REST API"],
    features: [
      "Layered architecture — StripeService class encapsulates all Stripe API calls, separating business logic from controller request handling",
      "Full Stripe payment lifecycle coverage — checkout sessions, payment intents, subscriptions (create/cancel/resume), refunds (full/partial), and payment method management",
      "Type-safe implementation using TypeScript strict mode with custom interfaces for domain models (Product, Customer, Subscription, Refund)",
      "Modular route organization with separate route files for payment and product endpoints, each bound to dedicated controller classes",
      "Static front-end served via Express with dedicated HTML pages for products, checkout, subscriptions, and refunds backed by client-side JavaScript",
    ],
    freelance: false,
    image: "/images/projects/stripe/image.png",
    images: ["/images/projects/stripe/image.png"],
    repoUrl: "https://github.com/aboellil0/shopping-with-strip.git",
  },
  {
    title: "Django Shopify Integration — Real-Time Shopify Store Management",
    description:
      "A Django web application that integrates with the Shopify Admin REST API to manage products, customers, and orders in real-time. Features a multi-tenant merchant dashboard for store operations with full CRUD capabilities synced live to Shopify.",
    tags: ["Python", "Django", "Shopify REST API", "requests", "SQLite"],
    features: [
      "Real-time data fetching from Shopify Admin REST API — products, customers, and orders are fetched live on every page load rather than relying on stale local copies",
      "Multi-tenant merchant system with authentication (signup/login/logout) and a personalized merchant dashboard showing per-merchant product stats and inventory overview",
      "Full CRUD operations on Shopify products directly from the Django app — create products with base64 image attachments, edit variants/pricing/inventory, and delete products via the Shopify API",
      "Customized Django admin interface with live Shopify data display, inline image previews, status badges, and admin actions for bulk sync and deletion from Shopify",
      "Custom management commands for one-way Shopify data sync (products, customers, orders) and database sample data population with realistic orders, inventory, and line items",
    ],
    freelance: false,
    image: "/images/projects/shopify app/main.png",
    images: [
      "/images/projects/shopify app/main.png",
      "/images/projects/shopify app/image.png",
    ],
    repoUrl: "https://github.com/aboellil0/Django-With-Shopify.git",
  },
];

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Freelance", value: "freelance" },
  { label: ".NET", value: ".NET" },
  { label: "Node.js", value: "Node.js" },
  { label: "Docker", value: "Docker" },
  { label: "Express", value: "Express" },
];
