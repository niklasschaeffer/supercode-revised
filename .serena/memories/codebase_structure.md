# Codebase Structure

```
supercode-revised/
├── AGENTS.md                    # Entry point - imports all framework components
├── FLAGS.md                     # Behavioral flags documentation
├── package.json                 # Dependencies
├── in-memoria.db               # In-Memoria learning database
│
├── agent/                      # Agent definitions
│   └── context-gathering.md    # Context gathering agent (uses /load command)
│
├── command/                    # Command definitions
│   └── load.md                 # Load project context from Serena + In-Memoria
│
├── templates/                  # Templates for new components
│   ├── agent.template.md       # Agent template
│   ├── command.template.md     # Command template
│   ├── MCP_Server.template.md  # MCP server docs template
│   └── opencode.jsonc.template # OpenCode config template
│
└── MCP_*.md                    # MCP server documentation (11 files)
    ├── MCP_Serena.md
    ├── MCP_In_Memoria.md
    ├── MCP_Sequential.md
    ├── MCP_Context7.md
    ├── MCP_Tavily.md
    ├── MCP_Playwright.md
    ├── MCP_Morphllm.md
    ├── MCP_Forgejo.md
    ├── MCP_Shadcn.md
    ├── MCP_Prompt_Kit.md
    └── MCP_Chrome_Dev_Tools.md
```

## Key Files

- **AGENTS.md**: Main entry point, imports all agents, MCP servers, and flags
- **FLAGS.md**: Behavioral flags for execution control and MCP server selection
- **context-gathering.md**: Agent that loads project context via /load command
- **load.md**: Command that retrieves Serena memories + In-Memoria patterns

## Organization Principles

- **Separation**: Agents, commands, templates, and MCP docs in separate locations
- **Entry Point**: AGENTS.md serves as single import point for framework
- **Templates**: Standard templates ensure consistency across new components
- **Modularity**: Each component is self-contained and focused
