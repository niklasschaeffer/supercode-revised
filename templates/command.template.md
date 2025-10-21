---
name: ${command-name}
description: ${command-description} Briefly describe the purpose of the command.
agent: ${agent-name} # Generation comment: Optional, only include if explicitly required by agent/user.
---

# /${command-name} $ARGUMENTS

${command-description} about what the command does.

# References
- [@Flags](../FLAGS.md)

## General Context
**Invoked Arguments [user_prompt]:** $ARGUMENTS
**Current Directory:** !`pwd`
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:**
!`git status --short | grep '^ M'`

## Workflow
- 4 Steps describing the command's workflow.

```
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

