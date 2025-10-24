---
name: renovate
description: Project renovation command with Renovator agent integration and UltraThink analysis
---

# /renovate $ARGUMENTS

Project renovation command with Renovator agent integration and UltraThink analysis for comprehensive dependency management and renovation workflows.

## References
- [@FLAGS.md](../FLAGS.md)
- [@PRINCIPLES.md](../PRINCIPLES.md)
- [@RULES.md](../RULES.md)

## Context
**Arguments:** $ARGUMENTS
**Directory:** !`pwd`
**Folder:** !`basename $(pwd)`
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Status:** !`git status --short | grep '^ M'`

## Behavior

Comprehensive project renovation through Renovator agent with UltraThink analysis and safety-first risk assessment:

**UltraThink**: Maximum complexity reasoning for renovation strategy and risk mitigation
**Context Analysis**: Dependency evaluation, renovation history, and architectural constraints
**PR Analysis**: Systematic pull request analysis using Forgejo MCP
**Dashboard Reading**: READ-ONLY access to "Renovate Dashboard" issue
**Safety Framework**: Semantic versioning analysis and breaking change prevention
**Renovator Coordination**: Agent activation with comprehensive context
**Decision Framework**: Quality assurance validation and outcome documentation

### Primary Configuration Source
**renovate.json**: Main Renovate-Bot configuration (authoritative source)

### Enhanced Integration Points
**Forgejo MCP**: PR analysis, Dashboard READ-ONLY access, issue tracking
**Safety Framework**: Semantic versioning, compatibility checks, rollback planning

## Return Format

```markdown
## Renovation Analysis Complete

### UltraThink Strategy
- **Complexity**: [High/Medium/Low] renovation complexity
- **Risk Analysis**: [Mitigation strategies]

### Context Analysis
- **Dependencies**: [N] dependency files found
- **Configuration**: renovate.json analysis complete

### PR Analysis Results
- **Open PRs**: [N] dependency update PRs identified
- **Categories**: [Security/Major/Minor/Patch] classified

### Dashboard Overview
- **Renovate Dashboard**: [Found/Not found] - READ-ONLY analysis
- **Pending Updates**: [N] updates with priorities

### Safety Validation
- **Semantic Versioning**: [Breaking change analysis complete]
- **Compatibility**: [Architecture compatibility validated]

### Next Steps
- **Renovator Agent**: Activated with comprehensive context
```

## Workflow

1. **UltraThink Analysis**: Sequential thinking for complex renovation scenarios and risk assessment
2. **Context Gathering**: Discover renovation history, identify dependency files, analyze current state
3. **PR Analysis**: `forgejo_list_repo_pull_requests()` → Analyze open PRs for dependency updates
4. **Dashboard Analysis**: `forgejo_get_issue_by_index()` → READ-ONLY access to "Renovate Dashboard" issue
5. **Safety Framework**: Semantic versioning analysis, compatibility checks, rollback planning
6. **Renovator Activation**: Activate agent with comprehensive context and analysis results
7. **Decision Framework**: Validate decisions, document outcomes, update project memories

## Tool Requirements

**Forgejo MCP**: READ-ONLY Dashboard access and PR analysis
- `forgejo_list_repo_issues`: Find Renovate Dashboard issue
- `forgejo_get_issue_by_index`: Read Dashboard content (READ-ONLY)
- `forgejo_list_repo_pull_requests`: Analyze open dependency PRs
**Sequential MCP**: UltraThink analysis for complex scenarios
**Serena MCP**: Memory operations and project context
**Renovator Agent**: Enhanced dependency management with Forgejo integration
**Glob/Grep**: Dependency file discovery and analysis
**Read**: Configuration analysis (renovate.json as primary source)

## Examples

```
/renovate
# Full renovation with PR analysis and Dashboard reading

/renovate dashboard --read-only
# READ-ONLY access to Renovate Dashboard issue

/renovate prs --analyze
# Analyze open PRs for dependency updates with safety assessment

/renovate safety --validate
# Validate updates with semantic versioning and compatibility checks

/renovate config --validate-renovate-json
# Validate renovate.json configuration as primary source
```

## Integration

Invoked by **orchestrator** for renovation with **renovator** agent using Forgejo MCP. Uses **renovate.json** as primary source. Pairs with **/save** for documenting decisions and **/load** for context.

**Enhanced**: PR analysis, READ-ONLY Dashboard access, safety framework, and UltraThink analysis.
