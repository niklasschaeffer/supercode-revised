---
name: git
description: Git command for version control, branch management, and repository operations
---

# /git $ARGUMENTS

Git command for version control, branch management, and repository operations.

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
- Comprehensive git operations with intelligent workflow automation
- Steps should be in following order: Analysis → Action → Finalization

```
Example:
1. **Analysis**:
   - `analyze_repository_state()` → Check current branch, status, and conflicts
   - `parse_git_command()` → Extract operation type and parameters
   - `validate_git_environment()` → Ensure proper authentication and permissions
2. **Action**:
   - `execute_git_operations()` → Perform branch, commit, merge, push operations
   - `handle_conflicts_resolution()` → Auto-resolve or flag merge conflicts
   - `manage_remote_sync()` → Coordinate with remote repositories
3. **Finalization**:
   - `verify_operation_success()` → Confirm git operation completed correctly
   - `update_repository_status()` → Refresh local repository information
   - `log_git_activity()` → Record operations for audit and tracking
```

## Examples
```
/git branch create feature/user-authentication
/git commit --message "Add login functionality"
/git merge feature/api-integration --no-ff
/git push origin main --force-with-lease
/git status --verbose
```

## Boundaries

**Will:**
- Execute standard git operations (branch, commit, merge, push, pull)
- Handle conflict detection and provide resolution guidance
- Manage remote repository synchronization and tracking
- Generate intelligent commit messages based on changes
- Support both local and remote git workflows

**Will Not:**
- Perform destructive operations without explicit confirmation
- Override repository protection rules or branch restrictions
- Execute git operations without proper repository validation
- Modify git history without user awareness and consent
- Bypass authentication or security requirements
