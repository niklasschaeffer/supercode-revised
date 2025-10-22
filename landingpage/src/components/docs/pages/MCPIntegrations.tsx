import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '../CodeBlock'
import { TableOfContents } from '../TableOfContents'
import { Plug, Zap, Settings, ArrowRight, CheckCircle, Puzzle } from 'lucide-react'

const tocItems = [
  { id: 'overview', title: 'Overview', level: 2 },
  { id: 'available-mcps', title: 'Available MCPs', level: 2 },
  { id: 'configuration', title: 'Configuration', level: 2 },
  { id: 'usage-examples', title: 'Usage Examples', level: 2 },
  { id: 'custom-integrations', title: 'Custom Integrations', level: 2 }
]

export function MCPIntegrations() {
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
          <Badge variant="outline">MCP</Badge>
          <Badge variant="secondary">12 min read</Badge>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight">MCP Integrations</h1>
        
        <p className="text-xl text-muted-foreground">
          Master SuperCode's Model Context Protocol (MCP) integrations to connect with 
          external tools, services, and enhance your development workflow.
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
          The Model Context Protocol (MCP) enables SuperCode to integrate with external 
          tools, databases, APIs, and services, providing agents with real-time access 
          to the resources they need.
        </p>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Plug className="h-5 w-5" />
              <span>What is MCP?</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              MCP is a standardized protocol that allows AI agents to securely interact 
              with external systems through well-defined interfaces and APIs.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Available MCPs */}
      <section id="available-mcps" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Available MCPs</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Puzzle className="h-5 w-5 text-blue-500" />
                <span>Forgejo MCP</span>
              </CardTitle>
              <CardDescription>
                Git repository management, issues, pull requests, and CI/CD
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">Git</Badge>
                <Badge variant="secondary" className="text-xs">Repository</Badge>
                <Badge variant="secondary" className="text-xs">Issues</Badge>
                <Badge variant="secondary" className="text-xs">CI/CD</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Puzzle className="h-5 w-5 text-green-500" />
                <span>In-Memoria MCP</span>
              </CardTitle>
              <CardDescription>
                Code analysis, intelligence database, and learning system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">Analysis</Badge>
                <Badge variant="secondary" className="text-xs">Learning</Badge>
                <Badge variant="secondary" className="text-xs">Memory</Badge>
                <Badge variant="secondary" className="text-xs">Intelligence</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Puzzle className="h-5 w-5 text-purple-500" />
                <span>Playwright MCP</span>
              </CardTitle>
              <CardDescription>
                Web automation, testing, and browser interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">Testing</Badge>
                <Badge variant="secondary" className="text-xs">Automation</Badge>
                <Badge variant="secondary" className="text-xs">Browser</Badge>
                <Badge variant="secondary" className="text-xs">E2E</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Puzzle className="h-5 w-5 text-red-500" />
                <span>Tavily MCP</span>
              </CardTitle>
              <CardDescription>
                Web search, content extraction, and information gathering
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">Search</Badge>
                <Badge variant="secondary" className="text-xs">Research</Badge>
                <Badge variant="secondary" className="text-xs">Content</Badge>
                <Badge variant="secondary" className="text-xs">Web</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Configuration */}
      <section id="configuration" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Configuration</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>MCP Setup</span>
            </CardTitle>
            <CardDescription>
              Configure MCP integrations for your SuperCode instance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock
              code="# Enable MCP integration\nsupercode config set mcp.enabled true\n\n# Add MCP server\nsupercode mcp add forgejo --url=https://git.example.com --token=your-token"
              language="bash"
              title="Configure MCP"
            />
            
            <CodeBlock
              code="{\n  \"mcp\": {\n    \"servers\": {\n      \"forgejo\": {\n        \"url\": \"https://git.example.com\",\n        \"token\": \"${FORGEJO_TOKEN}\",\n        \"enabled\": true\n      },\n      \"in-memoria\": {\n        \"database\": \"./in-memoria.db\",\n        \"enabled\": true\n      }\n    }\n  }\n}"
              language="json"
              title="MCP Configuration File"
            />
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Usage Examples */}
      <section id="usage-examples" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Usage Examples</h2>
        
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Git Operations with Forgejo MCP</CardTitle>
              <CardDescription>
                Automate repository management through MCP integration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                code="# Create issue via MCP\nsupercode mcp forgejo create-issue --title=\"Bug fix\" --description=\"Fix login issue\"\n\n# Create pull request\nsupercode mcp forgejo create-pr --source=feature-branch --target=main"
                language="bash"
                title="Forgejo MCP Usage"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Code Analysis with In-Memoria MCP</CardTitle>
              <CardDescription>
                Leverage intelligent code analysis and learning
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                code="# Analyze codebase\nsupercode mcp in-memoria analyze --path=./src\n\n# Learn patterns\nsupercode mcp in-memoria learn --project=./my-project\n\n# Get insights\nsupercode mcp in-memoria insights --query=\"performance issues\""
                language="bash"
                title="In-Memoria MCP Usage"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Custom Integrations */}
      <section id="custom-integrations" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Custom Integrations</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Build Custom MCP Servers</CardTitle>
            <CardDescription>
              Create your own MCP integrations for specific tools and services
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock
              code="# Generate MCP server template\nsupercode generate mcp-server --name=custom-mcp --tools=database,api\n\n# Implement custom tools\nsupercode mcp add-tool --name=custom-tool --handler=./handlers/custom-tool.js"
              language="bash"
              title="Custom MCP Development"
            />
            
            <div className="space-y-2">
              <h4 className="font-medium">MCP Server Components:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Tool definitions and schemas</li>
                <li>Authentication and security handlers</li>
                <li>Data transformation and validation</li>
                <li>Error handling and logging</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center space-x-4">
          <Button asChild>
            <Link to="/docs/mcp-integrations/overview">
              Deep Dive <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/docs/mcp-integrations/configuration">
              Configuration Guide <CheckCircle className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}