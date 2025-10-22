import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '../CodeBlock'
import { TableOfContents } from '../TableOfContents'
import { Terminal, Zap, BookOpen, ArrowRight, CheckCircle } from 'lucide-react'

const tocItems = [
  { id: 'overview', title: 'Overview', level: 2 },
  { id: 'core-commands', title: 'Core Commands', level: 2 },
  { id: 'agent-commands', title: 'Agent Commands', level: 2 },
  { id: 'utility-commands', title: 'Utility Commands', level: 2 },
  { id: 'advanced-usage', title: 'Advanced Usage', level: 2 }
]

export function CommandsReference() {
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
          <Badge variant="outline">Commands</Badge>
          <Badge variant="secondary">8 min read</Badge>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight">Commands Reference</h1>
        
        <p className="text-xl text-muted-foreground">
          Complete reference for all SuperCode commands, flags, and usage patterns.
          Master the command-line interface to unlock the full potential of the framework.
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
          SuperCode provides a comprehensive command-line interface with commands for 
          project generation, agent management, task execution, and system orchestration.
        </p>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Terminal className="h-5 w-5" />
              <span>Basic Syntax</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code="supercode [command] [options] [arguments]"
              language="bash"
              title="Command Structure"
            />
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Core Commands */}
      <section id="core-commands" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Core Commands</h2>
        
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>generate</span>
              </CardTitle>
              <CardDescription>
                Generate new projects, components, or code structures
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                code="supercode generate [type] [name]"
                language="bash"
                title="Generate Command"
              />
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">project</Badge>
                <Badge variant="secondary">component</Badge>
                <Badge variant="secondary">agent</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>task</span>
              </CardTitle>
              <CardDescription>
                Execute tasks and manage workflows
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                code="supercode task [action] [task-id]"
                language="bash"
                title="Task Command"
              />
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">create</Badge>
                <Badge variant="secondary">run</Badge>
                <Badge variant="secondary">status</Badge>
                <Badge variant="secondary">list</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Agent Commands */}
      <section id="agent-commands" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Agent Commands</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Agent Management</CardTitle>
            <CardDescription>
              Commands for managing and interacting with specialized agents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock
              code="supercode spawn [agent-type] [options]"
              language="bash"
              title="Spawn Agent"
            />
            <CodeBlock
              code="supercode agents list"
              language="bash"
              title="List Agents"
            />
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Utility Commands */}
      <section id="utility-commands" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Utility Commands</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>git</CardTitle>
              <CardDescription>Git operations and version control</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code="supercode git [git-command] [options]"
                language="bash"
                title="Git Integration"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>improve</CardTitle>
              <CardDescription>Code improvement and refactoring</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code="supercode improve [target] [options]"
                language="bash"
                title="Code Improvement"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Advanced Usage */}
      <section id="advanced-usage" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Advanced Usage</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Flag Combinations</CardTitle>
            <CardDescription>
              Combine flags for powerful command combinations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock
              code="supercode generate project --template=react --agent=frontend --git-init"
              language="bash"
              title="Advanced Generation"
            />
            <CodeBlock
              code="supercode task run --parallel --timeout=300 --verbose"
              language="bash"
              title="Task Execution Options"
            />
          </CardContent>
        </Card>

        <div className="flex items-center space-x-4">
          <Button asChild>
            <Link to="/docs/commands/usage-examples">
              View Examples <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/docs/commands/best-practices">
              Best Practices <CheckCircle className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}