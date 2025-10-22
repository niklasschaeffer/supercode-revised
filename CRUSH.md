# SuperCode Development Guide

## Commands (landingpage directory)
- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run type-check` - TypeScript type checking
- `npm run preview` - Preview production build

## Code Style

### TypeScript/React
- Use TypeScript with strict mode enabled
- React functional components with hooks
- Path aliases: `@/components/*`, `@/utils/*`, etc.
- No unused locals/parameters (TSConfig enforced)

### Imports
- Group imports: external libs, then internal modules
- Use absolute imports with `@/` prefix
- Default imports for React components

### Markdown Files
- Agents: lowercase-with-hyphens.md
- Commands: lowercase.md  
- MCP docs: PascalCase with MCP_ prefix
- Templates: lowercase.template.md
- Max 100 lines for agent/command/MCP files

### File Structure
- Agents in `agent/` directory
- Commands in `command/` directory
- MCP docs in root directory
- Templates in `templates/` directory

### Error Handling
- Use try-catch blocks for async operations
- Provide meaningful error messages
- Log errors appropriately

### Naming Conventions
- Components: PascalCase
- Functions/variables: camelCase
- Constants: UPPER_SNAKE_CASE
- Files: kebab-case (except TypeScript files)