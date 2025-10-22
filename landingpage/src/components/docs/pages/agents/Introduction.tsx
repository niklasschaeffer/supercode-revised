import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function AgentsIntroduction() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Introduction to Agents</h2>
        <p className="text-muted-foreground">
          Learn about SuperCode's AI agents and how they work.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Agent Introduction</CardTitle>
          <CardDescription>
            This page is under construction. Check back soon for detailed agent information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content will be added here soon.</p>
        </CardContent>
      </Card>
    </div>
  )
}