---
name: spawn
description: Orchestrate complex tasks through intelligent breakdown and specialist agent delegation
agent: orchestration
---

# /spawn $ARGUMENTS

Orchestrate complex tasks by analyzing requirements, decomposing into subtasks, selecting appropriate specialist agents, and coordinating parallel or sequential execution.

## References
- [@FLAGS.md](../FLAGS.md)

## General Context
**Arguments:** $ARGUMENTS
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:** !`git status --short | grep '^ M'`
**Current Directory:** !`pwd`

## Behavior

Activates Orchestration agent for intelligent multi-agent task coordination:

**Task Analysis**: Evaluate complexity, domains, parallelization opportunities, dependencies
**Decomposition**: Break into well-defined subtasks with clear objectives
**Agent Selection**: Match subtasks to specialist agents by domain expertise
**Delegation**: Invoke agents via Task tool (parallel where possible)
**Synthesis**: Integrate multi-agent results into coherent solutions

## Return Format

```markdown
## Task Orchestration Complete

### Task Breakdown
- **Subtask 1**: [Description] → Assigned to [agent-name]
- **Subtask 2**: [Description] → Assigned to [agent-name]
- [N subtasks total]

### Agent Execution
- **Parallel**: [Agents executed concurrently]
- **Sequential**: [Agents with dependencies]

### Results Synthesis
[Coherent integration of all agent results]

### Completion Status
✅ [N]/[N] subtasks completed successfully
⏱️ Time saved: [percentage] via parallelization
```

## Workflow

1. **Analysis**: Evaluate complexity, domains, parallelization, dependencies
2. **Decomposition**: Break into subtasks with objectives and success criteria
3. **Selection**: Match subtasks to specialist agents by expertise
4. **Delegation**: Invoke via Task tool (parallel where possible), track progress
5. **Synthesis**: Integrate results, resolve conflicts, validate completion

## Tool Requirements

**Orchestration Agent**: PRIMARY - Task decomposition, agent coordination, result synthesis
**Task Tool**: Agent invocation for specialist delegation
**Sequential MCP**: Complex workflow planning and dependency analysis
**TodoWrite**: Progress tracking for multi-agent coordination

## Examples

```
/spawn "Build full-stack authentication system"
# Orchestrates: backend-engineer (API), frontend-engineer (UI),
# security-engineer (auth patterns), qa-engineer (testing)

/spawn "Refactor legacy codebase to modern patterns"
# Orchestrates: refactoring-expert (code quality),
# context-gathering (pattern intelligence), qa-engineer (regression prevention)

/spawn --parallel "Implement 5 independent microservices"
# Parallel delegation to backend-engineer for each service
# Concurrent execution for maximum efficiency

/spawn "Complete security audit and remediation"
# Orchestrates: security-engineer (vulnerabilities),
# refactoring-expert (secure patterns), qa-engineer (validation)
```

## Integration

Invoked for complex multi-domain tasks requiring specialist coordination. Complements /load (context) and /save (persistence) by enabling intelligent task orchestration. The orchestration agent analyzes task requirements, selects appropriate specialists, and coordinates their execution for optimal results.
