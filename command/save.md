---
name: save
description: Persist session context with intelligent memory management (2-3 session limit, pattern deduplication, dual MCP integration)
---

# /save $ARGUMENTS

Save session context with intelligent memory management that enforces 2-3 session memory limits, prevents pattern duplication, and maintains optimal context density through dual MCP integration.

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

## Memory Management Constraints

**Session Memory Limits**: Max 2-3 active sessions, auto-rotate older, preserve critical content
**Pattern Deduplication**: Check `patterns_discovered_consolidated`, prevent duplicates, merge similar patterns
**Memory Optimization**: Consolidate first, preserve decisions, efficient rotation, validate constraints

## Behavior

Intelligent session persistence through dual MCP integration:

### Phase 1: Analysis & Management
1. **Memory Inventory**: Count sessions, identify rotation candidates
2. **Pattern Deduplication**: Search `patterns_discovered_consolidated` for existing patterns
3. **Session Rotation**: Archive older sessions if > 2-3 exist (keep most recent)
4. **Pattern Consolidation**: Update existing patterns vs creating duplicates

### Phase 2: Enhanced Persistence
1. **Serena Integration**: Smart memory creation only when new value provided
2. **In-Memoria Integration**: Pattern deduplication before contributing insights
3. **Context Preparation**: Optimized next session context
4. **Validation**: Ensure constraints satisfied, report optimization
## Return Format

```markdown
## Session Saved with Memory Management

### Memory Optimization
- Session Memories: [X] → [Y] (enforced 2-3 limit)
- Patterns Deduplicated: [N] duplicates prevented
- Context Density: Optimized for maximum retention
- Archives Created: [N] older sessions archived

### Serena Memories
- Active Sessions: [list of 2-3 current sessions]
- Architectural Decisions: Updated/Consolidated
- Pattern Consolidation: [N] patterns merged/updated
- Next Session Context: Optimized for continuity

### In-Memoria Intelligence
- New Insights: [N] unique contributions
- Updated Patterns: [N] existing insights enhanced
- Duplicate Prevention: [N] duplicates avoided
- Intelligence Evolution: Cumulative learning progress

### Session Summary
Files: [N], Features: [list], Decisions: [list]
Memory Efficiency: [percentage] optimization achieved

### Next Session
Use /load to restore optimized context. Focus: [prioritized points]. Memory State: [constraints satisfied].
```

## Enhanced Workflow

### Phase 1: Analysis & Planning
1. **Agent Invocation**: Invoke logging agent via Task tool with memory constraints
2. **Pre-Save Analysis**: `list_memories()` → inventory, `read_memory(patterns_discovered_consolidated)` → pattern check

### Phase 2: Memory Management
3. **Session Rotation**: Identify oldest beyond 2-3 limit, archive critical content, delete excess
4. **Pattern Consolidation**: Compare with consolidated patterns, merge similar, prevent duplicates

### Phase 3: Intelligent Persistence
5. **Serena**: `write_memory()` only if new value, `update_memory(patterns_discovered_consolidated)` → merge
6. **In-Memoria**: Pattern deduplication before `contribute_insights()`, unique contributions only

### Phase 4: Validation
7. **Constraints**: Verify ≤3 sessions, no duplicates, critical context preserved
8. **Reporting**: Memory optimization metrics, deduplication stats, readiness confirmation

## Tool Requirements

**Task**: Invoke logging agent with memory management constraints
**Logging Agent**: Enhanced Serena + In-Memoria operations with inventory, deduplication, rotation, validation
**Memory Tools**: `list_memories()`, `read_memory()`, `write_memory()`, `update_memory()`, `delete_memory()`

## Examples

```
/save
# Intelligent save: checks ≤3 sessions, deduplicates patterns, rotates if needed

/save --checkpoint
# Detailed analysis: pre-save inventory, consolidation planning, validation

/save --decision "Chose React for TypeScript"
# Decision with deduplication: checks existing, consolidates, prevents duplicates

/save --patterns
# Pattern management: checks consolidated, merges, updates, reports evolution

/save --rotate
# Force rotation: archives oldest, preserves critical, enforces limits
```

## Memory Management Integration

**Standard Flow**: `/load` (READ optimized) → work → `/save` (WRITE with constraints)

**Management Flow**: Load (2-3 sessions) → Work (pattern awareness) → Save (constraints) → Rotate → Consolidate → Validate

**Constraints**: ≤3 sessions, zero duplicates, maximum retention, optimized density

**Benefits**: Sustainable development, high-density context, efficient operations, seamless transitions
