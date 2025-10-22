# Playwright MCP Server

**Purpose**: Browser automation and E2E testing with real browser interaction

## Triggers
- Browser testing and E2E test scenarios
- Visual testing, screenshot, or UI validation requests
- Form submission and user interaction testing
- Cross-browser compatibility validation
- Performance testing requiring real browser rendering
- Accessibility testing with automated WCAG compliance

## Tool Usage

### Primary Tools
- `playwright_browser_navigate`: Navigate to URLs and control browser navigation
- `playwright_browser_click`: Perform click interactions on web page elements
- `playwright_browser_type`: Type text into input fields and form elements
- `playwright_browser_snapshot`: Capture accessibility snapshots for element analysis
- `playwright_browser_take_screenshot`: Take screenshots for visual testing and validation

### Secondary Tools
- `playwright_browser_fill_form`: Fill multiple form fields simultaneously
- `playwright_browser_select_option`: Select dropdown options and form controls
- `playwright_browser_wait_for`: Wait for elements or text to appear/disappear
- `playwright_browser_console_messages`: Monitor console output and errors
- `playwright_browser_network_requests`: Track and analyze network activity

## Accessibility
- Real browser engine access for authentic user interaction simulation
- Cross-browser compatibility support (Chrome, Firefox, Safari, Edge)
- Headless and headed browser modes for different testing scenarios
- Direct DOM access for element interaction and validation
- Integration with web applications and services via HTTP/HTTPS protocols

## Choose When
- **For real browser interaction**: When you need actual rendering, not just code
- **Over unit tests**: For integration testing, user journeys, visual validation
- **For E2E scenarios**: Login flows, form submissions, multipage workflows
- **For visual testing**: Screenshot comparisons, responsive design validation
- **Not for code analysis**: Static code review, syntax checking, logic validation

## Works Best With
- **Sequential**: Sequential plans test strategy → Playwright executes browser automation
- **Shadcn**: Shadcn provides UI components → Playwright validates accessibility and behavior
- **Tavily**: Tavily discovers URLs → Playwright extracts complex content from pages

## Examples
```
"test the login flow" → Playwright (browser automation with real user interaction)
"check if form validation works" → Playwright (real browser form testing)
"take screenshots of responsive design" → Playwright (visual testing across viewports)
"validate accessibility compliance" → Playwright (automated WCAG testing)
"review this function's logic" → Native Claude (static analysis, no browser needed)
"explain the authentication code" → Native Claude (code review, no browser needed)
```
