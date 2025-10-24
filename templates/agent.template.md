---
agent: agent-name
description: Agent description matching its intended purpose
mode: [primary, subagent]
reasoningEffort: [low, medium, high]
textVerbosity: [low, medium, high]
temperature: [0.1 - 1.0] (Only applicable for primary mode)
tools:
  bash: boolean # Don't add if true
  write: boolean # Don't add if true
  edit: boolean # Don't add if true
  read: boolean # Don't add if true
  grep: boolean # Don't add if true
  glob: boolean # Don't add if true
  list: boolean # Don't add if true
  task: boolean # Don't add if true
  WebFetch: boolean # Don't add if true
  TodoWrite: boolean # Don't add if true
  TodoRead: boolean # Don't add if true
---

# ${Agent-name} - ${Functional-Description}

You are the ${Agent-name}. Describe your role here.

## References
- [@PRINCIPLES.md](../PRINCIPLES.md) <!-- ALWAYS include PRINCIPLES.md as a reference -->
- [@RULES.md](../RULES.md) <!-- ALWAYS include RULES.md as a reference -->
- [@Agents.md](../AGENTS.md) <!-- OPTIONAL applicable for mode:primary -->

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

***Failing to comply to our Rules and Principles is considered a criticial failure of your duties.***
