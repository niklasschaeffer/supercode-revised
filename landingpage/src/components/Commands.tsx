import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AnimatedSection } from '@/components/ui/animated-section'
import { COMMANDS } from '@/utils/constants'

const categoryColors = {
  'Setup': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  'Context': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  'Development': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  'Optimization': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  'Agents': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
  'Generation': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
  'Maintenance': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  'Management': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
  'Tools': 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
  'Diagnostics': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
}

export function Commands() {
  return (
    <section id="commands" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                { COMMANDS.length } Powerful Commands
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete command set for project initialization, context management, and development workflows
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {COMMANDS.map((command, index) => (
              <AnimatedSection
                key={command.id}
                animation="scale-up"
                delay={index * 50}
                threshold={0.1}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer relative">
                  {/* Category Badge in top-right corner */}
                  <div className="absolute top-3 right-3 z-10">
                    <Badge
                      className={`text-xs px-2 py-1 ${categoryColors[command.category as keyof typeof categoryColors]}`}
                    >
                      {command.category}
                    </Badge>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-3 pr-16">
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        /{command.name.toLowerCase()}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed mb-3">
                      {command.description}
                    </CardDescription>
                    <div className="bg-slate-100 dark:bg-slate-800 rounded p-2 font-mono text-xs text-slate-600 dark:text-slate-400">
                      {command.example}
                    </div>
                  </CardHeader>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={1200}>
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-2xl">Command Synergy</CardTitle>
                <CardDescription className="text-base">
                  Commands work together seamlessly, creating powerful workflows for everything from
                  project initialization to complex multi-agent orchestration and maintenance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
