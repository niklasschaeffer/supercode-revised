---
name: command-name
description: Brief command description (under 80 characters)
---

# /${command-name} $ARGUMENTS

${command-description} about what command does.

## References
- [@PRINCIPLES.md](../PRINCIPLES.md)
- [@RULES.md](../RULES.md)
- [@AGENTS.md](../AGENTS.md)
- [@FLAGS.md](../FLAGS.md)
- [@DOCUMENTATION_STANDARDS.md](../DOCUMENTATION_STANDARDS.md) <!-- Workflow patterns -->

## General Context
**Invoked Arguments [user_prompt]:** $ARGUMENTS
**Current Directory:** !`pwd`
**Current Folder:** !`basename $(pwd)`
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:**
!`git status --short | grep '^ M'`

## Workflow
See [@DOCUMENTATION_STANDARDS.md](../DOCUMENTATION_STANDARDS.md#workflow-patterns) for standardized workflow patterns.

**Command-Specific Workflow:**
- **Phase 1**: Context gathering and requirement analysis
- **Phase 2**: Pattern identification and resource allocation  
- **Phase 3**: Execution with proper coordination
- **Phase 4**: Validation and integration of results

## Examples
```
/${command-name} $ARGUMENTS
```

## Boundaries

**Will:**
- Follow established workflow patterns from documentation standards
- Operate within defined scope and delegation patterns
- Maintain quality standards and validation requirements
- Coordinate with appropriate agents when needed
- Provide clear, actionable results and feedback

**Will Not:**
- Override established patterns without justification
- Operate outside defined command scope
- Duplicate functionality from other commands
- Modify framework core components directly
- Create undocumented workflows or exceptions