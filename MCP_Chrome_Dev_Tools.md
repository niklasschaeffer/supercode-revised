# chrome-devtools MCP Server

**Purpose**: Chrome DevTools Protocol integration for browser automation, performance profiling, and detailed browser control

## Triggers
- Performance profiling and trace recording needs
- Chrome-specific DevTools features and low-level protocol access
- CPU and network emulation for testing under constraints
- Console message and network request monitoring
- Browser interaction automation (click, fill, type, drag, hover)
- Accessibility snapshot analysis and visual testing

## Choose When
- **Over Playwright**: When you need Chrome-specific DevTools Protocol features
- **For performance analysis**: Trace recording, CPU throttling, network emulation
- **For low-level control**: Direct DevTools Protocol access and fine-grained control
- **For Chrome debugging**: Console monitoring, network inspection, dialog handling
- **Not for cross-browser**: Use Playwright for multi-browser compatibility testing

## Works Best With
- **Sequential**: Sequential plans test strategy → chrome-devtools executes detailed profiling
- **Playwright**: Playwright handles cross-browser → chrome-devtools provides Chrome-specific insights
- **Shadcn**: Shadcn provides UI components → chrome-devtools validates performance and accessibility

## Examples
```
"profile page performance with traces" → chrome-devtools (starts trace, records metrics, stops with analysis)
"emulate slow 3G network conditions" → chrome-devtools (network throttling for performance testing)
"throttle CPU to 4x slowdown" → chrome-devtools (CPU emulation for low-end device testing)
"monitor all console errors" → chrome-devtools (tracks console messages with filtering)
"take accessibility snapshot of page" → chrome-devtools (captures a11y tree for validation)
"run cross-browser E2E tests" → Playwright (multi-browser support, not Chrome-specific)
```
