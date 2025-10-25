---
name: troubleshoot
description: Troubleshoot command for debugging, error diagnosis, and problem resolution
---

# /troubleshoot $ARGUMENTS

Troubleshoot command for debugging, error diagnosis, and problem resolution.

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
- Systematic debugging and error diagnosis through hypothesis-driven investigation
- Steps should be in following order: Analysis → Action → Finalization

```
Example:
1. **Analysis**:
   - `collect_error_evidence()` → Gather logs, stack traces, and error messages
   - `analyze_system_state()` → Check environment, dependencies, and configurations
   - `generate_hypotheses()` → Create testable theories about root causes
2. **Action**:
   - `execute_diagnostic_tests()` → Run targeted tests to validate hypotheses
   - `isolate_problem_components()` → Identify specific failing components
   - `trace_error_causality()` → Follow error propagation paths
3. **Finalization**:
   - `confirm_root_cause()` → Validate primary cause and contributing factors
   - `generate_fix_recommendations()` → Provide actionable solution steps
   - `document_investigation()` → Record findings and prevention strategies
```

## Examples
```
/troubleshoot "API returns 500 error on user login"
/troubleshoot --log-file ./logs/error.log --verbose
/troubleshoot "React component not rendering after update"
/troubleshoot --performance "Memory leak in data processing"
/troubleshoot --network "Connection timeout to database"
```

## Boundaries

**Will:**
- Collect and analyze error evidence systematically
- Generate and test multiple hypotheses about root causes
- Isolate failing components and trace error propagation
- Provide actionable fix recommendations with validation steps
- Document investigation findings and prevention strategies

**Will Not:**
- Apply fixes without confirming root cause identification
- Modify production systems without proper validation
- Override specialist expertise without proper investigation
- Make assumptions without sufficient evidence and testing
- Implement solutions that introduce new problems or risks
