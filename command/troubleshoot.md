---
name: troubleshoot
description: Systematically diagnose errors and identify root causes through hypothesis-driven investigation
agent: root-cause-analyst
---

# /troubleshoot $ARGUMENTS

Systematically diagnose errors and identify root causes by analyzing evidence, generating hypotheses, testing systematically, and validating findings through the Root-Cause-Analyst agent.

## References
- [@FLAGS.md](../FLAGS.md)

## General Context
**Invoked Arguments (can be empty, can have flags, can have prompt):** $ARGUMENTS
**Current Directory:** !`pwd`
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:**
!`git status --short | grep '^ M'`

## Behavior

Invokes Root-Cause-Analyst agent for systematic debugging through hypothesis-driven investigation:

**Evidence Collection**: Gather error messages, stack traces, logs, reproduction steps
**Hypothesis Formation**: Generate testable hypotheses about potential root causes
**Systematic Testing**: Validate each hypothesis through diagnostics and analysis
**Root Cause Identification**: Verify actual underlying cause vs symptoms
**Solution Guidance**: Recommend fixes that address root cause effectively

## Return Format

```markdown
## Root Cause Analysis Complete

### Error Summary
[Concise description of the observed problem and symptoms]

### Root Cause Identified
**Cause**: [Actual underlying cause, not symptom]
**Evidence**: [Supporting evidence from systematic investigation]
**Impact**: [Why this causes the observed error and manifestation]

### Hypotheses Tested
- ✅ [Validated hypothesis] → Confirmed as root cause
- ❌ [Rejected hypothesis] → Reason for elimination
- ⚠️ [Contributing factor] → Secondary issue identified

### Recommended Fix
**Primary Solution**: [Fix addressing root cause]
**Implementing Agent**: [Specialist agent for implementation]
**Validation**: [How to verify fix resolves issue]
```

## Workflow

1. **Evidence Gathering**:
   - Collect error messages, stack traces, logs systematically
   - Document reproduction steps and environmental context
   - Identify symptoms vs potential underlying causes

2. **Hypothesis Generation**:
   - Form testable hypotheses about root causes based on evidence
   - Prioritize hypotheses by likelihood and investigative cost
   - Consider environmental, dependency, and configuration factors

3. **Systematic Testing**:
   - Validate hypotheses through bash diagnostics, code analysis
   - Use Playwright/Chrome DevTools for frontend/performance issues
   - Track results: confirmed, rejected, or contributing factors

4. **Root Cause Validation**:
   - Verify identified cause addresses actual problem effectively
   - Distinguish root cause from symptoms and cascading failures
   - Provide actionable fix recommendations for specialist agents

## Tool Requirements

**Task**: Invoke root-cause-analyst agent for systematic investigation
**Root-Cause-Analyst**: Executes hypothesis-driven diagnostic workflow with evidence validation

## Examples

```
/troubleshoot "API returns 500 error on user login"
# Systematic diagnosis of authentication endpoint failure

/troubleshoot "React component not rendering after update"
# Investigates UI rendering issue with dependency analysis

/troubleshoot --error-log ./logs/error.log
# Analyzes error log file for patterns and root cause

/troubleshoot "Performance degradation after deployment"
# Investigates performance issue with profiling and comparison
```

## Integration

Invoked for error diagnosis and root cause identification. Complements specialist agents by providing systematic debugging before implementation. Works with /spawn for complex issues requiring multiple specialist agents after diagnosis completes.
