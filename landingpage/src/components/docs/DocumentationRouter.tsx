import { Routes, Route } from 'react-router-dom'
import { DocumentationLayout } from './DocumentationLayout'
import { GettingStarted } from './pages/GettingStarted'
import { InstallationGuide } from './pages/InstallationGuide'
import { CommandsReference } from './pages/CommandsReference'
import { AgentsGuide } from './pages/AgentsGuide'
import { MCPIntegrations } from './pages/MCPIntegrations'

// Sub-pages
import { Prerequisites } from './pages/getting-started/Prerequisites'
import { QuickInstall } from './pages/getting-started/QuickInstall'
import { BasicConfig } from './pages/getting-started/BasicConfig'
import { FirstSteps } from './pages/getting-started/FirstSteps'

import { DetailedSteps } from './pages/installation/DetailedSteps'
import { ConfigOptions } from './pages/installation/ConfigOptions'
import { Troubleshooting } from './pages/installation/Troubleshooting'
import { Verification } from './pages/installation/Verification'

import { CommandsOverview } from './pages/commands/Overview'
import { UsageExamples } from './pages/commands/UsageExamples'
import { FlagCombinations } from './pages/commands/FlagCombinations'
import { BestPractices } from './pages/commands/BestPractices'

import { AgentsIntroduction } from './pages/agents/Introduction'
import { WhenToUse } from './pages/agents/WhenToUse'
import { Coordination } from './pages/agents/Coordination'
import { CustomAgents } from './pages/agents/CustomAgents'

import { MCPOverview } from './pages/mcp-integrations/Overview'
import { MCPConfiguration } from './pages/mcp-integrations/Configuration'
import { MCPUsageExamples } from './pages/mcp-integrations/UsageExamples'
import { CustomIntegrations } from './pages/mcp-integrations/CustomIntegrations'

export function DocumentationRouter() {
  return (
    <DocumentationLayout>
      <Routes>
        {/* Getting Started Routes */}
        <Route path="/docs/getting-started" element={<GettingStarted />} />
        <Route path="/docs/getting-started/prerequisites" element={<Prerequisites />} />
        <Route path="/docs/getting-started/quick-install" element={<QuickInstall />} />
        <Route path="/docs/getting-started/basic-config" element={<BasicConfig />} />
        <Route path="/docs/getting-started/first-steps" element={<FirstSteps />} />

        {/* Installation Guide Routes */}
        <Route path="/docs/installation" element={<InstallationGuide />} />
        <Route path="/docs/installation/detailed-steps" element={<DetailedSteps />} />
        <Route path="/docs/installation/config-options" element={<ConfigOptions />} />
        <Route path="/docs/installation/troubleshooting" element={<Troubleshooting />} />
        <Route path="/docs/installation/verification" element={<Verification />} />

        {/* Commands Reference Routes */}
        <Route path="/docs/commands" element={<CommandsReference />} />
        <Route path="/docs/commands/overview" element={<CommandsOverview />} />
        <Route path="/docs/commands/usage-examples" element={<UsageExamples />} />
        <Route path="/docs/commands/flag-combinations" element={<FlagCombinations />} />
        <Route path="/docs/commands/best-practices" element={<BestPractices />} />

        {/* Agents Guide Routes */}
        <Route path="/docs/agents" element={<AgentsGuide />} />
        <Route path="/docs/agents/introduction" element={<AgentsIntroduction />} />
        <Route path="/docs/agents/when-to-use" element={<WhenToUse />} />
        <Route path="/docs/agents/coordination" element={<Coordination />} />
        <Route path="/docs/agents/custom-agents" element={<CustomAgents />} />

        {/* MCP Integrations Routes */}
        <Route path="/docs/mcp-integrations" element={<MCPIntegrations />} />
        <Route path="/docs/mcp-integrations/overview" element={<MCPOverview />} />
        <Route path="/docs/mcp-integrations/configuration" element={<MCPConfiguration />} />
        <Route path="/docs/mcp-integrations/usage-examples" element={<MCPUsageExamples />} />
        <Route path="/docs/mcp-integrations/custom-integrations" element={<CustomIntegrations />} />

        {/* Default redirect */}
        <Route path="/docs" element={<GettingStarted />} />
      </Routes>
    </DocumentationLayout>
  )
}