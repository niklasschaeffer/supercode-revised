---
name: initialize
description: Comprehensive project setup and initialization establishing dual MCP foundation.
---

# /initialize

Foundational project bootstrap command that creates complete context foundation in both Serena and In-Memoria MCPs.

## References
- [@FLAGS.md](../FLAGS.md)
- [@PRINCIPLES.md](../PRINCIPLES.md)
- [@RULES.md](../RULES.md)

## General Context
**Invoked Arguments [user_prompt]:** $ARGUMENTS
**Current Directory:** !`pwd`
**Current Folder:** !`basename $(pwd)`
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:**
!`git status --short | grep '^ M'`

## Workflow
- **Phase 1: Serena Setup**: Activate project, check onboarding, perform initial setup
- **Phase 2: In-Memoria Analysis**: Auto-learn codebase, extract patterns, build intelligence
- **Phase 3: Documentation Synthesis**: Write core memories, establish architectural foundation
- **Phase 4: Integration**: Verify dual MCP readiness for continued development

```
Example:
1. **Serena Phase**:
   - `serena_activate_project()` → Initialize project context
   - `serena_check_onboarding_performed()` → Verify setup status
   - `serena_onboarding()` → Complete initial configuration
2. **In-Memoria Phase**:
   - `in-memoria_auto_learn_if_needed()` → Analyze entire codebase
   - `in-memoria_get_developer_profile()` → Extract development patterns
   - `in-memoria_contribute_insights()` → Establish initial intelligence
3. **Documentation Phase**:
   - `serena_write_memory()` → Create project_overview, architectural_decisions
   - Document initialization process and establish session context
   - Update patterns_discovered_consolidated with initial findings
```

## Examples
```
/initialize
/initialize --force-relearn
/initialize --skip-analysis
```
