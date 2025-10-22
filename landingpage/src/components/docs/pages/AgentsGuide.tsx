import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '../CodeBlock'
import { TableOfContents } from '../TableOfContents'
import { Users, Zap, Settings, ArrowRight, CheckCircle, Bot } from 'lucide-react'

const tocItems = [
  { id: 'overview', title: 'Overview', level: 2 },
  { id: 'available-agents', title: 'Available Agents', level: 2 },
  { id: 'agent-types', title: 'Agent Types', level: 2 },
  { id: 'coordination', title: 'Agent Coordination', level: 2 },
  { id: 'custom-agents', title: 'Custom Agents', level: 2 }
]

export function AgentsGuide() {
  useEffect(() => {
    // Update TOC
    const tocElement = document.getElementById('toc')
    if (tocElement) {
      // This would be handled by the TableOfContents component
    }
  }, [])

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Agents</Badge>
          <Badge variant="secondary">10 min read</Badge>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight">Agents Guide</h1>
        
        <p className="text-xl text-muted-foreground">
          Learn about SuperCode's specialized AI agents and how to leverage their unique 
          capabilities for different development tasks and workflows.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="hidden xl:block">
        <TableOfContents items={tocItems} />
      </div>

      {/* Overview */}
      <section id="overview" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
        
        <p className="text-muted-foreground">
          SuperCode agents are specialized AI assistants, each designed for specific 
          development tasks. They work independently or coordinate with each other 
          to handle complex workflows.
        </p>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Agent Ecosystem</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The agent ecosystem includes specialized roles for frontend development, 
              backend engineering, DevOps, security, QA, and more.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Available Agents */}
      <section id="available-agents" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Available Agents</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-blue-500" />
                <span>Frontend Engineer</span>
              </CardTitle>
              <CardDescription>
                UI/UX development, React, Vue, Angular, styling, and responsive design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">React</Badge>
                <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                <Badge variant="secondary" className="text-xs">CSS</Badge>
                <Badge variant="secondary" className="text-xs">UI/UX</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-green-500" />
                <span>Backend Engineer</span>
              </CardTitle>
              <CardDescription>
                API development, databases, server architecture, and business logic
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">Node.js</Badge>
                <Badge variant="secondary" className="text-xs">Python</Badge>
                <Badge variant="secondary" className="text-xs">Database</Badge>
                <Badge variant="secondary" className="text-xs">API</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-purple-500" />
                <span>DevOps Engineer</span>
              </CardTitle>
              <CardDescription>
                CI/CD, deployment, infrastructure, and operations automation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">Docker</Badge>
                <Badge variant="secondary" className="text-xs">K8s</Badge>
                <Badge variant="secondary" className="text-xs">CI/CD</Badge>
                <Badge variant="secondary" className="text-xs">Cloud</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-red-500" />
                <span>Security Engineer</span>
              </CardTitle>
              <CardDescription>
                Security analysis, vulnerability assessment, and secure coding practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">Security</Badge>
                <Badge variant="secondary" className="text-xs">Audit</Badge>
                <Badge variant="secondary" className="text-xs">Compliance</Badge>
                <Badge variant="secondary" className="text-xs">Penetration</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Agent Types */}
      <section id="agent-types" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Agent Types</h2>
        
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Specialized Agents</span>
              </CardTitle>
              <CardDescription>
                Domain-specific agents with deep expertise in particular areas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                code="supercode spawn frontend-engineer --task=component-development"
                language="bash"
                title="Spawn Specialized Agent"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Orchestration Agents</span>
              </CardTitle>
              <CardDescription>
                Agents that coordinate and manage other agents for complex workflows
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                code="supercode spawn orchestrator --workflow=full-stack-development"
                language="bash"
                title="Spawn Orchestration Agent"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Coordination */}
      <section id="coordination" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Agent Coordination</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Multi-Agent Workflows</CardTitle>
            <CardDescription>
              How agents work together to accomplish complex tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock
              code="supercode task create --agents=frontend,backend,qa --workflow=feature-development"
              language="bash"
              title="Multi-Agent Task"
            />
            
            <div className="space-y-2">
              <h4 className="font-medium">Coordination Patterns:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Sequential execution (waterfall)</li>
                <li>Parallel execution (independent tasks)</li>
                <li>Collaborative execution (shared workspace)</li>
                <li>Hierarchical execution (orchestrator-managed)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Custom Agents */}
      <section id="custom-agents" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Custom Agents</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Create Custom Agents</CardTitle>
            <CardDescription>
              Define and create agents tailored to your specific needs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock
              code="supercode generate agent --name=custom-agent --specialty=domain"
              language="bash"
              title="Generate Custom Agent"
            />
            
            <div className="space-y-2">
              <h4 className="font-medium">Customization Options:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Domain knowledge and expertise areas</li>
                <li>Tool integrations and capabilities</li>
                <li>Communication patterns and protocols</li>
                <li>Workflow preferences and constraints</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center space-x-4">
          <Button asChild>
            <Link to="/docs/agents/introduction">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/docs/agents/coordination">
              Coordination Patterns <CheckCircle className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}