# shadcn MCP Server

**Purpose**: shadcn/ui component registry integration for modern UI development with design system consistency

## Triggers
- UI component discovery and search needs
- Design system integration and consistency enforcement
- Component library exploration and documentation lookup
- shadcn/ui registry access for modern React/Vue/Svelte components
- Need for production-ready, accessible UI components
- Component audit and verification after installation

## Choose When
- **For component discovery**: When you need to search and explore shadcn/ui registry
- **For component search**: Fuzzy search across shadcn/ui registries with examples
- **For design systems**: When building with shadcn/ui and need component consistency
- **Over manual docs**: Quick access to component details, examples, and CLI commands
- **Not for implementation**: Use after finding components, not for writing custom code

## Works Best With
- **Context7**: Context7 provides framework patterns → shadcn supplies component implementations
- **Sequential**: Sequential plans UI architecture → shadcn provides component building blocks
- **Playwright**: shadcn provides components → Playwright validates accessibility and behavior

## Examples
```
"search for button components" → shadcn (fuzzy search across registries with examples)
"show me accordion component details" → shadcn (view component info, files, dependencies)
"get add command for card component" → shadcn (generates CLI: npx shadcn@latest add card)
"find usage examples for tooltip" → shadcn (retrieves demo code with implementation)
"audit installed components" → shadcn (checklist for verifying component installation)
"implement custom form validation" → Native Claude (custom logic, not registry lookup)
```
