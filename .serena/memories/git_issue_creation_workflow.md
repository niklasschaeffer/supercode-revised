# Git Issue Creation Workflow

## Command Pattern
```
/git issue create "issue title"
```

## Workflow Steps
1. **Repository Analysis**: Check git status, current branch, and remote configuration
2. **Forge Integration**: Identify target repository in Forgejo instance
3. **Issue Creation**: Use Forgejo MCP to create issue with intelligent context
4. **Memory Storage**: Store workflow patterns for future reference

## Example Output
- Issue #109 created in niklasschaeffer/chronova-revised
- URL: https://git.intranet.schaeffer.it/niklasschaeffer/chronova-revised/issues/109
- Auto-generated body with context and test details

## Notes
- Works with repositories that have issues enabled
- Automatically includes git context in issue body
- Stores workflow patterns in Serena memory for optimization