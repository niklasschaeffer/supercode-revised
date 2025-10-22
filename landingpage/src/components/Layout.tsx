import { ReactNode } from 'react'
import { Separator } from '@/components/ui/separator'

interface LayoutProps {
  children: ReactNode
  className?: string
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  )
}

export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
        {description && (
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </header>
      <Separator className="mb-12" />
    </>
  )
}