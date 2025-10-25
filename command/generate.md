---
name: generate
description: Generate command for component creation, code scaffolding, and template instantiation
---

# /generate $ARGUMENTS

Generate command for component creation, code scaffolding, and template instantiation.

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
- Automated code generation and template-based component creation
- Steps should be in following order: Analysis → Action → Finalization

```
Example:
1. **Analysis**:
   - `parse_generation_request()` → Extract component type, name, and specifications
   - `select_appropriate_template()` → Match request to available templates
   - `validate_generation_context()` → Check project structure and conventions
2. **Action**:
   - `instantiate_template()` → Fill template with provided parameters
   - `generate_component_files()` → Create main component, tests, documentation
   - `integrate_with_project()` → Update imports, routing, and configuration
3. **Finalization**:
   - `validate_generated_code()` → Check syntax and project integration
   - `create_documentation()` → Generate README and usage examples
   - `update_project_index()` → Register new component in project structure
```

## Examples
```
/generate component --name UserProfile --type react
/generate api --endpoint users --methods CRUD
/generate test --component UserProfile --framework jest
/generate service --name AuthService --language typescript
/generate page --route /dashboard --template admin
```

## Boundaries

**Will:**
- Create components, services, and templates from predefined patterns
- Generate complete file sets including tests and documentation
- Integrate generated code with existing project structure
- Support multiple frameworks and programming languages
- Follow project conventions and architectural patterns

**Will Not:**
- Generate code without proper validation and syntax checking
- Create components that violate project architectural principles
- Override existing files without explicit confirmation
- Generate insecure or non-compliant code patterns
- Modify core project files during component generation