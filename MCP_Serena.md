# Serena MCP Server

**Purpose**: Semantic code understanding with symbol operations and project memory management

## Triggers
- Symbol-level operations: rename, find references, replace symbol bodies
- Project-wide code navigation using semantic search
- Memory persistence across sessions with read/write/delete operations
- LSP-powered symbol overview and dependency tracking
- Regex-based replacements with context awareness
- Project activation and configuration management

## Tool Usage

### Primary Tools
- `serena_find_symbol`: Locate symbols with LSP-powered semantic search and filtering
- `serena_find_referencing_symbols`: Find all references to symbols across the codebase
- `serena_rename_symbol`: Rename symbols with automatic reference tracking
- `serena_replace_symbol_body`: Replace symbol definitions while preserving structure
- `serena_write_memory`: Store project context and analysis in persistent memory

### Secondary Tools
- `serena_get_symbols_overview`: Get comprehensive symbol overview for files
- `serena_search_for_pattern`: Flexible pattern matching across code files
- `serena_replace_regex`: Context-aware regex replacements with validation
- `serena_insert_before_symbol` / `serena_insert_after_symbol`: Precise code insertion
- `serena_read_memory`: Retrieve stored project context and analysis

## Accessibility
- LSP integration for semantic code understanding across multiple languages
- Direct file system access for reading and writing source code
- Project-wide symbol database for cross-file dependency tracking
- Memory persistence system for maintaining context across sessions
- Multi-language support for TypeScript, JavaScript, Python, Java, C#, Go, Rust

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
