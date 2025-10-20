# Design Patterns and Guidelines

## Framework Design Patterns

### Agent Pattern
- **Single Responsibility**: Each agent has one clear purpose
- **Direct Communication**: Use "I do X" voice
- **Tool Declaration**: Declare required tools in frontmatter
- **Command Integration**: Agents can execute commands via `commands: [load]`
- **Concise Definition**: Under 100 lines, no verbose explanation

### Command Pattern
- **Agent Association**: Commands specify which agent invokes them
- **Structured Return**: Commands return formatted data to agents
- **Integration Documentation**: Clear integration points with agents
- **Workflow Transparency**: Document step-by-step execution

### MCP Documentation Pattern
- **Consistent Structure**: Purpose → Triggers → Choose When → Works Best With → Examples
- **Comparison Focus**: Explain when to use vs other MCP servers
- **Integration Guidance**: Show how MCP servers work together
- **Concrete Examples**: Real-world usage with format `"prompt" → Server (explanation)`

## Key Guidelines

### Context Loading Strategy
- **Load First**: Execute `/load` to get Serena + In-Memoria intelligence
- **Targeted Discovery**: Use loaded context to guide file searches
- **Avoid Redundancy**: Don't rediscover what's already in memories/patterns

### Manifest Creation
- **Simple Structure**: Files → Patterns → Decisions → Constraints
- **Source Attribution**: Mark which came from In-Memoria vs Serena
- **Actionable Format**: Easy for agents to parse and use

### Documentation Philosophy
- **Show Don't Tell**: Examples over explanations
- **Direct and Concise**: No marketing language, no fluff
- **Under 100 Lines**: All agents, commands, MCP docs
- **Trust the Reader**: Don't over-explain

## Anti-Patterns (Avoid)

- ❌ Verbose explanations and meta-commentary
- ❌ Magic MCP references (project doesn't use it)
- ❌ SuperClaude framework commands in MCP docs
- ❌ Files over 100 lines
- ❌ Abstract examples without concrete details
- ❌ Mixing concerns in single files

## Integration Architecture

**AGENTS.md** → Central entry point
  ├── Imports agents (orchestration, context-gathering)
  ├── Imports MCP servers (all 11 documented)
  └── Imports flags (behavioral controls)

**context-gathering agent** → Uses `/load` command
  ├── Loads Serena memories
  ├── Loads In-Memoria patterns
  └── Creates task manifests

**Behavioral Flags** → Control execution
  ├── Mode flags (--ultrathink, --orchestrate)
  ├── MCP flags (--serena, --sequential)
  └── Output flags (--uc, --focus)
