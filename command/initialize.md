---
name: initialize
description: Initialize deep codebase understanding using Memory Bank, Knowledge Graph, and Context7 for persistent project intelligence
agent: orchestrator
---

# /initialize $ARGUMENTS

Initialize deep codebase understanding using Memory Bank, Knowledge Graph, and Context7 for persistent project intelligence.

## Important File References
- [@RULES.md](../RULES.md)
- [@PRINCIPLES.md](../PRINCIPLES.md)
- [@AGENTS.md](../AGENTS.md)
- [@Flags](../FLAGS.md)

## General Context

- User Prompt: 
`$ARGUMENTS`
- Current Directory: 
`!pwd`
- Current Folder: 
`!basename $(pwd)`
- Git Branch: 
`!git rev-parse --abbrev-ref HEAD`
- Git Status: 
`!git status --short | grep ^ M`

## Workflow
- Establish deep codebase understanding through dual memory architecture and framework documentation
- Steps should be in following order: Analysis → Action → Finalization

```
Example:
1. **Analysis**:
   - `analyze_codebase_structure()` → Scan project files, dependencies, and architecture
   - `extract_project_intelligence()` → Identify patterns, frameworks, and key components
   - `query_memory_bank()` → Retrieve existing project memories and context
   - `search_knowledge_graph()` → Find related entities and historical patterns
   - `fetch_framework_documentation()` → Get Context7 documentation for identified frameworks
2. **Action**:
   - `create_knowledge_entities()` → Build entity graph of components, modules, and relationships
   - `establish_memory_bank_structure()` → Create project memories and structured documentation
   - `map_architectural_patterns()` → Document design patterns and architectural decisions
   - `integrate_framework_insights()` → Apply Context7 best practices and conventions
3. **Finalization**:
   - `validate_memory_integration()` → Verify all systems connected and accessible
   - `generate_intelligence_report()` → Document established understanding and insights
   - `create_persistent_connections()` → Ensure cross-session knowledge retention
```

## Examples
```
/initialize --deep-analysis --framework react
/initialize --existing-project --memory-bank-project web-portal
/initialize --framework-nextjs --typescript --knowledge-graph-context
/initialize --legacy-migration --extract-patterns
/initialize --multi-project --shared-knowledge
/initialize --force-relearn --rebuild-entities
```

## Boundaries

**Will:**
- Establish deep codebase understanding through Memory Bank and Knowledge Graph integration
- Create persistent entity relationships for components, modules, and architectural patterns
- Store project context and intelligence across sessions using dual memory architecture
- Retrieve and apply framework-specific best practices using Context7 documentation
- Map existing codebase structure and extract meaningful patterns and relationships
- Validate memory system integration and ensure cross-session knowledge retention

### MCP Integration Examples
```
Memory Bank Integration:
memory_bank_list_projects() // Discover existing projects
memory_bank_read({
  projectName: "current-project",
  fileName: "projectbrief.md"
}) // Load project requirements and goals
memory_bank_write({
  projectName: "current-project", 
  fileName: "architecture.md",
  content: "Extracted architectural patterns and decisions"
}) // Store architectural insights

Knowledge Graph Integration:
aim_search_nodes({
  query: "component modules patterns"
}) // Find related entities
aim_create_entities({
  entities: [{
    name: "UserAuthenticationModule",
    entityType: "component",
    observations: ["Handles JWT tokens", "Uses bcrypt for passwords", "Connected to UserService"]
  }]
}) // Create component entities
aim_create_relations({
  relations: [{
    from: "UserAuthenticationModule",
    to: "UserService", 
    relationType: "depends_on"
  }]
}) // Map component relationships

Context7 Integration:
context7_resolve_library_id({
  libraryName: "react"
}) // Get framework documentation
context7_get_library_docs({
  context7CompatibleLibraryID: "/react/react",
  topic: "hooks patterns"
}) // Retrieve best practices
```

**Will Not:**
- Initialize projects without analyzing existing codebase structure and dependencies
- Override existing memory bank entries without explicit confirmation
- Create knowledge entities that conflict with established project architecture
- Skip deep analysis phases for faster initialization without --force-relearn flag
- Modify memory systems without proper validation and backup procedures
- Break existing entity relationships without understanding current knowledge graph structure
