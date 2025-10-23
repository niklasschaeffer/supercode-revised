import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Github, Heart, Mail, Zap } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/animated-section'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-8 md:gap-16">
            <AnimatedSection animation="fade-up">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Zap className="h-6 w-6" />
                  <span className="font-bold text-lg">SuperCode</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                  Next-generation development framework with intelligent multi-agent orchestration
                  and seamless tool integrations.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="ghost" asChild>
                    <a href="https://github.com/niklasschaeffer/supercode-revised" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <a href="mailto:niklas@nx-solutions.de">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <div className="space-y-4">
                <h3 className="font-semibold">Product</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a href="#features" className="hover:text-slate-100 transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#agents" className="hover:text-slate-100 transition-colors">
                      Agents
                    </a>
                  </li>
                  <li>
                    <a href="#installation" className="hover:text-slate-100 transition-colors">
                      Installation
                    </a>
                  </li>
                  <li>
                    <a href="#workflow" className="hover:text-slate-100 transition-colors">
                        Workflow
                    </a>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="space-y-4">
                <h3 className="font-semibold">Community</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a href="https://github.com/niklasschaeffer/supercode-revised/discussions" className="hover:text-slate-100 transition-colors">
                      Discussions
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/niklasschaeffer/supercode-revised/issues" className="hover:text-slate-100 transition-colors">
                      Issues
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/niklasschaeffer/supercode-revised?tab=readme-ov-file#-contributing" className="hover:text-slate-100 transition-colors">
                      Contributing
                    </a>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <Separator className="bg-slate-800" />

        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex items-center space-x-1 text-sm text-slate-400">
                <span>© {currentYear} SuperCode Framework</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <span>Built with</span>
                  <Heart className="h-3 w-3 text-red-500" />
                  <span>by the community</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={500}>
              <div className="flex items-center space-x-4 text-sm text-slate-400">
                <a href="https://nx-solutions.de/privacy" className="hover:text-slate-100 transition-colors">
                  Privacy Policy
                </a>
                <a href="https://nx-solutions.de/imprint" className="hover:text-slate-100 transition-colors">
                  Imprint
                </a>
                <a href="https://github.com/niklasschaeffer/supercode-revised/blob/main/LICENSE" className="hover:text-slate-100 transition-colors">
                  License
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </footer>
  )
}
