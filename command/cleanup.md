---
name: cleanup
description: Systematically cleanup and refine memories and in-memoria data to compact context for longer development workflows
---

# /cleanup $ARGUMENTS

Systematically cleanup and refine memories and in-memoria data to compact context for longer development workflows.

## References
- [@FLAGS.md](../FLAGS.md)
- [@PRINCIPLES.md](../PRINCIPLES.md)
- [@RULES.md](../RULES.md)

## General Context
**Invoked Arguments [user_prompt]:** $ARGUMENTS
**Current Directory:** !`pwd`
**Current Folder:** !`basename $(pwd)`
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:**
!`git status --short | grep '^ M'`

## Workflow
- **Analysis Phase**: Assess current memory and in-memoria state, identify cleanup opportunities
- **Strategy Phase**: Determine cleanup approach based on flags and data quality assessment
- **Execution Phase**: Perform selective cleanup while preserving high-value context
- **Validation Phase**: Verify cleanup effectiveness and report optimization metrics

```
Example:
1. **Serena Memory Cleanup**:
   - `list_memories()` → Discover available project memories
   - `read_memory(candidate_memories)` → Assess content quality and relevance
   - `delete_memory(low_value_memories)` → Remove redundant or outdated content
   - `write_memory(consolidated_memories)` → Create consolidated high-value memories

2. **In-Memoria Optimization**:
   - `get_learning_status()` → Assess current intelligence database state
   - `get_semantic_insights()` → Identify low-confidence or redundant patterns
   - `contribute_insights()` → Consolidate and optimize learned patterns
   - `get_intelligence_metrics()` → Measure optimization effectiveness
```

## Examples
```
/cleanup --memories-only --dry-run
/cleanup --in-memoria-only --aggressive
/cleanup --preserve-recent 7
/cleanup --full --verbose
```
