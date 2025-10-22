# shadcn MCP Server

**Purpose**: shadcn/ui component registry integration for modern UI development with design system consistency

## Triggers
- UI component discovery and search needs
- Design system integration and consistency enforcement
- Component library exploration and documentation lookup
- shadcn/ui registry access for modern React/Vue/Svelte components
- Need for production-ready, accessible UI components
- Component audit and verification after installation

## Tool Usage

### Primary Tools
- `shadcn_get_project_registries`: Retrieves configured registry names from components.json
- `shadcn_search_items_in_registries`: Fuzzy search across shadcn registries for component discovery
- `shadcn_view_items_in_registries`: Detailed component information including files and dependencies
- `shadcn_get_item_examples_from_registries`: Retrieves usage examples and demo implementations
- `shadcn_get_add_command_for_items`: Generates CLI commands for adding components to projects

### Secondary Tools
- `shadcn_list_items_in_registries`: Lists all available items in configured registries
- Component dependency analysis for understanding integration requirements
- Installation validation tools for verifying component setup
- Version compatibility checking for framework updates
- Design system audit utilities for consistency validation

## Accessibility
- Direct access to shadcn/ui component registries and official documentation
- Integration with local components.json configuration files
- Support for multiple registry configurations (@shadcn, @acme, custom registries)
- Real-time synchronization with latest component updates and examples
- Cross-framework compatibility for React, Vue, Svelte implementations

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
