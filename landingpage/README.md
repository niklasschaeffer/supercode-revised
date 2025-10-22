# SuperCode Landing Page

A stunning, modern landing page for the SuperCode framework with scrolling animations, built with React, TypeScript, TailwindCSS, and Shadcn/ui components.

## 🚀 Features

- **🎨 Modern Design**: Clean, professional UI with gradient backgrounds and smooth animations
- **📱 Responsive**: Mobile-first responsive design that works on all devices  
- **✨ Scroll Animations**: Intersection Observer-based scroll-triggered animations
- **🎯 Component-Based**: Reusable components built with Shadcn/ui
- **🌙 Dark Mode**: Full dark mode support with system preference detection
- **⚡ Performance**: Optimized build with Vite and code splitting
- **🔧 TypeScript**: Full type safety and IntelliSense support
- **🤖 AI-Powered**: Showcases 14 specialized agents and 11 MCP integrations

## 📁 Project Structure

```
landingpage/
├── src/
│   ├── components/          # React components
│   │   └── ui/             # Shadcn UI components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Helper utilities
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Application entry point
│   └── index.html          # HTML template
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development debugging
- `npm run build:analyze` - Build with bundle analysis
- `npm run preview` - Preview production build
- `npm run preview:build` - Build and preview in one command
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build output

## 🏗️ Build Configuration

### Production Build

The project is configured to build to the `../docs` directory for GitHub Pages deployment:

- **Output Directory**: `../docs`
- **Base Path**: `/supercode-revised/`
- **Asset Optimization**: Code splitting, minification, and compression
- **Source Maps**: Enabled for debugging
- **Console Removal**: Console statements removed in production

### Environment Variables

Copy `.env.example` to `.env.local` and configure as needed:

```bash
cp .env.example .env.local
```

Key environment variables:
- `VITE_BASE_URL` - Base URL for deployment
- `VITE_APP_TITLE` - Application title
- `VITE_APP_DESCRIPTION` - Application description
- `VITE_ENABLE_ANALYTICS` - Enable analytics tracking

## 🚀 Deployment

### GitHub Pages

The project is pre-configured for GitHub Pages deployment:

1. Build the project:
   ```bash
   npm run build
   ```

2. The build output will be in the `../docs` directory
3. Configure GitHub Pages to serve from the `docs` folder
4. Set the base path to `/supercode-revised/`

### Manual Deployment

For manual deployment to any static hosting:

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `../docs` directory to your hosting provider

## 🎨 Customization

### Styling

- **TailwindCSS**: Configure in `tailwind.config.js`
- **Components**: Modify components in `src/components/`
- **Theme**: Update CSS variables in `src/index.css`

### Adding New Components

1. Create component in `src/components/`
2. Follow the existing patterns and TypeScript conventions
3. Export from appropriate index files

### Build Optimization

- **Code Splitting**: Automatically configured for vendor libraries
- **Tree Shaking**: Enabled for unused code elimination
- **Compression**: Terser minification with console removal
- **Bundle Analysis**: Use `npm run build:analyze` to analyze bundle size

## 🔧 Configuration

### Vite Configuration

Key configurations in `vite.config.ts`:
- Base path for deployment
- Build output directory
- Code splitting strategy
- Development server settings
- Production optimizations

### TypeScript

Strict TypeScript configuration with:
- Strict type checking
- Path aliases (`@/` for `src/`)
- React component type definitions

## 📱 Responsive Breakpoints

- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px

## 🧩 Adding Components

This project uses Shadcn/ui for components. To add new components:

```bash
npx shadcn-ui@latest add [component-name]
```

Available components include: Button, Card, Input, Badge, Dialog, Dropdown Menu, and many more.

## 📝 License

This project is part of the SuperCode framework. See the main project license for details.