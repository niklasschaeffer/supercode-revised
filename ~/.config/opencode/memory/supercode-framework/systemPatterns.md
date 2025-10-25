# SuperCode Framework - System Patterns

## Agent System Architecture

### Agent Categorization Pattern
The framework organizes 19 specialized agents into 5 distinct categories:

#### 1. Primary Agents (1)
- **Orchestrator**: Central coordination and workflow management
  - Triggers: Complex multi-domain tasks, large-scale features, explicit /spawn commands
  - Focus: Context caching, task decomposition, agent matching, workflow coordination
  - Success: >95% task completion, >90% context efficiency, >90% agent alignment

#### 2. Engineering Specialists (7)
- **Backend Engineer**: Server-side development and API architecture
- **Frontend Engineer**: Client-side development and user interfaces  
- **QA Engineer**: Quality assurance and testing strategies
- **Security Engineer**: Security analysis and vulnerability assessment
- **DevOps Engineer**: Deployment pipelines and infrastructure automation
- **Database Engineer**: Database design and optimization
- **Docker Specialist**: Containerization and Docker workflows

#### 3. Architecture & Analysis (4)
- **System Architect**: High-level system design and architecture
- **Refactoring Expert**: Code improvement and optimization strategies
- **Root Cause Analyst**: Problem diagnosis and issue resolution
- **Deep Research Specialist**: Comprehensive research and analysis

#### 4. Workflow & Management (4)
- **Renovator**: Project modernization and updates
- **Git Specialist**: Version control and Git workflows
- **Task Manager**: Task organization and project management
- **Mobile Optimization**: Mobile-first development and responsive design

#### 5. Specialized Tools (3)
- **Context Refinement**: Context optimization and prompt engineering
- **Generator Specialist**: Template-based agent and command generation
- **Logging**: System logging and monitoring strategies

## Command Workflow Patterns

### Consistent Three-Phase Structure
All 13 commands follow a standardized workflow pattern:

1. **Analysis Phase**: Context gathering and requirement assessment
2. **Action Phase**: Core functionality execution
3. **Finalization Phase**: Validation and documentation

### Command Categories
- **Setup Commands**: initialize, load, save
- **Development Commands**: implement, build, generate
- **Optimization Commands**: improve, renovate, cleanup
- **Management Commands**: spawn, task, git, troubleshoot

## Template Standardization Patterns

### Unified Template Structure
```yaml
---
agent: agent-name
mode: [primary, subagent]
reasoningEffort: [low, medium, high]
textVerbosity: [low, medium, high]
temperature: [0.1 - 1.0]
tools: { tool: boolean }
---
```

### Standardized Sections
1. **Important File References**: Links to PRINCIPLES.md, RULES.md, AGENTS.md
2. **Triggers**: 3-5 specific activation conditions
3. **Focus Areas**: 3-5 key responsibilities with metrics
4. **Tool Usage**: Primary tools + MCP integrations with examples
5. **Boundaries**: Clear WILL/WILL NOT sections
6. **Success Metrics**: 3-5 performance indicators with targets

## Behavioral Flag System

### Flag Categories
25+ behavioral flags provide fine-grained execution control:

#### Mode Activation Flags
- --brainstorm: Ideation and creative exploration
- --introspect: Self-analysis and optimization
- --task-manage: Task organization and tracking

#### MCP Selection Flags
- --c7: Context7 documentation access
- --seq: Sequential complex reasoning
- --shadcn: UI component development
- --play: Playwright testing

#### Analysis Depth Flags
- --think: Basic reasoning
- --think-hard: Deep analysis
- --ultrathink: Maximum analytical depth

#### Execution Control Flags
- --orchestrate: Multi-agent coordination
- --token-efficient: Optimized token usage
- --safe-mode: Conservative execution

## MCP Integration Patterns

### Memory Management
- **Knowledge Graph**: Entity relationships, persistent knowledge storage
- **Memory Bank**: Project-based documentation, structured file organization

### Development Operations
- **Desktop Commander**: Local environment and file system operations
- **Sequential MCP**: Complex reasoning and workflow orchestration
- **Context7**: Framework-specific documentation and best practices

### Testing and Quality
- **Playwright**: E2E testing automation
- **Chrome DevTools**: Browser debugging and performance analysis

### Tools and Utilities
- **Tavily**: Web search and content extraction
- **Forgejo**: Version control and repository management
- **Shadcn**: UI component library integration
- **Prompt Kit**: Template-based prompt management

## Quality and Compliance Patterns

### Template Compliance Framework
- 100% template adherence across all components
- Standardized frontmatter with YAML configuration
- Real usage examples instead of placeholders
- Built-in validation checking and structure verification

### Documentation Standards
- Living documentation system auto-generated from code analysis
- Comprehensive README with practical examples
- API documentation derived from type definitions
- Component documentation from props and interfaces

### Validation Workflows
- Template compliance validation with automated checking
- Documentation compliance audits with quality metrics
- Feature approval checklists with multi-stage validation
- Quality metrics tracking with performance indicators

## Dual Memory Architecture Patterns

### Memory Bank Organization
```
memory-bank-root/
├── projectbrief.md      # Core requirements and goals
├── productContext.md    # Problem context and solutions
├── systemPatterns.md    # Architecture and patterns
├── techContext.md       # Technology stack and setup
├── activeContext.md     # Current focus and decisions
├── progress.md          # Implementation status
└── features/           # Feature specifications
```

### Knowledge Graph Structure
- **Entities**: Framework components, technologies, patterns
- **Relationships**: Dependencies, integrations, workflows
- **Observations**: Configuration details, usage patterns, outcomes
- **Contexts**: Project-specific knowledge organization

## Integration Patterns

### Multi-Agent Orchestration
- Central orchestrator for task decomposition and agent matching
- Specialist agent selection based on domain requirements
- Workflow coordination with dependency management
- Progressive enhancement through agent collaboration

### System Integration
- Modular architecture with clear separation of concerns
- Standardized interfaces for agent communication
- Consistent error handling and logging patterns
- Scalable plugin architecture for capability extension