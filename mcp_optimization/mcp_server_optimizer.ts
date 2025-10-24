/**
 * MCP Server Interaction Optimizer
 * 
 * Optimizes server interactions, reduces latency, and improves response times
 * through intelligent routing and caching strategies
 */

import { MCPServerMetrics, MCPRoutingDecision, OptimizationConfig } from './types';

/**
 * MCP Server Optimizer for intelligent routing and performance optimization
 */
export class MCPServerOptimizer {
    private serverMetrics: Map<string, MCPServerMetrics>;
    private routingTable: Map<string, MCPRoutingDecision>;
    private connectionPool: Map<string, any>;
    private cacheManager: MCPRequestCacheManager;
    private config: OptimizationConfig;

    constructor(config: OptimizationConfig) {
        this.config = config;
        this.serverMetrics = new Map();
        this.routingTable = new Map();
        this.connectionPool = new Map();
        this.cacheManager = new MCPRequestCacheManager();
        this.initializeServerMetrics();
    }

    /**
     * Initialize metrics for known MCP servers
     */
    private initializeServerMetrics(): void {
        const servers = [
            'sequential', 'serena', 'context7', 'tavily', 'playwright',
            'chrome-devtools', 'desktop-commander', 'forgejo', 'shadcn',
            'prompt-kit', 'in-memoria'
        ];

        servers.forEach(server => {
            this.serverMetrics.set(server, {
                totalCalls: 0,
                successRate: 0.85,
                averageResponseTime: 1200,
                lastUsed: new Date(),
                errorRate: 0.15
            });
        });
    }

    /**
     * Intelligent routing decision for MCP tool calls
     */
    public routeMCPRequest(toolName: string, context?: any): MCPRoutingDecision {
        const cacheKey = this.generateCacheKey(toolName, context);
        
        // Check cache first
        const cachedDecision = this.cacheManager.get(cacheKey);
        if (cachedDecision) {
            return cachedDecision;
        }

        // Extract server from tool name
        const serverName = this.extractServerName(toolName);
        
        // Analyze routing options
        const routingOptions = this.analyzeRoutingOptions(toolName, serverName, context);
        
        // Select optimal route
        const optimalRoute = this.selectOptimalRoute(routingOptions);
        
        // Cache the decision
        this.cacheManager.set(cacheKey, optimalRoute);
        
        return optimalRoute;
    }

    /**
     * Extract server name from tool name
     */
    private extractServerName(toolName: string): string {
        const toolServerMap: Record<string, string> = {
            'sequential_sequentialthinking': 'sequential',
            'serena_read_memory': 'serena',
            'serena_write_memory': 'serena',
            'context7_resolve_library_id': 'context7',
            'tavily_tavily_search': 'tavily',
            'playwright_browser_navigate': 'playwright',
            'chrome-devtools_take_screenshot': 'chrome-devtools',
            'desktop-commander_read_file': 'desktop-commander',
            'forgejo_create_repo': 'forgejo',
            'shadcn_search_items_in_registries': 'shadcn',
            'prompt-kit_get_item': 'prompt-kit',
            'in-memoria_search_codebase': 'in-memoria'
        };

        return toolServerMap[toolName] || toolName.split('_')[0];
    }

    /**
     * Analyze available routing options for a tool call
     */
    private analyzeRoutingOptions(toolName: string, serverName: string, context?: any): MCPRoutingDecision[] {
        const options: MCPRoutingDecision[] = [];
        
        // Primary server route
        const primaryMetrics = this.serverMetrics.get(serverName);
        if (primaryMetrics) {
            options.push({
                tool: toolName,
                selectedServer: serverName,
                rationale: 'Primary server with established metrics',
                estimatedLatency: primaryMetrics.averageResponseTime,
                confidence: this.calculateConfidence(primaryMetrics)
            });
        }

        // Alternative routes based on tool functionality
        const alternatives = this.findAlternativeRoutes(toolName, serverName);
        alternatives.forEach(alt => {
            const altMetrics = this.serverMetrics.get(alt.server);
            if (altMetrics) {
                options.push({
                    tool: toolName,
                    selectedServer: alt.server,
                    rationale: alt.rationale,
                    estimatedLatency: altMetrics.averageResponseTime + alt.overhead,
                    confidence: this.calculateConfidence(altMetrics) * alt.reliability
                });
            }
        });

        return options.sort((a, b) => {
            // Sort by weighted score (latency + confidence)
            const scoreA = (1000 / a.estimatedLatency) + a.confidence;
            const scoreB = (1000 / b.estimatedLatency) + b.confidence;
            return scoreB - scoreA;
        });
    }

    /**
     * Find alternative routing options for tools
     */
    private findAlternativeRoutes(toolName: string, primaryServer: string): any[] {
        const alternatives: any[] = [];

        // Define alternative routes based on tool functionality
        const alternativeRoutes: Record<string, any[]> = {
            'tavily_tavily_search': [
                { server: 'webfetch', rationale: 'Web content extraction alternative', overhead: 200, reliability: 0.8 },
                { server: 'sequential', rationale: 'Sequential analysis for complex queries', overhead: 500, reliability: 0.6 }
            ],
            'playwright_browser_navigate': [
                { server: 'chrome-devtools', rationale: 'Chrome DevTools navigation alternative', overhead: 100, reliability: 0.9 }
            ],
            'desktop-commander_read_file': [
                { server: 'serena', rationale: 'Serena file reading alternative', overhead: 50, reliability: 0.85 }
            ],
            'in-memoria_search_codebase': [
                { server: 'serena', rationale: 'Serena pattern search alternative', overhead: 300, reliability: 0.7 }
            ]
        };

        return alternativeRoutes[toolName] || [];
    }

    /**
     * Select optimal route based on performance and context
     */
    private selectOptimalRoute(options: MCPRoutingDecision[]): MCPRoutingDecision {
        if (options.length === 0) {
            throw new Error('No routing options available');
        }

        // Score each option based on multiple factors
        const scoredOptions = options.map(option => ({
            ...option,
            score: this.calculateRouteScore(option)
        }));

        // Select highest scoring option
        return scoredOptions.reduce((best, current) => 
            current.score > best.score ? current : best
        );
    }

    /**
     * Calculate route score based on performance metrics
     */
    private calculateRouteScore(route: MCPRoutingDecision): number {
        let score = 0;

        // Latency score (lower is better)
        const latencyScore = Math.max(0, 100 - (route.estimatedLatency / 50));
        score += latencyScore * 0.4;

        // Confidence score
        score += route.confidence * 30;

        // Rationale quality score
        const rationaleScore = this.evaluateRationaleQuality(route.rationale);
        score += rationaleScore * 20;

        // Server reliability bonus
        const serverMetrics = this.serverMetrics.get(route.selectedServer);
        if (serverMetrics) {
            score += serverMetrics.successRate * 10;
        }

        return score;
    }

    /**
     * Evaluate quality of routing rationale
     */
    private evaluateRationaleQuality(rationale: string): number {
        const qualityKeywords = [
            'primary', 'established', 'optimal', 'efficient', 'alternative',
            'reliable', 'tested', 'validated', 'recommended'
        ];

        const matches = qualityKeywords.filter(keyword => 
            rationale.toLowerCase().includes(keyword)
        ).length;

        return Math.min(10, matches * 2);
    }

    /**
     * Calculate confidence score for server selection
     */
    private calculateConfidence(metrics: MCPServerMetrics): number {
        const successRateWeight = 0.6;
        const recentUsageWeight = 0.4;

        const successScore = metrics.successRate;
        
        // Recent usage score (more recent = higher confidence)
        const timeSinceLastUse = Date.now() - metrics.lastUsed.getTime();
        const daysSinceLastUse = timeSinceLastUse / (1000 * 60 * 60 * 24);
        const recentScore = Math.max(0.5, 1 - (daysSinceLastUse / 30)); // Decay over 30 days

        return (successScore * successRateWeight) + (recentScore * recentUsageWeight);
    }

    /**
     * Optimize connection pooling for MCP servers
     */
    public optimizeConnectionPooling(serverName: string): any {
        const connection = this.connectionPool.get(serverName);
        
        if (!connection) {
            // Create new connection
            const newConnection = this.createOptimizedConnection(serverName);
            this.connectionPool.set(serverName, newConnection);
            return newConnection;
        }

        // Validate and refresh existing connection
        if (this.isConnectionHealthy(connection)) {
            return connection;
        } else {
            // Recreate unhealthy connection
            const refreshedConnection = this.createOptimizedConnection(serverName);
            this.connectionPool.set(serverName, refreshedConnection);
            return refreshedConnection;
        }
    }

    /**
     * Create optimized connection for MCP server
     */
    private createOptimizedConnection(serverName: string): any {
        const serverConfig = this.getServerConfiguration(serverName);
        
        return {
            serverName,
            created: new Date(),
            lastUsed: new Date(),
            requestCount: 0,
            config: serverConfig,
            health: 'healthy',
            optimizationLevel: this.calculateOptimizationLevel(serverName)
        };
    }

    /**
     * Get server-specific configuration
     */
    private getServerConfiguration(serverName: string): any {
        const configurations: Record<string, any> = {
            'sequential': {
                timeout: 10000,
                retryAttempts: 3,
                batchSize: 5,
                priority: 'high'
            },
            'tavily': {
                timeout: 15000,
                retryAttempts: 2,
                batchSize: 10,
                priority: 'medium',
                rateLimit: 100 // requests per minute
            },
            'playwright': {
                timeout: 30000,
                retryAttempts: 1,
                batchSize: 3,
                priority: 'high',
                headless: true
            },
            'desktop-commander': {
                timeout: 5000,
                retryAttempts: 2,
                batchSize: 20,
                priority: 'high',
                persistent: true
            }
        };

        return configurations[serverName] || {
            timeout: 10000,
            retryAttempts: 2,
            batchSize: 5,
            priority: 'medium'
        };
    }

    /**
     * Check if connection is healthy
     */
    private isConnectionHealthy(connection: any): boolean {
        const timeSinceLastUse = Date.now() - connection.lastUsed.getTime();
        const maxIdleTime = 5 * 60 * 1000; // 5 minutes

        return connection.health === 'healthy' && 
               timeSinceLastUse < maxIdleTime &&
               connection.requestCount < 1000; // Max requests per connection
    }

    /**
     * Calculate optimization level for server
     */
    private calculateOptimizationLevel(serverName: string): string {
        const metrics = this.serverMetrics.get(serverName);
        if (!metrics) return 'unknown';

        if (metrics.successRate > 0.95 && metrics.averageResponseTime < 500) {
            return 'optimal';
        } else if (metrics.successRate > 0.85 && metrics.averageResponseTime < 1500) {
            return 'good';
        } else if (metrics.successRate > 0.7) {
            return 'fair';
        } else {
            return 'poor';
        }
    }

    /**
     * Update server metrics after request completion
     */
    public updateServerMetrics(serverName: string, success: boolean, responseTime: number): void {
        const current = this.serverMetrics.get(serverName);
        if (!current) return;

        current.totalCalls++;
        current.lastUsed = new Date();

        // Update rolling averages
        const alpha = 0.1; // Smoothing factor
        current.averageResponseTime = (current.averageResponseTime * (1 - alpha)) + (responseTime * alpha);
        
        // Update success rate
        const newSuccess = success ? 1 : 0;
        current.successRate = (current.successRate * (1 - alpha)) + (newSuccess * alpha);
        current.errorRate = 1 - current.successRate;

        this.serverMetrics.set(serverName, current);
    }

    /**
     * Generate cache key for routing decisions
     */
    private generateCacheKey(toolName: string, context?: any): string {
        const contextHash = context ? JSON.stringify(context).slice(0, 100) : '';
        return `${toolName}:${btoa(contextHash).slice(0, 16)}`;
    }

    /**
     * Get performance recommendations for servers
     */
    public getPerformanceRecommendations(): string[] {
        const recommendations: string[] = [];

        this.serverMetrics.forEach((metrics, serverName) => {
            if (metrics.successRate < 0.8) {
                recommendations.push(`${serverName}: Low success rate (${(metrics.successRate * 100).toFixed(1)}%) - investigate failures`);
            }
            
            if (metrics.averageResponseTime > 3000) {
                recommendations.push(`${serverName}: High response time (${metrics.averageResponseTime}ms) - consider optimization`);
            }

            if (metrics.errorRate > 0.2) {
                recommendations.push(`${serverName}: High error rate (${(metrics.errorRate * 100).toFixed(1)}%) - implement error handling`);
            }
        });

        return recommendations;
    }

    /**
     * Get comprehensive performance report
     */
    public getPerformanceReport(): any {
        const report = {
            timestamp: new Date(),
            serverCount: this.serverMetrics.size,
            cacheHitRate: this.cacheManager.getHitRate(),
            connectionPoolSize: this.connectionPool.size,
            servers: {},
            overallMetrics: {
                averageSuccessRate: 0,
                averageResponseTime: 0,
                totalRequests: 0
            }
        };

        let totalSuccessRate = 0;
        let totalResponseTime = 0;
        let totalRequests = 0;

        this.serverMetrics.forEach((metrics, serverName) => {
            report.servers[serverName] = {
                ...metrics,
                optimizationLevel: this.calculateOptimizationLevel(serverName)
            };

            totalSuccessRate += metrics.successRate;
            totalResponseTime += metrics.averageResponseTime;
            totalRequests += metrics.totalCalls;
        });

        if (this.serverMetrics.size > 0) {
            report.overallMetrics.averageSuccessRate = totalSuccessRate / this.serverMetrics.size;
            report.overallMetrics.averageResponseTime = totalResponseTime / this.serverMetrics.size;
            report.overallMetrics.totalRequests = totalRequests;
        }

        return report;
    }
}

/**
 * MCP Request Cache Manager
 * Optimizes repeated requests through intelligent caching
 */
class MCPRequestCacheManager {
    private cache: Map<string, { decision: any; timestamp: Date; ttl: number }>;
    private hitCount: number;
    private missCount: number;

    constructor() {
        this.cache = new Map();
        this.hitCount = 0;
        this.missCount = 0;
    }

    public get(key: string): any | null {
        const entry = this.cache.get(key);
        
        if (!entry) {
            this.missCount++;
            return null;
        }

        // Check if entry is expired
        if (Date.now() - entry.timestamp.getTime() > entry.ttl) {
            this.cache.delete(key);
            this.missCount++;
            return null;
        }

        this.hitCount++;
        return entry.decision;
    }

    public set(key: string, decision: any, ttl: number = 300000): void { // 5 minutes default TTL
        this.cache.set(key, {
            decision,
            timestamp: new Date(),
            ttl
        });

        // Cleanup old entries periodically
        if (this.cache.size > 1000) {
            this.cleanup();
        }
    }

    public getHitRate(): number {
        const total = this.hitCount + this.missCount;
        return total > 0 ? this.hitCount / total : 0;
    }

    private cleanup(): void {
        const now = Date.now();
        for (const [key, entry] of this.cache.entries()) {
            if (now - entry.timestamp.getTime() > entry.ttl) {
                this.cache.delete(key);
            }
        }
    }
}

/**
 * Global server optimizer instance
 */
export const mcpServerOptimizer = new MCPServerOptimizer({
    enablePerformanceTracking: true,
    enableIntelligentRouting: true,
    maxToolsPerTask: 7,
    responseTimeThreshold: 3000,
    successRateThreshold: 0.7
});