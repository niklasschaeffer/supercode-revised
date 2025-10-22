import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CommandsOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Commands Overview</h2>
        <p className="text-muted-foreground">
          Comprehensive overview of all SuperCode commands and their usage.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Commands Overview</CardTitle>
          <CardDescription>
            This page is under construction. Check back soon for detailed command documentation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content will be added here soon.</p>
        </CardContent>
      </Card>
    </div>
  )
}