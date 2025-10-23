---
name: load
description: Load optimized project context from Serena memories (2-3 session structure) and In-Memoria pattern intelligence
---

# /load $ARGUMENTS

Load comprehensive project context by combining Serena's optimized persistent memories (2-3 session structure, consolidated patterns) with In-Memoria's learned patterns and architectural intelligence.

## References
- [@FLAGS.md](../FLAGS.md)

## General Context
**Invoked Arguments [user_prompt]:** $ARGUMENTS
**Current Directory:** !`pwd`
**Current Folder:** !`basename $(pwd)`
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:**
!`git status --short | grep '^ M'`

## Behavior

Orchestrates project context loading through dual MCP integration with memory structure awareness:

### Serena Integration (Memory-Aware)
1. **Activate Project**: `activate_project` with !`basename $(pwd)`
2. **Memory Discovery**: `list_memories` → identify 2-3 session structure, consolidated patterns
3. **Load Optimized Memories**: Read active sessions (≤3), `patterns_discovered_consolidated`, architectural decisions
4. **Extract Context**: Retrieve cross-session knowledge, pattern evolution, session continuity

### In-Memoria Integration
1. **Learning Status**: `get_learning_status` → verify project intelligence exists
2. **Auto-Learn**: `auto_learn_if_needed` for first-time projects
3. **Developer Profile**: Load coding preferences, naming conventions, architectural choices
4. **Pattern Intelligence**: Retrieve contextual patterns, recommendations, complexity metrics

## Return Format

```markdown
## Project Context (Loaded)

### Serena Memories (Optimized)
- **Active Sessions**: [2-3 current sessions with continuity]
- **Consolidated Patterns**: patterns_discovered_consolidated status
- **Architectural Decisions**: Current decisions and evolution
- **Memory Structure**: Optimized 2-3 session organization

### In-Memoria Intelligence
- **Learning Status**: Complete/Partial/Not Started
- **Developer Profile**: Coding preferences and patterns
- **Pattern Recommendations**: Contextual architectural patterns
- **Project Complexity**: Metrics and analysis

### Quick Facts
- **Primary Languages**: [detected languages]
- **Architecture Pattern**: [learned patterns]
- **Naming Convention**: [learned conventions]
- **Recent Decisions**: [from optimized memories]
```

## Workflow

1. **Serena Phase (Memory-Aware)**:
   - `list_memories()` → Discover 2-3 session structure, consolidated patterns
   - `read_memory(active_sessions)` → Load current session contexts
   - `read_memory(patterns_discovered_consolidated)` → Load deduplicated patterns
   - Extract architectural decisions, session continuity

2. **In-Memoria Phase**:
   - `get_learning_status()` → Check project analysis status
   - `auto_learn_if_needed()` → Trigger learning for new projects
   - `get_developer_profile()` → Load coding preferences
   - `get_pattern_recommendations()` → Get contextual patterns

3. **Synthesis**:
   - Combine optimized memory structure with learned patterns
   - Structure for immediate consumption
   - Return to orchestration agent

## Tool Requirements

**Serena**: list_memories, read_memory (memory structure aware)
**In-Memoria**: get_learning_status, auto_learn_if_needed, get_developer_profile, get_pattern_recommendations

## Examples

```
/load
# Loads optimized context: 2-3 sessions + consolidated patterns + In-Memoria intelligence

/load --refresh
# Forces re-learning and reloads optimized memory structure

/load --memory-only
# Only loads Serena memories (2-3 session structure, consolidated patterns)

/load --patterns-only
# Only loads In-Memoria patterns, skips Serena memories

/load --uc
# Ultra compressed load for maximum token efficiency
```

## Integration

Invoked by **orchestrator** during context gathering. Returned context provided to context-refinement for optimization. Pairs with **/save** for complete session lifecycle: dual MCP READ (load with memory structure awareness) complements dual MCP WRITE (save with constraints) for comprehensive knowledge management. Handles optimized memory structure from enhanced /save operations.
