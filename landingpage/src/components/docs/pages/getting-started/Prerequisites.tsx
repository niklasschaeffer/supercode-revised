import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeBlock } from '../../CodeBlock'
import { CheckCircle, AlertCircle, Terminal } from 'lucide-react'

export function Prerequisites() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Prerequisites</h2>
        <p className="text-muted-foreground">
          Before installing SuperCode, ensure your system meets these requirements.
        </p>
      </div>

      {/* System Requirements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Terminal className="h-5 w-5" />
            <span>System Requirements</span>
          </CardTitle>
          <CardDescription>
            Minimum system requirements for running SuperCode
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-medium">Operating System</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Linux (Ubuntu 18.04+, CentOS 7+)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>macOS (10.15+)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Windows 10/11 (WSL2 recommended)</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Hardware</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>RAM: 4GB minimum (8GB recommended)</li>
                <li>Storage: 2GB free space</li>
                <li>CPU: 64-bit processor</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Required Software */}
      <Card>
        <CardHeader>
          <CardTitle>Required Software</CardTitle>
          <CardDescription>
            Software that must be installed before using SuperCode
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Node.js</h4>
              <CodeBlock
                code="node --version
# Should show v18.0.0 or higher"
                language="bash"
                title="Check Node.js Version"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Node.js 18.0.0 or higher is required for SuperCode to run.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Git</h4>
              <CodeBlock
                code="git --version
# Should show git version 2.0 or higher"
                language="bash"
                title="Check Git Version"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Git is required for version control operations and repository management.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Package Manager</h4>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="secondary">npm</Badge>
                <Badge variant="secondary">yarn</Badge>
                <Badge variant="secondary">pnpm</Badge>
              </div>
              <CodeBlock
                code="npm --version
# or
yarn --version
# or  
pnpm --version"
                language="bash"
                title="Check Package Manager"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Optional Dependencies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-yellow-500" />
            <span>Optional Dependencies</span>
          </CardTitle>
          <CardDescription>
            Additional software that enhances SuperCode functionality
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">Docker</h4>
              <CodeBlock
                code="docker --version"
                language="bash"
                title="Check Docker"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Required for containerized development and testing.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Python</h4>
              <CodeBlock
                code="python3 --version"
                language="bash"
                title="Check Python"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Required for some backend agents and scripts.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Environment Setup */}
      <Card>
        <CardHeader>
          <CardTitle>Environment Setup</CardTitle>
          <CardDescription>
            Configure your development environment for optimal SuperCode experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Environment Variables</h4>
            <CodeBlock
              code="# Add to your shell profile (~/.bashrc, ~/.zshrc, etc.)
export SUPERCODE_HOME='$HOME/.supercode'
export SUPERCODE_LOG_LEVEL='info'
export PATH='$PATH:$SUPERCODE_HOME/bin'"
              language="bash"
              title="Environment Variables"
            />
          </div>

          <div>
            <h4 className="font-medium mb-2">Shell Configuration</h4>
            <CodeBlock
              code="# Enable tab completion
echo 'source <(supercode completion bash)' >> ~/.bashrc
# or for zsh
echo 'source <(supercode completion zsh)' >> ~/.zshrc"
              language="bash"
              title="Shell Completion"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}