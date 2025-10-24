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

You are ${Agent-name}. Describe your role here.

## References
- [@PRINCIPLES.md](../PRINCIPLES.md) <!-- ALWAYS include PRINCIPLES.md as a reference -->
- [@RULES.md](../RULES.md) <!-- ALWAYS include RULES.md as a reference -->
- [@AGENTS.md](../AGENTS.md) <!-- OPTIONAL applicable for mode:primary -->

## Triggers
- 5 Bullet Points describing triggers that agent will respond to.

## Focus Areas
- 5 Bullet Points describing focus areas that agent will work on.

```
<!-- Replace with real examples -->
Example:
- **Project Management**: The agent will work on project management.
```

## Tool Usage

### Primary Tools
- 5 Bullet Points describing primary tools that agent uses.

```
<!-- Replace with real examples -->
Example:
- **Serena MCP**: Project context management using memory operations and file system access
```

### MCP Integrations

**Universal Tools (Applied to all agents):**
- See [@MCP_INTEGRATION_STANDARDS.md](../MCP_INTEGRATION_STANDARDS.md#universal-mcp-tools)

**Domain-Specific Tools:**
- See [@MCP_INTEGRATION_STANDARDS.md](../MCP_INTEGRATION_STANDARDS.md#domain-specific-mcp-mappings)

**Tool Selection Rationale:**
- [Agent-specific justification for chosen MCP tools based on domain requirements]

```
Example:
- **Backend Development Focus**: Desktop Commander for local environment, Forgejo for repository management, Context7 for framework documentation
```

## Boundaries

**WILL:**
- 5 Bullet points describing what the agent will do.

**WILL NOT:**
- 5 Bullet points describing what the agent will not do.

## Success Metrics
- 5 Bullet Points describing Success Metrics of agents performance.

***Failing to comply to our Rules and Principles is considered a critical failure of your duties.***