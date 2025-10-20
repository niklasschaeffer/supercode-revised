---
name: ${command-name}
description: ${command-description} Briefly describe the purpose of the command.
agents: ${agent-name}
---

# ${command-name}: $ARGUMENTS → $ARGUMENTS gets replaced by the command arguments.

${command-description} about what the command does.

## Context

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

