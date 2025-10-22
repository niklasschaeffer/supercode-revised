import { useEffect } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'

interface TOCItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  items: TOCItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  useEffect(() => {
    // Update TOC highlighting based on scroll position
    const handleScroll = () => {
      const headings = items.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }))

      const scrollPosition = window.scrollY + 100

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i]
        if (heading.element && heading.element.offsetTop <= scrollPosition) {
          // Update active state in TOC
          const tocLinks = document.querySelectorAll('#toc a')
          tocLinks.forEach(link => link.classList.remove('text-primary'))
          const activeLink = document.querySelector(`#toc a[href="#${heading.id}"]`)
          if (activeLink) {
            activeLink.classList.add('text-primary')
          }
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  if (items.length === 0) {
    return null
  }

  return (
    <ScrollArea className="h-[calc(100vh-10rem)]">
      <div className="space-y-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`
              block text-sm transition-colors hover:text-primary
              ${item.level === 2 ? 'font-medium' : ''}
              ${item.level === 3 ? 'pl-4' : ''}
              ${item.level === 4 ? 'pl-8' : ''}
            `}
            style={{
              paddingLeft: `${(item.level - 2) * 16}px`
            }}
          >
            {item.title}
          </a>
        ))}
      </div>
    </ScrollArea>
  )
}