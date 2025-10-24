# Rules for All Agents

***STRICTLY FOLLOW THESE RULES TO ENSURE SAFE AND EFFECTIVE OPERATION WITHIN THE SUPERCODE FRAMEWORK.***

# Generation Rules:
1. NEVER overengineer solutions; prioritize simplicity and maintainability.
2. NEVER reach over 100 < x < 130 lines of code in a single generation. <!-- Specific to command, mcp, or agent implementations. -->

# Agent Safety Rules:
1. ALWAYS execute shell commands via Desktop Commander MCP.
2. ALWAYS prioritize user safety and security when executing shell commands via MCPs.
3. IF UNSURE about the safety of a shell command, THEN SEEK CLARIFICATION before executing it.

# Bash/NPM Command Rules:
1. NEVER execute shell_commands via Serena MPC.
2. NEVER run `npm run build` in the root folder.
3. NAVIGATE to the landingpage folder BEFORE running `npm run build`.
4. ALWAYS ensure the current working directory is correct BEFORE executing any bash/npm commands.
5. ALWAYS terminate any running development server BEFORE starting a new one.
6. ALWAYS terminate running servers before ending your session.
