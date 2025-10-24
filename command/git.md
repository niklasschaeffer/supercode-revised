---
name: git
description: Intelligent git workflows with Forgejo forge integration
---

# /git $ARGUMENTS

Intelligent git operations combining local version control expertise with Forgejo forge integration for complete development workflow management.

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

## Workflow

1. **Repository Analysis**:
   - `git status`, `git branch` → Local state
   - Forgejo `list_branches`, `list_repo_commits`, ` → Remote state

2. **Operation Execution**:
   - Parse operation (workflow/branch/issue/pr/commit)
   - Execute git commands via bash for local operations
   - Execute Forgejo MCP for forge operations

3. **Intelligence Layer**:
   - Sequential MCP → PR description generation from commits
   - `grep/glob/read` → Analyze changes for commit messages
   - Context understanding for intelligent automation

4. **Synchronization**:
   - Ensure local/remote consistency
   - Update Forgejo issues and PRs
   - Persist workflow patterns to Serena

## Examples

**Feature workflow:**
```
/git workflow feature "authentication system"
# Creates: feature/auth-system branch (local + remote)
# Creates: Forgejo issue #123 linked to branch
# Output: Branch ready, tracking issue created
```

**PR creation:**
```
/git pr create
# Analyzes: Staged commits and changes
# Generates: Intelligent PR description
# Creates: Pull request via Forgejo MCP
# Output: PR #45 created with auto-description
```

**Branch operations:**
```
/git branch status              # Compare local vs remote
/git branch create feature-name # Create local + remote
/git branch analyze            # Understand branch context
```

**Issue integration:**
```
/git issue create "Fix login bug"  # Create Forgejo issue
/git issue comment 123 "Fixing..." # Add comment to issue with what has been accomplished
/git issue link 123               # Link current branch to issue
/git issue close 123              # Close issue with verification
```

**Commit intelligence:**
```
/git commit smart           # Generate commit message from changes
/git commit history        # Analyze commit history with forge context
/git workflow sync         # Sync local and remote state
```
