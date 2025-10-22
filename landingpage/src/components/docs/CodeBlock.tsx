import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Copy, Check, Terminal } from 'lucide-react'

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
  
  // Simple syntax highlighting for common languages
  const highlightCode = (text: string, lang: string) => {
    if (lang === 'bash') {
      return text
        .replace(/^#.*$/gm, '<span class="text-slate-500">$&</span>') // Comments
        .replace(/\b(npm|git|cd|mkdir|rm|cp|mv|ls|cat|echo|export|source|supercode|node|python|curl|wget)\b/g, '<span class="text-blue-400">$&</span>') // Commands
        .replace(/(--[a-zA-Z-]+)/g, '<span class="text-purple-400">$&</span>') // Flags
        .replace(/('.*?'|".*?")/g, '<span class="text-green-400">$&</span>') // Strings
        .replace(/(https?:\/\/[^\s]+)/g, '<span class="text-cyan-400">$&</span>') // URLs
    }
    return text
  }
  
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
        <pre className="p-4 text-sm">
          <code className={`language-${language}`}>
            {lines.map((line, index) => (
              <div
                key={index}
                className={`
                  ${highlightLines.includes(index + 1) ? 'bg-yellow-100 dark:bg-yellow-900/30' : ''}
                  ${showLineNumbers ? 'flex' : ''}
                `}
              >
                {showLineNumbers && (
                  <span className="mr-4 select-none text-muted-foreground" style={{ minWidth: '2rem' }}>
                    {index + 1}
                  </span>
                )}
                <span 
                  dangerouslySetInnerHTML={{ 
                    __html: highlightCode(line || '\u00A0', language) 
                  }}
                />
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