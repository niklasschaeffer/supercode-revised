import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AnimatedSection } from '@/components/ui/animated-section'
import { AGENTS } from '@/utils/constants'

const categoryColors = {
  'Core': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  'Development': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  'Architecture': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  'Quality': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  'Security': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  'Operations': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
  'Optimization': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  'Generation': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
  'Tools': 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
  'Analysis': 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
  'Management': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
  'Monitoring': 'bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300',
  'Maintenance': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
}

export function Agents() {
  return (
    <section id="agents" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              17 Specialized AI Agents
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each agent is expertly trained for specific development tasks, working together seamlessly
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {AGENTS.map((agent, index) => (
              <AnimatedSection
                key={agent.id}
                animation="scale-up"
                delay={index * 50}
                threshold={0.1}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer relative">
                  {/* Category Badge in top-right corner */}
                  <div className="absolute top-3 right-3 z-10">
                    <Badge 
                      className={`text-xs px-2 py-1 ${categoryColors[agent.category as keyof typeof categoryColors]}`}
                    >
                      {agent.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {agent.icon}
                    </div>
                    <CardTitle className="text-lg leading-tight">{agent.name}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {agent.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={1200}>
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-2xl">Intelligent Orchestration</CardTitle>
                <CardDescription className="text-base">
                  Agents work together seamlessly, automatically determining the best specialist for each task
                  and coordinating complex multi-agent workflows.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}