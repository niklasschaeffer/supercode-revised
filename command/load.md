---
name: load
description: Load project context from Serena memories and In-Memoria pattern intelligence
---

# /load $ARGUMENTS

Load comprehensive project context by combining Serena's persistent memories with In-Memoria's learned patterns and architectural intelligence.

## References
- [@FLAGS.md](../FLAGS.md)

## General Context
**Invoked Arguments (can be empty, can have flags, can have prompt):** $ARGUMENTS
**Current Directory:** !`pwd`
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:** 
!`git status --short | grep '^ M'`

## Behavior

This command orchestrates project context loading through two primary MCP servers:

### Serena Integration
1. **Activate the project**: Use `activte_project` with !`pwd`
2. **List Available Memories**: Use `list_memories` to discover stored project context
3. **Load Key Memories**: Read relevant memories (project_overview, architectural_decisions, coding_standards, etc.)
4. **Extract Persistent Context**: Retrieve cross-session knowledge and decisions

### In-Memoria Integration
1. **Check Learning Status**: Use `get_learning_status` to verify project intelligence exists
2. **Auto-Learn If Needed**: Trigger `auto_learn_if_needed` for first-time projects
3. **Load Developer Profile**: Get coding preferences, naming conventions, architectural choices
4. **Pattern Recommendations**: Retrieve pattern intelligence for the current project context

## Return Format

The command returns structured context to the invoking orchestration agent:

```markdown
## Project Context (Loaded)

### Serena Memories
- **Memory Name**: Summary of content
- **Available Memories**: [list of discovered memory files]

### In-Memoria Intelligence
- **Learning Status**: Complete/Partial/Not Started
- **Developer Profile**: Coding preferences and patterns
- **Pattern Recommendations**: Architectural and style patterns
- **Project Complexity**: Metrics and analysis

### Quick Facts
- **Primary Languages**: [detected languages]
- **Architecture Pattern**: [learned patterns]
- **Naming Convention**: [learned conventions]
- **Recent Decisions**: [from memories]
```

## Workflow

1. **Serena Phase**:
   - `list_memories()` → Discover available project memories
   - `read_memory(key_memories)` → Load essential context
   - Extract architectural decisions, patterns, constraints

2. **In-Memoria Phase**:
   - `get_learning_status()` → Check if project is analyzed
   - `auto_learn_if_needed()` → Trigger learning for new projects
   - `get_developer_profile()` → Load coding preferences
   - `get_pattern_recommendations()` → Get contextual patterns

3. **Synthesis**:
   - Combine memory-based context with learned patterns
   - Structure for immediate consumption
    - Return to orchestration agent

## Tool Requirements

**Serena**: list_memories, read_memory
**In-Memoria**: get_learning_status, auto_learn_if_needed, get_developer_profile, get_pattern_recommendations

## Examples

```
/load
# Loads all available project context from Serena + In-Memoria

/load --refresh
# Forces re-learning of In-Memoria patterns and reloads memories

/load --memory-only
# Only loads Serena memories, skips In-Memoria analysis

/load --patterns-only
# Only loads In-Memoria patterns, skips Serena memories
```

## Integration

Invoked by the **orchestration** agent during initial context gathering. Returned context is provided to context-refinement agent for optimization when needed. Pairs with **/save** for complete session lifecycle: dual MCP READ operations (load) complement dual MCP WRITE operations (save) for comprehensive knowledge management.
