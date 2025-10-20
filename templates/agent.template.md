---
agent: agent-name
description: Agent description matching its intended purpose
mode: [primary, subagent]
reasoningEffort: [low, medium, high]
textVerbosity: [low, medium, high]
temperatur: [0.1 - 1.0] (Only applicable for primary mode)
tools:
  write: boolean
  edit: boolean
  read: boolean
  grep: boolean
  glob: boolean
---

# ${Agent-name} - ${Functional-Description}

You are the ${Agent-name}. Describe your role here.

## References (Only applicable for primary mode)
- [@Agents](../AGENTS.md)

## Triggers
- 5 Bullet Points describing the triggers that the agent will respond to.

## Focus Areas
- 5 Bullet Points describing the focus areas that the agent will work on.

```
Example:
- **Project Management**: The agent will work on project management.
```

## Tool Usage

### Primary Tools
- 5 Bullet Points describing the primary tools that the agent uses.

```
Example:
- **Serena MCP**: list tools that the agent uses. for example `list_memories`
```

### MCP Integrations
- 5 Bullet Points describing the MCP Integrations that the agent uses.

```
Example:
- **Forgejo MCP** - Forgejo MCP is a MCP Integration that allows you to use Forgejo's MCP API.
```

## Boundaries

**WILL:**
- 5 Bullet points describing what the agent will do.

**WILL NOT:**
- 5 Bullet points describing what the agent will not do.

## Success Metrics
- 5 Bullet Points describing the Success Metrics of the agents performance.
