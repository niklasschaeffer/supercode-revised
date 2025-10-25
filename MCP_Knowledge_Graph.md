# MCP_Knowledge_Graph MCP Server

**Purpose**: Persistent memory for AI models through a local knowledge graph using entities, relations, and observations

## Triggers
- Need for persistent memory across AI assistant conversations
- Storing and retrieving structured information about people, projects, and concepts
- Building knowledge graphs with relationships between entities
- Organizing memories by context (work, personal, health, etc.)
- Cross-session information retention with automatic database management
- Project-specific vs global memory storage requirements

## Tool Usage

### Primary Tools
- `aim_create_entities`: Add new entities (people, projects, events, concepts) with observations to the knowledge graph
- `aim_create_relations`: Create relationships between entities (active voice connections like "works at", "manages", "attends")
- `aim_read_graph`: Retrieve entire knowledge graph for comprehensive context overview
- `aim_search_nodes`: Find entities and information using keyword search across names, types, and observations

```
// Real usage example for creating entities:
aim_create_entities({
  entities: [{
    name: "Sarah_Chen",
    entityType: "person",
    observations: ["Senior developer at TechCorp", "Specializes in React and TypeScript", "Team lead for Project Alpha"]
  }]
})

// Real usage example for creating relations:
aim_create_relations({
  relations: [{
    from: "Sarah_Chen",
    to: "TechCorp",
    relationType: "works_at"
  }]
})
```

### Secondary Tools
- `aim_add_observations`: Add new facts and observations to existing entities
- `aim_open_nodes`: Retrieve specific entities by name for detailed information
- `aim_list_databases`: Show all available databases and current storage location
- `aim_delete_entities`: Remove entities and their associated relations from the knowledge graph

```
// Real usage example for adding observations:
aim_add_observations({
  observations: [{
    entityName: "Sarah_Chen",
    contents: ["Completed AWS certification in 2024", "Mentoring junior developers"]
  }]
})

// Real usage example for listing databases:
aim_list_databases() // Returns: {"project_databases": ["default"], "global_databases": ["default", "work", "personal"]}
```

## File Storage
- Stores knowledge graphs in JSONL format with `.memory` directory structure for organization
- Master database (`memory.jsonl`) serves as primary storage, always available by default
- Named databases (`memory-work.jsonl`, `memory-personal.jsonl`) for contextual organization
- Project-local storage in `.memory/` directories when detected, otherwise global configured directory
- Built-in safety system with `{"type":"_aim","source":"mcp-knowledge-graph"}` markers to prevent accidental overwrites

```
// Storage examples:
Global: /Users/username/.config/opencode/memory/memory.jsonl (master database)
Project: my-project/.memory/memory.jsonl (project-local master)
Context: /Users/username/.config/opencode/memory/memory-work.jsonl (work context)
```

## Accessibility
- Direct file system access for reading and writing JSONL knowledge graph files
- Automatic project detection using `.memory` directory presence for local vs global storage
- Multi-database support with context parameter for organizing different knowledge domains
- Safety validation system preventing writes to non-AIM files to protect data integrity
- Cross-platform compatibility supporting Windows, macOS, and Linux file systems

## Choose When
- **For persistent AI memory**: When you need information to persist across multiple conversations
- **For structured knowledge**: When organizing information as entities, relationships, and observations
- **For contextual organization**: When separating memories by domain (work, personal, health, projects)
- **For relationship tracking**: When connecting concepts and understanding relationships between entities
- **Not for simple key-value storage**: Use this for structured knowledge graphs, not simple configuration

## Works Best With
- **Memory Bank**: Knowledge Graph stores persistent entity information → Memory Bank handles project documentation
- **Desktop Commander**: Knowledge Graph provides memory storage → Desktop Commander handles file operations
- **Sequential**: Knowledge Graph maintains persistent context → Sequential analyzes architecture with structured knowledge

## Examples
```
"remember Sarah from TechCorp" → Knowledge Graph (creates person entity with company relation)
"what do I know about Project Alpha?" → Knowledge Graph (searches and retrieves project entity with observations)
"Sarah works at TechCorp" → Knowledge Graph (creates relation between existing entities)
"store this in work memory" → Knowledge Graph (uses context: "work" for database organization)
"show all my memories" → Knowledge Graph (reads entire graph or lists available databases)
"forget the old project info" → Knowledge Graph (deletes specific entities or observations)
"create project-local memory" → Knowledge Graph (detects .aim directory, stores locally)
```
