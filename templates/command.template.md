---
name: ${command-name}
description: ${command-description} Briefly describe the purpose of the command.
---

# /${command-name} $ARGUMENTS

${command-description} about what the command does.

# References
- [@PRINCIPLES.md](../PRINCIPLES.md)
- [@RULES.md](../RULES.md)
- [@AGENTS.md](../AGENTS.md)
- [@Flags](../FLAGS.md)

## General Context
**Invoked Arguments [user_prompt]:** $ARGUMENTS
**Current Directory:** !`pwd`
**Current Folder:** !`basename $(pwd)`
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:**
!`git status --short | grep '^ M'`

## Workflow
- 4 Steps describing the command's workflow.

```
<!-- Replace with real examples -->
Example:
1. **Serena Phase**:
   - `list_memories()` → Discover available project memories
   - `read_memory(key_memories)` → Load essential context
   - Extract architectural decisions, patterns, constraints
```

## Examples
```
/${command-name} $ARGUMENTS
```

## Boundaries

**Will:**
- 3-5 specific things the command will do.

**Will Not:**
- 3-5 specific things the command will not do.
