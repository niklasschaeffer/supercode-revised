import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeBlock } from '../../CodeBlock'
import { Settings, FileText, Database } from 'lucide-react'

export function BasicConfig() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Basic Configuration</h2>
        <p className="text-muted-foreground">
          Configure SuperCode to match your development workflow and preferences.
        </p>
      </div>

      {/* Configuration File */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Configuration File</span>
          </CardTitle>
          <CardDescription>
            Understand and customize SuperCode's configuration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Default Configuration Location</h4>
            <CodeBlock
              code="# Configuration file location
~/.supercode/config.json

# View current configuration
supercode config show"
              language="bash"
              title="Configuration Location"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Basic Configuration Structure</h4>
            <CodeBlock
              code='{
  "version": "1.0.0",
  "defaultAgent": "orchestrator",
  "workspace": "./workspace",
  "logging": {
    "level": "info",
    "file": "~/.supercode/logs/supercode.log"
  },
  "mcp": {
    "enabled": true,
    "servers": {}
  },
  "agents": {
    "autoUpdate": true,
    "cacheDir": "~/.supercode/agents/cache"
  }
}'
              language="json"
              title="Basic Config Structure"
            />
          </div>
        </CardContent>
      </Card>

      {/* Core Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Core Settings</span>
          </CardTitle>
          <CardDescription>
            Essential configuration options for daily use
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Default Agent</h4>
            <CodeBlock
              code="# Set your preferred default agent
supercode config set defaultAgent frontend-engineer

# Or edit config.json directly
supercode config edit"
              language="bash"
              title="Set Default Agent"
            />
            <p className="text-sm text-muted-foreground">
              This agent will be used when no specific agent is specified in commands.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Workspace Configuration</h4>
            <CodeBlock
              code="# Set default workspace directory
supercode config set workspace ~/projects/supercode-workspace

# Create workspace directory
mkdir -p ~/projects/supercode-workspace"
              language="bash"
              title="Configure Workspace"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Logging Configuration</h4>
            <CodeBlock
              code="# Set log level (debug, info, warn, error)
supercode config set logging.level debug

# Enable file logging
supercode config set logging.file.enabled true

# Set custom log file location
supercode config set logging.file.path ./logs/supercode.log"
              language="bash"
              title="Configure Logging"
            />
          </div>
        </CardContent>
      </Card>

      {/* Agent Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Agent Configuration</CardTitle>
          <CardDescription>
            Customize agent behavior and capabilities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Agent Preferences</h4>
            <CodeBlock
              code='{
  "agents": {
    "frontend-engineer": {
      "frameworks": ["react", "vue", "angular"],
      "styling": ["tailwind", "css-modules", "styled-components"],
      "testing": ["jest", "cypress", "testing-library"]
    },
    "backend-engineer": {
      "languages": ["nodejs", "python", "go"],
      "databases": ["postgresql", "mongodb", "redis"],
      "apis": ["rest", "graphql", "grpc"]
    }
  }
}'
              language="json"
              title="Agent Preferences"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Agent Resources</h4>
            <CodeBlock
              code="# Set resource limits for agents
supercode config set agents.resources.maxMemory 2048
supercode config set agents.resources.maxCPU 2
supercode config set agents.resources.timeout 300"
              language="bash"
              title="Configure Agent Resources"
            />
          </div>
        </CardContent>
      </Card>

      {/* MCP Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5" />
            <span>MCP Configuration</span>
          </CardTitle>
          <CardDescription>
            Configure Model Context Protocol integrations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Enable MCP Servers</h4>
            <CodeBlock
              code="# Enable specific MCP servers
supercode mcp enable in-memoria
supercode mcp enable forgejo
supercode mcp enable playwright

# Configure MCP server settings
supercode mcp configure in-memoria --database=./my-db.db"
              language="bash"
              title="Configure MCP Servers"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">MCP Server Configuration</h4>
            <CodeBlock
              code='{
  "mcp": {
    "servers": {
      "forgejo": {
        "enabled": true,
        "url": "https://git.example.com",
        "token": "${FORGEJO_TOKEN}",
        "timeout": 30000
      },
      "in-memoria": {
        "enabled": true,
        "database": "./in-memoria.db",
        "learning": {
          "enabled": true,
          "autoSave": true
        }
      }
    }
  }
}'
              language="json"
              title="MCP Server Config"
            />
          </div>
        </CardContent>
      </Card>

      {/* Environment Variables */}
      <Card>
        <CardHeader>
          <CardTitle>Environment Variables</CardTitle>
          <CardDescription>
            Override configuration using environment variables
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Common Environment Variables</h4>
            <CodeBlock
              code="# Add to ~/.bashrc, ~/.zshrc, or .env file

# SuperCode home directory
export SUPERCODE_HOME='$HOME/.supercode'

# Log level override
export SUPERCODE_LOG_LEVEL='debug'

# Default workspace
export SUPERCODE_WORKSPACE='$HOME/projects'

# API tokens for MCP integrations
export FORGEJO_TOKEN='your-token-here'
export GITHUB_TOKEN='your-github-token'

# Database connections
export IN_MEMORIA_DB='./custom-db.db'"
              language="bash"
              title="Environment Variables"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">SUPERCODE_HOME</Badge>
            <Badge variant="secondary">SUPERCODE_LOG_LEVEL</Badge>
            <Badge variant="secondary">SUPERCODE_WORKSPACE</Badge>
            <Badge variant="secondary">FORGEJO_TOKEN</Badge>
            <Badge variant="secondary">GITHUB_TOKEN</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}