# Abishek M H — Portfolio

A modern, responsive portfolio website showcasing 3+ years of experience building scalable SaaS platforms, REST APIs, and integrations with Laravel, PHP, and React.js.

## 🚀 Features

- **Full-Stack Developer Profile** — Experience in Laravel, React.js, PHP, and more
- **Responsive Design** — Optimized for desktop, tablet, and mobile devices
- **Modern Tech Stack** — Built with React, TypeScript, Tailwind CSS, and Framer Motion
- **Dark Theme** — Eye-friendly interface with cyan gradient accents
- **Contact Form** — Mailto-based contact functionality
- **Smooth Animations** — Framer Motion-powered interactions and transitions
- **SEO Optimized** — Proper meta tags and structured data
- **Fast & Performant** — Vite-based build for optimal performance

## 🛠️ Tech Stack

- **Frontend Framework** — React 19 + TypeScript
- **Routing** — TanStack Router
- **Styling** — Tailwind CSS v4 with Vite integration
- **Build Tool** — Vite 7
- **Animation** — Framer Motion
- **UI Components** — Radix UI primitives
- **Form Handling** — React Hook Form + Zod validation
- **State Management** — TanStack React Query
- **Deployment** — Cloudflare Workers (via wrangler)

## 📋 Requirements

- **Node.js** — 20.19.0 or higher
- **npm** — 10.x or higher

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd abishek-portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Building

```bash
# Build for production
npm run build

# Build in development mode
npm run build:dev

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── portfolio/          # Main portfolio sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Section.tsx
│   └── ui/                 # Reusable UI components (Radix + Shadcn)
├── routes/                 # TanStack Router pages
│   ├── __root.tsx         # Root layout
│   ├── index.tsx          # Home page
│   └── sitemap[.]xml.ts   # SEO sitemap
├── hooks/                  # React hooks
│   └── use-mobile.tsx     # Mobile breakpoint detection
├── lib/                    # Utilities
│   ├── utils.ts           # Helper functions
│   ├── error-page.ts
│   └── error-capture.ts
├── styles.css             # Global styles
└── start.ts               # Application entry point
```

## 🎨 Key Sections

### Hero
Animated landing section with call-to-action buttons and floating tech stack badges

### About
Professional summary with core competencies and skill highlights

### Experience
Timeline of professional roles with detailed responsibilities

### Projects
Showcase of key projects including Commercial Property Management Platform, HireSphere, and Ninja Bird

### Skills
Categorized skill matrix including Languages, Frontend, Backend, Database, Tools, and Practices

### Contact
Direct contact links and contact form with email validation

## 🔧 Configuration

### Environment Variables

Create a `.env` file if needed for production configuration:

```
VITE_API_URL=https://api.example.com
```

### Node Version

The project specifies Node 20.19.0+ in `.nvmrc`. Use nvm to switch versions:

```bash
nvm use
```

## 🐛 Troubleshooting

### ESM Loader Issue
If you encounter ESM loader errors, the `patch-package` script automatically applies a fix during installation.

### Mobile Issues
The site is fully responsive. Test using browser DevTools or on actual devices.

## 📝 Scripts

```bash
npm run dev         # Start dev server
npm run build       # Production build
npm run build:dev   # Development build
npm run preview     # Preview production build
npm run lint        # Run ESLint
npm run format      # Format code with Prettier
```

## 📱 Responsive Breakpoints

- **Mobile** — < 640px
- **Tablet** — 640px - 1024px
- **Desktop** — > 1024px

## 🌐 Deployment

The project is configured for deployment on **Cloudflare Workers** via Wrangler.

```bash
# Deploy to Cloudflare
wrangler deploy
```

## 📄 License

This project is personal portfolio. Feel free to use it as a template for your own portfolio.

Built with ❤️ using React, TypeScript, and Tailwind CSS
