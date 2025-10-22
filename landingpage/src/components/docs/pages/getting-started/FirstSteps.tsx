import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CodeBlock } from '../../CodeBlock'
import { Play, Rocket, Zap, Star } from 'lucide-react'

export function FirstSteps() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">First Steps</h2>
        <p className="text-muted-foreground">
          Take your first steps with SuperCode and experience the power of AI-assisted development.
        </p>
      </div>

      {/* Quick Start */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Rocket className="h-5 w-5" />
            <span>Your First SuperCode Command</span>
          </CardTitle>
          <CardDescription>
            Get started with a simple but powerful command
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Create Your First Project</h4>
            <CodeBlock
              code="# Create a new React project with SuperCode
supercode generate project my-react-app --template=react"
              language="bash"
              title="Generate First Project"
            />
            <p className="text-sm text-muted-foreground">
              This command creates a complete React project with best practices and modern tooling.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Navigate and Explore</h4>
            <CodeBlock
              code="# Enter your new project
cd my-react-app

# See what SuperCode created
ls -la

# Start the development server
npm run dev"
              language="bash"
              title="Explore Your Project"
            />
          </div>
        </CardContent>
      </Card>

      {/* Agent Interaction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5" />
            <span>Working with Agents</span>
          </CardTitle>
          <CardDescription>
            Learn how to interact with SuperCode agents
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Spawn Your First Agent</h4>
            <CodeBlock
              code="# Spawn a frontend engineer agent
supercode spawn frontend-engineer

# Ask the agent to add a component
supercode ask frontend-engineer \"Add a navigation component with logo and menu items\""
              language="bash"
              title="Spawn and Use Agent"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Agent Task Management</h4>
            <CodeBlock
              code="# Create a task for an agent
supercode task create --agent=frontend-engineer --description=\"Create responsive landing page\"

# Check task status
supercode task status <task-id>

# View all tasks
supercode task list"
              language="bash"
              title="Manage Agent Tasks"
            />
          </div>
        </CardContent>
      </Card>

      {/* MCP Integration */}
      <Card>
        <CardHeader>
          <CardTitle>Using MCP Integrations</CardTitle>
          <CardDescription>
            Leverage external tools and services through MCP
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Git Operations with Forgejo MCP</h4>
            <CodeBlock
              code="# Initialize git repository
supercode mcp forgejo init-repo --name=my-react-app

# Create your first commit
supercode mcp forgejo commit --message=\"Initial project setup\"

# Create an issue
supercode mcp forgejo create-issue --title=\"Add user authentication\" --description=\"Implement login and registration\""
              language="bash"
              title="Git Operations"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Code Analysis with In-Memoria</h4>
            <CodeBlock
              code="# Analyze your codebase
supercode mcp in-memoria analyze --path=./src

# Get code insights
supercode mcp in-memoria insights --query=\"performance improvements\"

# Learn from your code
supercode mcp in-memoria learn --project=./"
              language="bash"
              title="Code Analysis"
            />
          </div>
        </CardContent>
      </Card>

      {/* Common Workflows */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Play className="h-5 w-5" />
            <span>Common Workflows</span>
          </CardTitle>
          <CardDescription>
            Everyday workflows you'll use frequently
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Feature Development Workflow</h4>
            <CodeBlock
              code="# 1. Create a feature branch
supercode mcp forgejo create-branch feature/user-profile

# 2. Spawn appropriate agents
supercode spawn frontend-engineer
supercode spawn backend-engineer

# 3. Create tasks
supercode task create --agent=frontend-engineer --description=\"Build user profile UI\"
supercode task create --agent=backend-engineer --description=\"Implement user profile API\"

# 4. Run tasks in parallel
supercode task run --parallel --tasks=<task-1>,<task-2>

# 5. Create pull request
supercode mcp forgejo create-pr --source=feature/user-profile --target=main"
              language="bash"
              title="Feature Development"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Bug Fix Workflow</h4>
            <CodeBlock>
              code="# 1. Analyze the issue
supercode mcp in-memoria analyze --path=./src --query=\"potential bugs\"

# 2. Spawn root cause analyst
supercode spawn root-cause-analyst

# 3. Investigate the issue
supercode task create --agent=root-cause-analyst --description=\"Investigate login bug reported in issue #123\"

# 4. Fix the issue
supercode spawn backend-engineer
supercode task create --agent=backend-engineer --description=\"Fix authentication token validation\""
              language="bash"
              title="Bug Fix Process"
            />
          </div>
        </CardContent>
      </Card>

      {/* Tips and Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-5 w-5" />
            <span>Tips and Best Practices</span>
          </CardTitle>
          <CardDescription>
            Get the most out of SuperCode with these tips
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-medium">Do's</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Be specific in agent requests</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Use appropriate agents for tasks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Review agent-generated code</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Use MCP integrations for external tools</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Don'ts</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-red-500">✗</span>
                  <span>Don't run agents without supervision</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500">✗</span>
                  <span>Don't ignore security warnings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500">✗</span>
                  <span>Don't commit without testing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500">✗</span>
                  <span>Don't share sensitive API tokens</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Ready for More?</CardTitle>
          <CardDescription>
            Continue your SuperCode journey with these resources
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-medium">Documentation</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• <a href="/docs/commands" className="text-blue-500 hover:underline">Commands Reference</a></li>
                <li>• <a href="/docs/agents" className="text-blue-500 hover:underline">Agent Guide</a></li>
                <li>• <a href="/docs/mcp-integrations" className="text-blue-500 hover:underline">MCP Integrations</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Examples</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• <a href="/examples/react-setup" className="text-blue-500 hover:underline">React Project Setup</a></li>
                <li>• <a href="/examples/api-development" className="text-blue-500 hover:underline">API Development</a></li>
                <li>• <a href="/examples/deployment" className="text-blue-500 hover:underline">Deployment Workflows</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-4">
            <Button size="lg" className="w-full">
              <Play className="mr-2 h-4 w-4" />
              Start Building with SuperCode
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}