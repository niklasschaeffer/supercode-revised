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

## File Organization Patterns (2025-10-22)

### Hierarchical Relocation Pattern
Systematic file moves with reference integrity preservation:
```
1. Analysis Phase
   - Identify all files to relocate
   - Map reference dependencies
   - Plan target structure

2. Preparation Phase  
   - Create target directory structure
   - Prepare reference update scripts
   - Validate migration approach

3. Execution Phase
   - Move files to target locations
   - Update all references systematically
   - Verify reference integrity

4. Validation Phase
   - Test all affected functionality
   - Validate reference completeness
   - Generate validation reports
```

### Template Centralization Pattern
Consolidate shared templates in dedicated locations:
- Single source of truth for templates
- Standardized template structure
- Easy maintenance and updates
- Consistent usage across agents/commands

### Reserved Documentation Folder Pattern
Establish special folders for organized documentation:
- `opendocs/` for structured documentation
- Hierarchical organization by function
- Clear separation from code files
- Enterprise-grade documentation standards

## Agent Transformation Patterns (2025-10-22)

### Role Specialization Pattern
Transform generalist agents into specialized roles:
```
1. Role Analysis
   - Identify overlapping responsibilities
   - Define clear specialization boundaries
   - Plan separation of concerns

2. Transformation Design
   - Redesign agent roles and responsibilities
   - Update integration points
   - Preserve core functionality

3. Implementation
   - Transform agent definitions
   - Update all references
   - Maintain backward compatibility

4. Validation
   - Test new role workflows
   - Verify integration functionality
   - Validate improved efficiency
```

### Workflow Orchestration Pattern
Primary agent coordination with specialized support:
- **Primary Agent**: Overall coordination and context gathering
- **Specialized Agents**: Domain-specific refinement and processing
- **Clear Workflow**: Sequential handoffs with defined responsibilities
- **Integration Points**: Well-defined interfaces between agents

### Backward Compatibility Preservation Pattern
Maintain functionality during architectural changes:
- Preserve existing interfaces during transformation
- Gradual migration approach
- Comprehensive testing of compatibility
- Clear documentation of changes

## Reference Integrity Patterns (2025-10-22)

### Comprehensive Reference Update Pattern
Systematic reference maintenance during major changes:
```
1. Reference Discovery
   - Search for all file references
   - Identify import/include statements
   - Map dependency chains

2. Reference Mapping
   - Create old → new location mappings
   - Plan systematic updates
   - Prepare update scripts

3. Systematic Updates
   - Update all references consistently
   - Verify update completeness
   - Test updated functionality

```

4. Integrity Validation
   - Comprehensive testing of affected systems
   - Reference completeness verification
   - Functional validation of changes
```

### Cross-System Reference Pattern
Maintain references across multiple system components:
- Agent definitions and imports
- Command configurations
- Template references
- Documentation links
- Integration point updates