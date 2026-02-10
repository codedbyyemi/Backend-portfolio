# Backend Developer Portfolio Website

## Overview

This is a personal portfolio website for **Adefisan Babatunde**, a backend developer with 4+ years of experience. The site showcases backend engineering skills, projects, work experience, and provides a contact form. It's built as a full-stack application with a React frontend and Express backend, though the content is primarily static/hardcoded on the frontend with a single backend API endpoint for the contact form.

The site features multiple pages: Home, About, Skills, Projects, Experience, and Contact — with smooth animations, dark/light theme toggle, and a floating WhatsApp button for direct communication.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight alternative to React Router)
- **Styling:** Tailwind CSS with CSS variables for theming (light/dark mode support)
- **UI Components:** shadcn/ui (new-york style) built on Radix UI primitives
- **Animations:** Framer Motion for page transitions, scroll effects, and hover interactions
- **State Management:** React Query (@tanstack/react-query) for server state; local state via React hooks
- **Forms:** React Hook Form with Zod validation via @hookform/resolvers
- **Build Tool:** Vite with React plugin
- **Path Aliases:** `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Runtime:** Node.js with TypeScript (via tsx)
- **Framework:** Express 5
- **API Style:** RESTful, with a typed route definition system in `shared/routes.ts`
- **Storage:** In-memory storage by default (`MemStorage` class in `server/storage.ts`). The storage layer implements an `IStorage` interface, making it easy to swap in a database-backed implementation.
- **Database Schema:** Defined with Drizzle ORM + PostgreSQL dialect in `shared/schema.ts`, but currently only used for type generation. The actual runtime uses in-memory storage.
- **Validation:** Zod schemas generated from Drizzle table definitions via `drizzle-zod`

### Shared Layer (`shared/`)
- `schema.ts` — Drizzle table definitions and Zod schemas for messages, projects, skills, and experiences. Types are shared between frontend and backend.
- `routes.ts` — Typed API route definitions with input/output schemas, used by both server route handlers and client fetch hooks.

### Key Design Decisions

1. **In-Memory Storage with Database-Ready Schema:** The app uses `MemStorage` for simplicity but has full Drizzle ORM schema definitions ready. When a PostgreSQL database is provisioned (via `DATABASE_URL`), switching to database storage requires implementing `IStorage` with the existing Drizzle `db` instance in `server/db.ts`.

2. **Typed API Contract:** The `shared/routes.ts` file defines API routes with their methods, paths, input schemas, and response schemas. Both the server handlers and client hooks reference these definitions, ensuring type safety across the stack.

3. **Static Content Strategy:** Project data, skills, and experience are hardcoded in the React page components rather than stored in a database. This is intentional for a portfolio site — the content rarely changes and doesn't need a CMS.

4. **Build Process:** Custom build script (`script/build.ts`) uses Vite for the client and esbuild for the server. The server is bundled as a single CJS file with select dependencies inlined to optimize cold start times.

### Database Schema

Currently one table defined (used for types even if not persisted to DB):

- **messages** — Contact form submissions with `id` (serial PK), `name` (text), `email` (text), `message` (text)

Run `npm run db:push` to sync the schema to PostgreSQL when `DATABASE_URL` is set.

### API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/messages` | Submit a contact form message |

### Project Structure
```
client/              # Frontend React application
  src/
    components/      # Reusable components (Navbar, Footer, etc.)
    components/ui/   # shadcn/ui component library
    hooks/           # Custom React hooks
    lib/             # Utilities (queryClient, cn helper)
    pages/           # Page components (Home, About, Skills, etc.)
server/              # Express backend
  index.ts           # Server entry point
  routes.ts          # API route handlers
  storage.ts         # Storage interface and MemStorage implementation
  db.ts              # Drizzle/PostgreSQL connection (ready but not actively used)
  vite.ts            # Vite dev server middleware
  static.ts          # Production static file serving
shared/              # Shared types and schemas
  schema.ts          # Drizzle table definitions + Zod schemas
  routes.ts          # Typed API route definitions
migrations/          # Drizzle migration output directory
```

## External Dependencies

- **PostgreSQL** — Database configured via `DATABASE_URL` environment variable. Required for `db:push` schema migrations. Currently optional at runtime since MemStorage is the default.
- **WhatsApp Integration** — Floating button links to `wa.me/2349160214824` for direct messaging (no API integration, just a link).
- **Google Fonts** — Inter, Poppins, DM Sans, Fira Code, Geist Mono, and Architects Daughter loaded via Google Fonts CDN.
- **Replit Plugins** — `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, and `@replit/vite-plugin-dev-banner` are used in development on Replit.