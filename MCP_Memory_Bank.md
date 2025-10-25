# MCP_Memory_Bank MCP Server

**Purpose**: Remote memory bank management for AI assistants with multi-project support and structured file organization

## Triggers
- Need for project-based memory organization across AI sessions
- Multi-project memory bank management with proper isolation
- Structured documentation storage (projectbrief.md, productContext.md, etc.)
- Pre-flight validation and memory bank lifecycle management
- Custom AI instruction integration for memory-dependent workflows
- File-based memory persistence with JSON content handling

## Tool Usage

### Primary Tools
- `list_projects`: List all available projects in the memory bank root directory
- `memory_bank_read`: Read specific memory bank files for a given project and filename
- `memory_bank_write`: Create new memory bank files with structured content for projects
- `memory_bank_update`: Update existing memory bank files with new content and state changes

```
// Real usage example for listing projects:
list_projects() // Returns: ["project-alpha", "web-portal", "mobile-app"]

// Real usage example for reading memory:
memory_bank_read({
  projectName: "project-alpha",
  fileName: "projectbrief.md"
}) // Returns project requirements and goals

// Real usage example for writing memory:
memory_bank_write({
  projectName: "new-project",
  fileName: "activeContext.md",
  content: "Current focus: Implement authentication system\\n\\nKey decisions:\\n- Using JWT tokens\\n- Refresh token rotation"
})

// Real usage example for updating memory:
memory_bank_update({
  projectName: "project-alpha", 
  fileName: "progress.md",
  content: "## Implementation Status\\n\\n### Completed\\n- [x] Database schema\\n- [x] API endpoints\\n\\n### In Progress\\n- [ ] Frontend integration\\n- [ ] Testing suite"
})
```

### Secondary Tools
- `list_project_files`: List all files within a specific project directory for structure validation

```
// Real usage example for listing project files:
list_project_files({
  projectName: "project-alpha"
}) // Returns: ["projectbrief.md", "productContext.md", "systemPatterns.md", "techContext.md", "activeContext.md", "progress.md"]
```

## File Storage
- Stores memory banks in structured project directories under configurable `MEMORY_BANK_ROOT`
- Standardized file structure with core files: projectbrief.md, productContext.md, systemPatterns.md, techContext.md, activeContext.md, progress.md
- Custom file support for features/, api/, deployment/ subdirectories based on project needs
- Project isolation ensures each project has separate memory space with no cross-contamination
- JSON-compatible content storage with proper escaping for newlines and special characters

```
// Storage structure examples:
/.memory/
├── project-alpha/
│   ├── projectbrief.md      # Core requirements/goals
│   ├── productContext.md    # Problem context/solutions  
│   ├── systemPatterns.md    # Architecture/patterns
│   ├── techContext.md       # Tech stack/setup
│   ├── activeContext.md     # Current focus/decisions
│   ├── progress.md          # Status/roadmap
│   └── features/
│       └── auth-system.md   # Feature specifications
└── web-portal/
    ├── projectbrief.md
    ├── activeContext.md
    └── deployment/
        └── production-guide.md
```

## Accessibility
- Direct file system access with configurable root directory via `MEMORY_BANK_ROOT` environment variable
- Multi-client support (Claude Desktop, Claude Code, Cline, Roo Code, Cursor) with MCP protocol
- Path traversal prevention and security validation for project isolation
- Type-safe operations with proper error handling and validation
- Docker containerization support for consistent deployment environments
- Cross-platform compatibility (Windows, macOS, Linux) with proper path handling

## Choose When
- **For project-based memory**: When organizing memories by specific projects or clients
- **For structured documentation**: When following standardized memory bank file structure
- **For multi-project workflows**: When managing multiple concurrent projects with separate memory spaces
- **For memory-dependent AI**: When AI assistant requires persistent memory across sessions
- **Not for simple key-value storage**: Use this for structured project memory, not simple configuration

## Works Best With
- **Knowledge Graph**: Persistent memory for AI models through a local knowledge graph using entities, relations, and observations
- **Sequential**: Knowledge Graph maintains persistent context → Sequential analyzes architecture with memory
- **Desktop Commander**: Memory Bank manages memory files → Desktop Commander handles project file operations

## Examples
```
"list all my projects" → Memory Bank (list_projects shows available project directories)
"read projectbrief for web-portal" → Memory Bank (memory_bank_read retrieves core requirements)
"create new project mobile-app" → Memory Bank (memory_bank_write creates project structure with core files)
"update progress for project-alpha" → Memory Bank (memory_bank_update modifies implementation status)
"show files in mobile-app project" → Memory Bank (list_project_files reveals memory structure)
"setup memory bank for new client" → Memory Bank (creates isolated project directory with standard structure)
"document authentication decisions" → Memory Bank (memory_bank_write updates activeContext.md with current focus)
```
