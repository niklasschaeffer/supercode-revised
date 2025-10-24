---
name: build
description: Unified command for implementation, orchestration, and improvement tasks
---

# /build $ARGUMENTS

Unified command that consolidates /implement, /spawn, and /improve functionality for comprehensive task execution with intelligent mode selection and specialist agent coordination.

## References
- [@PRINCIPLES.md](../PRINCIPLES.md)
- [@RULES.md](../RULES.md)
- [@AGENTS.md](../AGENTS.md)
- [@FLAGS.md](../FLAGS.md)
- [@DOCUMENTATION_STANDARDS.md](../DOCUMENTATION_STANDARDS.md)

## General Context
**Invoked Arguments [user_prompt]:** $ARGUMENTS
**Current Directory:** !`pwd`
**Current Folder:** !`basename $(pwd)`
**Git Branch:** !`git rev-parse --abbrev-ref HEAD`
**Git Status:**
!`git status --short | grep '^ M'`

## Behavior

Intelligent task execution with automatic mode detection and specialist agent coordination:

**Mode Detection**: Auto-detect task type (implement/orchestrate/improve) based on complexity and requirements
**Unified Workflow**: Consolidated analysis, planning, execution, and validation phases
**Agent Coordination**: Intelligent specialist agent selection and delegation
**Quality Integration**: Built-in security validation, testing, and documentation

## Mode Selection

### Implementation Mode (Default)
**Trigger**: `--type implement` or auto-detection for feature creation
**Behavior**: Direct code generation with optional delegation
**Use Cases**: New features, components, APIs, services

### Orchestration Mode  
**Trigger**: `--type orchestrate` or complex multi-domain tasks
**Behavior**: Multi-agent task decomposition and coordination
**Use Cases**: Full-stack features, complex integrations, specialist coordination

### Improvement Mode
**Trigger**: `--type improve` or code quality focus
**Behavior**: Systematic refactoring and quality enhancement
**Use Cases**: Code optimization, complexity reduction, pattern application

## Return Format

```markdown
## Build Task Complete

### Task Analysis
- **Type**: [implement|orchestrate|improve] | **Complexity**: [low|medium|high]
- **Mode**: [auto-detected|explicit] | **Agents**: [N agents involved]

### Execution Summary
- **Files**: [N] created/modified
- **Agents**: [List of agents used]
- **Duration**: [Time taken]

### Results
[Detailed results based on mode type]

### Validation
✅ Quality standards ✅ Security ✅ Performance ✅ Documentation
```

## Workflow

**Phase 1: Analysis & Planning**
- Parse requirements and detect task complexity
- Auto-select appropriate mode (implement/orchestrate/improve)
- Identify required agents and resources
- Plan execution approach with validation checkpoints

**Phase 2: Execution**
- **Implementation**: Generate code with framework-specific best practices
- **Orchestration**: Coordinate specialist agents for complex tasks
- **Improvement**: Apply systematic refactoring with validation

**Phase 3: Integration & Validation**
- Quality validation and security checks
- Documentation updates and usage examples
- Performance optimization and testing integration

## Tool Requirements

**Primary Tools**:
- **Write/Edit/MultiEdit**: Direct code generation and modification
- **Task Tool**: Agent invocation and specialist coordination
- **Read/Grep/Glob**: Project analysis and pattern detection

**MCP Integration**:
- **Sequential MCP**: Complex workflow planning and dependency analysis
- **Context7 MCP**: Framework patterns and official documentation
- **Serena MCP**: Symbol-level refactoring and code intelligence
- **Shadcn MCP**: UI component generation for frontend features

## Examples

### Implementation Examples
```bash
/build user profile component
# Implementation mode: Creates React/Vue component with form, validation

/build --type implement REST API for authentication
# Explicit implementation: API endpoints, middleware, security

/build --safe --with-tests search functionality
# Implementation with comprehensive testing and validation
```

### Orchestration Examples
```bash
/build "Build full-stack authentication system"
# Orchestration mode: Coordinates backend, frontend, security agents

/build --type orchestrate --delegate "Implement 5 microservices"
# Multi-agent coordination for concurrent service development

/build --orchestrate "Complete security audit and remediation"
# Specialist coordination for comprehensive security tasks
```

### Improvement Examples
```bash
/build --type improve src/api/
# Improvement mode: Systematic code quality enhancement

/build --improve --focus complexity src/utils/helpers.js
# Targeted complexity reduction with validation

/build --improve --safe --patterns legacy-module
# Safe pattern application with modern design principles
```

### Advanced Examples
```bash
/build --type orchestrate --parallel "Migrate legacy system to microservices"
# Complex orchestration with parallel execution

/build --type implement --framework react --with-tests user dashboard
# Framework-specific implementation with testing

/build --type improve --performance --patterns data-processing pipeline
# Performance-focused improvement with pattern application
```

## Flag Reference

### Mode Selection
- `--type [implement|orchestrate|improve]`: Explicit mode selection
- `--auto-detect`: Enable automatic mode detection (default)

### Implementation Flags
- `--framework [react|vue|angular|express]`: Framework specification
- `--with-tests`: Generate comprehensive test suites
- `--safe`: Extra validation and rollback preparation

### Orchestration Flags
- `--delegate`: Enable specialist agent delegation
- `--parallel`: Allow parallel agent execution (when safe)
- `--agents [agent1,agent2]`: Specify preferred agents

### Improvement Flags
- `--focus [complexity|performance|patterns]`: Improvement focus area
- `--safe`: Extra validation gates and incremental changes
- `--patterns`: Apply modern design patterns

### Common Flags
- `--verbose`: Detailed execution output
- `--dry-run`: Preview changes without execution
- `--validate-only`: Run validation without modifications

## Migration Guide

### From /implement
```bash
# Old: /implement user profile component
# New: /build user profile component
# Or: /build --type implement user profile component
```

### From /spawn
```bash
# Old: /spawn "Build full-stack authentication system"
# New: /build "Build full-stack authentication system"
# Or: /build --type orchestrate "Build full-stack authentication system"
```

### From /improve
```bash
# Old: /improve src/api/
# New: /build --type improve src/api/
```

## Backward Compatibility

**Deprecation Warnings**: Old commands will show migration suggestions
**Grace Period**: Old commands remain functional for transition period
**Auto-Migration**: Suggestions for equivalent /build commands
**Documentation**: Updated references point to unified /build command

## Integration

Replaces /implement, /spawn, and /improve with unified functionality while maintaining all capabilities through intelligent mode selection. Provides consistent workflow patterns, reduced command complexity, and improved user experience through automatic behavior detection.

**Command Count Reduction**: 3 commands → 1 command (67% reduction)
**Overlap Elimination**: 70% functionality overlap consolidated
**User Experience**: Simplified interface with intelligent defaults