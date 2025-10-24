---
name: context
description: Unified context management for loading, saving, and optimizing project knowledge
---

# /context $ARGUMENTS

Unified command that consolidates /load and /save functionality for comprehensive context management with intelligent memory optimization and pattern consolidation.

## References
- [@PRINCIPLES.md](../PRINCIPLES.md)
- [@RULES.md](../RULES.md)
- [@AGENTS.md](../AGENTS.md)
- [@FLAGS.md](../FLAGS.md)
- [@DOCUMENTATION_STANDARDS.md](../DOCUMENTATION_STANDARDS.md)

## General Context
**Invoked Arguments [user_prompt]:** $ARGUMENTS
**Current Directory:** !`pwd`
**Current Folder:** !`basename $(pwd)`
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:**
!`git status --short | grep '^ M'`

## Behavior

Intelligent context management with automatic mode detection and dual MCP integration:

**Mode Detection**: Auto-detect load vs save operation based on context and flags
**Memory Optimization**: Enforce 2-3 session limits with intelligent rotation
**Pattern Consolidation**: Prevent duplication and merge similar patterns
**Dual MCP Integration**: Serena memories + In-Memoria intelligence

## Mode Selection

### Load Mode (Default)
**Trigger**: `--type load` or auto-detection when no save-specific flags
**Behavior**: Load optimized project context from memories and patterns
**Use Cases**: Session restoration, project context loading, pattern retrieval

### Save Mode
**Trigger**: `--type save` or save-specific flags
**Behavior**: Persist session context with memory management and optimization
**Use Cases**: Session checkpointing, pattern consolidation, context persistence

### Optimize Mode
**Trigger**: `--type optimize` or optimization-specific flags
**Behavior**: Context optimization without loading or saving
**Use Cases**: Memory cleanup, pattern consolidation, session rotation

## Return Format

```markdown
## Context Management Complete

### Operation Summary
- **Type**: [load|save|optimize] | **Mode**: [auto-detected|explicit]
- **Sessions**: [N] active sessions (≤3 limit enforced)
- **Patterns**: [N] patterns consolidated/loaded

### Memory Status
- **Serena Memories**: [Optimized 2-3 session structure]
- **In-Memoria Intelligence**: [Learning status and patterns]
- **Optimization**: [Memory efficiency achieved]

### Results
[Detailed results based on operation type]

### Next Steps
[Recommended follow-up actions]
```

## Workflow

**Load Mode Workflow**:
1. **Discovery**: Identify optimized memory structure and patterns
2. **Loading**: Retrieve 2-3 active sessions + consolidated patterns
3. **Intelligence**: Load In-Memoria developer profile and recommendations
4. **Synthesis**: Combine memories and patterns for immediate use

**Save Mode Workflow**:
1. **Analysis**: Inventory sessions and check for pattern duplication
2. **Management**: Enforce 2-3 session limit with intelligent rotation
3. **Consolidation**: Merge patterns and prevent duplicates
4. **Persistence**: Save optimized context with dual MCP integration

**Optimize Mode Workflow**:
1. **Inventory**: Analyze current memory state and patterns
2. **Consolidation**: Merge duplicate patterns and optimize structure
3. **Rotation**: Archive old sessions and preserve critical content
4. **Validation**: Ensure constraints and report optimization

## Tool Requirements

**Primary Tools**:
- **Task Tool**: Invoke logging agent for context operations
- **Read/Write**: File operations for context management

**MCP Integration**:
- **Serena MCP**: Memory operations (list, read, write, delete memories)
- **In-Memoria MCP**: Pattern intelligence and developer profiles

## Examples

### Load Examples
```bash
/context
# Load mode: Retrieves optimized context from 2-3 sessions + patterns

/context --type load --refresh
# Force refresh: Re-learn and reload optimized memory structure

/context --load --memory-only
# Memory-only load: Only Serena memories, skip In-Memoria

/context --load --patterns-only
# Patterns-only load: Only In-Memoria patterns, skip memories
```

### Save Examples
```bash
/context --type save
# Save mode: Persist session with memory management

/context --save --checkpoint
# Checkpoint save: Detailed analysis and validation

/context --save --decision "Chose React for TypeScript"
# Decision save: Record architectural decision with deduplication

/context --save --patterns
# Pattern save: Focus on pattern consolidation and updates
```

### Optimize Examples
```bash
/context --type optimize
# Optimize mode: Memory cleanup and consolidation

/context --optimize --rotate
# Force rotation: Archive old sessions, enforce limits

/context --optimize --consolidate
# Pattern consolidation: Merge duplicates, optimize structure
```

### Advanced Examples
```bash
/context --load --uc
# Ultra-compressed load for maximum token efficiency

/context --save --rotate --consolidate
# Comprehensive save with rotation and consolidation

/context --optimize --validate
# Optimization with constraint validation and reporting
```

## Flag Reference

### Mode Selection
- `--type [load|save|optimize]`: Explicit mode selection
- `--auto-detect`: Enable automatic mode detection (default)

### Load Flags
- `--refresh`: Force re-learning and reload
- `--memory-only`: Load only Serena memories
- `--patterns-only`: Load only In-Memoria patterns
- `--uc`: Ultra-compressed mode for token efficiency

### Save Flags
- `--checkpoint`: Detailed analysis and validation
- `--decision [text]`: Save architectural decision with deduplication
- `--patterns`: Focus on pattern management
- `--rotate`: Force session rotation

### Optimize Flags
- `--consolidate`: Focus on pattern consolidation
- `--rotate`: Force session rotation
- `--validate`: Validate constraints and report
- `--cleanup`: Comprehensive memory cleanup

### Common Flags
- `--verbose`: Detailed operation output
- `--dry-run`: Preview changes without execution
- `--force`: Override safety checks

## Migration Guide

### From /load
```bash
# Old command:
/load
/load --refresh
/load --memory-only

# New equivalents:
/context
/context --load --refresh
/context --load --memory-only
```

### From /save
```bash
# Old command:
/save
/save --checkpoint
/save --decision "Chose React"

# New equivalents:
/context --type save
/context --save --checkpoint
/context --save --decision "Chose React"
```

## Memory Management Constraints

**Session Limits**: Maximum 2-3 active sessions with intelligent rotation
**Pattern Deduplication**: Prevent duplicate patterns, merge similar ones
**Memory Optimization**: Consolidate first, preserve critical content
**Constraint Validation**: Ensure all limits satisfied after operations

## Integration

Replaces /load and /save with unified context management while maintaining all memory optimization and pattern consolidation capabilities. Provides consistent interface for context operations with intelligent mode detection.

**Command Count Reduction**: 2 commands → 1 command (50% reduction)
**Functionality Preserved**: 100% of load/save capabilities maintained
**Enhanced Features**: Cross-mode functionality and improved optimization