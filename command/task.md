---
name: task
description: Task command for task management, project planning, and workflow organization
---

# /task $ARGUMENTS

Task command for task management, project planning, and workflow organization.

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
- Hierarchical task management with project planning and workflow organization
- Steps should be in following order: Analysis → Action → Finalization

```
Example:
1. **Analysis**:
   - `parse_task_command()` → Extract operation type and parameters
   - `analyze_project_scope()` → Understand current project state and goals
   - `retrieve_task_patterns()` → Load existing task structures and workflows
2. **Action**:
   - `create_task_hierarchy()` → Break down complex work into manageable subtasks
   - `assign_task_metadata()` → Generate IDs, priorities, and dependencies
   - `persist_task_structure()` → Store tasks in organized memory system
3. **Finalization**:
   - `display_task_dashboard()` → Show current task status and progress
   - `update_task_metrics()` → Track completion rates and time estimates
   - `validate_task_integrity()` → Ensure task structure consistency
```

## Examples
```
/task create "Implement user authentication system"
/task list --status active
/task update auth_001 --status in_progress
/task show auth_001 --subtasks
/task complete auth_001 --generate-report
```

## Boundaries

**Will:**
- Create hierarchical task breakdowns with clear dependencies
- Assign unique IDs and track task status and progress
- Persist task structures in organized memory systems
- Generate comprehensive task dashboards and reports
- Support task creation, updating, and completion workflows

**Will Not:**
- Execute tasks without explicit user request and confirmation
- Create unlimited task depth without proper organization
- Modify task structures without validation and integrity checks
- Assign tasks without understanding project context and capabilities
- Generate tasks that exceed project scope or resources
