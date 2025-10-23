import type { NavigationItem, Agent, TechStack } from '@/types'

export const AGENTS: Agent[] = [
  {
    id: 'orchestration',
    name: 'Orchestration',
    description: 'Primary agent for coordinating multi-agent workflows and task distribution',
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
  }
]

export const MCP_SERVERS = [
  { name: 'Chrome DevTools', description: 'Browser automation and debugging' },
  { name: 'Context7', description: 'Framework documentation retrieval' },
  { name: 'Forgejo', description: 'Git repository management' },
  { name: 'In-Memoria', description: 'Codebase intelligence and learning' },
  { name: 'Desktop Commander', description: 'Intelligent code editing' },
  { name: 'Playwright', description: 'End-to-end testing automation' },
  { name: 'Prompt Kit', description: 'Template management system' },
  { name: 'Serena', description: 'Advanced file operations and search' },
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
  { label: 'Workflow', href: '#workflow' },
  { label: 'Installation', href: '#installation' },
  { label: 'GitHub', href: 'https://github.com/niklasschaeffer/supercode-revised', external: true }
]

export const FEATURES = [
  {
    title: '15 Specialized Agents',
    description: 'Comprehensive coverage of development tasks from frontend to DevOps',
    icon: '🤖',
    highlight: true
  },
  {
    title: '11 MCP Server Integrations',
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
    highlight: false
  },
  {
    title: 'Dual Memory System',
    description: 'Serena + In-Memoria for persistent knowledge and codebase intelligence',
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
