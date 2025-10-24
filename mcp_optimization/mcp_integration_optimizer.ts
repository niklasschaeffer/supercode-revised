/**
 * MCP Integration Optimization System
 * 
 * Intelligent MCP tool selection, routing, and performance optimization
 * for SuperCode Framework Phase 2 completion
 */

import { MCPToolSelectionResult, MCPServerMetrics, OptimizationConfig } from './types';

/**
 * Core MCP Integration Optimizer Class
 * Implements intelligent tool selection and performance optimization
 */
export class MCPIntegrationOptimizer {
    private config: OptimizationConfig;
    private performanceMetrics: Map<string, MCPServerMetrics>;
    private agentDomainMappings: Map<string, string[]>;
    private toolUsagePatterns: Map<string, number>;

    constructor(config: OptimizationConfig) {
        this.config = config;
        this.performanceMetrics = new Map();
        this.agentDomainMappings = new Map();
        this.toolUsagePatterns = new Map();
        this.initializeDomainMappings();
        this.loadPerformanceMetrics();
    }

    /**
     * Initialize agent domain to MCP tool mappings based on MCP_INTEGRATION_STANDARDS
     */
    private initializeDomainMappings(): void {
        // Universal tools for all agents
        const universalTools = ['sequential_sequentialthinking', 'serena_read_memory', 'context7_resolve_library_id'];

        // Domain-specific mappings based on MCP_INTEGRATION_STANDARDS.md
        this.agentDomainMappings.set('orchestrator', [
            ...universalTools,
            'in-memoria_get_pattern_recommendations',
            'in-memoria_predict_coding_approach',
            'desktop-commander_read_file',
            'task' // Task delegation
        ]);

        this.agentDomainMappings.set('backend-engineer', [
            ...universalTools,
            'desktop-commander_start_process',
            'desktop-commander_interact_with_process',
            'forgejo_create_repo',
            'forgejo_create_issue'
        ]);

        this.agentDomainMappings.set('frontend-engineer', [
            ...universalTools,
            'playwright_browser_navigate',
            'playwright_browser_snapshot',
            'chrome-devtools_take_screenshot',
            'shadcn_search_items_in_registries'
        ]);

        this.agentDomainMappings.set('security-engineer', [
            ...universalTools,
            'desktop-commander_start_process',
            'tavily_tavily_search',
            'in-memoria_search_codebase'
        ]);

        this.agentDomainMappings.set('qa-engineer', [
            ...universalTools,
            'playwright_browser_navigate',
            'chrome-devtools_performance_start_trace',
            'desktop-commander_start_process'
        ]);

        this.agentDomainMappings.set('devops-engineer', [
            ...universalTools,
            'forgejo_create_repo',
            'forgejo_create_pull_request',
            'desktop-commander_start_process',
            'docker-specialist' // If available
        ]);

        this.agentDomainMappings.set('system-architect', [
            ...universalTools,
            'in-memoria_get_project_blueprint',
            'in-memoria_analyze_codebase',
            'context7_get_library_docs'
        ]);

        this.agentDomainMappings.set('deep-research-specialist', [
            ...universalTools,
            'tavily_tavily_search',
            'tavily_tavily_extract',
            'tavily_tavily_crawl',
            'webfetch'
        ]);

        this.agentDomainMappings.set('refactoring-expert', [
            ...universalTools,
            'in-memoria_search_codebase',
            'in-memoria_get_pattern_recommendations',
            'desktop-commander_read_file',
            'desktop-commander_edit_block'
        ]);
    }

    /**
     * Intelligent MCP tool selection based on agent domain and task requirements
     */
    public selectMCPTools(agentType: string, taskDescription: string, context?: any): MCPToolSelectionResult {
        const domainTools = this.agentDomainMappings.get(agentType) || [];
        const taskKeywords = this.extractTaskKeywords(taskDescription);
        
        // Score tools based on relevance to task and performance metrics
        const scoredTools = domainTools.map(tool => ({
            tool,
            score: this.calculateToolScore(tool, taskKeywords, agentType),
            category: this.categorizeTool(tool),
            performance: this.performanceMetrics.get(tool)
        })).sort((a, b) => b.score - a.score);

        // Apply intelligent filtering based on context and performance
        const selectedTools = this.applyIntelligentFiltering(scoredTools, context);

        // Optimize tool sequence for minimal context switching
        const optimizedSequence = this.optimizeToolSequence(selectedTools);

        return {
            agentType,
            selectedTools: optimizedSequence,
            selectionRationale: this.generateSelectionRationale(optimizedSequence, taskKeywords),
            performancePrediction: this.predictPerformance(optimizedSequence),
            optimizationScore: this.calculateOptimizationScore(optimizedSequence)
        };
    }

    /**
     * Extract relevant keywords from task description for intelligent matching
     */
    private extractTaskKeywords(taskDescription: string): string[] {
        const keywords = taskDescription.toLowerCase()
            .split(/\s+/)
            .filter(word => word.length > 3)
            .map(word => word.replace(/[^\w]/g, ''));

        // Add domain-specific keyword mappings
        const domainMappings: Record<string, string[]> = {
            'research': ['search', 'extract', 'crawl', 'analyze', 'investigate'],
            'development': ['implement', 'create', 'build', 'code', 'develop'],
            'testing': ['test', 'validate', 'verify', 'check', 'qa'],
            'infrastructure': ['deploy', 'setup', 'configure', 'manage', 'monitor'],
            'security': ['secure', 'protect', 'audit', 'scan', 'validate'],
            'optimization': ['optimize', 'improve', 'refactor', 'enhance', 'streamline']
        };

        const expandedKeywords = [...keywords];
        for (const [domain, terms] of Object.entries(domainMappings)) {
            if (keywords.some(keyword => terms.includes(keyword))) {
                expandedKeywords.push(domain);
            }
        }

        return [...new Set(expandedKeywords)];
    }

    /**
     * Calculate relevance score for each tool based on task and agent domain
     */
    private calculateToolScore(tool: string, taskKeywords: string[], agentType: string): number {
        let score = 0;

        // Base score from tool relevance to keywords
        const toolRelevanceMap: Record<string, Record<string, number>> = {
            'tavily_tavily_search': { 'research': 10, 'investigate': 9, 'analyze': 7 },
            'playwright_browser_navigate': { 'test': 9, 'validate': 8, 'ui': 10 },
            'desktop-commander_start_process': { 'implement': 8, 'build': 7, 'deploy': 9 },
            'forgejo_create_repo': { 'infrastructure': 9, 'setup': 8, 'manage': 7 },
            'in-memoria_search_codebase': { 'analyze': 9, 'refactor': 10, 'optimize': 8 },
            'chrome-devtools_performance_start_trace': { 'test': 10, 'optimize': 9, 'performance': 10 },
            'shadcn_search_items_in_registries': { 'ui': 10, 'component': 9, 'frontend': 8 }
        };

        const toolMap = toolRelevanceMap[tool] || {};
        for (const keyword of taskKeywords) {
            score += toolMap[keyword] || 0;
        }

        // Performance-based scoring
        const metrics = this.performanceMetrics.get(tool);
        if (metrics) {
            score += (metrics.successRate * 5) + (metrics.averageResponseTime < 1000 ? 3 : 0);
        }

        // Agent domain affinity
        const domainTools = this.agentDomainMappings.get(agentType) || [];
        if (domainTools.includes(tool)) {
            score += 5;
        }

        return score;
    }

    /**
     * Categorize tools for better organization and routing
     */
    private categorizeTool(tool: string): string {
        const categories: Record<string, string> = {
            'sequential_sequentialthinking': 'analysis',
            'serena_read_memory': 'context',
            'context7_resolve_library_id': 'documentation',
            'tavily_tavily_search': 'research',
            'playwright_browser_navigate': 'testing',
            'desktop-commander_start_process': 'development',
            'forgejo_create_repo': 'infrastructure',
            'in-memoria_search_codebase': 'analysis',
            'chrome-devtools_performance_start_trace': 'testing',
            'shadcn_search_items_in_registries': 'development'
        };

        return categories[tool] || 'general';
    }

    /**
     * Apply intelligent filtering based on context, performance, and resource constraints
     */
    private applyIntelligentFiltering(scoredTools: any[], context?: any): any[] {
        let filtered = scoredTools;

        // Performance threshold filtering
        filtered = filtered.filter(item => {
            const metrics = item.performance;
            return !metrics || metrics.successRate > 0.7; // Keep tools with >70% success rate
        });

        // Context-based filtering
        if (context?.requiresRealTimeData) {
            filtered = filtered.filter(item => 
                ['tavily_tavily_search', 'playwright_browser_navigate'].includes(item.tool)
            );
        }

        if (context?.localEnvironmentOnly) {
            filtered = filtered.filter(item => 
                item.tool.startsWith('desktop-commander') || 
                item.tool.startsWith('serena') ||
                item.tool.startsWith('in-memoria')
            );
        }

        // Limit to optimal tool count (3-7 tools per task)
        return filtered.slice(0, Math.min(7, Math.max(3, filtered.length)));
    }

    /**
     * Optimize tool sequence to minimize context switching and maximize efficiency
     */
    private optimizeToolSequence(tools: any[]): any[] {
        // Group tools by category to reduce context switching
        const categoryGroups: Record<string, any[]> = {};
        
        tools.forEach(tool => {
            const category = tool.category;
            if (!categoryGroups[category]) {
                categoryGroups[category] = [];
            }
            categoryGroups[category].push(tool);
        });

        // Sort categories by optimal execution order
        const categoryOrder = ['context', 'analysis', 'research', 'development', 'testing', 'infrastructure'];
        
        const optimizedSequence: any[] = [];
        for (const category of categoryOrder) {
            if (categoryGroups[category]) {
                // Sort within category by performance score
                categoryGroups[category].sort((a, b) => b.score - a.score);
                optimizedSequence.push(...categoryGroups[category]);
            }
        }

        // Add any remaining tools
        const remainingCategories = Object.keys(categoryGroups).filter(cat => !categoryOrder.includes(cat));
        for (const category of remainingCategories) {
            optimizedSequence.push(...categoryGroups[category].sort((a, b) => b.score - a.score));
        }

        return optimizedSequence;
    }

    /**
     * Generate human-readable rationale for tool selection
     */
    private generateSelectionRationale(tools: any[], taskKeywords: string[]): string {
        const rationales: string[] = [];
        
        tools.forEach(tool => {
            const category = tool.category;
            const score = tool.score;
            
            switch (category) {
                case 'context':
                    rationales.push(`${tool.tool}: Essential for project context and memory access (${score.toFixed(1)} relevance)`);
                    break;
                case 'analysis':
                    rationales.push(`${tool.tool}: Critical for codebase analysis and pattern discovery (${score.toFixed(1)} relevance)`);
                    break;
                case 'research':
                    rationales.push(`${tool.tool}: Required for external research and information gathering (${score.toFixed(1)} relevance)`);
                    break;
                case 'development':
                    rationales.push(`${tool.tool}: Core development tool for implementation tasks (${score.toFixed(1)} relevance)`);
                    break;
                case 'testing':
                    rationales.push(`${tool.tool}: Essential for validation and quality assurance (${score.toFixed(1)} relevance)`);
                    break;
                default:
                    rationales.push(`${tool.tool}: Supporting tool for task completion (${score.toFixed(1)} relevance)`);
            }
        });

        return `Selected ${tools.length} tools based on keyword matching: [${taskKeywords.join(', ')}].\n${rationales.join('\n')}`;
    }

    /**
     * Predict performance for selected tool combination
     */
    private predictPerformance(tools: any[]): any {
        const totalEstimatedTime = tools.reduce((sum, tool) => {
            const metrics = tool.performance;
            return sum + (metrics?.averageResponseTime || 2000);
        }, 0);

        const averageSuccessRate = tools.reduce((sum, tool) => {
            const metrics = tool.performance;
            return sum + (metrics?.successRate || 0.8);
        }, 0) / tools.length;

        return {
            estimatedExecutionTime: totalEstimatedTime,
            successProbability: averageSuccessRate,
            optimizationLevel: this.calculateOptimizationLevel(tools),
            resourceUtilization: this.estimateResourceUtilization(tools)
        };
    }

    /**
     * Calculate optimization score for selected tools
     */
    private calculateOptimizationScore(tools: any[]): number {
        let score = 0;

        // Tool relevance score
        const averageRelevance = tools.reduce((sum, tool) => sum + tool.score, 0) / tools.length;
        score += averageRelevance * 0.4;

        // Category diversity score (optimal balance)
        const categories = new Set(tools.map(tool => tool.category));
        score += Math.min(categories.size / 5, 1) * 20; // Optimal is 3-5 categories

        // Performance score
        const avgPerformance = tools.reduce((sum, tool) => {
            const metrics = tool.performance;
            return sum + (metrics?.successRate || 0.8);
        }, 0) / tools.length;
        score += avgPerformance * 30;

        // Efficiency score (tool count optimization)
        const optimalToolCount = 5;
        const toolCountScore = Math.max(0, 1 - Math.abs(tools.length - optimalToolCount) / optimalToolCount);
        score += toolCountScore * 10;

        return Math.min(100, score);
    }

    /**
     * Calculate optimization level based on tool selection quality
     */
    private calculateOptimizationLevel(tools: any[]): string {
        const score = this.calculateOptimizationScore(tools);
        
        if (score >= 90) return 'Excellent';
        if (score >= 80) return 'Very Good';
        if (score >= 70) return 'Good';
        if (score >= 60) return 'Fair';
        return 'Poor';
    }

    /**
     * Estimate resource utilization for selected tools
     */
    private estimateResourceUtilization(tools: any[]): any {
        const utilization = {
            cpu: 0,
            memory: 0,
            network: 0,
            disk: 0
        };

        tools.forEach(tool => {
            const toolProfile = this.getResourceProfile(tool.tool);
            utilization.cpu += toolProfile.cpu;
            utilization.memory += toolProfile.memory;
            utilization.network += toolProfile.network;
            utilization.disk += toolProfile.disk;
        });

        return utilization;
    }

    /**
     * Get resource profile for specific MCP tool
     */
    private getResourceProfile(tool: string): any {
        const profiles: Record<string, any> = {
            'tavily_tavily_search': { cpu: 20, memory: 15, network: 80, disk: 5 },
            'playwright_browser_navigate': { cpu: 30, memory: 40, network: 60, disk: 10 },
            'desktop-commander_start_process': { cpu: 40, memory: 30, network: 10, disk: 20 },
            'forgejo_create_repo': { cpu: 15, memory: 20, network: 70, disk: 15 },
            'in-memoria_search_codebase': { cpu: 25, memory: 50, network: 5, disk: 20 },
            'chrome-devtools_performance_start_trace': { cpu: 35, memory: 35, network: 20, disk: 10 },
            'sequential_sequentialthinking': { cpu: 60, memory: 40, network: 0, disk: 0 },
            'serena_read_memory': { cpu: 10, memory: 20, network: 0, disk: 15 }
        };

        return profiles[tool] || { cpu: 20, memory: 20, network: 20, disk: 20 };
    }

    /**
     * Load performance metrics from persistent storage
     */
    private loadPerformanceMetrics(): void {
        // In production, this would load from database or file
        // For now, initialize with default metrics
        const defaultMetrics: MCPServerMetrics = {
            totalCalls: 0,
            successRate: 0.85,
            averageResponseTime: 1500,
            lastUsed: new Date(),
            errorRate: 0.15
        };

        const commonTools = [
            'sequential_sequentialthinking',
            'serena_read_memory',
            'context7_resolve_library_id',
            'tavily_tavily_search',
            'playwright_browser_navigate',
            'desktop-commander_start_process'
        ];

        commonTools.forEach(tool => {
            this.performanceMetrics.set(tool, { ...defaultMetrics });
        });
    }

    /**
     * Update performance metrics based on actual usage
     */
    public updatePerformanceMetrics(tool: string, success: boolean, responseTime: number): void {
        const current = this.performanceMetrics.get(tool) || {
            totalCalls: 0,
            successRate: 0.8,
            averageResponseTime: 2000,
            lastUsed: new Date(),
            errorRate: 0.2
        };

        current.totalCalls++;
        current.lastUsed = new Date();

        // Update rolling average for response time
        current.averageResponseTime = (current.averageResponseTime * 0.8) + (responseTime * 0.2);

        // Update success rate with exponential moving average
        const newSuccess = success ? 1 : 0;
        current.successRate = (current.successRate * 0.9) + (newSuccess * 0.1);
        current.errorRate = 1 - current.successRate;

        this.performanceMetrics.set(tool, current);
    }

    /**
     * Get optimization recommendations for agent
     */
    public getOptimizationRecommendations(agentType: string): string[] {
        const recommendations: string[] = [];
        const domainTools = this.agentDomainMappings.get(agentType) || [];

        // Analyze performance patterns
        domainTools.forEach(tool => {
            const metrics = this.performanceMetrics.get(tool);
            if (metrics) {
                if (metrics.successRate < 0.7) {
                    recommendations.push(`Consider replacing ${tool} - low success rate (${(metrics.successRate * 100).toFixed(1)}%)`);
                }
                if (metrics.averageResponseTime > 3000) {
                    recommendations.push(`Optimize ${tool} usage - high response time (${metrics.averageResponseTime}ms)`);
                }
            }
        });

        // Check for missing universal tools
        const universalTools = ['sequential_sequentialthinking', 'serena_read_memory', 'context7_resolve_library_id'];
        const missingUniversal = universalTools.filter(tool => !domainTools.includes(tool));
        if (missingUniversal.length > 0) {
            recommendations.push(`Add missing universal tools: ${missingUniversal.join(', ')}`);
        }

        return recommendations;
    }
}

/**
 * Global optimizer instance
 */
export const mcpOptimizer = new MCPIntegrationOptimizer({
    enablePerformanceTracking: true,
    enableIntelligentRouting: true,
    maxToolsPerTask: 7,
    responseTimeThreshold: 3000,
    successRateThreshold: 0.7
});