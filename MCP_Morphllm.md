# morphllm-fast-apply MCP Server

**Purpose**: Pattern-based code editing engine with token optimization for bulk transformations

## Triggers
- Multi-file edit operations requiring consistent patterns
- Framework updates, style guide enforcement, code cleanup
- Bulk text replacements across multiple files
- Natural language edit instructions with a specific scope
- Token optimization is needed (efficiency gains 30-50%)
- Fast Apply scenarios requiring compressed edits

## Choose When
- **Over Serena**: For pattern-based edits, not symbol operations
- **For bulk operations**: Style enforcement, framework updates, text replacements
- **When token efficiency matters**: Fast Apply scenarios with compression needs
- **For simple-to-moderate complexity**: <10 files, straightforward transformations
- **Not for semantic operations**: Symbol renames, dependency tracking, LSP integration

## Works Best With
- **Serena**: Serena analyzes semantic context → Morphllm executes precise edits
- **Sequential**: Sequential plans edit strategy → Morphllm applies systematic changes
- **In-Memoria**: In-Memoria identifies patterns → Morphllm applies consistent transformations

## Examples
```
"update all React class components to hooks" → Morphllm (pattern transformation)
"enforce ESLint rules across project" → Morphllm (style guide application)
"replace all console.log with logger calls" → Morphllm (bulk text replacement)
"rename getUserData function everywhere" → Serena (symbol operation)
"analyze code architecture" → Sequential (complex analysis)
"explain this algorithm" → Native Claude (simple explanation)
```
