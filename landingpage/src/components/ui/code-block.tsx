import { cn } from '@/lib/utils'
import { Button } from './button'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
  showCopy?: boolean
}

export function CodeBlock({ 
  code, 
  language = 'bash', 
  className,
  showCopy = true 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // Simple syntax highlighting for bash commands
  const highlightCode = (text: string, lang: string) => {
    if (lang === 'bash') {
      return text
        .replace(/^#.*$/gm, '<span class="text-slate-500">$&</span>') // Comments
        .replace(/\b(npm|git|cd|mkdir|rm|cp|mv|ls|cat|echo|export|source)\b/g, '<span class="text-blue-400">$&</span>') // Commands
        .replace(/(--[a-zA-Z-]+)/g, '<span class="text-purple-400">$&</span>') // Flags
        .replace(/('.*?'|".*?")/g, '<span class="text-green-400">$&</span>') // Strings
        .replace(/(https?:\/\/[^\s]+)/g, '<span class="text-cyan-400">$&</span>') // URLs
    }
    return text
  }

  return (
    <div className={cn('relative group', className)}>
      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code 
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ 
            __html: highlightCode(code, language) 
          }}
        />
      </pre>
      {showCopy && (
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 hover:bg-slate-700 text-slate-300"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      )}
    </div>
  )
}