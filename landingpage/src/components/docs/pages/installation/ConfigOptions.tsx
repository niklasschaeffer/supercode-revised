import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeBlock } from '../../CodeBlock'
import { Settings, Database, Shield } from 'lucide-react'

export function ConfigOptions() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Configuration Options</h2>
        <p className="text-muted-foreground">
          Comprehensive guide to SuperCode configuration options and settings.
        </p>
      </div>

      {/* Core Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Core Configuration</span>
          </CardTitle>
          <CardDescription>
            Essential settings that control SuperCode behavior
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">General Settings</h4>
            <CodeBlock
              code='{
  "version": "1.0.0",
  "defaultAgent": "orchestrator",
  "workspace": "./workspace",
  "autoUpdate": true,
  "telemetry": {
    "enabled": false,
    "level": "basic"
  }
}'
              language="json"
              title="General Configuration"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Logging Configuration</h4>
            <CodeBlock
              code='{
  "logging": {
    "level": "info",
    "file": {
      "enabled": true,
      "path": "~/.supercode/logs/supercode.log",
      "maxSize": "10MB",
      "rotate": true
    },
    "console": {
      "enabled": true,
      "colors": true
    }
  }
}'
              language="json"
              title="Logging Settings"
            />
          </div>
        </CardContent>
      </Card>

      {/* Agent Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Agent Configuration</CardTitle>
          <CardDescription>
            Settings for agent behavior and resource management
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Resource Management</h4>
            <CodeBlock
              code='{
  "agents": {
    "resources": {
      "maxMemory": "2048MB",
      "maxCPU": 2,
      "timeout": 300000,
      "concurrent": 4
    },
    "cache": {
      "enabled": true,
      "ttl": 3600,
      "maxSize": "100MB"
    }
  }
}'
              language="json"
              title="Agent Resources"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Agent Preferences</h4>
            <CodeBlock
              code='{
  "agents": {
    "frontend-engineer": {
      "frameworks": ["react", "vue", "angular"],
      "styling": ["tailwind", "css-modules"],
      "testing": ["jest", "cypress"]
    },
    "backend-engineer": {
      "languages": ["nodejs", "python", "go"],
      "databases": ["postgresql", "mongodb"],
      "apis": ["rest", "graphql"]
    }
  }
}'
              language="json"
              title="Agent Preferences"
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
            Model Context Protocol server settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Global MCP Settings</h4>
            <CodeBlock
              code='{
  "mcp": {
    "enabled": true,
    "timeout": 30000,
    "retryAttempts": 3,
    "retryDelay": 1000,
    "servers": {}
  }
}'
              language="json"
              title="MCP Global Settings"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Server-Specific Configuration</h4>
            <CodeBlock
              code='{
  "mcp": {
    "servers": {
      "forgejo": {
        "enabled": true,
        "url": "https://git.example.com",
        "token": "${FORGEJO_TOKEN}",
        "timeout": 30000,
        "apiVersion": "v1"
      },
      "in-memoria": {
        "enabled": true,
        "database": "./in-memoria.db",
        "learning": {
          "enabled": true,
          "autoSave": true,
          "interval": 300
        }
      }
    }
  }
}'
              language="json"
              title="MCP Server Configuration"
            />
          </div>
        </CardContent>
      </Card>

      {/* Security Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Security Configuration</span>
          </CardTitle>
          <CardDescription>
            Security settings and access control
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Authentication</h4>
            <CodeBlock
              code='{
  "security": {
    "authentication": {
      "enabled": false,
      "method": "token",
      "tokenFile": "~/.supercode/.token",
      "timeout": 3600
    },
    "permissions": {
      "allowFileAccess": true,
      "allowNetworkAccess": true,
      "allowShellAccess": false,
      "restrictedPaths": ["/etc", "/usr/bin"]
    }
  }
}'
              language="json"
              title="Security Settings"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">API Keys and Tokens</h4>
            <CodeBlock
              code="# Set API tokens via environment variables
export GITHUB_TOKEN='your-github-token'
export FORGEJO_TOKEN='your-forgejo-token'
export OPENAI_API_KEY='your-openai-key'

# Or use SuperCode config
supercode config set security.tokens.github 'your-github-token'
supercode config set security.tokens.forgejo 'your-forgejo-token'"
              language="bash"
              title="API Token Configuration"
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
            <h4 className="font-medium">Available Variables</h4>
            <CodeBlock
              code="# Core SuperCode variables
export SUPERCODE_HOME='$HOME/.supercode'
export SUPERCODE_LOG_LEVEL='debug'
export SUPERCODE_WORKSPACE='$HOME/projects'
export SUPERCODE_CONFIG_FILE='$HOME/.supercode/custom-config.json'

# MCP server variables
export FORGEJO_URL='https://git.example.com'
export FORGEJO_TOKEN='your-token'
export IN_MEMORIA_DB='./custom-db.db'

# Agent variables
export SUPERCODE_DEFAULT_AGENT='frontend-engineer'
export SUPERCODE_AGENT_TIMEOUT='600'
export SUPERCODE_MAX_CONCURRENT_AGENTS='8'"
              language="bash"
              title="Environment Variables"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">SUPERCODE_HOME</Badge>
            <Badge variant="secondary">SUPERCODE_LOG_LEVEL</Badge>
            <Badge variant="secondary">FORGEJO_TOKEN</Badge>
            <Badge variant="secondary">GITHUB_TOKEN</Badge>
            <Badge variant="secondary">IN_MEMORIA_DB</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}