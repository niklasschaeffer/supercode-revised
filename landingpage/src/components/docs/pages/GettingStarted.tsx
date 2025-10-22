import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '../CodeBlock'
import { TableOfContents } from '../TableOfContents'
import { Zap, Play, Settings, ArrowRight, CheckCircle } from 'lucide-react'

const tocItems = [
  { id: 'overview', title: 'Overview', level: 2 },
  { id: 'what-is-supercode', title: 'What is SuperCode?', level: 2 },
  { id: 'key-features', title: 'Key Features', level: 2 },
  { id: 'quick-start', title: 'Quick Start', level: 2 },
  { id: 'next-steps', title: 'Next Steps', level: 2 }
]

export function GettingStarted() {
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
          <Badge variant="outline">Getting Started</Badge>
          <Badge variant="secondary">5 min read</Badge>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight">Getting Started with SuperCode</h1>
        
        <p className="text-xl text-muted-foreground">
          Welcome to SuperCode, the comprehensive AI-powered development framework that 
          combines specialized agents, MCP integrations, and intelligent orchestration 
          to accelerate your development workflow.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="hidden xl:block">
        <TableOfContents items={tocItems} />
      </div>

      {/* Overview */}
      <section id="overview" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
        <p className="text-muted-foreground">
          SuperCode is designed to streamline your development process through intelligent 
          automation and specialized AI agents. Whether you're building a simple website 
          or a complex enterprise application, SuperCode provides the tools and guidance 
          you need to succeed.
        </p>
      </section>

      {/* What is SuperCode */}
      <section id="what-is-supercode" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">What is SuperCode?</h2>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-lg">AI-Powered</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Leverage 14 specialized AI agents for every aspect of development, 
                from frontend design to DevOps automation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-primary" />
                <span className="text-lg">Extensible</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Integrate with 11 MCP servers and customize agents to fit your 
                specific development needs and workflows.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2">
                <Play className="h-5 w-5 text-primary" />
                <span className="text-lg">Productive</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Accelerate development with intelligent code generation, automated 
                testing, and seamless deployment workflows.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section id="key-features" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Key Features</h2>
        
        <div className="grid gap-6">
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold">14 Specialized Agents</h3>
              <p className="text-sm text-muted-foreground">
                From frontend engineers to security specialists, get expert help for every development task.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold">11 MCP Server Integrations</h3>
              <p className="text-sm text-muted-foreground">
                Seamless integration with modern development tools like Chrome DevTools, Playwright, and more.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold">Intelligent Orchestration</h3>
              <p className="text-sm text-muted-foreground">
                Automatic task distribution and coordination between agents for complex workflows.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold">Professional QA System</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive testing, validation, and quality assurance built into every workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quick-start" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Quick Start</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Get SuperCode up and running in just a few commands:
          </p>

          <CodeBlock
            code="# Clone the repository"
            language="bash"
            title="Step 1: Clone SuperCode"
          />

          <CodeBlock
            code="# Install dependencies"
            language="bash"
            title="Step 2: Install Dependencies"
          />

          <CodeBlock
            code="# Run your first command"
            language="bash"
            title="Step 3: Start Using SuperCode"
          />

          <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border border-green-200 dark:border-green-800">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-800 dark:text-green-200">
                That's it! SuperCode is now ready to use.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section id="next-steps" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Next Steps</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="group cursor-pointer transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Complete Installation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </CardTitle>
              <CardDescription>
                Follow our detailed installation guide for advanced configuration options.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/docs/installation">View Installation Guide</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Explore Commands
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </CardTitle>
              <CardDescription>
                Learn about all available commands and how to use them effectively.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/docs/commands">Browse Commands</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Meet the Agents
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </CardTitle>
              <CardDescription>
                Discover the 14 specialized agents and their unique capabilities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/docs/agents">Explore Agents</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                MCP Integrations
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </CardTitle>
              <CardDescription>
                Learn about MCP server integrations and how to configure them.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/docs/mcp-integrations">View Integrations</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <div className="text-center space-y-2">
        <p className="text-muted-foreground">
          Ready to dive deeper? Check out our comprehensive guides or start building with SuperCode today.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link to="/docs/installation">Installation Guide</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/docs/commands">Commands Reference</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}