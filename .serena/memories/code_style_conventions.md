# Code Style and Conventions

## File Naming

- **Agents**: Lowercase with hyphens (e.g., `context-gathering.md`)
- **Commands**: Lowercase (e.g., `load.md`)
- **MCP Docs**: PascalCase with MCP_ prefix (e.g., `MCP_Serena.md`, `MCP_In_Memoria.md`)
- **Templates**: Lowercase with .template suffix (e.g., `agent.template.md`)

## Markdown Structure

### Agent Files
- YAML frontmatter with metadata (agent, description, mode, tools, commands)
- Clear section headers: Triggers, How I Work, Example, MCP Tools
- Direct voice ("I do X")
- Under 100 lines maximum
- Concrete examples over abstract explanations

### Command Files
- YAML frontmatter with metadata (name, description, agents)
- Sections: Context, Behavior, Return Format, Workflow, Examples, Integration
- Under 100 lines maximum
- Clear integration points with agents

### MCP Documentation
- Consistent structure: Purpose, Triggers, Choose When, Works Best With, Examples
- Under 100 lines maximum
- 5-6 items per section
- Examples in format: `"prompt" → Server (explanation)`

## Documentation Standards

- **No Magic references**: Project does not use Magic MCP
- **No SuperClaude framework commands**: MCP docs describe actual MCP capabilities only
- **Concise and direct**: No verbose explanations
- **Show don't tell**: Examples over theory
- **Under 100 lines**: All agent, command, and MCP docs must be under 100 lines

## Patterns

- Use bullet points and structured lists
- Keep explanations brief and actionable
- Separate concerns: One file, one responsibility
- Link related components (AGENTS.md as entry point)
