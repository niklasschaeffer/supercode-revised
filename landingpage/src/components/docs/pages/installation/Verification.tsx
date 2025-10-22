import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CodeBlock } from '../../CodeBlock'
import { CheckCircle, Play, Rocket, Terminal } from 'lucide-react'

export function Verification() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Verification</h2>
        <p className="text-muted-foreground">
          Verify that SuperCode is installed correctly and ready for use.
        </p>
      </div>

      {/* Basic Verification */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Terminal className="h-5 w-5" />
            <span>Basic Verification</span>
          </CardTitle>
          <CardDescription>
            Confirm that SuperCode is properly installed and accessible
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Version Check</h4>
            <CodeBlock
              code="# Check SuperCode version
supercode --version

# Expected output:
# SuperCode v1.0.0
# Platform: linux-x64
# Node.js: v18.17.0
# Build: 2023-10-22T10:30:00Z"

              language="bash"
              title="Version Verification"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Help Command</h4>
            <CodeBlock
              code="# Test help command
supercode --help

# Test specific command help
supercode generate --help
supercode agent --help

# Should display usage information without errors"
              language="bash"
              title="Help Command Test"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Path Verification</h4>
            <CodeBlock
              code="# Check if SuperCode is in PATH
which supercode

# Should return: /usr/local/bin/supercode or similar

# Check executable permissions
ls -la $(which supercode)

# Should show executable permissions (rwxr-xr-x)"
              language="bash"
              title="Path Verification"
            />
          </div>
        </CardContent>
      </Card>

      {/* Configuration Verification */}
      <Card>
        <CardHeader>
          <CardTitle>Configuration Verification</CardTitle>
          <CardDescription>
            Verify that configuration is properly set up
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Configuration File</h4>
            <CodeBlock
              code="# Check configuration file exists
ls -la ~/.supercode/config.json

# View current configuration
supercode config show

# Check configuration file location
supercode config path

# Should show valid JSON configuration"
              language="bash"
              title="Configuration Check"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Directory Structure</h4>
            <CodeBlock
              code="# Verify SuperCode directory structure
ls -la ~/.supercode/

# Expected directories:
# - config.json
# - agents/
# - logs/
# - cache/
# - mcp/

# Check permissions
ls -ld ~/.supercode"
              language="bash"
              title="Directory Structure"
            />
          </div>
        </CardContent>
      </Card>

      {/* Component Verification */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>Component Verification</span>
          </CardTitle>
          <CardDescription>
            Test that all components are working correctly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Agent System</h4>
            <CodeBlock
              code="# List available agents
supercode agent list

# Test agent spawning
supercode spawn orchestrator --test

# Check agent status
supercode agent status

# Should show installed agents without errors"
              language="bash"
              title="Agent System Test"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">MCP Integrations</h4>
            <CodeBlock
              code="# Check MCP status
supercode mcp status

# Test MCP connections
supercode mcp test

# List enabled MCP servers
supercode mcp list

# Should show MCP server status"
              language="bash"
              title="MCP Integration Test"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Task System</h4>
            <CodeBlock
              code="# Create a test task
supercode task create --description='Test task' --test

# List tasks
supercode task list

# Check task system health
supercode task system-status"
              language="bash"
              title="Task System Test"
            />
          </div>
        </CardContent>
      </Card>

      {/* Functional Verification */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Play className="h-5 w-5" />
            <span>Functional Verification</span>
          </CardTitle>
          <CardDescription>
            Test core functionality with real operations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Project Generation</h4>
            <CodeBlock
              code="# Create a test project
mkdir ~/supercode-test
cd ~/supercode-test

# Generate a basic project
supercode generate project test-app --template=basic

# Verify project structure
ls -la test-app/

# Should create a complete project structure"
              language="bash"
              title="Project Generation Test"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Agent Interaction</h4>
            <CodeBlock
              code="# Test agent interaction
supercode spawn frontend-engineer --test

# Ask agent a simple question
supercode ask frontend-engineer 'What is React?' --test

# Should receive a response without errors"
              language="bash"
              title="Agent Interaction Test"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">MCP Operations</h4>
            <CodeBlock
              code="# Test MCP operations (if Forgejo is configured)
supercode mcp forgejo --test

# Test In-Memoria operations
supercode mcp in-memoria --test

# Should complete without connection errors"
              language="bash"
              title="MCP Operations Test"
            />
          </div>
        </CardContent>
      </Card>

      {/* Health Check */}
      <Card>
        <CardHeader>
          <CardTitle>Comprehensive Health Check</CardTitle>
          <CardDescription>
            Run a complete system health check
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">System Doctor</h4>
            <CodeBlock
              code="# Run comprehensive health check
supercode doctor

# Check specific components
supercode doctor --verbose
supercode doctor --agents
supercode doctor --mcp
supercode doctor --config

# Generate diagnostic report
supercode doctor --report > health-report.txt"

              language="bash"
              title="System Health Check"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Performance Test</h4>
            <CodeBlock
              code="# Test system performance
time supercode --version

# Test agent performance
time supercode spawn orchestrator --test

# Test MCP performance
time supercode mcp status

# Should complete within reasonable time"
              language="bash"
              title="Performance Test"
            />
          </div>
        </CardContent>
      </Card>

      {/* Success Indicators */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Rocket className="h-5 w-5" />
            <span>Success Indicators</span>
          </CardTitle>
          <CardDescription>
            What to expect when everything is working correctly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Expected Results</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">SuperCode command responds instantly with version info</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Configuration file is accessible and valid JSON</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Core agents are installed and can be spawned</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">MCP integrations connect without errors</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Project generation creates complete structures</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Health check passes all tests</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Performance Benchmarks</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>• Startup time: &lt; 2 seconds</div>
              <div>• Agent spawn time: &lt; 5 seconds</div>
              <div>• Project generation: &lt; 30 seconds</div>
              <div>• Memory usage: &lt; 512MB idle</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Installation Verified</Badge>
            <Badge variant="secondary">Ready for Production</Badge>
            <Badge variant="outline">All Systems Operational</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Ready to Start!</CardTitle>
          <CardDescription>
            Your SuperCode installation is verified and ready to use
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Recommended Next Steps</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Read the <a href="/docs/getting-started" className="text-blue-500 hover:underline">Getting Started Guide</a></li>
              <li>• Explore the <a href="/docs/commands" className="text-blue-500 hover:underline">Commands Reference</a></li>
              <li>• Learn about <a href="/docs/agents" className="text-blue-500 hover:underline">Available Agents</a></li>
              <li>• Configure <a href="/docs/mcp-integrations" className="text-blue-500 hover:underline">MCP Integrations</a></li>
            </ul>
          </div>

          <div className="pt-4">
            <Button size="lg" className="w-full">
              <Rocket className="mr-2 h-4 w-4" />
              Create Your First Project
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}