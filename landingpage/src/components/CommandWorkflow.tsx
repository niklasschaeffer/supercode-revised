import { CodeBlock } from '@/components/ui/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AnimatedSection } from '@/components/ui/animated-section'
import { ArrowRight, Play, Save, Upload } from 'lucide-react'

export function CommandWorkflow() {
  const workflowSteps = [
    {
      title: 'Initialize',
      description: 'Establish dual MCP foundation',
      command: '/initialize',
      icon: <Play className="h-5 w-5" />,
      color: 'text-green-600 dark:text-green-400'
    },
    {
      title: 'Load',
      description: 'Read context from both MCPs',
      command: '/load',
      icon: <Upload className="h-5 w-5" />,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Work',
      description: 'Use agents and commands',
      command: '/implement --ultrathink "feature"',
      icon: <ArrowRight className="h-5 w-5" />,
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Save',
      description: 'Write to both MCPs',
      command: '/save',
      icon: <Save className="h-5 w-5" />,
      color: 'text-orange-600 dark:text-orange-400'
    }
  ]

  const exampleCode = `# Complete development workflow
/initialize              # Establish dual MCP foundation
/load                    # Load project context
/implement --orchestrate "build user authentication"
/improve --patterns      # Optimize and refactor
/save                    # Persist changes`

  return (
    <section id="workflow" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Complete Command Lifecycle
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From project initialization to completion - a seamless workflow powered by dual MCP integration
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-4 mb-16">
          {workflowSteps.map((step, index) => (
            <AnimatedSection
              key={step.title}
              animation="fade-up"
              delay={index * 150}
              threshold={0.1}
            >
              <Card className="h-full text-center relative">
                <CardHeader>
                  <div className={`mx-auto mb-4 p-3 rounded-full bg-slate-100 dark:bg-slate-700 ${step.color}`}>
                    {step.icon}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={step.command} language="bash" />
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={600}>
          <Card className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl">Example Workflow</CardTitle>
              <CardDescription>
                Complete development session from initialization to completion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock code={exampleCode} language="bash" />
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="secondary">
                  ✨ Dual MCP Foundation
                </Badge>
                <Badge variant="secondary">
                  🔄 Persistent Context
                </Badge>
                <Badge variant="secondary">
                  🤖 Agent Coordination
                </Badge>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={800}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
              <div className="text-left">
                <div className="font-semibold text-lg mb-1">Ready to experience the complete workflow?</div>
                <div className="text-muted-foreground">Start with /initialize and transform your development</div>
              </div>
              <Badge variant="default" className="text-sm px-3 py-1">
                New: /initialize
              </Badge>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}