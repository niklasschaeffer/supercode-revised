import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeBlock } from '../../CodeBlock'
import { AlertTriangle, CheckCircle, Wrench, Terminal } from 'lucide-react'

export function Troubleshooting() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Troubleshooting</h2>
        <p className="text-muted-foreground">
          Common issues and solutions for SuperCode installation and configuration problems.
        </p>
      </div>

      {/* Installation Issues */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <span>Installation Issues</span>
          </CardTitle>
          <CardDescription>
            Common problems during installation and their solutions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Permission Denied</h4>
            <CodeBlock
              code="# Problem: Permission denied when installing to /usr/local/bin
sudo chown -R $USER:$(id -gn $USER) ~/.supercode

# Solution 1: Install without sudo using npx
npx supercode@latest init

# Solution 2: Use user-local directory
mkdir -p ~/.local/bin
export PATH="$PATH:$HOME/.local/bin"
curl -fsSL https://supercode.dev/install.sh | bash -s -- --prefix=$HOME/.local"

              language="bash"
              title="Fix Permission Issues"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Command Not Found</h4>
            <CodeBlock
              code="# Problem: supercode command not found
# Check if SuperCode is in PATH
which supercode

# Solution 1: Add to PATH manually
echo 'export PATH="$PATH:/usr/local/bin"' >> ~/.bashrc
source ~/.bashrc

# Solution 2: Create symbolic link
sudo ln -sf /usr/local/bin/supercode /usr/bin/supercode

# Solution 3: Reinstall with correct PATH
curl -fsSL https://supercode.dev/install.sh | bash -s -- --prefix=/usr/local"

              language="bash"
              title="Fix PATH Issues"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Network Connection Issues</h4>
            <CodeBlock
              code="# Problem: Cannot download SuperCode
# Check internet connection
curl -I https://supercode.dev

# Solution 1: Use proxy
export https_proxy=http://proxy.company.com:8080
export http_proxy=http://proxy.company.com:8080

# Solution 2: Download manually
wget https://github.com/supercode/supercode/releases/latest/download/supercode-linux-x64.tar.gz

# Solution 3: Use alternative mirror
curl -fsSL https://mirror.supercode.dev/install.sh | bash"

              language="bash"
              title="Fix Network Issues"
            />
          </div>
        </CardContent>
      </Card>

      {/* Configuration Issues */}
      <Card>
        <CardHeader>
          <CardTitle>Configuration Issues</CardTitle>
          <CardDescription>
            Problems with configuration and setup
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Configuration File Not Found</h4>
            <CodeBlock
              code="# Problem: Config file missing or corrupted
supercode config show
# Error: Configuration file not found

# Solution: Reinitialize configuration
rm -rf ~/.supercode
supercode init

# Or create manual config
mkdir -p ~/.supercode
cat > ~/.supercode/config.json << EOF
{
  \"version\": \"1.0.0\",
  \"defaultAgent\": \"orchestrator\",
  \"workspace\": \"./workspace\"
}
EOF"

              language="bash"
              title="Fix Configuration Issues"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Agent Installation Fails</h4>
            <CodeBlock
              code="# Problem: Cannot install agents
supercode agent install frontend-engineer
# Error: Failed to download agent

# Solution 1: Check network and registry
supercode doctor
supercode agent registry status

# Solution 2: Clear agent cache
rm -rf ~/.supercode/agents/cache
supercode agent install frontend-engineer --force

# Solution 3: Install from local file
supercode agent install ./frontend-engineer.tar.gz"

              language="bash"
              title="Fix Agent Installation"
            />
          </div>
        </CardContent>
      </Card>

      {/* Runtime Issues */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wrench className="h-5 w-5" />
            <span>Runtime Issues</span>
          </CardTitle>
          <CardDescription>
            Problems that occur during SuperCode operation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Agent Timeout</h4>
            <CodeBlock
              code="# Problem: Agents timing out during tasks
supercode task create --agent=frontend-engineer --description=\"Build component\"
# Error: Agent timeout after 300 seconds

# Solution 1: Increase timeout
supercode config set agents.resources.timeout 600

# Solution 2: Check system resources
free -h
df -h

# Solution 3: Run with verbose logging
SUPERCODE_LOG_LEVEL=debug supercode task run <task-id>"

              language="bash"
              title="Fix Timeout Issues"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">MCP Connection Failures</h4>
            <CodeBlock>
              code="# Problem: MCP servers not connecting
supercode mcp status
# Error: Connection refused

# Solution 1: Check MCP configuration
supercode mcp test
supercode mcp configure forgejo --url=https://git.example.com

# Solution 2: Verify credentials
export FORGEJO_TOKEN="valid-token"
supercode mcp test forgejo

# Solution 3: Restart MCP services
supercode mcp restart
supercode mcp enable forgejo"

              language="bash"
              title="Fix MCP Connection Issues"
            />
          </div>
        </CardContent>
      </Card>

      {/* Performance Issues */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Issues</CardTitle>
          <CardDescription>
            Slow performance and resource optimization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Slow Startup</h4>
            <CodeBlock
              code="# Problem: SuperCode takes too long to start
time supercode --version

# Solution 1: Clear cache
supercode cache clear

# Solution 2: Disable unused features
supercode config set telemetry.enabled false
supercode config set autoUpdate false

# Solution 3: Optimize agent loading
supercode config set agents.lazyLoad true"

              language="bash"
              title="Improve Startup Performance"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">High Memory Usage</h4>
            <CodeBlock
              code="# Problem: SuperCode using too much memory
ps aux | grep supercode

# Solution 1: Limit agent resources
supercode config set agents.resources.maxMemory 1024
supercode config set agents.resources.concurrent 2

# Solution 2: Enable garbage collection
supercode config set agents.gc.enabled true
supercode config set agents.gc.interval 300

# Solution 3: Monitor and restart
supercode monitor --memory-threshold 80 --action restart"

              language="bash"
              title="Optimize Memory Usage"
            />
          </div>
        </CardContent>
      </Card>

      {/* Diagnostic Tools */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Terminal className="h-5 w-5" />
            <span>Diagnostic Tools</span>
          </CardTitle>
          <CardDescription>
            Built-in tools for troubleshooting and debugging
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Health Check</h4>
            <CodeBlock
              code="# Comprehensive system health check
supercode doctor

# Check specific components
supercode doctor --agents
supercode doctor --mcp
supercode doctor --config

# Generate diagnostic report
supercode doctor --report > diagnostic-report.txt"

              language="bash"
              title="Health Check Commands"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Debug Mode</h4>
            <CodeBlock
              code="# Enable debug logging
export SUPERCODE_LOG_LEVEL=debug

# Run with verbose output
supercode --verbose task run <task-id>

# Enable trace mode
supercode --trace spawn frontend-engineer

# Monitor real-time logs
tail -f ~/.supercode/logs/supercode.log"

              language="bash"
              title="Debug Mode"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">System Information</h4>
            <CodeBlock
              code="# Get system information
supercode info

# Check version compatibility
supercode version --check-compatibility

# List all configurations
supercode config show --all

# Test all integrations
supercode test --all"

              language="bash"
              title="System Information"
            />
          </div>
        </CardContent>
      </Card>

      {/* Getting Help */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>Getting Help</span>
          </CardTitle>
          <CardDescription>
            Where to find additional help and support
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Built-in Help</h4>
            <CodeBlock
              code="# Get help for commands
supercode --help
supercode generate --help
supercode agent --help

# Get help for specific topics
supercode help installation
supercode help configuration
supercode help troubleshooting"

              language="bash"
              title="Built-in Help"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Community Support</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• GitHub Issues: <a href="https://github.com/supercode/supercode/issues" className="text-blue-500 hover:underline">Report bugs and request features</a></li>
              <li>• Discord Community: <a href="https://discord.gg/supercode" className="text-blue-500 hover:underline">Chat with other users</a></li>
              <li>• Documentation: <a href="https://docs.supercode.dev" className="text-blue-500 hover:underline">Comprehensive guides</a></li>
              <li>• Stack Overflow: <a href="https://stackoverflow.com/questions/tagged/supercode" className="text-blue-500 hover:underline">Get answers to questions</a></li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">GitHub Issues</Badge>
            <Badge variant="secondary">Discord</Badge>
            <Badge variant="secondary">Documentation</Badge>
            <Badge variant="secondary">Stack Overflow</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}