/**
 * MCP Integration Optimization System - Main Entry Point
 * 
 * Comprehensive optimization for SuperCode Framework MCP integrations
 * Phase 2 completion component
 */

export { MCPIntegrationOptimizer, mcpOptimizer } from './mcp_integration_optimizer';
export { MCPServerOptimizer, mcpServerOptimizer } from './mcp_server_optimizer';
export { MCPPerformanceMonitor, mcpPerformanceMonitor } from './performance_monitor';
export { MCPIntegrationPatterns, mcpIntegrationPatterns } from './integration_patterns';

export type {
    OptimizationConfig,
    MCPServerMetrics,
    MCPToolSelectionResult,
    SelectedTool,
    PerformancePrediction,
    ResourceUtilization,
    AgentTaskContext,
    MCPOptimizationReport,
    PerformanceImprovement,
    MCPRoutingDecision,
    ContextFlowIntegration,
    MCPIntegrationMetrics
} from './types';

/**
 * Main MCP Integration Optimization Manager
 * Coordinates all optimization components
 */
import { MCPIntegrationOptimizer } from './mcp_integration_optimizer';
import { MCPServerOptimizer } from './mcp_server_optimizer';
import { MCPPerformanceMonitor } from './performance_monitor';
import { MCPIntegrationPatterns } from './integration_patterns';
import { AgentTaskContext, MCPToolSelectionResult } from './types';

export class MCPOptimizationManager {
    private toolOptimizer: MCPIntegrationOptimizer;
    private serverOptimizer: MCPServerOptimizer;
    private performanceMonitor: MCPPerformanceMonitor;
    private patternsManager: MCPIntegrationPatterns;

    constructor() {
        this.toolOptimizer = mcpOptimizer;
        this.serverOptimizer = mcpServerOptimizer;
        this.performanceMonitor = mcpPerformanceMonitor;
        this.patternsManager = mcpIntegrationPatterns;
    }

    /**
     * Complete MCP optimization workflow
     */
    public async optimizeMCPIntegration(agentType: string, taskContext: AgentTaskContext): Promise<MCPToolSelectionResult> {
        // Step 1: Get optimized integration pattern
        const pattern = this.patternsManager.getIntegrationPattern(agentType, taskContext);

        // Step 2: Select optimal tools
        const toolSelection = this.toolOptimizer.selectMCPTools(
            agentType, 
            taskContext.taskDescription, 
            taskContext
        );

        // Step 3: Optimize server routing
        const routingDecisions = toolSelection.selectedTools.map(tool => ({
            tool: tool.tool,
            routing: this.serverOptimizer.routeMCPRequest(tool.tool, taskContext)
        }));

        // Step 4: Record optimization for performance tracking
        this.performanceMonitor.recordExecution(
            'mcp_optimization',
            'optimization_manager',
            true,
            Date.now() - performance.now(),
            { agentType, taskContext }
        );

        return {
            ...toolSelection,
            routingDecisions,
            integrationPattern: pattern
        };
    }

    /**
     * Get comprehensive optimization report
     */
    public getOptimizationReport(): any {
        return {
            timestamp: new Date(),
            toolOptimizer: this.toolOptimizer.getOptimizationRecommendations('system'),
            serverOptimizer: this.serverOptimizer.getPerformanceReport(),
            performanceMonitor: this.performanceMonitor.getPerformanceReport(),
            integrationPatterns: this.patternsManager.getAllPatterns(),
            overallMetrics: this.calculateOverallMetrics()
        };
    }

    /**
     * Calculate overall optimization metrics
     */
    private calculateOverallMetrics(): any {
        const performanceMetrics = this.performanceMonitor.getIntegrationMetrics();
        
        return {
            overallOptimizationScore: this.calculateOverallScore(performanceMetrics),
            toolSelectionAccuracy: performanceMetrics.toolSelectionAccuracy,
            routingEfficiency: performanceMetrics.routingEfficiency,
            performanceImprovement: performanceMetrics.performanceImprovement,
            resourceOptimization: performanceMetrics.resourceOptimization,
            contextFlowIntegration: performanceMetrics.contextFlowIntegration
        };
    }

    /**
     * Calculate overall optimization score
     */
    private calculateOverallScore(metrics: any): number {
        const weights = {
            toolSelectionAccuracy: 0.25,
            routingEfficiency: 0.25,
            performanceImprovement: 0.25,
            resourceOptimization: 0.25
        };

        let score = 0;
        score += metrics.toolSelectionAccuracy * weights.toolSelectionAccuracy * 100;
        score += metrics.routingEfficiency * weights.routingEfficiency * 100;
        score += metrics.performanceImprovement * weights.performanceImprovement * 100;
        score += metrics.resourceOptimization * weights.resourceOptimization * 100;

        return Math.min(100, score);
    }
}

/**
 * Global optimization manager instance
 */
export const mcpOptimizationManager = new MCPOptimizationManager();