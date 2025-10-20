# Serena MCP Server

**Purpose**: Semantic code understanding with symbol operations and project memory management

## Triggers
- Symbol-level operations: rename, find references, replace symbol bodies
- Project-wide code navigation using semantic search
- Memory persistence across sessions with read/write/delete operations
- LSP-powered symbol overview and dependency tracking
- Regex-based replacements with context awareness
- Project activation and configuration management

## Choose When
- **Over Morphllm**: For symbol operations with LSP integration, not pattern edits
- **For semantic understanding**: Symbol references, dependency graphs, code structure
- **For memory persistence**: Store/retrieve project context across sessions
- **For symbol refactoring**: Rename functions/classes with reference tracking
- **Not for bulk edits**: Pattern-based transformations across many files

## Works Best With
- **Morphllm**: Serena finds symbols → Morphllm applies pattern transformations
- **Sequential**: Serena provides semantic context → Sequential analyzes architecture
- **In-Memoria**: Serena handles symbol operations → In-Memoria learns patterns

## Examples
```
"rename getUserData everywhere" → Serena (symbol rename with reference tracking)
"find all references to AuthService" → Serena (semantic symbol search)
"get overview of utils.ts symbols" → Serena (LSP-powered symbol overview)
"store this analysis in memory" → Serena (write_memory for session persistence)
"replace calculateTotal function body" → Serena (symbol-level replacement)
"update all console.log calls" → Morphllm (pattern-based bulk replacement)
```
