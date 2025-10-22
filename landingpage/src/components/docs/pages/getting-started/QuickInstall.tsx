import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeBlock } from '../../CodeBlock'
import { Zap, Download, Play } from 'lucide-react'

export function QuickInstall() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Quick Install</h2>
        <p className="text-muted-foreground">
          Get SuperCode up and running in minutes with these simple installation steps.
        </p>
      </div>

      {/* Installation Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Download className="h-5 w-5" />
            <span>Installation Methods</span>
          </CardTitle>
          <CardDescription>
            Choose the installation method that works best for your environment
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Method 1: Install Script */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="default">Recommended</Badge>
              <h4 className="font-medium">Install Script (Linux/macOS)</h4>
            </div>
            <CodeBlock
              code="# Download and run the install script
curl -fsSL https://supercode.dev/install.sh | bash

# Or with wget
wget -qO- https://supercode.dev/install.sh | bash"
              language="bash"
              title="One-Click Installation"
            />
            <p className="text-sm text-muted-foreground">
              This script automatically detects your system and installs SuperCode in the optimal location.
            </p>
          </div>

          {/* Method 2: Package Manager */}
          <div className="space-y-3">
            <h4 className="font-medium">Package Manager</h4>
            <CodeBlock
              code="# Using npm (global)
npm install -g supercode

# Using yarn
yarn global add supercode

# Using pnpm
pnpm add -g supercode"
              language="bash"
              title="Install via Package Manager"
            />
            <p className="text-sm text-muted-foreground">
              Install SuperCode as a global package using your preferred Node.js package manager.
            </p>
          </div>

          {/* Method 3: Manual Download */}
          <div className="space-y-3">
            <h4 className="font-medium">Manual Download</h4>
            <CodeBlock
              code="# Download the latest release
wget https://github.com/supercode/supercode/releases/latest/download/supercode-linux-x64.tar.gz

# Extract
tar -xzf supercode-linux-x64.tar.gz

# Move to bin directory
sudo mv supercode /usr/local/bin/"
              language="bash"
              title="Manual Installation"
            />
            <p className="text-sm text-muted-foreground">
              Download the binary directly and place it in your PATH.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Verification */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Play className="h-5 w-5" />
            <span>Verify Installation</span>
          </CardTitle>
          <CardDescription>
            Confirm that SuperCode is installed correctly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeBlock
            code="# Check version
supercode --version

# Check help
supercode --help

# Run health check
supercode doctor"
            language="bash"
            title="Installation Verification"
          />
          
          <div className="space-y-2">
            <h4 className="font-medium">Expected Output:</h4>
            <div className="bg-muted p-3 rounded text-sm font-mono">
              <div>SuperCode v1.0.0</div>
              <div>Platform: linux-x64</div>
              <div>Node.js: v18.17.0</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Post-Installation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5" />
            <span>Post-Installation Setup</span>
          </CardTitle>
          <CardDescription>
            Complete the setup process for optimal experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Initialize Configuration</h4>
            <CodeBlock
              code="# Initialize SuperCode configuration
supercode init

# This will create:
# - ~/.supercode/config.json
# - ~/.supercode/agents/
# - ~/.supercode/logs/"
              language="bash"
              title="Initialize Configuration"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Install Core Agents</h4>
            <CodeBlock
              code="# Install essential agents
supercode agent install frontend-engineer
supercode agent install backend-engineer
supercode agent install orchestrator

# List installed agents
supercode agent list"
              language="bash"
              title="Install Agents"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Configure MCP Integrations</h4>
            <CodeBlock
              code="# Enable common MCPs
supercode mcp enable in-memoria
supercode mcp enable forgejo
supercode mcp enable playwright"
              language="bash"
              title="Configure MCPs"
            />
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card>
        <CardHeader>
          <CardTitle>Installation Issues?</CardTitle>
          <CardDescription>
            Common problems and their solutions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Permission Denied</h4>
            <CodeBlock
              code="# If you get permission errors, try:
sudo chown -R $USER:$(id -gn $USER) ~/.supercode

# Or install without sudo using npx:
npx supercode@latest init"
              language="bash"
              title="Fix Permission Issues"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">PATH Issues</h4>
            <CodeBlock
              code="# Add SuperCode to PATH (add to ~/.bashrc or ~/.zshrc)
export PATH="$PATH:$HOME/.supercode/bin"

# Reload shell configuration
source ~/.bashrc  # or ~/.zshrc"
              language="bash"
              title="Fix PATH Issues"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}