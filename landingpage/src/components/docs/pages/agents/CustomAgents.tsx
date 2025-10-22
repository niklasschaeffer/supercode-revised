import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CustomAgents() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Custom Agents</h2>
        <p className="text-muted-foreground">
          Creating and configuring custom agents for specific needs.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Custom Agents</CardTitle>
          <CardDescription>
            This page is under construction. Check back soon for detailed custom agent guides.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content will be added here soon.</p>
        </CardContent>
      </Card>
    </div>
  )
}