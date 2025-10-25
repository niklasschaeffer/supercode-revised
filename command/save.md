---
name: save
description: Save command for state persistence, context storage, and memory management
---

# /save $ARGUMENTS

Save command for state persistence, context storage, and memory management.

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
- Context persistence and memory management with intelligent organization
- Steps should be in following order: Analysis → Action → Finalization

```
Example:
1. **Analysis**:
   - `assess_current_context()` → Evaluate session state and work progress
   - `identify_persistable_data()` → Select important decisions and patterns
   - `validate_memory_constraints()` → Check storage limits and organization
2. **Action**:
   - `create_session_memory()` → Store current context and decisions made
   - `organize_patterns_and_insights()` → Structure learned information for retrieval
   - `update_project_state()` → Save current work state and progress markers
3. **Finalization**:
   - `validate_save_integrity()` → Ensure data properly stored and accessible
   - `optimize_memory_structure()` → Compress and organize for efficient loading
   - `generate_save_summary()` → Document what was saved and storage metrics
```

## Examples
```
/save --session checkpoint
/save --context architectural-decisions
/save --patterns --compress
/save --full-state --verbose
/save --checkpoint-name "feature-complete"
```

## Boundaries

**Will:**
- Persist current session context and work progress
- Store architectural decisions and development patterns
- Organize memories for efficient retrieval and loading
- Compress and optimize storage to maintain performance
- Generate comprehensive save reports and summaries

**Will Not:**
- Save incomplete or corrupted context data
- Exceed storage limits without proper optimization
- Modify existing memories without explicit instruction
- Store sensitive information without proper security measures
- Override critical project state without validation
