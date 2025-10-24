/**
 * Type definitions for MCP Integration Optimization System
 */

export interface OptimizationConfig {
    enablePerformanceTracking: boolean;
    enableIntelligentRouting: boolean;
    maxToolsPerTask: number;
    responseTimeThreshold: number;
    successRateThreshold: number;
}

export interface MCPServerMetrics {
    totalCalls: number;
    successRate: number;
    averageResponseTime: number;
    lastUsed: Date;
    errorRate: number;
}

export interface MCPToolSelectionResult {
    agentType: string;
    selectedTools: SelectedTool[];
    selectionRationale: string;
    performancePrediction: PerformancePrediction;
    optimizationScore: number;
}

export interface SelectedTool {
    tool: string;
    score: number;
    category: string;
    performance?: MCPServerMetrics;
}

export interface PerformancePrediction {
    estimatedExecutionTime: number;
    successProbability: number;
    optimizationLevel: string;
    resourceUtilization: ResourceUtilization;
}

export interface ResourceUtilization {
    cpu: number;
    memory: number;
    network: number;
    disk: number;
}

export interface AgentTaskContext {
    agentType: string;
    taskDescription: string;
    priority: 'low' | 'medium' | 'high' | 'critical';
    requiresRealTimeData?: boolean;
    localEnvironmentOnly?: boolean;
    resourceConstraints?: Partial<ResourceUtilization>;
}

export interface MCPOptimizationReport {
    timestamp: Date;
    totalOptimizations: number;
    averageOptimizationScore: number;
    performanceImprovements: PerformanceImprovement[];
    recommendations: string[];
}

export interface PerformanceImprovement {
    agentType: string;
    metricType: 'response_time' | 'success_rate' | 'resource_usage';
    beforeValue: number;
    afterValue: number;
    improvementPercentage: number;
}

export interface MCPRoutingDecision {
    tool: string;
    selectedServer: string;
    rationale: string;
    estimatedLatency: number;
    confidence: number;
}

export interface ContextFlowIntegration {
    contextCacheHitRate: number;
    optimizedToolSelections: number;
    reducedRedundantCalls: number;
    memorySystemIntegration: boolean;
}

export interface MCPIntegrationMetrics {
    toolSelectionAccuracy: number;
    routingEfficiency: number;
    performanceImprovement: number;
    resourceOptimization: number;
    contextFlowIntegration: ContextFlowIntegration;
}