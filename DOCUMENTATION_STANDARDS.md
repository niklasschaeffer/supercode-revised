# SuperCode Documentation Standards

**Single Source of Truth for Framework Documentation Structure and Patterns**

## Purpose

This document serves as the centralized authority for all SuperCode framework documentation standards, eliminating redundancy across agents, commands, and templates while ensuring consistency and maintainability.

## Core Documentation Principles

### 1. Reference-Based Architecture
- **Primary References**: All documentation must reference `[@PRINCIPLES.md](./PRINCIPLES.md)` and `[@RULES.md](./RULES.md)`
- **Framework References**: Use `[@AGENTS.md](./AGENTS.md)` and `[@FLAGS.md](./FLAGS.md)` where applicable
- **MCP Standards**: Reference `[@MCP_INTEGRATION_STANDARDS.md](./MCP_INTEGRATION_STANDARDS.md)` for integration patterns
- **No Duplication**: Never repeat content that exists in referenced documents

### 2. Template Compliance
- **Mandatory Sections**: All templates must include required sections as specified
- **Line Limits**: Respect specified line limits for maintainability
- **Frontmatter Standards**: Use exact frontmatter structure with proper YAML formatting
- **Validation**: All generated content must pass structural validation

### 3. Content Consolidation
- **Single Source**: Each concept documented once, referenced elsewhere
- **Pattern Libraries**: Common patterns documented centrally, not repeated
- **Domain-Specific Guidance**: Tool usage patterns documented by domain, not per agent
- **Workflow Standards**: Command workflows follow unified patterns

---

## Agent Documentation Standards

### Agent Structure Template

```yaml
---
agent: agent-name
description: Agent description matching its intended purpose
mode: [primary, subagent]
reasoningEffort: [low, medium, high]
textVerbosity: [low, medium, high]
temperature: [0.1 - 1.0] # Only applicable for primary mode
tools:
  # Only include tools set to false (true tools omitted by convention)
  bash: false
  list: false
  task: false
  WebFetch: false
  TodoRead: false
---
```

### Mandatory Agent Sections

#### 1. Header
```markdown
# ${Agent-Name} - ${Functional-Description}

You are ${Agent-Name}. Describe your role here.
```

#### 2. References (Standardized)
```markdown
## References
- [@PRINCIPLES.md](../PRINCIPLES.md)
- [@RULES.md](../RULES.md)
- [@AGENTS.md](../AGENTS.md) # Only for mode: primary
```

#### 3. Triggers (5 Bullet Points)
- **Pattern**: User action or system state that activates the agent
- **Format**: Action-oriented, specific to agent domain
- **Examples**: "Explicit /generate command invocation", "API endpoint implementation requests"

#### 4. Focus Areas (5 Bullet Points)
- **Pattern**: Core capabilities and domain expertise
- **Format**: Domain-specific with concrete deliverables
- **Structure**: Use **Category**: Description format

#### 5. Tool Usage

##### Primary Tools (Domain-Specific)
- **Reference**: See tool usage patterns by domain below
- **Format**: Tool name with specific application context
- **Examples**: "**Write/Edit**: Create and modify component files"

##### MCP Integrations
```markdown
### MCP Integrations
- **Sequential MCP**: PRIMARY - Systematic requirements analysis, template structure mapping
- **Serena MCP**: Read template files, check for existing components
- **In-Memoria MCP**: Learn generation patterns, developer preferences
- **Context7 MCP**: Provide MCP server documentation patterns
- **Tavily MCP**: Research capabilities and best practices
```

#### 6. Boundaries

##### WILL: (5 Bullet Points)
- **Pattern**: Positive capabilities within scope
- **Format**: Action-oriented, specific to domain
- **Examples**: "Generate template-compliant agents from user requirements"

##### WILL NOT: (5 Bullet Points)
- **Pattern**: Explicit limitations and out-of-scope activities
- **Format**: Clear boundaries, prevention of scope creep
- **Examples**: "Modify existing agents (generation only, not editing)"

#### 7. Success Metrics (5 Bullet Points)
- **Pattern**: Measurable outcomes and performance indicators
- **Format**: Quantifiable where possible, specific to agent purpose
- **Examples**: "Template compliance: 100% of generated files match structure"

#### 8. Compliance Statement
```markdown
***Failing to comply to our Rules and Principles is considered a critical failure of your duties.***
```

---

## Command Documentation Standards

### Command Structure Template

```yaml
---
name: command-name
description: Brief command description (under 80 characters)
---
```

### Mandatory Command Sections

#### 1. Header
```markdown
# /${command-name} $ARGUMENTS

${command-description} about what command does.
```

#### 2. References (Standardized)
```markdown
## References
- [@PRINCIPLES.md](../PRINCIPLES.md)
- [@RULES.md](../RULES.md)
- [@AGENTS.md](../AGENTS.md)
- [@FLAGS.md](../FLAGS.md)
```

#### 3. General Context (Standardized)
```markdown
## General Context
**Invoked Arguments [user_prompt]:** $ARGUMENTS
**Current Directory:** !`pwd`
**Current Folder:** !`basename $(pwd)`
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:**
!`git status --short | grep '^ M'`
```

#### 4. Behavior/Workflow (4-6 Steps)
- **Pattern**: Sequential workflow with clear phases
- **Format**: **Phase Name**: Description format
- **Examples**: "**Requirement Analysis**: Parse feature description"

#### 5. Examples
```markdown
## Examples
```
/${command-name} $ARGUMENTS
```
```

#### 6. Boundaries

##### Will: (3-5 Bullet Points)
- **Pattern**: Specific capabilities within command scope
- **Format**: Action-oriented, measurable outcomes

##### Will Not: (3-5 Bullet Points)
- **Pattern**: Explicit limitations and prevention of misuse

---

## Tool Usage Patterns by Domain

### Development Agents (Frontend, Backend, Database, DevOps)
#### Primary Tools
- **Write/Edit**: Create and modify domain-specific files
- **Read**: Understand existing patterns and conventions
- **Grep**: Find usage patterns and implementations
- **Glob**: Discover project structure and shared utilities
- **TodoWrite**: Track multi-component implementations

#### MCP Integrations
- **Domain-specific MCP**: Tools relevant to technical domain
- **Universal MCP**: Common tools across all development agents

### Research Agents (Deep-Research, Root-Cause Analyst)
#### Primary Tools
- **WebFetch**: Research external documentation and patterns
- **Read**: Analyze existing code and documentation
- **Grep**: Find patterns and relationships
- **TodoWrite**: Track research findings and hypotheses

#### MCP Integrations
- **Tavily MCP**: Comprehensive web search and content extraction
- **Sequential MCP**: Systematic analysis and pattern identification

### Management Agents (Orchestrator, Task Manager, Generator)
#### Primary Tools
- **Read**: Understand project state and requirements
- **Write**: Create documentation and configurations
- **Grep**: Analyze patterns across codebase
- **TodoWrite**: Track complex workflows and decisions

#### MCP Integrations
- **In-Memoria MCP**: Learn patterns and maintain knowledge
- **Sequential MCP**: Systematic planning and validation
- **Serena MCP**: Project management and memory operations

### Quality Agents (QA, Security, Refactoring)
#### Primary Tools
- **Read**: Analyze existing code and patterns
- **Grep**: Find issues and improvement opportunities
- **Write**: Create fixes and improvements
- **Edit**: Modify existing code safely

#### MCP Integrations
- **Domain-specific MCP**: Security analysis, code quality tools
- **Universal MCP**: Common analysis and validation tools

---

## Workflow Patterns

### Command Workflow Standards

#### 1. Analysis Commands (analyze, troubleshoot)
```
**Context Gathering**: Collect project state and requirements
**Pattern Analysis**: Identify patterns and relationships
**Issue Detection**: Find problems and improvement opportunities
**Recommendation Generation**: Provide actionable insights
```

#### 2. Implementation Commands (implement, generate)
```
**Requirement Analysis**: Parse user requirements and context
**Template/Pattern Loading**: Identify appropriate patterns
**Content Generation**: Create implementation following standards
**Validation**: Verify compliance and quality
**Integration**: Integrate with existing codebase
```

#### 3. Management Commands (task, spawn, save)
```
**Context Analysis**: Understand current state and requirements
**Resource Allocation**: Assign appropriate agents or resources
**Execution Coordination**: Manage workflow and dependencies
**Result Integration**: Incorporate outcomes into project
```

#### 4. Maintenance Commands (cleanup, renovate)
```
**State Assessment**: Analyze current project state
**Issue Identification**: Find problems and optimization opportunities
**Remediation Planning**: Plan systematic improvements
**Execution**: Apply fixes and optimizations
```

---

## Reference Patterns

### Standard References by Document Type

#### All Documents
- `[@PRINCIPLES.md](./PRINCIPLES.md)` - Core framework principles
- `[@RULES.md](./RULES.md)` - Framework rules and compliance

#### Agent Documents
- `[@AGENTS.md](./AGENTS.md)` - Agent registry and coordination (primary agents only)

#### Command Documents
- `[@FLAGS.md](./FLAGS.md)` - Command flags and options
- `[@AGENTS.md](./AGENTS.md)` - Agent coordination and delegation

#### MCP Documentation
- `[@MCP_INTEGRATION_STANDARDS.md](./MCP_INTEGRATION_STANDARDS.md)` - MCP integration patterns

### Cross-Reference Patterns

#### Tool Usage
- Instead of describing tools in each agent, reference: "See [Tool Usage Patterns](#tool-usage-patterns-by-domain)"
- Domain-specific guidance documented once, referenced elsewhere

#### Common Patterns
- Workflow patterns documented centrally, referenced by commands
- Success metrics patterns documented by agent type, not per agent

---

## Validation Standards

### Structure Validation
- **Frontmatter**: Valid YAML with all required fields
- **Sections**: All mandatory sections present and properly formatted
- **References**: All references valid and properly formatted
- **Line Limits**: Respect specified limits for maintainability

### Content Validation
- **No Duplication**: Content not duplicated from referenced documents
- **Pattern Compliance**: Follows established patterns from this document
- **Domain Specificity**: Content specific to agent/command domain
- **Completeness**: All required sections populated with meaningful content

### Integration Validation
- **File Placement**: Files placed in correct directories
- **Registry Updates**: AGENTS.md updated for new agents/commands
- **Reference Integrity**: All references resolve correctly
- **Template Compliance**: Generated from appropriate templates

---

## Line Reduction Strategy

### Consolidation Targets
1. **Agent Templates**: Reduce from 74 lines to ~45 lines (39% reduction)
2. **Command Templates**: Reduce from 48 lines to ~30 lines (37% reduction)
3. **Agent Files**: Reduce average from 120 lines to ~70 lines (42% reduction)
4. **Command Files**: Reduce average from 80 lines to ~45 lines (44% reduction)

### Elimination Patterns
1. **Duplicated References**: Replace with centralized reference patterns
2. **Repeated Tool Descriptions**: Use domain-based tool usage patterns
3. **Common Workflow Sections**: Standardize command workflows
4. **Redundant Explanations**: Reference standards instead of repeating

### Reference-Based Approach
1. **"See X" Pattern**: Reference detailed content elsewhere
2. **Domain Patterns**: Document once by domain, reference everywhere
3. **Template Standards**: Single source of template structure
4. **Workflow Libraries**: Common workflows documented centrally

---

## Implementation Guidelines

### For New Agents
1. Use `agent.template.consolidated.md` (to be created)
2. Reference domain-specific tool usage patterns
3. Follow standardized section structure
4. Include only agent-specific content

### For New Commands
1. Use `command.template.unified.md` (to be created)
2. Follow standardized workflow patterns
3. Use consolidated general context
4. Include only command-specific behavior

### For Existing Documentation
1. Migrate to reference-based approach
2. Remove duplicated content
3. Add references to consolidated standards
4. Validate compliance with new standards

---

## Maintenance and Evolution

### Standards Updates
1. **Version Control**: Track changes to documentation standards
2. **Impact Analysis**: Assess changes across all documentation
3. **Migration Planning**: Plan systematic updates to existing docs
4. **Validation**: Ensure all docs comply with updated standards

### Pattern Evolution
1. **New Patterns**: Add emerging patterns to central documentation
2. **Pattern Deprecation**: Remove outdated patterns systematically
3. **Best Practices**: Continuously refine based on usage
4. **Community Input**: Incorporate feedback from agent usage

### Quality Assurance
1. **Automated Validation**: Tools to check compliance
2. **Regular Audits**: Periodic review of documentation quality
3. **Metrics Tracking**: Monitor line reduction and consistency
4. **Continuous Improvement**: Ongoing optimization of standards

---

## Success Metrics

### Quantitative Metrics
- **Line Reduction**: 60% reduction in total documentation lines
- **Duplication Elimination**: 95% reduction in duplicated content
- **Template Compliance**: 100% of new docs follow consolidated standards
- **Reference Integrity**: 100% of references resolve correctly

### Qualitative Metrics
- **Maintainability**: Easier to update and maintain documentation
- **Consistency**: Uniform structure and patterns across all docs
- **Clarity**: Clearer, more focused documentation
- **Developer Experience**: Improved understanding and navigation

### Validation Metrics
- **Generation Speed**: Faster agent/command generation
- **Compliance Rate**: Higher first-time compliance
- **Error Reduction**: Fewer documentation structure errors
- **Integration Success**: Smoother integration of new components

---

**This document serves as the authoritative source for all SuperCode documentation standards. Any deviations must be justified and approved through the framework evolution process.**