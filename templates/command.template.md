---
name: ${command-name}
description: ${command-description} Briefly describe the purpose of the command.
---

# /${command-name} $ARGUMENTS

${command-description} <!-- short description about what the commands purpose. -->

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

## Workflow <!-- x = 3 -->
- List Descriptions of the commands workflow. <!-- replace with real workflow -->
- Steps should be in following order: Analysis → Action → Finalization <!-- requirement -->

```
<!-- Replace with real examples -->
Example:
1. **Analysis**:
   - `list_memories()` → Discover available project memories
   - `read_memory(key_memories)` → Load essential context
   - Extract architectural decisions, patterns, constraints
2. **Action**:
   - `perform_[command-specific-action]()` → Execute main command functionality
   - Utilize gathered context to inform actions
   - Handle edge cases and errors gracefully
3. **Finalization**:
   - `validate_[command-specific-results]()` → Ensure correctness and completeness
   - `log_command_execution()` → Record command usage for auditing
```

## Examples <!-- 3 < x < 5 -->
```
/${command-name} $ARGUMENTS
```

## Boundaries

**Will:** <!-- 3 < x < 5 -->
- List Descriptions what the command will do.

**Will Not:** <!-- 3 < x < 5 -->
- List Descriptions what the command will not do.
