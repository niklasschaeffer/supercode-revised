// Global type definitions for the SuperCode landing page

export interface Agent {
  id: string
  name: string
  description: string
  icon: string
  category: string
}

export interface Feature {
  title: string
  description: string
  icon: string
  highlight?: boolean
}

export interface MCPServer {
  name: string
  description: string
}

export interface TechStack {
  name: string
  version: string
  description: string
}

export interface NavigationItem {
  label: string
  href: string
  external?: boolean
}

export interface Command {
  id: string
  name: string
  description: string
  example: string
  category: string
}