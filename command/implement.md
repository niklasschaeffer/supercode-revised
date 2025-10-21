---
name: implement
description: Feature implementation command for user-requested functionality without agent invocation
---

# /implement $ARGUMENTS

Implement features, components, APIs, or complete functionality based on user requirements with direct code generation and framework-specific best practices.

## References
- [@FLAGS.md](../FLAGS.md)

## General Context
**Arguments:** $ARGUMENTS
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:** !`git status --short | grep '^ M'`
**Current Directory:** !`pwd`

## Behavior

Direct feature implementation with optional delegation and parallel execution:

**Requirement Analysis**: Parse feature description and identify technology stack context
**Framework Detection**: Auto-detect framework (React, Vue, Angular, Express) from project structure
**Code Generation**: Generate implementation with best practices and design patterns
**Delegation Control**: Use `--delegate` for sub-agent coordination on complex features (>7 files)
**Parallel Execution**: Use `--orchestrate` to enable parallel operations for multi-component features
**Quality Integration**: Apply security validation and testing recommendations
**Documentation**: Update relevant documentation and provide usage examples

## Return Format

```markdown
## Feature Implementation Complete

**Feature**: [Name and description]
**Type**: [component|api|service|feature] | **Framework**: [Detected framework]
**Files**: [N] created/modified

### Files Created/Modified
- `path/to/file.ext` - [Purpose]
- `path/to/test.ext` - [Tests]

### Integration
- Dependencies: [New packages]
- Configuration: [Config changes]
- Next Steps: [Testing, integration, docs]

### Validation
✅ Project conventions ✅ Security ✅ Error handling ✅ Tests
```

## Workflow

1. **Analysis**: Parse requirements, detect framework (Read/Grep/Glob), identify patterns
2. **Planning**: Determine approach, identify files, plan architecture
3. **Implementation**: Generate code (Write/Edit/MultiEdit), use Context7/Magic MCP, apply security
4. **Validation**: Review quality, provide tests, update documentation

## Tool Requirements

**Write/Edit/MultiEdit**: Direct code generation and modification
**Context7 MCP**: Framework patterns and official documentation (React, Vue, Express)
**Magic MCP**: UI component generation for frontend features
**Read/Grep/Glob**: Project analysis and pattern detection

## Examples

```
/implement user profile component
# Creates React/Vue component with form, validation, styling

/implement REST API for user authentication
# Generates API endpoints, middleware, error handling, security

/implement payment processing service
# Complete service with validation, error handling, integration points

/implement --type component --framework react user dashboard
# Explicit framework specification for component generation

/implement --safe --with-tests search functionality
# Safe mode with comprehensive testing and validation

/implement --delegate complete dashboard feature
# Complex feature with sub-agent coordination for multi-file implementation

/implement --orchestrate multi-service integration
# Parallel execution for independent components (API + UI + tests)
```

## Integration

Provides feature implementation with optional delegation via `--delegate` flag. Use for direct code generation or complex multi-component features. Use `--orchestrate` to enable parallel execution for independent components. Complements /improve (quality enhancement) and /troubleshoot (debugging) by focusing on new feature creation. For maximum orchestration control, use /spawn instead.
