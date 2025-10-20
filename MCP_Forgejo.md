# Forgejo MCP Server

**Purpose**: Git forge integration for issue tracking, pull requests, repository management, and team collaboration

## Triggers
- Repository operations: create, fork, list repositories
- Issue management: create, update, list, label, close/reopen issues
- Pull request workflows: create, review, merge pull requests
- Branch and file operations: create branches, create/update/delete files
- Team and organization management: search teams, manage collaborators
- Git forge automation needs requiring programmatic access

## Choose When
- **Over manual git operations**: When you need structured issue/PR workflows with metadata
- **For forge integration**: When working with Forgejo/Gitea instances programmatically
- **Over GitHub CLI**: When your project uses Forgejo/Gitea instead of GitHub
- **For team workflows**: When coordinating development through issues, PRs, and labels
- **Not for local git**: Use Bash git commands for local repository operations

## Works Best With
- **Serena**: Serena provides code context → Forgejo creates issues/PRs with relevant details
- **Sequential**: Sequential analyzes changes → Forgejo creates structured PRs with descriptions
- **Bash**: Bash handles local git → Forgejo manages remote forge operations

## Examples
```
"create issue for authentication bug" → Forgejo (creates issue with title, body, labels)
"list all open pull requests" → Forgejo (retrieves PR list with metadata and status)
"create feature branch for user-profile" → Forgejo (creates branch from base branch)
"add bug and priority labels to issue #42" → Forgejo (applies labels to existing issue)
"search for backend team members" → Forgejo (finds team members in organization)
"commit this file to feature branch" → Bash git (local operation, not forge-level)
```
