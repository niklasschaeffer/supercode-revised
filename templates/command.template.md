---
name: ${command-name}
description: ${command-description} Briefly describe the purpose of the command.
agents: ${agent-name}
---

# /${command-name} $ARGUMENTS

${command-description} about what the command does.

# References
- [@Flags](../FLAGS.md) (Flags are optional and should be understood by the executing agent based on the Flags section)

## General Context
**Arguments:** $ARGUMENTS
**Git Branch:**: !`git rev-parse --abbrev-ref HEAD`
**Git Status:**: !`git status`
**Current Directory:**: !`pwd`

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

