---
name: improve
description: Improve existing code quality through systematic refactoring without breaking functionality
---

# /improve $ARGUMENTS

Systematically improve existing code quality by reducing complexity, eliminating duplication, and applying best practices through the Refactoring-Expert agent with incremental validated changes.

## References
- [@FLAGS.md](../FLAGS.md)

## General Context
**Invoked Arguments [user_prompt]:** $ARGUMENTS
**Current Directory:** !`pwd`
**Current Folder:** !`basename $(pwd)`
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:**
!`git status --short | grep '^ M'`

## Behavior

Invokes Refactoring-Expert agent for safe, systematic code improvement:

**Code Analysis**: Identify code smells, complexity issues, duplication patterns, anti-patterns
**Improvement Planning**: Prioritize by impact, plan incremental validated refactoring steps
**Systematic Refactoring**: Apply SOLID, DRY, KISS principles with continuous validation
**Quality Verification**: Test after each change to ensure behavior preservation
**Documentation Update**: Reflect improvements in comments and documentation

## Return Format

```markdown
## Code Improvement Complete

### Improvements Applied
- **Complexity Reduction**: Cyclomatic complexity reduced [X → Y, -Z%]
- **Duplication Eliminated**: [N] instances of duplicated code refactored
- **Pattern Application**: Design patterns applied [Factory, Strategy, Observer]
- **Performance**: Optimizations applied [estimated X% improvement]

### Changes Summary
**Files Modified**: [N] files
**Functions Refactored**: [List of key refactorings with locations]
**Tests Updated**: [Test changes to maintain coverage]
**Lines Changed**: [+A, -B, net: C]

### Quality Metrics
**Before**: Complexity: X, Duplication: Y%, Maintainability: Z
**After**: Complexity: X (-A%), Duplication: Y% (-B%), Maintainability: Z (+C%)

### Validation
✅ All tests passing ([N] tests, [M] assertions)
✅ Behavior preserved (regression testing completes)
✅ Performance: No regression (or improved by X%)
```

## Workflow

1. **Code Analysis Phase**:
   - Read existing code to understand the structure and identify improvement opportunities
   - Use Grep/Glob to find code smells, duplication, antipatterns systematically
   - Assess complexity metrics, maintainability issues, technical debt

2. **Improvement Planning Phase**:
   - Prioritize improvements by impact: critical code smells first, enhancements later
   - Plan incremental refactoring steps with clear validation checkpoints
   - Identify tests needed to ensure complete behavior preservation

3. **Systematic Refactoring Phase**:
   - Apply improvements incrementally using Edit/MultiEdit for controlled changes
   - Use Serena MCP for symbol-level refactoring (rename, extract, move functions/classes)
   - Use Desktop Commander MCP for file operations and systematic code transformations

4. **Validation & Documentation Phase**:
   - Run tests after each change to verify behavior preservation immediately
   - Try to invoke the qa-engineer agent if needed for comprehensive regression testing
   - Update documentation and comments to reflect the improved code structure

## Tool Requirements

**Task**: Invoke refactoring-expert agent for systematic improvement orchestration
**Refactoring-Expert**: Executes incremental validated improvements with safety focus

## Examples

```
/improve src/api/
# Comprehensive improvement: reduce complexity, eliminate duplication, apply patterns

/improve --focus complexity src/utils/helpers.js
# Focus specifically on reducing cyclomatic complexity in helpers

/improve --safe authentication-service
# Safe mode: extra validation gates, smaller incremental steps, rollback ready

/improve --performance data-processing
# Focus on performance optimization while maintaining correctness

/improve --patterns legacy-module
# Apply modern design patterns to legacy code (SOLID, DRY, KISS)
```

## Integration

Invoked for proactive code quality improvement on existing functionality. Complements /troubleshoot (diagnose issues) by preventing future problems through improved code structure. Works with /spawn for coordinated improvement across multiple modules requiring specialist coordination.
