import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Copy, Check, Terminal } from 'lucide-react'

// Syntax highlighting component for individual code segments
interface SyntaxHighlightProps {
  text: string
  language: string
}

function SyntaxHighlight({ text, language }: SyntaxHighlightProps) {
  if (language !== 'bash') {
    return <span>{text}</span>
  }

  // Parse bash syntax and create React elements
  const parseBashSyntax = (line: string): React.ReactNode[] => {
    const elements: React.ReactNode[] = []
    // Comment pattern
    const commentMatch = line.match(/^#.*$/)
    if (commentMatch) {
      return [
        <span key="comment" className="text-slate-500 dark:text-slate-400">
          {commentMatch[0]}
        </span>
      ]
    }

    // Regex patterns for different syntax elements (ordered by priority)
    const patterns = [
      {
        regex: /(https?:\/\/[^\s]+)/g,
        className: "text-cyan-600 dark:text-cyan-400 underline",
        priority: 1
      },
      {
        regex: /('.*?'|".*?")/g,
        className: "text-green-600 dark:text-green-400",
        priority: 2
      },
      {
        regex: /(--[a-zA-Z-]+)/g,
        className: "text-purple-500 dark:text-purple-400 font-medium",
        priority: 3
      },
      {
        regex: /\b(npm|cd|mkdir|rm|cp|mv|ls|cat|echo|export|source|supercode|node|python|curl|wget)\b/g,
        className: "text-blue-500 dark:text-blue-400 font-medium",
        priority: 4
      },
      {
        regex: /\bgit\b(?![^\/]*\.git)/g,
        className: "text-blue-500 dark:text-blue-400 font-medium",
        priority: 5
      }
    ]

    // Find all matches and create elements
    const matches: Array<{start: number, end: number, text: string, className: string, priority: number}> = []

    patterns.forEach(pattern => {
      let match
      // Reset regex before each execution to ensure proper matching
      pattern.regex.lastIndex = 0
      while ((match = pattern.regex.exec(line)) !== null) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[0],
          className: pattern.className,
          priority: pattern.priority
        })
      }
    })

    // Sort matches by start position, then by priority (lower number = higher priority)
    matches.sort((a, b) => {
      if (a.start !== b.start) return a.start - b.start
      return a.priority - b.priority
    })

    // Remove overlapping matches, keeping higher priority ones
    const filteredMatches: typeof matches = []
    matches.forEach(match => {
      const hasOverlap = filteredMatches.some(existing => 
        (match.start >= existing.start && match.start < existing.end) ||
        (match.end > existing.start && match.end <= existing.end) ||
        (match.start <= existing.start && match.end >= existing.end)
      )
      
      if (!hasOverlap) {
        filteredMatches.push(match)
      }
    })

    // Build elements array
    let currentIndex = 0
    filteredMatches.forEach((match, index) => {
      // Add plain text before this match
      if (match.start > currentIndex) {
        elements.push(
          <span key={`text-${index}`}>{line.substring(currentIndex, match.start)}</span>
        )
      }

      // Add highlighted text
      elements.push(
        <span key={`highlight-${index}`} className={match.className}>
          {match.text}
        </span>
      )

      currentIndex = match.end
    })

    // Add remaining text
    if (currentIndex < line.length) {
      elements.push(
        <span key={`text-final`}>{line.substring(currentIndex)}</span>
      )
    }

    // If no matches found, return the original text
    if (elements.length === 0) {
      return [<span key="full-text">{line}</span>]
    }

    return elements
  }

  return <>{parseBashSyntax(text)}</>
}

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
  highlightLines?: number[]
  copyable?: boolean
  className?: string
  showCopy?: boolean // For backward compatibility
}

export function CodeBlock({
  code,
  language = 'bash',
  title,
  showLineNumbers = true,
  highlightLines = [],
  copyable = true,
  className = '',
  showCopy // Use this if provided, otherwise use copyable
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  // Use showCopy for backward compatibility with UI component
  const shouldShowCopy = showCopy !== undefined ? showCopy : copyable

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const lines = code.split('\n')

  const getLanguageIcon = () => {
    switch (language) {
      case 'bash':
      case 'sh':
        return <Terminal className="h-4 w-4" />
      case 'json':
        return <span className="text-xs font-mono">{}</span>
      case 'yaml':
      case 'yml':
        return <span className="text-xs font-mono">YML</span>
      default:
        return <span className="text-xs font-mono">{language}</span>
    }
  }

  return (
    <div className={`relative rounded-lg border bg-muted/50 ${className}`}>
      {/* Header */}
      {(title || language) && (
        <div className="flex items-center justify-between border-b bg-muted px-4 py-2">
          <div className="flex items-center space-x-2">
            {getLanguageIcon()}
            {title && <span className="text-sm font-medium">{title}</span>}
            {!title && <Badge variant="secondary" className="text-xs">{language}</Badge>}
          </div>

          {shouldShowCopy && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-8 w-8 p-0"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      )}

       {/* Code Content */}
       <div className="overflow-x-auto">
         <pre className="p-4 text-sm font-mono leading-relaxed">
           <code className={`language-${language} block`}>
            {lines.map((line, index) => (
               <div
                 key={index}
                 className={`
                   ${highlightLines.includes(index + 1) ? 'bg-yellow-100 dark:bg-yellow-900/30 border-l-2 border-yellow-400' : ''}
                   ${showLineNumbers ? 'flex items-start' : ''}
                   ${index !== lines.length - 1 ? 'border-b border-border/10' : ''}
                   min-h-[1.5rem]
                 `}
               >
                 {showLineNumbers && (
                   <span className="mr-4 select-none text-muted-foreground text-right font-mono text-xs" style={{ minWidth: '2rem' }}>
                     {index + 1}
                   </span>
                 )}
                 <span className="code-line-content">
                   <SyntaxHighlight text={line || '\u00A0'} language={language} />
                 </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Copy button overlay for when there's no header */}
      {shouldShowCopy && !title && !language && (
        <div className="absolute top-2 right-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleCopy}
            className="h-8 w-8 p-0 opacity-0 transition-opacity group-hover:opacity-100"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
