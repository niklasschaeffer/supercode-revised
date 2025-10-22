# Forgejo MCP Server

**Purpose**: Git forge integration for issue tracking, pull requests, repository management, and team collaboration

## Triggers
- Repository operations: create, fork, list repositories
- Issue management: create, update, list, label, close/reopen issues
- Pull request workflows: create, review, merge pull requests
- Branch and file operations: create branches, create/update/delete files
- Team and organization management: search teams, manage collaborators
- Git forge automation needs requiring programmatic access

## Tool Usage

### Primary Tools
- `forgejo_create_issue`: Create new issues with title, body, and metadata
- `forgejo_create_pull_request`: Create PRs with base/head branches and descriptions
- `forgejo_list_repo_issues`: List and filter repository issues by state, labels, type
- `forgejo_list_repo_pull_requests`: Retrieve PR lists with sorting and filtering options
- `forgejo_create_file`: Create new files in repositories with commit messages

### Secondary Tools
- `forgejo_update_file`: Update existing files with version control integration
- `forgejo_delete_file`: Remove files with proper commit tracking
- `forgejo_create_branch`: Create new branches from existing base branches
- `forgejo_add_issue_labels`: Apply labels to existing issues for organization
- `forgejo_search_users`: Find users and team members within organizations

## Accessibility
- Direct API access to Forgejo/Gitea instances for repository management
- Integration with Git repositories for version control operations
- Team collaboration features for managing development workflows
- Organization-level access for multi-repository coordination
- Real-time synchronization with remote forge instances

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
