# Task Completion Checklist

When completing a task in SuperCode framework:

## Documentation

- [ ] **Line Count**: Verify all agent/command/MCP docs are under 100 lines
- [ ] **Consistency**: Follow template structure (agent.template.md, command.template.md, MCP_Server.template.md)
- [ ] **Examples**: Include concrete examples, not abstract theory
- [ ] **No Magic**: Ensure no Magic MCP references (project doesn't use it)
- [ ] **Links**: Update AGENTS.md if adding new agents/commands/MCP docs

## File Organization

- [ ] **Correct Location**: 
  - Agents in `/agent`
  - Commands in `/command`
  - MCP docs in root
  - Templates in `/templates`
- [ ] **Naming Convention**: Follow project naming standards
- [ ] **Frontmatter**: Include proper YAML metadata

## Code Quality

- [ ] **Direct Voice**: Use "I do X" for agents
- [ ] **Concise**: Remove verbose explanations
- [ ] **Actionable**: Show don't tell with examples
- [ ] **Integration**: Document how components work together

## Testing

- [ ] **Verify Line Counts**: `wc -l <files>` to check under 100 lines
- [ ] **Read Files**: Verify content accuracy
- [ ] **Check Links**: Ensure AGENTS.md links are correct

## Memory Updates

- [ ] **Update Memories**: If architectural decisions made, write to Serena memory
- [ ] **Document Patterns**: If new patterns established, note in In-Memoria

## Final Verification

- [ ] All files follow templates
- [ ] All documentation under 100 lines
- [ ] AGENTS.md updated if needed
- [ ] Examples are concrete and clear
- [ ] No SuperClaude-specific commands in MCP docs
