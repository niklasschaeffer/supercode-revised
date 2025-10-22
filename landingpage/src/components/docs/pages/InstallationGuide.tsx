import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '../CodeBlock'
import { TableOfContents } from '../TableOfContents'
import { Download, Terminal, CheckCircle, AlertTriangle, Settings, ArrowRight } from 'lucide-react'

const tocItems = [
  { id: 'system-requirements', title: 'System Requirements', level: 2 },
  { id: 'installation-methods', title: 'Installation Methods', level: 2 },
  { id: 'quick-installation', title: 'Quick Installation', level: 3 },
  { id: 'manual-installation', title: 'Manual Installation', level: 3 },
  { id: 'verification', title: 'Verification', level: 2 },
  { id: 'troubleshooting', title: 'Troubleshooting', level: 2 },
  { id: 'next-steps', title: 'Next Steps', level: 2 }
]

export function InstallationGuide() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Installation Guide</Badge>
          <Badge variant="secondary">10 min read</Badge>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight">Installation Guide</h1>
        
        <p className="text-xl text-muted-foreground">
          Complete guide to installing and configuring SuperCode on your system. 
          Follow these steps to get up and running with the framework.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="hidden xl:block">
        <TableOfContents items={tocItems} />
      </div>

      {/* System Requirements */}
      <section id="system-requirements" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">System Requirements</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Terminal className="h-5 w-5" />
                <span>Minimum Requirements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Node.js</span>
                <Badge variant="secondary">v16.0.0+</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">npm</span>
                <Badge variant="secondary">v8.0.0+</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Memory</span>
                <Badge variant="secondary">4GB RAM</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Storage</span>
                <Badge variant="secondary">2GB free</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Recommended</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Node.js</span>
                <Badge variant="default">v18.0.0+</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">npm</span>
                <Badge variant="default">v9.0.0+</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Memory</span>
                <Badge variant="default">8GB RAM</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Storage</span>
                <Badge variant="default">5GB free</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Note:</strong> SuperCode is cross-platform and works on Windows, macOS, and Linux. 
                Some MCP integrations may have additional platform-specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Methods */}
      <section id="installation-methods" className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Installation Methods</h2>
        
        {/* Quick Installation */}
        <div id="quick-installation" className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Quick Installation</h3>
          <p className="text-muted-foreground">
            The fastest way to get started with SuperCode using our automated installer:
          </p>

          <CodeBlock
            code="# Download and run the installer"
            language="bash"
            title="Automated Installation"
          />

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Step 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Download the installation script using curl or wget
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Step 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Make the script executable and run it with sudo/admin privileges
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Step 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Follow the interactive prompts to complete installation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Manual Installation */}
        <div id="manual-installation" className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Manual Installation</h3>
          <p className="text-muted-foreground">
            For advanced users who prefer manual setup or need custom configurations:
          </p>

          <div className="space-y-4">
            <CodeBlock
              code="# Clone the repository"
              language="bash"
              title="1. Clone Repository"
            />

            <CodeBlock
              code="# Install dependencies"
              language="bash"
              title="2. Install Dependencies"
            />

            <CodeBlock
              code="# Create global symlink"
              language="bash"
              title="3. Create Global Command"
            />

            <CodeBlock
              code="# Verify installation"
              language="bash"
              title="4. Verify Installation"
            />
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section id="configuration" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Configuration</h2>
        
        <p className="text-muted-foreground">
          SuperCode can be configured through environment variables and configuration files:
        </p>

        <CodeBlock
          code={`{
  "agents": {
    "default": "orchestrator",
    "timeout": 30000,
    "retries": 3
  },
  "mcp": {
    "servers": ["chrome-devtools", "playwright", "serena"],
    "timeout": 10000
  },
  "logging": {
    "level": "info",
    "file": "supercode.log"
  }
}`}
          language="json"
          title="Configuration Example (supercode.json)"
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Environment Variables</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <CodeBlock
                code="export SUPERCODE_CONFIG_PATH=/path/to/config"
                language="bash"
                showLineNumbers={false}
                copyable={true}
              />
              <CodeBlock
                code="export SUPERCODE_LOG_LEVEL=debug"
                language="bash"
                showLineNumbers={false}
                copyable={true}
              />
              <CodeBlock
                code="export SUPERCODE_MCP_TIMEOUT=15000"
                language="bash"
                showLineNumbers={false}
                copyable={true}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Configuration Files</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Global Config</span>
                <code className="bg-muted px-2 py-1 rounded">~/.supercode/config.json</code>
              </div>
              <div className="flex justify-between">
                <span>Project Config</span>
                <code className="bg-muted px-2 py-1 rounded">./supercode.json</code>
              </div>
              <div className="flex justify-between">
                <span>Environment</span>
                <code className="bg-muted px-2 py-1 rounded">.env</code>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Verification */}
      <section id="verification" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Verification</h2>
        
        <p className="text-muted-foreground">
          Verify your installation by running these commands:
        </p>

        <div className="space-y-4">
          <CodeBlock
            code="# Check SuperCode version"
            language="bash"
            title="Version Check"
          />

          <CodeBlock
            code="# List available agents"
            language="bash"
            title="Agent Verification"
          />

          <CodeBlock
            code="# Test MCP connections"
            language="bash"
            title="MCP Integration Test"
          />
        </div>

        <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border border-green-200 dark:border-green-800">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="font-medium text-green-800 dark:text-green-200">
              Success! If all commands run without errors, SuperCode is properly installed.
            </span>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section id="troubleshooting" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Troubleshooting</h2>
        
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-orange-600">Permission Denied</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                If you encounter permission errors during installation:
              </p>
              <CodeBlock
                code="# Fix permissions"
                language="bash"
                showLineNumbers={false}
                copyable={true}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-orange-600">Node.js Not Found</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Install Node.js using your package manager:
              </p>
              <CodeBlock
                code="# Ubuntu/Debian"
                language="bash"
                showLineNumbers={false}
                copyable={true}
              />
              <CodeBlock
                code="# macOS (using Homebrew)"
                language="bash"
                showLineNumbers={false}
                copyable={true}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-orange-600">MCP Server Connection Failed</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Check MCP server configuration and network connectivity:
              </p>
              <CodeBlock
                code="# Check MCP status"
                language="bash"
                showLineNumbers={false}
                copyable={true}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section id="next-steps" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Next Steps</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="group cursor-pointer transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Explore Commands
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </CardTitle>
              <CardDescription>
                Learn about all available commands and their usage.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/docs/commands">View Commands</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Configure Agents
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </CardTitle>
              <CardDescription>
                Set up and configure specialized agents for your workflow.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/docs/agents">Configure Agents</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <div className="text-center space-y-2">
        <p className="text-muted-foreground">
          Need help? Check out our troubleshooting guide or reach out to our community.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link to="/docs/commands">Commands Reference</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/docs/installation/troubleshooting">Troubleshooting</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}