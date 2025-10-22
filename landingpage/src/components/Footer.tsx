import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Github, Twitter, Heart, Mail, Zap } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/animated-section'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection animation="fade-up">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Zap className="h-6 w-6" />
                  <span className="font-bold text-lg">SuperCode</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Next-generation development framework with intelligent multi-agent orchestration 
                  and seamless tool integrations.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="ghost" asChild>
                    <a href="https://github.com/supercode" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <a href="https://twitter.com/supercode" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <a href="mailto:hello@supercode.dev">
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
                    <a href="/docs" className="hover:text-slate-100 transition-colors">
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="space-y-4">
                <h3 className="font-semibold">Resources</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a href="/docs" className="hover:text-slate-100 transition-colors">
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a href="/examples" className="hover:text-slate-100 transition-colors">
                      Examples
                    </a>
                  </li>
                  <li>
                    <a href="/templates" className="hover:text-slate-100 transition-colors">
                      Templates
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="hover:text-slate-100 transition-colors">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="space-y-4">
                <h3 className="font-semibold">Community</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a href="https://github.com/supercode/discussions" className="hover:text-slate-100 transition-colors">
                      Discussions
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/supercode" className="hover:text-slate-100 transition-colors">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/supercode/issues" className="hover:text-slate-100 transition-colors">
                      Issues
                    </a>
                  </li>
                  <li>
                    <a href="/contributing" className="hover:text-slate-100 transition-colors">
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
                <a href="/privacy" className="hover:text-slate-100 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-slate-100 transition-colors">
                  Terms of Service
                </a>
                <a href="/license" className="hover:text-slate-100 transition-colors">
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