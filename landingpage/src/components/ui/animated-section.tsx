import { cn } from '@/lib/utils'
import { useScrollAnimation } from '@/hooks/use-scroll-animations'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-up' | 'slide-up'
  delay?: number
  duration?: number
  threshold?: number
}

export function AnimatedSection({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold })

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out'
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return cn(baseClasses, 'opacity-0 translate-y-12')
        case 'fade-down':
          return cn(baseClasses, 'opacity-0 -translate-y-12')
        case 'fade-left':
          return cn(baseClasses, 'opacity-0 translate-x-12')
        case 'fade-right':
          return cn(baseClasses, 'opacity-0 -translate-x-12')
        case 'scale-up':
          return cn(baseClasses, 'opacity-0 scale-95')
        case 'slide-up':
          return cn(baseClasses, 'opacity-0 translate-y-24 scale-95')
        default:
          return cn(baseClasses, 'opacity-0 translate-y-12')
      }
    }

    return cn(baseClasses, 'opacity-100 translate-y-0 translate-x-0 scale-100')
  }

  return (
    <div
      ref={elementRef}
      className={cn(getAnimationClasses(), className)}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  )
}