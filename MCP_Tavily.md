# Tavily MCP Server

**Purpose**: Web search and real-time information retrieval for research and current events

## Triggers
- Web search requirements beyond Claude's knowledge cutoff
- Current events, news, and real-time information needs
- Market research and competitive analysis tasks
- Technical documentation not in training data
- Academic research requiring recent publications
- Deep research investigations requiring multi-source analysis

## Tool Usage

### Primary Tools
- `tavily_tavily_search`: Comprehensive web search with advanced filtering and options
- `tavily_tavily_extract`: Content extraction from specific URLs with depth control
- `tavily_tavily_crawl`: Structured web crawling for comprehensive site analysis
- `tavily_tavily_map`: Website mapping for discovering site structure and content
- Real-time search capabilities with time range and domain filtering

### Secondary Tools
- Advanced search depth control for basic vs comprehensive research
- Multi-format content extraction (markdown, text, HTML)
- Image and media search capabilities with descriptions
- Country-specific search boosting for localized results
- News-focused search with time-based filtering

## Accessibility
- Direct web access for real-time information retrieval
- Integration with search engines and web APIs
- Multi-language support for global research capabilities
- Access to current events, news, and trending topics
- Academic and research database integration

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
