import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Menu, 
  X, 
  Home, 
  Book, 
  Users, 
  Settings, 
  Zap,
  ChevronRight,
  FileText,
  Code,
  Shield,
  Rocket
} from 'lucide-react'

interface DocSection {
  id: string
  title: string
  icon: React.ReactNode
  path: string
  children?: DocSection[]
}

const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: <Home className="h-4 w-4" />,
    path: '/docs/getting-started',
    children: [
      { id: 'prerequisites', title: 'Prerequisites', icon: <FileText className="h-4 w-4" />, path: '/docs/getting-started/prerequisites' },
      { id: 'quick-install', title: 'Quick Installation', icon: <Zap className="h-4 w-4" />, path: '/docs/getting-started/quick-install' },
      { id: 'basic-config', title: 'Basic Configuration', icon: <Settings className="h-4 w-4" />, path: '/docs/getting-started/basic-config' },
      { id: 'first-steps', title: 'First Steps', icon: <ChevronRight className="h-4 w-4" />, path: '/docs/getting-started/first-steps' }
    ]
  },
  {
    id: 'installation',
    title: 'Installation Guide',
    icon: <Book className="h-4 w-4" />,
    path: '/docs/installation',
    children: [
      { id: 'detailed-steps', title: 'Detailed Installation', icon: <FileText className="h-4 w-4" />, path: '/docs/installation/detailed-steps' },
      { id: 'config-options', title: 'Configuration Options', icon: <Settings className="h-4 w-4" />, path: '/docs/installation/config-options' },
      { id: 'troubleshooting', title: 'Troubleshooting', icon: <Shield className="h-4 w-4" />, path: '/docs/installation/troubleshooting' },
      { id: 'verification', title: 'Verification Steps', icon: <Code className="h-4 w-4" />, path: '/docs/installation/verification' }
    ]
  },
  {
    id: 'commands',
    title: 'Commands Reference',
    icon: <Code className="h-4 w-4" />,
    path: '/docs/commands',
    children: [
      { id: 'overview', title: 'Commands Overview', icon: <FileText className="h-4 w-4" />, path: '/docs/commands/overview' },
      { id: 'usage-examples', title: 'Usage Examples', icon: <Code className="h-4 w-4" />, path: '/docs/commands/usage-examples' },
      { id: 'flag-combinations', title: 'Flag Combinations', icon: <Settings className="h-4 w-4" />, path: '/docs/commands/flag-combinations' },
      { id: 'best-practices', title: 'Best Practices', icon: <Shield className="h-4 w-4" />, path: '/docs/commands/best-practices' }
    ]
  },
  {
    id: 'agents',
    title: 'Agents Guide',
    icon: <Users className="h-4 w-4" />,
    path: '/docs/agents',
    children: [
      { id: 'introduction', title: 'Introduction to Agents', icon: <FileText className="h-4 w-4" />, path: '/docs/agents/introduction' },
      { id: 'when-to-use', title: 'When to Use Each Agent', icon: <Users className="h-4 w-4" />, path: '/docs/agents/when-to-use' },
      { id: 'coordination', title: 'Agent Coordination', icon: <Rocket className="h-4 w-4" />, path: '/docs/agents/coordination' },
      { id: 'custom-agents', title: 'Custom Agents', icon: <Code className="h-4 w-4" />, path: '/docs/agents/custom-agents' }
    ]
  },
  {
    id: 'mcp-integrations',
    title: 'MCP Integrations',
    icon: <Zap className="h-4 w-4" />,
    path: '/docs/mcp-integrations',
    children: [
      { id: 'overview', title: 'MCP Overview', icon: <FileText className="h-4 w-4" />, path: '/docs/mcp-integrations/overview' },
      { id: 'configuration', title: 'Configuration', icon: <Settings className="h-4 w-4" />, path: '/docs/mcp-integrations/configuration' },
      { id: 'usage-examples', title: 'Usage Examples', icon: <Code className="h-4 w-4" />, path: '/docs/mcp-integrations/usage-examples' },
      { id: 'custom-integrations', title: 'Custom Integrations', icon: <Rocket className="h-4 w-4" />, path: '/docs/mcp-integrations/custom-integrations' }
    ]
  }
]

export function DocumentationLayout({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  const filteredSections = docSections.filter(section => {
    const matchesSearch = section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.children?.some(child => 
        child.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    return matchesSearch
  })

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden"
            >
              {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="h-6 w-6" />
              <span className="font-bold">SuperCode</span>
            </Link>
            
            <Badge variant="secondary" className="hidden sm:inline-flex">
              Documentation
            </Badge>
          </div>

          <div className="flex flex-1 items-center justify-end space-x-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
            
            <Button variant="outline" size="sm" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        {/* Sidebar */}
        <aside className={`
          fixed top-14 z-30 -ml-2 h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto
          border-r bg-background md:sticky md:block
          ${isSidebarOpen ? 'block' : 'hidden'}
        `}>
          <div className="py-6 pr-6 lg:py-8">
            <nav className="space-y-4">
              {filteredSections.map((section) => (
                <div key={section.id}>
                  <Link
                    to={section.path}
                    className={`
                      flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium
                      transition-colors hover:bg-accent hover:text-accent-foreground
                      ${isActive(section.path) ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}
                    `}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {section.icon}
                    <span>{section.title}</span>
                  </Link>
                  
                  {section.children && isActive(section.path) && (
                    <div className="ml-6 mt-2 space-y-1">
                      {section.children.map((child) => (
                        <Link
                          key={child.id}
                          to={child.path}
                          className={`
                            flex items-center space-x-2 rounded-md px-3 py-1.5 text-sm
                            transition-colors hover:bg-accent hover:text-accent-foreground
                            ${location.pathname === child.path ? 'bg-accent text-accent-foreground font-medium' : 'text-muted-foreground'}
                          `}
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          {child.icon}
                          <span>{child.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            {children}
          </div>
          
          {/* Table of Contents (Desktop) */}
          <div className="hidden text-sm xl:block">
            <div className="sticky top-16 -mt-10 pt-4">
              <div className="space-y-4">
                <div className="font-medium">On this page</div>
                <div id="toc" className="space-y-2 text-muted-foreground">
                  {/* Table of contents will be populated by individual pages */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/80 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}