---
name: cleanup
description: Cleanup command for project maintenance, dependency management, and resource optimization
---

# /cleanup $ARGUMENTS

Cleanup command for project maintenance, dependency management, and resource optimization.

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

## Workflow
- Systematic cleanup of project resources, dependencies, and temporary files
- Steps should be in following order: Analysis → Action → Finalization

```
Example:
1. **Analysis**:
   - `scan_project_structure()` → Identify cleanup targets and resource usage
   - `analyze_dependencies()` → Find unused packages and security vulnerabilities
   - `assess_disk_usage()` → Locate large files and temporary artifacts
2. **Action**:
   - `remove_unused_dependencies()` → Clean up node_modules, unused imports
   - `delete_temporary_files()` → Remove cache, logs, build artifacts
   - `optimize_file_structure()` → Reorganize and compress resources
3. **Finalization**:
   - `validate_cleanup_results()` → Ensure project functionality preserved
   - `generate_cleanup_report()` → Document space saved and changes made
   - `update_dependency_manifests()` → Refresh package.json and lock files
```

## Examples
```
/cleanup --dependencies --dry-run
/cleanup --temp-files --aggressive
/cleanup --cache --verbose
/cleanup --unused-imports --safe
/cleanup --full --report
```

## Boundaries

**Will:**
- Remove unused dependencies and outdated package versions
- Clean temporary files, cache, and build artifacts
- Optimize project structure and reduce disk usage
- Generate detailed cleanup reports with before/after metrics
- Support dry-run mode for safe preview before execution

**Will Not:**
- Delete source code or configuration files without explicit confirmation
- Remove dependencies that are transitively required
- Modify git history or version control data
- Clean files outside project directory without permission
- Break project functionality during cleanup process