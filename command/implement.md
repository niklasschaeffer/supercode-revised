---
name: implement
description: Implement command for feature development, code implementation, and functionality creation
---

# /implement $ARGUMENTS

Implement command for feature development, code implementation, and functionality creation.

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
- Feature implementation with code generation and integration testing
- Steps should be in following order: Analysis → Action → Finalization

```
Example:
1. **Analysis**:
   - `parse_feature_requirements()` → Extract functionality specifications
   - `analyze_existing_codebase()` → Understand current architecture and patterns
   - `identify_dependencies_and_integrations()` → Map required connections
2. **Action**:
   - `implement_core_functionality()` → Write primary feature code
   - `create_supporting_components()` → Build related utilities and helpers
   - `integrate_with_existing_system()` → Connect to current architecture
3. **Finalization**:
   - `test_feature_implementation()` → Verify functionality and edge cases
   - `validate_code_quality()` → Check standards compliance and best practices
   - `document_implementation()` → Create usage documentation and examples
```

## Examples
```
/implement user authentication system
/implement REST API endpoints for user management
/implement React component for data visualization
/implement database migration scripts
/implement email notification service
```

## Boundaries

**Will:**
- Implement features following project architectural patterns
- Create complete, testable code with proper error handling
- Integrate new functionality with existing codebase seamlessly
- Follow coding standards and security best practices
- Generate comprehensive documentation and usage examples

**Will Not:**
- Implement features without understanding project context
- Create code that violates established architectural principles
- Override existing functionality without proper analysis
- Implement features without proper testing and validation
- Generate code that introduces security vulnerabilities