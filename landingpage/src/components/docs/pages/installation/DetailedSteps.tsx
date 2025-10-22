import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeBlock } from '../../CodeBlock'
import { Settings, CheckCircle } from 'lucide-react'

export function DetailedSteps() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Detailed Installation Steps</h2>
        <p className="text-muted-foreground">
          Comprehensive installation guide with detailed explanations for each step.
        </p>
      </div>

      {/* Step 1: System Preparation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">1</div>
            <span>System Preparation</span>
          </CardTitle>
          <CardDescription>
            Prepare your system for SuperCode installation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Update System Packages</h4>
            <CodeBlock
              code="# On Ubuntu/Debian
sudo apt update && sudo apt upgrade -y

# On CentOS/RHEL
sudo yum update -y

# On macOS
brew update && brew upgrade"

              language="bash"
              title="Update System"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Install Build Tools</h4>
            <CodeBlock
              code="# On Ubuntu/Debian
sudo apt install -y build-essential curl wget git

# On CentOS/RHEL
sudo yum groupinstall -y 'Development Tools'
sudo yum install -y curl wget git

# On macOS
xcode-select --install
brew install git curl wget"
              language="bash"
              title="Install Build Tools"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Verify Prerequisites</h4>
            <CodeBlock
              code="# Check Node.js (minimum v18.0.0)
node --version

# Check npm
npm --version

# Check Git
git --version

# If Node.js is not installed or version is too old:
# Using NodeSource (recommended)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Or using nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18"

              language="bash"
              title="Verify Prerequisites"
            />
          </div>
        </CardContent>
      </Card>

      {/* Step 2: Download SuperCode */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">2</div>
            <span>Download SuperCode</span>
          </CardTitle>
          <CardDescription>
            Download the SuperCode package to your system
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Method 1: Install Script (Recommended)</h4>
            <CodeBlock
              code="# Download and run the official install script
curl -fsSL https://supercode.dev/install.sh | bash

# The script will:
# - Detect your system architecture
# - Download the appropriate binary
# - Install to /usr/local/bin (or ~/.local/bin for user install)
# - Update PATH if needed
# - Create configuration directory"

              language="bash"
              title="Install Script Method"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Method 2: Manual Download</h4>
            <CodeBlock
              code="# Determine your system architecture
uname -m

# Download the appropriate release
# For Linux x64
wget https://github.com/supercode/supercode/releases/latest/download/supercode-linux-x64.tar.gz

# For macOS x64
wget https://github.com/supercode/supercode/releases/latest/download/supercode-darwin-x64.tar.gz

# For macOS ARM64
wget https://github.com/supercode/supercode/releases/latest/download/supercode-darwin-arm64.tar.gz

# For Windows x64
wget https://github.com/supercode/supercode/releases/latest/download/supercode-win-x64.zip"

              language="bash"
              title="Manual Download"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Extract and Install</h4>
            <CodeBlock
              code={`# Extract the archive
tar -xzf supercode-linux-x64.tar.gz

# Make the binary executable
chmod +x supercode

# Move to system directory
sudo mv supercode /usr/local/bin/

# Or for user installation
mkdir -p ~/.local/bin
mv supercode ~/.local/bin/

# Add to PATH if needed
echo 'export PATH="$PATH:$HOME/.local/bin"' >> ~/.bashrc
source ~/.bashrc`}
              language="bash"
              title="Extract and Install"
            />
          </div>
        </CardContent>
      </Card>

      {/* Step 3: Initial Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">3</div>
            <span>Initial Configuration</span>
          </CardTitle>
          <CardDescription>
            Set up SuperCode configuration and directories
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Initialize Configuration</h4>
            <CodeBlock
              code="# Run the initialization wizard
supercode init

# This will create:
# - ~/.supercode/ (configuration directory)
# - ~/.supercode/config.json (main configuration)
# - ~/.supercode/agents/ (agent configurations)
# - ~/.supercode/logs/ (log files)
# - ~/.supercode/cache/ (cache directory)"

              language="bash"
              title="Initialize Configuration"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Configure Basic Settings</h4>
            <CodeBlock
              code="# Set your preferred default agent
supercode config set defaultAgent orchestrator

# Set workspace directory
supercode config set workspace ~/projects/supercode-workspace

# Configure logging
supercode config set logging.level info

# Enable auto-updates
supercode config set autoUpdate true"

              language="bash"
              title="Basic Configuration"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Verify Configuration</h4>
            <CodeBlock
              code="# Check current configuration
supercode config show

# Test configuration
supercode doctor

# View configuration file location
supercode config path"

              language="bash"
              title="Verify Configuration"
            />
          </div>
        </CardContent>
      </Card>

      {/* Step 4: Install Core Components */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">4</div>
            <span>Install Core Components</span>
          </CardTitle>
          <CardDescription>
            Install essential agents and MCP integrations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Install Essential Agents</h4>
            <CodeBlock
              code="# Install core agents
supercode agent install orchestrator
supercode agent install frontend-engineer
supercode agent install backend-engineer
supercode agent install qa-engineer

# List installed agents
supercode agent list

# Update agents to latest versions
supercode agent update --all"

              language="bash"
              title="Install Agents"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Configure MCP Integrations</h4>
            <CodeBlock
              code="# Enable core MCP servers
supercode mcp enable in-memoria
supercode mcp enable forgejo
supercode mcp enable playwright

# Configure MCP settings
supercode mcp configure in-memoria --database=./in-memoria.db
supercode mcp configure forgejo --url=https://github.com

# Test MCP connections
supercode mcp test"

              language="bash"
              title="Configure MCPs"
            />
          </div>
        </CardContent>
      </Card>

      {/* Step 5: Verification */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">5</div>
            <span>Verification and Testing</span>
          </CardTitle>
          <CardDescription>
            Verify that SuperCode is installed and working correctly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Basic Functionality Tests</h4>
            <CodeBlock
              code="# Check SuperCode version
supercode --version

# Test help command
supercode --help

# Run health check
supercode doctor

# Test agent spawning
supercode spawn orchestrator --test

# Test MCP integration
supercode mcp status"

              language="bash"
              title="Basic Tests"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Create Test Project</h4>
            <CodeBlock
              code="# Create a test project
mkdir ~/supercode-test
cd ~/supercode-test

# Generate a simple project
supercode generate project test-app --template=basic

# Verify project structure
ls -la test-app/

# Clean up test project
rm -rf ~/supercode-test"

              language="bash"
              title="Test Project Creation"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Success Indicators</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">SuperCode command responds without errors</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Configuration file is created and accessible</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Core agents are installed and functional</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">MCP integrations are enabled and connected</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Project generation works correctly</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Post-Installation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Post-Installation Setup</span>
          </CardTitle>
          <CardDescription>
            Optional configurations for enhanced experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Shell Integration</h4>
            <CodeBlock
              code="# Enable tab completion
# For bash
echo 'source <(supercode completion bash)' >> ~/.bashrc

# For zsh
echo 'source <(supercode completion zsh)' >> ~/.zshrc

# For fish
supercode completion fish > ~/.config/fish/completions/supercode.fish

# Reload shell
source ~/.bashrc  # or ~/.zshrc"

              language="bash"
              title="Shell Completion"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Environment Setup</h4>
            <CodeBlock
              code="# Add to ~/.bashrc, ~/.zshrc, or .env
export SUPERCODE_HOME='$HOME/.supercode'
export SUPERCODE_LOG_LEVEL='info'
export SUPERCODE_WORKSPACE='$HOME/projects'

# Optional: API tokens for integrations
export GITHUB_TOKEN='your-github-token'
export FORGEJO_TOKEN='your-forgejo-token'"
              language="bash"
              title="Environment Variables"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Installation Complete</Badge>
            <Badge variant="outline">Ready to Use</Badge>
            <Badge variant="default">SuperCode v1.0.0</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}