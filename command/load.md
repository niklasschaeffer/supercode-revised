---
name: load
description: Load command for context loading, memory retrieval, and project state restoration
---

# /load $ARGUMENTS

Load command for context loading, memory retrieval, and project state restoration.

## Important File References
- [@RULES.md](../RULES.md)
- [@PRINCIPLES.md](../PRINCIPLES.md)
- [@AGENTS.md](../AGENTS.md)
- [@Flags](../FLAGS.md)

## General Context

- User Prompt: 
`${ARGUMENTS}`
- Current Directory: 
`!pwd`
- Current Folder: 
`!basename $(pwd)`
- Git Branch: 
`!git rev-parse --abbrev-ref HEAD`
- Git Status: 
`!git status --short | grep ^ M`

## Workflow
- Context loading and memory retrieval for project state restoration
- Steps should be in following order: Analysis → Action → Finalization

```
Example:
1. **Analysis**:
   - `identify_available_contexts()` → Discover memories, patterns, and intelligence data
   - `assess_context_relevance()` → Filter by recency and project relevance
   - `validate_context_integrity()` → Check for corruption or incomplete data
2. **Action**:
   - `load_project_memories()` → Retrieve architectural decisions and patterns
   - `restore_development_context()` → Load active sessions and work state
   - `initialize_intelligence_systems()` → Activate learned patterns and insights
3. **Finalization**:
   - `synthesize_unified_context()` → Combine memories with current state
   - `validate_context_completeness()` → Ensure all critical information loaded
   - `optimize_context_structure()` → Organize for efficient agent access
```

## Examples
```
/load --recent-sessions 3
/load --project-context --full
/load --patterns-only --refresh
/load --memory-type architectural-decisions
/load --auto-learn --verbose
```

## Boundaries

**Will:**
- Load relevant project memories and architectural decisions
- Restore development context from previous sessions
- Retrieve learned patterns and intelligence data
- Synthesize unified context for agent operations
- Validate context integrity and completeness

**Will Not:**
- Load corrupted or incomplete context data without validation
- Override current project state without explicit instruction
- Access memories outside project scope without permission
- Load excessive context that impacts performance
- Modify existing memories during loading process