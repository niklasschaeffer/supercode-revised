---
name: renovate
description: Project renovation command with Renovator agent integration and UltraThink analysis
---

# /renovate $ARGUMENTS

Project renovation command with Renovator agent integration and UltraThink analysis for comprehensive dependency management and renovation workflows.

## References
- [@FLAGS.md](../FLAGS.md)

## General Context
**Invoked Arguments [user_prompt]:** $ARGUMENTS
**Current Directory:** !`pwd`
**Current Folder:** !`basename $(pwd)`
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:**
!`git status --short | grep '^ M'`

## Behavior

Orchestrates comprehensive project renovation through Renovator agent integration with UltraThink analysis and systematic risk assessment:

**UltraThink Integration**: Maximum complexity reasoning for renovation strategy, multi-agent coordination, and risk mitigation planning
**Context Analysis**: Project dependency evaluation, renovation history discovery, and architectural constraint assessment
**Renovator Coordination**: Seamless agent activation with comprehensive context and strategic guidance
**Decision Framework**: Quality assurance validation and renovation outcome documentation

### Primary Configuration Source
**renovate.json**: Main configuration file for Renovate-Bot settings, renovation rules, and dependency management policies (referenced as authoritative source for agent configuration)

## Return Format

```markdown
## Renovation Analysis Complete

### UltraThink Strategy
- **Complexity Assessment**: [High/Medium/Low] renovation complexity identified
- **Risk Analysis**: [Detailed risk assessment with mitigation strategies]
- **Multi-Agent Coordination**: [Orchestrator-Renovator workflow established]
- **Decision Framework**: [Strategic renovation plan validated]

### Context Analysis
- **Project Dependencies**: [N] dependency files identified
- **Renovation History**: [Previous patterns and decisions discovered]
- **Architectural Constraints**: [Project-specific limitations and requirements]
- **Configuration Source**: renovate.json analysis complete

### Renovation Plan
- **Scope**: [Specific renovation targets and boundaries]
- **Strategy**: [Systematic approach with risk mitigation]
- **Priority**: [Security/Stability/Feature updates prioritized]
- **Validation**: [Quality assurance checkpoints established]

### Next Steps
- **Renovator Agent**: Activated with comprehensive context
- **Risk Mitigation**: [Specific safeguards implemented]
- **Quality Gates**: [Validation criteria defined]
- **Documentation**: [Renovation decisions recorded]
```

## Workflow

1. **UltraThink Analysis Phase**:
   - Sequential thinking for complex renovation scenarios and risk assessment
   - Multi-agent coordination strategy development between orchestrator and renovator
   - Decision framework establishment with quality assurance integration
   - Maximum complexity reasoning applied to renovation planning

2. **Context Gathering Phase**:
   - `serena_list_memories()` → Discover renovation history and patterns
   - `serena_read_memory(architectural_decisions)` → Load project constraints and decisions
   - `glob("**/package.json", "**/requirements.txt", "renovate.json")` → Identify dependency and configuration files
   - `grep("dependencies|devDependencies|renovate")` → Analyze current dependency state and renovation setup

3. **Renovator Activation Phase**:
   - Activate renovator agent with comprehensive context and risk assessment
   - Provide renovation strategy and UltraThink analysis results
   - Coordinate orchestrator-renovator workflow with clear handoff
   - Establish quality assurance checkpoints and validation criteria

4. **Decision Framework Phase**:
   - Validate renovation decisions against project stability requirements
   - Ensure quality assurance standards are met throughout renovation process
   - Document renovation outcomes, recommendations, and lessons learned
   - Update project memories with renovation decisions and patterns

## Tool Requirements

**Sequential MCP**: UltraThink analysis for complex renovation scenarios and multi-agent coordination
**Serena MCP**: Memory operations for renovation history, architectural decisions, and project context
**Renovator Agent**: Specialized dependency management and renovation execution
**Glob/Grep**: Dependency file discovery and configuration analysis
**Read**: Configuration file analysis (renovate.json as primary source)

## Examples

```
/renovate
# Full renovation analysis with UltraThink strategy and risk assessment

/renovate dependencies --scope=security
# Security-focused dependency renovation with comprehensive risk analysis

/renovate project --target=package.json
# Targeted package.json renovation with architectural constraint validation

/renovate all --risk-assessment=high
# Comprehensive project renovation with maximum risk mitigation

/renovate config --validate-renovate-json
# Validate and analyze renovate.json configuration as primary source

/renovate history --analyze-patterns
# Analyze past renovation decisions and patterns from memories
```

## Integration

Invoked by **orchestrator** for comprehensive project renovation and dependency management. Works with **renovator** agent for specialized renovation execution. Integrates with **Serena** for renovation history and architectural decisions. Uses **renovate.json** as primary configuration source for agent setup and renovation rules. Pairs with **/save** for documenting renovation decisions and **/load** for understanding renovation context. UltraThink analysis ensures maximum complexity reasoning for high-stakes renovation scenarios with systematic risk assessment and multi-agent coordination.
