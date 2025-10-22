---
name: save
description: Persist session context to Serena memories and In-Memoria intelligence for cross-session continuity
---

# /save $ARGUMENTS

Save session context by capturing work summaries, architectural decisions, and discovered patterns to Serena memories and In-Memoria intelligence for dual MCP persistence.

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

This command orchestrates session persistence through dual MCP integration:

### Serena Integration
1. **Session Analysis**: Analyze conversation context to extract key accomplishments and decisions
2. **Memory Creation**: Use `write_memory` to persist session summaries, decisions, patterns
3. **Context Preparation**: Prepare for the next session with `prepare_for_new_conversation` 
4. **Checkpoint Creation**: Create a resumable state for future sessions
5. **Validation**: Confirm successful persistence and memory integrity

### In-Memoria Integration
1. **Pattern Contribution**: Use `contribute_insights` for coding patterns discovered
2. **Best Practice Storage**: Architectural decisions → reusable intelligence
3. **Optimization Capture**: Performance improvements → learned patterns
4. **Cross-Session Learning**: Build project intelligence over sessions

### Captured Content
1. **Session Summary**: Work achieved, files modified, features implemented
2. **Architectural Decisions**: Design choices, trade-offs, rationale documentation
3. **Pattern Discovery**: Coding patterns, conventions, architectural patterns discovered
4. **Next Session Context**: Incomplete work, blockers, recommended next steps
5. **Intelligence Contributions**: Patterns, best practices, optimizations for In-Memoria
## Return Format

```markdown
## Session Saved

### Serena Memories
- session_YYYY_MM_DD_topic, architectural_decisions, patterns_discovered

### In-Memoria Intelligence
- [N] patterns contributed, [N] best practices, [N] optimizations stored

### Session Summary
Files: [N], Features: [list], Decisions: [list]

### Next Session
Use /load to restore context. Focus: [points]. Blockers: [list].
```
## Workflow
1. **Agent Invocation**:
   - Invoke logging agent via Task tool for session state preservation
   - Agent analyzes session transcript, todos, and changes systematically

2. **Serena Persistence** (logging agent executes):
   - `write_memory(session_summary)` → Save session work recap with clear keys
   - `write_memory(architectural_decisions)` → Update design decisions and rationale
   - `write_memory(patterns_discovered)` → Document discovered patterns and conventions
   - `prepare_for_new_conversation` → Prepare for next session

3. **In-Memoria Persistence** (logging agent executes):
   - `contribute_insights(best_practice)` → Store coding conventions and learnings
   - `contribute_insights(refactor_suggestion)` → Save improvement patterns identified
   - `contribute_insights(optimization)` → Persist performance insights discovered

4. **Consolidation & Validation**:
   - Logging agent returns summary of memories created and insights contributed
   - Validate successful persistence with memory keys and contribution confirmations

## Tool Requirements

**Task**: Invoke logging agent for session preservation (primary orchestration)
**Logging Agent**: Executes Serena write_memory + In-Memoria contribute_insights operations

## Examples

```
/save
# Session summary to Serena + patterns to In-Memoria

/save --checkpoint
# Detailed state with full dual MCP persistence

/save --decision "Chose React for TypeScript"
# Architectural decision to both MCPs

/save --patterns
# Coding patterns to Serena memories + In-Memoria intelligence
```

## Integration

Invoked at session end or checkpoint intervals. Pairs with **/load** for complete session lifecycle: `/load` (READ from Serena + In-Memoria) → work → `/save` (WRITE to Serena + In-Memoria). Dual MCP architecture enables cross-session continuity and intelligent knowledge accumulation.
