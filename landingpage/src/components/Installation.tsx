import { CodeBlock } from '@/components/docs/CodeBlock'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AnimatedSection } from '@/components/ui/animated-section'
import { Copy, Download, Terminal, Zap } from 'lucide-react'
import { MCP_SERVERS } from '@/utils/constants'

export function Installation() {
  const installCode = `# Clone the repository
git clone https://github.com/supercode/supercode.git
cd supercode

# Install dependencies
npm install

# Initialize SuperCode
npm run supercode init

# Start your first project
npm run supercode create my-app`

  const quickStartCode = `# Create a new project with agents
supercode create my-web-app --template=react

# Add frontend engineering
supercode agent frontend-engineer --task="build responsive UI"

# Add backend API
supercode agent backend-engineer --task="create REST API"

# Run quality assurance
supercode agent qa-engineer --task="test and validate"`

  return (
    <section id="installation" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple installation process with comprehensive documentation and examples
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection animation="fade-right" delay={200}>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <CardTitle>Installation</CardTitle>
                </div>
                <CardDescription>
                  Clone, install, and initialize SuperCode in your environment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock code={installCode} language="bash" />
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/supercode" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={300}>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <CardTitle>Quick Start</CardTitle>
                </div>
                <CardDescription>
                  Create your first project with AI-powered agents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock code={quickStartCode} language="bash" />
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="/docs" target="_blank" rel="noopener noreferrer">
                      View Documentation
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">11 MCP Server Integrations</CardTitle>
                <CardDescription className="text-base max-w-2xl mx-auto">
                  SuperCode seamlessly integrates with modern development tools through Model Context Protocol servers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  {MCP_SERVERS.map((server, index) => (
                    <Badge 
                      key={server.name} 
                      variant="secondary" 
                      className="text-xs"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {server.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scale-up" delay={500}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg">
              <div className="text-left">
                <div className="font-semibold text-lg mb-1">Ready to transform your development?</div>
                <div className="text-muted-foreground">Join thousands of developers using SuperCode</div>
              </div>
              <Button size="lg" asChild>
                <a href="#hero">
                  Get Started Now
                  <Zap className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}