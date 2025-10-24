---
name: generate
description: Generate template-compliant agents, commands, or MCP documentation from requirements
---

# /generate $ARGUMENTS

Generate new framework components (agents, commands, MCP documentation) from templates with automatic validation and integration through the Generator-Specialist agent.

## References
- [@FLAGS.md](../FLAGS.md)
- [@PRINCIPLES.md](../PRINCIPLES.md)
- [@RULES.md](../RULES.md)

## General Context
**Invoked Arguments [user_prompt]:** $ARGUMENTS
**Current Directory:** !`pwd`
**Current Folder:** !`basename $(pwd)`
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:**
!`git status --short | grep '^ M'`

## Behavior

Invokes Generator-Specialist agent for template-compliant component generation:

**Requirement Analysis**: Parse user request to identify type (agent/command/MCP), extract specifications
**Template Loading**: Read the appropriate template file, understand structure and required sections
**Content Generation**: Populate template with requirements, ensure all sections complete
**Validation**: Verify structure compliance, line limits, frontmatter correctness
**Integration**: Write a file to correct location, update AGENTS.md automatically

## Return Format

```markdown
## Generation Complete

### File Created
**Type**: [Agent/Command/MCP Documentation]
**Name**: [component-name]
**Location**: [file path]
**Size**: [N lines, within template limits]

### Template Compliance
✅ Frontmatter complete and valid
✅ All required sections present ([N]/[N])
✅ Structure matches template exactly
✅ Line count within limits ([N]/[limit] lines)

### Integration
✅ File written to [agent/ or command/ or root]
✅ AGENTS.md updated with registration
✅ Framework recognizes a new component
```

## Workflow

1. **Requirement Analysis**:
   - Parse user request to identify type (agent/command/MCP documentation)
   - Extract specifications: name, description, purpose, tools, triggers, etc.
   - Validate requirements completeness before proceeding

2. **Template Loading**:
   - Read the appropriate template file (agent.template.md, command.template.md, MCP_Server.template.md)
   - Understand required structure, sections, frontmatter fields
   - Identify mandatory vs. optional sections for the component type

3. **Content Generation**:
   - Populate the template with user requirements systematically
   - Generate all required sections with meaningful content (no placeholders)
   - Ensure proper formatting, bullet counts (5 for agents), structure compliance

4. **Validation & Integration**:
   - Verify the structure matches the template exactly (frontmatter, sections, formatting)
   - Check line count within limits (100 for agents, 60 for commands)
   - Write a file to the correct directory, update AGENTS.md registration

## Tool Requirements

**Task**: Invoke generator-specialist agent for template-driven component generation
**Generator-Specialist**: Executes systematic generation with validation and integration

## Examples

```
/generate agent "performance-optimizer" --description "Optimize code and system performance"
# Generates agent/performance-optimizer.md from agent.template.md

/generate command "benchmark" --agent "performance-optimizer" --description "Run benchmarks"
# Generates command/benchmark.md from command.template.md

/generate mcp "MCP_Performance_Monitor" --description "Performance monitoring integration"
# Generates MCP_Performance_Monitor.md from MCP_Server.template.md

/generate agent "data-engineer" --tools "read,write,bash,grep,glob" --reasoning high
# Generates agent with specific tool configuration and reasoning effort level
```

## Integration

Invoked for framework expansion with new agents, commands, or MCP documentation. Ensures all generated components follow template standards and integrate seamlessly. Works with /improve for refining generated components and /load for understanding existing framework patterns.
