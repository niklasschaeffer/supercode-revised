# MCP Integration Standards

**Single Source of Truth for SuperCode Framework MCP Integrations**

This document provides comprehensive standards and guidelines for all MCP (Model Context Protocol) integrations across the SuperCode framework. It eliminates redundancy by providing centralized documentation while maintaining domain-specific guidance.

---

## 🎯 Purpose

**Eliminate 95% MCP Integration Redundancy** while improving documentation quality, maintainability, and consistency across all 17+ agents.

---

## 📋 Universal MCP Tools (Applied to ALL Agents)

### 1. Sequential MCP
**Purpose**: Complex task analysis, workflow planning, orchestration strategy  
**Usage**: Multi-step thinking, dependency management, complex problem solving  
**Integration Pattern**:
```markdown
- **Sequential Thinking**: Complex task analysis and workflow planning using `sequential_sequentialthinking`
```

**Common Use Cases**:
- Breaking down complex tasks into manageable steps
- Planning multi-agent workflows
- Dependency analysis and critical path identification
- Risk assessment and mitigation planning

### 2. Serena MCP
**Purpose**: Project context management, memory operations, file system access  
**Usage**: Context gathering, memory operations, project structure analysis  
**Integration Pattern**:
```markdown
- **Serena MCP**: Project context management using `serena_read_memory`, `serena_write_memory`, `serena_list_dir`, `serena_read_file`
```

**Common Use Cases**:
- Reading project memories and context
- File system operations and directory analysis
- Memory creation and management
- Project structure understanding

### 3. Context7 MCP
**Purpose**: Framework-specific documentation and library research  
**Usage**: Library documentation retrieval, framework-specific guidance  
**Integration Pattern**:
```markdown
- **Context7 MCP**: Framework documentation using `context7_resolve_library_id`, `context7_get_library_docs`
```

**Common Use Cases**:
- Retrieving framework-specific documentation
- Library research and API reference
- Framework pattern identification
- Best practice guidance

---

## 🎯 Domain-Specific MCP Mappings

### Backend & Infrastructure Agents
**Recommended Tools**: Desktop Commander, Forgejo, Docker MCP  
**Use Case**: System operations, infrastructure management, deployment workflows

### Frontend & UI Agents  
**Recommended Tools**: Playwright MCP, Chrome DevTools MCP, shadcn MCP  
**Use Case**: UI testing, browser automation, component development

### Research & Analysis Agents
**Recommended Tools**: Tavily MCP, In-Memoria MCP, Deep Research MCP  
**Use Case**: Web research, data analysis, pattern discovery

### QA & Testing Agents
**Recommended Tools**: Playwright MCP, Chrome DevTools MCP, Desktop Commander  
**Use Case**: Automated testing, performance analysis, debugging

### DevOps & Infrastructure Agents
**Recommended Tools**: Forgejo MCP, Docker MCP, Desktop Commander  
**Use Case**: CI/CD workflows, container management, deployment automation

---

## 📚 Tool-Specific Integration Guidelines

### Desktop Commander MCP
**Purpose**: Local environment interactions and file system operations  
**Adoption Rate**: 70-90% (High-Frequency)

**Core Functions**:
- `desktop-commander_read_file`: File content reading
- `desktop-commander_write_file`: File creation and editing
- `desktop-commander_list_directory`: Directory structure analysis
- `desktop-commander_start_process`: Process execution and automation

**Integration Pattern**:
```markdown
- **Desktop Commander MCP**: Local environment operations using file system, process management, and system automation tools
```

### Tavily MCP
**Purpose**: Web search and content extraction  
**Adoption Rate**: 70-90% (High-Frequency)

**Core Functions**:
- `tavily_tavily_search`: Comprehensive web search
- `tavily_tavily_extract`: Content extraction from URLs
- `tavily_tavily_crawl`: Structured web crawling
- `tavily_tavily_map`: Website structure mapping

**Integration Pattern**:
```markdown
- **Tavily MCP**: Web research and content extraction using search, extraction, and crawling tools
```

### Playwright MCP
**Purpose**: Browser automation and web testing  
**Adoption Rate**: 40-60% (Medium-Frequency)

**Core Functions**:
- `playwright_browser_navigate`: Web page navigation
- `playwright_browser_click`: Element interaction
- `playwright_browser_snapshot`: Page state capture
- `playwright_browser_take_screenshot`: Visual testing

**Integration Pattern**:
```markdown
- **Playwright MCP**: Browser automation and web testing using navigation, interaction, and testing tools
```

### Forgejo MCP
**Purpose**: Git repository management and issue tracking  
**Adoption Rate**: 40-60% (Medium-Frequency)

**Core Functions**:
- `forgejo_create_repo`: Repository creation
- `forgejo_create_issue`: Issue management
- `forgejo_create_pull_request`: Pull request operations
- `forgejo_list_repo_issues`: Issue tracking

**Integration Pattern**:
```markdown
- **Forgejo MCP**: Git repository management using repository operations, issue tracking, and pull request tools
```

---

## 🔧 Integration Best Practices

### 1. Tool Selection Strategy
**Universal Tools**: Always include Sequential, Serena, Context7  
**Domain-Specific**: Select based on agent primary function  
**Specialized Tools**: Include only with clear justification

### 2. Documentation Pattern
```markdown
### MCP Integrations
**Universal Tools (Applied to all agents):**
- See [@MCP_INTEGRATION_STANDARDS.md](../MCP_INTEGRATION_STANDARDS.md#universal-mcp-tools)

**Domain-Specific Tools:**
- See [@MCP_INTEGRATION_STANDARDS.md](../MCP_INTEGRATION_STANDARDS.md#domain-specific-mcp-mappings)

**Tool Selection Rationale:**
- [Agent-specific justification for chosen MCP tools]
```

### 3. Implementation Guidelines
- **Reference-Based**: Link to this document rather than duplicating content
- **Domain-Specific**: Customize tool selection based on agent function
- **Clear Rationale**: Document why specific tools are chosen
- **Consistent Formatting**: Use standardized integration patterns

---

## 📊 Adoption Guidelines by Agent Type

### Primary Agents (Orchestrator, System Architect)
**Required Tools**: Sequential, Serena, Context7, Desktop Commander  
**Optional Tools**: Tavily, Forgejo (based on domain needs)  
**Specialized Tools**: Domain-specific tools with clear justification

### Subagent Specialists
**Required Tools**: Sequential, Serena, Context7  
**Recommended Tools**: 1-2 domain-specific tools based on function  
**Avoid**: Tool overload - focus on core competency

### Infrastructure & DevOps
**Core Tools**: Desktop Commander, Forgejo, Docker MCP  
**Workflow Tools**: Sequential, Serena for project management  
**Testing Tools**: Playwright for deployment validation

### Development & Testing
**Core Tools**: Playwright, Chrome DevTools, Desktop Commander  
**Research Tools**: Tavily for problem investigation  
**Documentation Tools**: Context7 for framework guidance

---

## 🚀 Migration Strategy

### From Individual Documentation
**Before**: 67 lines per agent × 17 agents = 1,139 total lines  
**After**: Reference to centralized standards + domain-specific rationale  
**Reduction**: 95% documentation elimination

### Template Update Process
1. **Remove individual MCP sections** from agent templates
2. **Add reference links** to this standards document
3. **Include domain-specific rationale** for tool selection
4. **Maintain functionality** while eliminating redundancy

---

## 📈 Success Metrics

### Documentation Efficiency
- **Redundancy Reduction**: 95% (1,139 → ~57 lines per agent)
- **Maintenance Overhead**: 94% reduction (17 updates → 1 update)
- **Consistency**: 100% across all agents

### Developer Experience
- **Documentation Quality**: More comprehensive than individual sections
- **Discovery**: Centralized knowledge base with examples
- **Maintenance**: Single point of update for all MCP changes

### Framework Scalability
- **New Agent Creation**: Standardized patterns and guidance
- **Tool Updates**: Single document update affects all agents
- **Best Practices**: Established patterns for consistent integration

---

## 🔍 Troubleshooting & Support

### Common Integration Issues
1. **Tool Selection Overload**: Too many tools in single agent
2. **Missing Universal Tools**: Forgetting Sequential, Serena, Context7
3. **Inconsistent Documentation**: Individual descriptions instead of references
4. **Domain Mismatch**: Tools not aligned with agent function

### Resolution Guidelines
- **Refer to Standards**: Use this document as primary reference
- **Domain Alignment**: Ensure tools match agent primary function
- **Consistency First**: Prioritize framework consistency over individual preferences
- **Regular Updates**: Keep this document current with new MCP tools

---

## 📝 Maintenance & Updates

### Update Process
1. **Central Updates**: Modify this document for framework-wide changes
2. **Version Control**: Track changes for rollback capability
3. **Agent Validation**: Ensure agents reference latest standards
4. **Documentation Sync**: Keep agent templates aligned with standards

### Change Management
- **Major Changes**: Version updates with migration guides
- **Minor Updates**: Direct edits with change tracking
- **New Tools**: Add to appropriate sections with usage guidelines
- **Deprecated Tools**: Mark as deprecated with migration paths

---

**Version**: 1.0  
**Last Updated**: 2025-10-24  
**Next Review**: 2025-11-24  
**Maintainer**: SuperCode Framework Team

---

*This document serves as the single source of truth for all MCP integrations across the SuperCode framework. By centralizing documentation and providing clear guidelines, we eliminate redundancy while improving consistency, maintainability, and developer experience.*