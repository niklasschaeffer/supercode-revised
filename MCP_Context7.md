# Context7 MCP Server

**Purpose**: Official library documentation lookup and framework pattern guidance

## Triggers
- Import statements: `import`, `require`, `from`, `use`
- Framework keywords: React, Vue, Angular, Next.js, Express, etc.
- Library-specific questions about APIs or best practices
- Need for official documentation patterns vs generic solutions
- Version-specific implementation requirements
- Need for curated, up-to-date library documentation

## Choose When
- **Over WebSearch**: When you need curated, version-specific documentation
- **Over native knowledge**: When implementation must follow official patterns
- **For frameworks**: React hooks, Vue composition API, Angular services
- **For libraries**: Correct API usage, authentication flows, configuration
- **Not for general questions**: Simple explanations not requiring official docs

## Works Best With
- **Sequential**: Context7 provides docs → Sequential analyzes implementation strategy
- **Shadcn**: Context7 supplies framework patterns → Shadcn provides component implementations
- **Tavily**: Context7 for stable docs → Tavily for latest updates and news

## Examples
```
"implement React useEffect" → Context7 (official React patterns and documentation)
"add authentication with Auth0" → Context7 (official Auth0 SDK documentation)
"migrate to Vue 3" → Context7 (official Vue 3 migration guide)
"optimize Next.js performance" → Context7 (official Next.js optimization patterns)
"explain recursion" → Native Claude (general concept, no library docs needed)
"latest TypeScript news" → Tavily (current events, not library documentation)
```
