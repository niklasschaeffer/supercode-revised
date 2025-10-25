---
name: renovate
description: Renovate command for project updates, dependency management, and modernization
---

# /renovate $ARGUMENTS

Renovate command for project updates, dependency management, and modernization.

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
- Systematic project renovation with dependency updates and modernization
- Steps should be in following order: Analysis → Action → Finalization

```
Example:
1. **Analysis**:
   - `analyze_dependency_landscape()` → Identify outdated packages and security vulnerabilities
   - `assess_modernization_requirements()` → Evaluate framework versions and best practices
   - `validate_renovation_scope()` → Determine safe update boundaries and constraints
2. **Action**:
   - `update_dependencies_safely()` → Apply version updates with compatibility checks
   - `modernize_code_patterns()` → Replace deprecated APIs and improve practices
   - `handle_breaking_changes()` → Manage version conflicts and migration requirements
3. **Finalization**:
   - `validate_renovation_results()` → Test functionality after updates
   - `document_changes_made()` → Record version changes and migration steps
   - `update_documentation()` → Refresh README and configuration files
```

## Examples
```
/renovate --dependencies --safe-mode
/renovate --framework-updates --major
/renovate --security-patches --auto-approve
/renovate --modernize --typescript
/renovate --dry-run --report
```

## Boundaries

**Will:**
- Update dependencies with compatibility and security validation
- Modernize code patterns and replace deprecated APIs
- Handle breaking changes with proper migration strategies
- Generate comprehensive renovation reports and documentation
- Support dry-run mode for safe preview before execution

**Will Not:**
- Apply updates without proper compatibility testing
- Modify core functionality without understanding impact
- Skip security validation during dependency updates
- Make breaking changes without explicit user approval
- Update dependencies that compromise project stability
