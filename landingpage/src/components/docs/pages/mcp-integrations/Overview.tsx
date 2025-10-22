import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function MCPOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">MCP Overview</h2>
        <p className="text-muted-foreground">
          Understanding the Model Context Protocol and its capabilities.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>MCP Overview</CardTitle>
          <CardDescription>
            This page is under construction. Check back soon for detailed MCP information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content will be added here soon.</p>
        </CardContent>
      </Card>
    </div>
  )
}