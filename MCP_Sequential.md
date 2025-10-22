# Sequential MCP Server

**Purpose**: Multi-step reasoning engine for complex analysis and systematic problem solving

## Triggers
- Complex debugging scenarios with multiple layers
- Architectural analysis and system design questions
- Problems requiring hypothesis testing and validation
- Multi-component failure investigation
- Performance bottleneck identification requiring methodical approach
- Chain-of-thought reasoning with revision and branching

## Tool Usage

### Primary Tools
- `sequential_sequentialthinking`: Core reasoning engine for multi-step analysis with hypothesis testing
- Dynamic thought revision capabilities for refining analysis based on new insights
- Branching logic for exploring multiple solution paths simultaneously
- Evidence gathering and validation mechanisms for systematic problem solving
- Solution hypothesis generation and verification processes

### Secondary Tools
- Problem decomposition utilities for breaking complex issues into manageable steps
- Context management for maintaining analysis state across multiple reasoning steps
- Confidence scoring for evaluating solution reliability
- Progress tracking for monitoring analysis completion
- Integration hooks for connecting with external data sources

## Accessibility
- Integration with external knowledge bases and documentation systems
- Access to code analysis tools for understanding system architecture
- Connection to monitoring and logging systems for performance data
- Real-time data gathering from running applications and services
- Cross-platform compatibility for various development environments

## Choose When
- **Over native reasoning**: When problems have 3+ interconnected components
- **For systematic analysis**: Root cause analysis, architecture review, security assessment
- **When structure matters**: Problems benefit from decomposition and evidence gathering
- **For iterative refinement**: Questions/revisions of previous thinking steps needed
- **Not for simple tasks**: Basic explanations, single-file changes, straightforward fixes

## Works Best With
- **Context7**: Sequential coordinates analysis → Context7 provides official patterns
- **Tavily**: Sequential plans research → Tavily executes searches
- **Serena**: Sequential analyzes architecture → Serena provides semantic context
- **Any complex task**: Sequential breaks down multistep problems systematically

## Examples
```
"why is this API slow?" → Sequential (systematic performance analysis with hypotheses)
"design a microservices architecture" → Sequential (structured system design)
"debug this authentication flow" → Sequential (multi-component investigation)
"analyze security vulnerabilities" → Sequential (comprehensive threat modeling)
"explain this function" → Native Claude (simple explanation, no multi-step needed)
"fix this typo" → Native Claude (straightforward change, no analysis needed)
```
