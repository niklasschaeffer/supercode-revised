import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return { elementRef, isVisible }
}

export function useScrollAnimations(selector: string, options: ScrollAnimationOptions = {}) {
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set())

  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate-id') || 
                            entry.target.getAttribute('id') || 
                            Math.random().toString(36).substr(2, 9)
            
            setAnimatedElements(prev => new Set(prev).add(elementId))
            
            if (options.triggerOnce !== false) {
              observer.unobserve(entry.target)
            }
          }
        })
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px'
      }
    )

    elements.forEach((element, index) => {
      if (!element.getAttribute('data-animate-id')) {
        element.setAttribute('data-animate-id', `animate-${index}`)
      }
      observer.observe(element)
    })

    return () => {
      elements.forEach(element => observer.unobserve(element))
    }
  }, [selector, options.threshold, options.rootMargin, options.triggerOnce])

  return animatedElements
}