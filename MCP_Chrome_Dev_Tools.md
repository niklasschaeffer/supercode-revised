# chrome-devtools MCP Server

**Purpose**: Chrome DevTools Protocol integration for browser automation, performance profiling, and detailed browser control

## Triggers
- Performance profiling and trace recording needs
- Chrome-specific DevTools features and low-level protocol access
- CPU and network emulation for testing under constraints
- Console message and network request monitoring
- Browser interaction automation (click, fill, type, drag, hover)
- Accessibility snapshot analysis and visual testing

## Tool Usage

### Primary Tools
- `chrome-devtools_performance_start_trace` / `chrome-devtools_performance_stop_trace`: Performance profiling with trace recording
- `chrome-devtools_emulate_cpu` / `chrome-devtools_emulate_network`: CPU and network condition emulation
- `chrome-devtools_take_snapshot`: Accessibility tree analysis for a11y validation
- `chrome-devtools_click` / `chrome-devtools_fill` / `chrome-devtools_type`: Browser interaction automation
- `chrome-devtools_list_console_messages` / `chrome-devtools_list_network_requests`: Monitoring and debugging

### Secondary Tools
- `chrome-devtools_navigate_page` / `chrome-devtools_navigate_page_history`: Page navigation control
- `chrome-devtools_resize_page`: Viewport and responsive design testing
- `chrome-devtools_evaluate_script`: JavaScript execution in browser context
- `chrome-devtools_handle_dialog`: Alert and dialog management
- `chrome-devtools_performance_analyze_insight`: Detailed performance analysis

## Accessibility
- Direct Chrome DevTools Protocol access for low-level browser control
- Real browser engine integration for authentic performance profiling
- Network and CPU emulation capabilities for testing under constraints
- Accessibility tree access for comprehensive a11y testing
- Console and network monitoring for debugging and analysis

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
