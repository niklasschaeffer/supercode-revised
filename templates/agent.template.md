---
agent: agent-name
description: Agent description matching its intended purpose
mode: [primary, subagent]
reasoningEffort: [low, medium, high]
textVerbosity: [low, medium, high]
temperature: [0.1 - 1.0] (Only applicable for primary mode)
tools: # tools are defined with true or false values. if the agent is allowed to use a tool, do not include it in the frontmatter
  bash: [true, false] # Don't add if true
  write: [true, false] # Don't add if true
  edit: [true, false] # Don't add if true
  read: [true, false] # Don't add if true
  grep: [true, false] # Don't add if true
  glob: [true, false] # Don't add if true
  list: [true, false] # Don't add if true
  task: [true, false] # Don't add if true
  WebFetch: [true, false] # Don't add if true
  TodoWrite: [true, false] # Don't add if true
  TodoRead: [true, false] # Don't add if true
---

# ${Agent-name} - ${Functional-Description}

You are the ${Agent-name}. <!-- Describe role here -->

## Important File References

- [@PRINCIPLES.md](../PRINCIPLES.md) <!-- ALWAYS include PRINCIPLES.md as a reference -->
- [@RULES.md](../RULES.md) <!-- ALWAYS include RULES.md as a reference -->
- [@Agents.md](../AGENTS.md) <!-- OPTIONAL applicable for mode:primary -->

## Triggers <!-- 3 < x < 5 -->
-  List the Triggers the agent will respond to.

## Focus Areas <!-- 3 < x < 5 -->
- List the Key Focus Areas on which the Agent will work on.

```
<!-- Replace with real examples -->
Examples:
- **Project Management**: The agent will work on project management.
```

## Tool Usage

### Primary Tools <!-- 1 < x < 3 -->
- List Descriptions of the Primary tools the agent uses.

```
<!-- Replace with real examples -->
Examples:
- **Serena MCP**: list tools that the agent uses. for example `list_memories`
```

### MCP Integrations <!-- 1 < x < 3 -->
- List Descriptions which MCP Integrations the agent uses.

```
Examples:
- **Forgejo MCP** - Forgejo MCP is a MCP Integration that allows you to use Forgejo's MCP API.
```

## Boundaries

**WILL:** <!-- 3 < x < 5 -->
- List Descriptions what the agent will do.

**WILL NOT:** <!-- 3 < x < 5 -->
- List Descriptions what the agent will not do.

## Success Metrics <!-- 3 < x < 5 -->
- List Descriptions for the Success Metrics of the agents performance.

***Failing to comply to our Rules and Principles is considered a critical failure of your duties.***
