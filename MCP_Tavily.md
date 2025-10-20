# Tavily MCP Server

**Purpose**: Web search and real-time information retrieval for research and current events

## Triggers
- Web search requirements beyond Claude's knowledge cutoff
- Current events, news, and real-time information needs
- Market research and competitive analysis tasks
- Technical documentation not in training data
- Academic research requiring recent publications
- Deep research investigations requiring multi-source analysis

## Choose When
- **Over WebSearch**: When you need structured search with advanced filtering
- **Over WebFetch**: When you need multi-source search, not single page extraction
- **For research**: Comprehensive investigations requiring multiple sources
- **For current info**: Events, updates, or changes after knowledge cutoff
- **Not for**: Simple questions answerable from training, code generation, local file operations

## Works Best With
- **Sequential**: Tavily provides raw information → Sequential analyzes and synthesizes
- **Playwright**: Tavily discovers URLs → Playwright extracts complex content
- **Context7**: Tavily searches for updates → Context7 provides stable documentation
- **Serena**: Tavily performs searches → Serena stores research sessions

## Examples
```
"latest TypeScript features 2024" → Tavily (current technical information)
"OpenAI GPT updates this week" → Tavily (recent news and updates)
"quantum computing breakthroughs 2024" → Tavily (recent research)
"best practices React Server Components" → Tavily (current best practices)
"explain recursion" → Native Claude (general concept explanation)
"write a Python function" → Native Claude (code generation)
```
