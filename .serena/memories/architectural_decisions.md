# Architectural Decisions

## Decision: Load-First Context Strategy
**Date**: 2025-10-21
**Decision**: Context-gathering agent must execute /load command BEFORE manual file discovery
**Rationale**: 
- Serena memories contain project decisions and standards
- In-Memoria contains learned patterns and developer preferences
- Loading intelligence first provides 80% of context
- Targeted discovery fills remaining 20% gaps
**Impact**: More efficient context gathering, fewer redundant tool calls

## Decision: No Magic MCP Integration
**Date**: 2025-10-21
**Decision**: Remove all Magic MCP references from documentation
**Rationale**: Project does not use Magic MCP server
**Impact**: All MCP documentation updated to remove Magic, use shadcn or native alternatives

## Decision: 100-Line Maximum for All Documentation
**Date**: 2025-10-21
**Decision**: All agents, commands, and MCP documentation limited to 100 lines
**Rationale**: 
- Enforces conciseness and clarity
- Prevents verbose over-explanation
- Makes documentation scannable and actionable
**Impact**: All documentation rewritten to be concise, direct, example-focused

## Decision: Template-Based Agent Structure
**Date**: 2025-10-21
**Decision**: All agents must follow agent.template.md structure exactly
**Rationale**: Consistency across agent definitions, predictable structure
**Impact**: Context-gathering agent rewritten to match template (Triggers, Focus Areas, Tool Usage, MCP Integrations, Boundaries, Success Metrics)

## Decision: Simple Manifest Format
**Date**: 2025-10-21
**Decision**: Context manifests use Files → Patterns → Decisions → Constraints format
**Rationale**: Simple, actionable, easy to parse for agents
**Impact**: Context-gathering creates manifests in standardized format with clear source attribution
