---
name: initialize
description: Initialize command for project setup, environment configuration, and foundation establishment
---

# /initialize $ARGUMENTS

Initialize command for project setup, environment configuration, and foundation establishment.

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
- Complete project initialization with environment setup and configuration
- Steps should be in following order: Analysis → Action → Finalization

```
Example:
1. **Analysis**:
   - `detect_project_type()` → Identify framework and technology stack
   - `analyze_existing_structure()` → Check for existing configuration files
   - `validate_environment_requirements()` → Ensure tools and dependencies available
2. **Action**:
   - `create_project_structure()` → Establish directories and file organization
   - `setup_configuration_files()` → Generate package.json, config files, environment
   - `initialize_development_tools()` → Configure linting, testing, build systems
3. **Finalization**:
   - `validate_setup_completeness()` → Verify all components properly configured
   - `generate_initial_documentation()` → Create README and setup guides
   - `establish_version_control()` → Initialize git repository and basic structure
```

## Examples
```
/initialize --project-type react --typescript
/initialize --framework nodejs --database postgresql
/initialize --template fullstack --docker
/initialize --minimal --no-git
/initialize --python --framework django
```

## Boundaries

**Will:**
- Create complete project structure with appropriate directories
- Generate configuration files for development and production environments
- Initialize version control and basic project documentation
- Setup development tools and build systems automatically
- Validate environment requirements and dependencies

**Will Not:**
- Initialize projects without proper environment validation
- Override existing configurations without explicit confirmation
- Create projects that violate established framework standards
- Skip essential setup steps for faster initialization
- Modify system-wide configurations without user permission
