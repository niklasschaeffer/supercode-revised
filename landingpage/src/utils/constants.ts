import type { NavigationItem, Agent, TechStack, Command } from '@/types'

export const AGENTS: Agent[] = [
  {
    id: 'orchestrator',
    name: 'Orchestrator',
    description: 'Meta-agent for task decomposition, context gathering, and intelligent delegation to specialist agents',
    icon: '🎯',
    category: 'Core'
  },
  {
    id: 'frontend-engineer',
    name: 'Frontend Engineer',
    description: 'Build modern, accessible UI components with React, TypeScript, and TailwindCSS',
    icon: '🎨',
    category: 'Development'
  },
  {
    id: 'backend-engineer',
    name: 'Backend Engineer',
    description: 'Design scalable APIs and server-side architecture with modern frameworks',
    icon: '⚙️',
    category: 'Development'
  },
  {
    id: 'docker-specialist',
    name: 'Docker Specialist',
    description: 'Containerization expert for docker management',
    icon: '🐳',
    category: 'Management'
  },
  {
    id: 'database-engineer',
    name: 'Database Engineer',
    description: 'Design and optimize database schemas and queries for performance and scalability',
    icon: '🗄️',
    category: 'Development'
  },
  {
    id: 'system-architect',
    name: 'System Architect',
    description: 'Plan and design complex system architectures and integration patterns',
    icon: '🏗️',
    category: 'Architecture'
  },
  {
    id: 'qa-engineer',
    name: 'QA Engineer',
    description: 'Ensure code quality, comprehensive testing, and validation standards',
    icon: '🔍',
    category: 'Quality'
  },
  {
    id: 'security-engineer',
    name: 'Security Engineer',
    description: 'Implement security best practices and vulnerability assessments',
    icon: '🛡️',
    category: 'Security'
  },
  {
    id: 'devops-engineer',
    name: 'DevOps Engineer',
    description: 'Automate deployment pipelines and infrastructure management',
    icon: '🚀',
    category: 'Operations'
  },
  {
    id: 'mobile-optimization',
    name: 'Mobile Optimization',
    description: 'Optimize applications for mobile performance and user experience',
    icon: '📱',
    category: 'Optimization'
  },
  {
    id: 'refactoring-expert',
    name: 'Refactoring Expert',
    description: 'Improve code quality through intelligent refactoring patterns',
    icon: '♻️',
    category: 'Optimization'
  },
  {
    id: 'generator-specialist',
    name: 'Generator Specialist',
    description: 'Create code generators and template-driven development tools',
    icon: '⚡',
    category: 'Generation'
  },
  {
    id: 'git-specialist',
    name: 'Git Specialist',
    description: 'Manage version control workflows and repository optimization',
    icon: '📚',
    category: 'Tools'
  },
  {
    id: 'root-cause-analyst',
    name: 'Root Cause Analyst',
    description: 'Diagnose complex issues and provide systematic solutions',
    icon: '🔬',
    category: 'Analysis'
  },
  {
    id: 'deep-research-specialist',
    name: 'Deep-Research-Specialist',
    description: 'Research specialist focused on deep investigation, multi-source analysis, and comprehensive information synthesis',
    icon: '🔍',
    category: 'Analysis'
  },
  {
    id: 'task-manager',
    name: 'Task Manager',
    description: 'Coordinate task execution and workflow management',
    icon: '📋',
    category: 'Management'
  },
  {
    id: 'logging',
    name: 'Logging',
    description: 'Comprehensive logging and monitoring system implementation',
    icon: '📊',
    category: 'Monitoring'
  },
  {
    id: 'renovator',
    name: 'Renovator',
    description: 'Project renovation and dependency management specialist with Renovate-Bot expertise',
    icon: '🔧',
    category: 'Maintenance'
  },
  {
    id: 'context-refinement',
    name: 'Context Refinement',
    description: 'Refine and optimize existing context for enhanced agent consumption and clarity',
    icon: '✨',
    category: 'Optimization'
  }
]

export const MCP_SERVERS = [
  { name: 'Chrome DevTools', description: 'Browser automation and debugging' },
  { name: 'Context7', description: 'Framework documentation retrieval' },
  { name: 'Forgejo', description: 'Git repository management' },
  { name: 'Memory Bank', description: 'Project memory and documentation management' },
  { name: 'Desktop Commander', description: 'Intelligent code editing' },
  { name: 'Playwright', description: 'End-to-end testing automation' },
  { name: 'Prompt Kit', description: 'Template management system' },
  { name: 'Knowledge Graph', description: 'Entity relationships and structured knowledge' },
  { name: 'Shadcn', description: 'UI component registry' },
  { name: 'Sequential', description: 'Logical reasoning and planning' },
  { name: 'Tavily', description: 'Web search and content extraction' }
]

export const TECH_STACK: TechStack[] = [
  { name: 'React', version: '18+', description: 'Modern UI library' },
  { name: 'TypeScript', version: '5+', description: 'Type-safe JavaScript' },
  { name: 'TailwindCSS', version: '3+', description: 'Utility-first CSS framework' },
  { name: 'Shadcn/ui', version: 'latest', description: 'Beautiful component library' },
  { name: 'Vite', version: '5+', description: 'Fast build tool' }
]

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Agents', href: '#agents' },
  { label: 'Commands', href: '#commands' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Installation', href: '#installation' },
  { label: 'GitHub', href: 'https://github.com/niklasschaeffer/supercode-revised', external: true }
]

export const COMMANDS: Command[] = [
  {
    id: 'initialize',
    name: 'Initialize',
    description: 'Complete project bootstrap establishing dual MCP foundation in one command',
    example: '/initialize --force-relearn',
    category: 'Setup'
  },
  {
    id: 'load',
    name: 'Load',
    description: 'Load comprehensive project context from both MCP systems',
    example: '/load --status',
    category: 'Context'
  },
  {
    id: 'save',
    name: 'Save',
    description: 'Save completed work to both MCP memory systems',
    example: '/save --session-summary',
    category: 'Context'
  },
  {
    id: 'implement',
    name: 'Implement',
    description: 'Feature implementation with orchestration and behavioral flags',
    example: '/implement --ultrathink --orchestrate "user authentication"',
    category: 'Development'
  },
  {
    id: 'build',
    name: 'Build',
    description: 'Build project compilation, packaging, and deployment preparation',
    example: '/build --production --optimize',
    category: 'Development'
  },
  {
    id: 'improve',
    name: 'Improve',
    description: 'Code improvement with patterns and performance optimization',
    example: '/improve --patterns --performance "legacy code"',
    category: 'Optimization'
  },
  {
    id: 'spawn',
    name: 'Spawn',
    description: 'Activate specialized agents for specific tasks',
    example: '/spawn qa-engineer',
    category: 'Agents'
  },
  {
    id: 'generate',
    name: 'Generate',
    description: 'Auto-generate code, documentation, and templates',
    example: '/generate --type docs --target "API endpoints"',
    category: 'Generation'
  },
  {
    id: 'renovate',
    name: 'Renovate',
    description: 'Project renovation with Renovator agent and dependency management',
    example: '/renovate --analyze --safe "update dependencies"',
    category: 'Maintenance'
  },
  {
    id: 'cleanup',
    name: 'Cleanup',
    description: 'Remove unused dependencies and optimize project structure',
    example: '/cleanup --optimize "remove unused files"',
    category: 'Maintenance'
  },
  {
    id: 'task',
    name: 'Task',
    description: 'Task management system for complex work decomposition and tracking',
    example: '/task --decompose "complex feature implementation"',
    category: 'Management'
  },
  {
    id: 'git',
    name: 'Git',
    description: 'Git workflow management and repository operations',
    example: '/git --status "check branch status"',
    category: 'Tools'
  },
  {
    id: 'troubleshoot',
    name: 'Troubleshoot',
    description: 'Systematic issue diagnosis and resolution workflows',
    example: '/troubleshoot --analyze "build failure"',
    category: 'Diagnostics'
  }
]

export const FEATURES = [
    {
        title: `${AGENTS.length} Specialized Agents`,
        description: 'Comprehensive coverage of development tasks from frontend to DevOps',
        icon: '🤖',
        highlight: true
    },
    {
        title: `${COMMANDS.length} Commands`,
        description: 'Powerful command set for project initialization, context loading',
        icon: '💻',
        highlight: true
    },
    {
        title: `${MCP_SERVERS.length} MCP Server Integrations`,
        description: 'Seamless integration with modern development tools and services',
        icon: '🔌',
        highlight: true
    },
    {
        title: 'Project Initialization',
        description: 'Complete project bootstrap establishing dual MCP foundation in one command',
        icon: '🚀',
        highlight: true
    },
    {
        title: '25+ Behavioral Flags',
        description: 'Fine-grained control over agent behavior and decision making',
        icon: '🚩',
        highlight: true
    },
    {
        title: 'Dual Memory System',
        description: 'Knowledge Graph + Memory Bank for entity relationships and project intelligence',
        icon: '🧠',
        highlight: true
    },
    {
        title: 'Multi-Agent Orchestration',
        description: 'Intelligent coordination between specialized agents for complex tasks',
        icon: '🎼',
        highlight: true
    },
    {
        title: 'Professional QA System',
        description: 'Comprehensive validation, testing, and quality assurance workflows',
        icon: '✅',
        highlight: false
    },
    {
        title: 'Template-Driven Development',
        description: 'Rapid development with customizable templates and generators',
        icon: '📝',
        highlight: false
    },
    {
        title: 'Real-time Collaboration',
        description: 'Multi-agent collaboration with intelligent task distribution',
        icon: '🤝',
        highlight: false
    },
    {
        title: 'Intelligent Code Analysis',
        description: 'Deep codebase understanding and semantic search capabilities',
        icon: '🔍',
        highlight: false
    }
]
