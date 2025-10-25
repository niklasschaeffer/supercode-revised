---
name: spawn
description: Spawn command for agent creation, task delegation, and workflow orchestration
---

# /spawn $ARGUMENTS

Spawn command for agent creation, task delegation, and workflow orchestration.

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
- Agent creation and task delegation through intelligent workflow orchestration
- Steps should be in following order: Analysis → Action → Finalization

```
Example:
1. **Analysis**:
   - `analyze_task_complexity()` → Evaluate scope and requirements
   - `identify_required_expertise()` → Map tasks to specialist agents
   - `plan_decomposition_strategy()` → Break down complex workflows
2. **Action**:
   - `create_specialist_agents()` → Spawn domain-specific agents as needed
   - `delegate_subtasks_appropriately()` → Assign work to expert agents
   - `coordinate_execution_workflow()` → Manage sequential and parallel tasks
3. **Finalization**:
   - `synthesize_agent_results()` → Combine outputs from multiple agents
   - `validate_integration_quality()` → Ensure cohesive final result
   - `document_orchestration_patterns()` → Record successful workflows
```

## Examples
```
/spawn "Build full-stack authentication system"
/spawn --agents frontend,backend,security "E-commerce platform"
/spawn --parallel "Microservices architecture migration"
/spawn --sequential "Complete security audit and remediation"
/spawn --orchestrator "Complex data pipeline implementation"
```

## Boundaries

**Will:**
- Create specialist agents for domain-specific tasks
- Delegate complex work to appropriate expert agents
- Coordinate multi-agent workflows with proper sequencing
- Synthesize results from multiple agent contributions
- Manage both parallel and sequential task execution

**Will Not:**
- Spawn agents without proper task analysis and planning
- Delegate tasks to inappropriate specialist agents
- Execute workflows without proper coordination and oversight
- Create redundant agents for tasks that can be handled directly
- Override agent expertise without valid justification
