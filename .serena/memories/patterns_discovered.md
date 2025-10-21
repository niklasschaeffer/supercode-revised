# Patterns Discovered

## Dual MCP Integration Patterns (2025-10-21)

### Session Lifecycle Pattern
```
/load (READ from both MCPs)
  ↓
Work (continuous learning to In-Memoria)
  ↓
/save (WRITE to both MCPs)
```

### Dual Persistence Pattern
- **Explicit**: Human-readable memories in Serena
- **Implicit**: AI-learned patterns in In-Memoria
- **Complementary**: Both systems enhance each other

### Agent Enhancement Pattern
Transform single-purpose agents into dual MCP integration specialists:
1. Add Serena write_memory capabilities
2. Add In-Memoria contribute_insights capabilities
3. Maintain existing core functionality
4. Expand tool usage guidelines

### Command Enhancement Pattern
Upgrade existing commands with dual MCP integration:
1. Preserve existing functionality
2. Add In-Memoria integration alongside Serena
3. Enhance return formats to show both contributions
4. Update workflows for dual operations

## Template Patterns (2025-10-21)

### Command Template Structure
- YAML frontmatter with metadata
- References section for links
- General Context with dynamic git information
- Behavior section with clear integration patterns
- Return Format for consistent outputs
- Workflow for step-by-step operations
- Tool Requirements for implementation
- Examples for usage patterns

### Agent Template Structure
- YAML frontmatter with agent metadata
- Clear role definition and boundaries
- Tool usage guidelines
- MCP integration patterns
- Success metrics for validation

## Integration Patterns (2025-10-21)

### MCP Integration Pattern
1. **Discovery**: List available memories/insights
2. **Loading**: Read relevant context
3. **Processing**: Apply to current work
4. **Contribution**: Add new insights/patterns
5. **Validation**: Confirm successful operations

### Memory Naming Pattern
- Sessions: session_YYYY_MM_DD_topic
- Decisions: architectural_decisions
- Patterns: patterns_discovered
- Project: project_overview

### Intelligence Contribution Pattern
- Type classification (best_practice, optimization, refactor_suggestion)
- Confidence scoring for insight quality
- Impact prediction for value assessment
- Source agent tracking for attribution