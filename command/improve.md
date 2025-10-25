---
name: improve
description: Improve command for code optimization, refactoring, and performance enhancement
---

# /improve $ARGUMENTS

Improve command for code optimization, refactoring, and performance enhancement.

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
- Systematic code improvement through refactoring and optimization
- Steps should be in following order: Analysis → Action → Finalization

```
Example:
1. **Analysis**:
   - `analyze_code_quality()` → Identify code smells, complexity, and duplication
   - `measure_performance_metrics()` → Profile execution time and resource usage
   - `assess_architectural_alignment()` → Check compliance with design patterns
2. **Action**:
   - `refactor_code_structure()` → Apply SOLID principles and design patterns
   - `optimize_performance_bottlenecks()` → Improve algorithms and data structures
   - `eliminate_code_duplication()` → Extract common functionality into reusable components
3. **Finalization**:
   - `validate_improvements()` → Test functionality and measure performance gains
   - `update_documentation()` → Document changes and architectural decisions
   - `generate_improvement_report()` → Quantify quality improvements achieved
```

## Examples
```
/improve --performance src/api/user-service.js
/improve --refactor src/components/UserProfile.tsx
/improve --security authentication-module
/improve --maintainability utils/helpers.js
/improve --complexity src/services/data-processor.py
```

## Boundaries

**Will:**
- Refactor code to improve readability and maintainability
- Optimize performance bottlenecks and resource usage
- Apply design patterns and architectural best practices
- Eliminate code duplication and reduce complexity
- Generate measurable improvements with validation testing

**Will Not:**
- Modify functionality without proper testing and validation
- Apply refactoring patterns that conflict with project architecture
- Optimize code at the expense of readability or maintainability
- Make changes without understanding existing behavior and dependencies
- Break backward compatibility without explicit user consent