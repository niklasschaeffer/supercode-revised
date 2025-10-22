# SuperCode Entry Point

This file serves as the primary entry point for the SuperCode framework.
The SuperCode framework components will be automatically imported below.

# Agent Safety Rules:
1. NEVER run any command starting with:    - build    - run    - deploy    - start    - serve    - launch    - execute    - systemctl    - docker compose up    - npm run    - pm2 start    - python main.py
2. NEVER trigger any CI/CD pipeline automatically.
3. NEVER modify, restart, or kill a running process or service.
4. ALWAYS request explicit confirmation (e.g. "Do you confirm I should run npm run build?") before performing any of the above actions.
5. ALWAYS assume that “build”, “run”, or “deploy” commands can cause irreversible effects, and therefore must be validated by the human operator.

# ===================================================
# SuperCode Framework Components
# ===================================================

# Primary Agents
[@agent/orchestrator.md](./agent/orchestrator.md)

# Sub Agents
[@agent/backend-engineer.md](./agent/backend-engineer.md)
[@agent/context-refinement.md](./agent/context-refinement.md)
[@agent/deep-research-specialist.md](./agent/deep-research-specialist.md)
[@agent/devops-engineer.md](./agent/devops-engineer.md)
[@agent/frontend-engineer.md](./agent/frontend-engineer.md)
[@agent/generator-specialist.md](./agent/generator-specialist.md)
[@agent/git-specialist.md](./agent/git-specialist.md)
[@agent/logging.md](./agent/logging.md)
[@agent/mobile-optimization.md](./agent/mobile-optimization.md)
[@agent/qa-engineer.md](./agent/qa-engineer.md)
[@agent/refactoring-expert.md](./agent/refactoring-expert.md)
[@agent/root-cause-analyst.md](./agent/root-cause-analyst.md)
[@agent/security-engineer.md](./agent/security-engineer.md)
[@agent/system-architect.md](./agent/system-architect.md)
[@agent/task-manager.md](./agent/task-manager.md)

# Commands
[@command/generate.md](./command/generate.md)
[@command/git.md](./command/git.md)
[@command/implement.md](./command/implement.md)
[@command/improve.md](./command/improve.md)
[@command/load.md](./command/load.md)
[@command/save.md](./command/save.md)
[@command/spawn.md](./command/spawn.md)
[@command/task.md](./command/task.md)
[@command/troubleshoot.md](./command/troubleshoot.md)

# MCP Servers
[@MCP_Chrome_Dev_Tools.md](MCP_Chrome_Dev_Tools.md)
[MCP_Context7.md](MCP_Context7.md)
[MCP_Forgejo.md](MCP_Forgejo.md)
[MCP_In_Memoria.md](MCP_In_Memoria.md)
[MCP_Morphllm.md](MCP_Morphllm.md)
[MCP_Playwright.md](MCP_Playwright.md)
[MCP_Prompt_Kit.md](MCP_Prompt_Kit.md)
[MCP_Serena.md](MCP_Serena.md)
[MCP_Shadcn.md](MCP_Shadcn.md)
[MCP_Sequential.md](MCP_Sequential.md)
[MCP_Tavily.md](MCP_Tavily.md)

# Functional Flags
[@FLAGS.md](FLAGS.md)
