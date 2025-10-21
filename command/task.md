---
name: task
description: Task management system for complex work decomposition and progress tracking
agent: task-manager
---

# /task $ARGUMENTS

Hierarchical task management system for breaking down complex work into trackable phases without coupling to specific execution agents.

# References
- [@Flags](../FLAGS.md) (Flags are optional and should be understood by the executing agent based on the Flags section)

## General Context
**Invoked Arguments [user_prompt]:** $ARGUMENTS
**Current Directory:** !`pwd`
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:**
!`git status --short | grep '^ M'`

## Workflow

1. **Analysis Phase**:
   - Parse operation (create/show/update/complete/list)
   - `grep/glob` → Project context, `read_memory()` → Existing patterns

2. **Decomposition Phase**:
   - Sequential MCP → Intelligent breakdown (2-3 levels)
   - Assign task IDs and dependencies

3. **Persistence Phase**:
   - `write_memory(task_[name]_[id])` → Serena persistence
   - `contribute_insights()` → In-Memoria pattern learning

4. **Display/Update Phase**:
   - Hierarchical view with status tracking
   - Progress metrics and management visibility

## Examples

**Create task:**
```
/task "Implement authentication system"
/task "Refactor API layer" --depth deep
```

**Operations:**
```
/task show auth_001              # Show specific task
/task update auth_001 in_progress  # Update status
/task complete auth_001.2         # Mark subtask complete
/task list --active               # List active tasks
```

**Output example:**
```
## Task: Auth System (auth_001)
### Phase 1: Backend
- [ ] 001.1 - JWT implementation
- [ ] 001.2 - User validation

Progress: Phase 1: 0% (0/2)
Saved to memory: task_auth_001
```
