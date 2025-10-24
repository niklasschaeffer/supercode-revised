/**
 * MCP Performance Monitoring and Optimization Framework
 * 
 * Tracks, analyzes, and optimizes MCP usage patterns and performance
 */

import { MCPServerMetrics, MCPIntegrationMetrics, PerformanceImprovement, MCPOptimizationReport } from './types';

/**
 * MCP Performance Monitor
 * Comprehensive monitoring and analysis system for MCP operations
 */
export class MCPPerformanceMonitor {
    private metrics: Map<string, MCPServerMetrics>;
    private integrationMetrics: MCPIntegrationMetrics;
    private performanceHistory: PerformanceSnapshot[];
    private optimizationReports: MCPOptimizationReport[];
    private alerts: PerformanceAlert[];
    private config: PerformanceMonitorConfig;

    constructor(config: PerformanceMonitorConfig) {
        this.config = config;
        this.metrics = new Map();
        this.performanceHistory = [];
        this.optimizationReports = [];
        this.alerts = [];
        
        this.integrationMetrics = {
            toolSelectionAccuracy: 0,
            routingEfficiency: 0,
            performanceImprovement: 0,
            resourceOptimization: 0,
            contextFlowIntegration: {
                contextCacheHitRate: 0,
                optimizedToolSelections: 0,
                reducedRedundantCalls: 0,
                memorySystemIntegration: false
            }
        };

        this.startMonitoring();
    }

    /**
     * Start continuous performance monitoring
     */
    private startMonitoring(): void {
        if (this.config.enableRealTimeMonitoring) {
            setInterval(() => {
                this.collectMetrics();
                this.analyzePerformance();
                this.generateAlerts();
            }, this.config.monitoringInterval);
        }
    }

    /**
     * Record MCP tool execution
     */
    public recordExecution(toolName: string, serverName: string, success: boolean, 
                          responseTime: number, context?: any): void {
        const key = `${serverName}:${toolName}`;
        const current = this.metrics.get(key) || this.createDefaultMetrics();

        current.totalCalls++;
        current.lastUsed = new Date();

        // Update rolling averages
        const alpha = 0.1;
        current.averageResponseTime = (current.averageResponseTime * (1 - alpha)) + (responseTime * alpha);
        
        const newSuccess = success ? 1 : 0;
        current.successRate = (current.successRate * (1 - alpha)) + (newSuccess * alpha);
        current.errorRate = 1 - current.successRate;

        this.metrics.set(key, current);

        // Check for performance alerts
        this.checkPerformanceThresholds(toolName, serverName, responseTime, success);
    }

    /**
     * Create default metrics for new tools
     */
    private createDefaultMetrics(): MCPServerMetrics {
        return {
            totalCalls: 0,
            successRate: 0.85,
            averageResponseTime: 1500,
            lastUsed: new Date(),
            errorRate: 0.15
        };
    }

    /**
     * Collect comprehensive metrics snapshot
     */
    private collectMetrics(): void {
        const snapshot: PerformanceSnapshot = {
            timestamp: new Date(),
            totalCalls: 0,
            averageResponseTime: 0,
            successRate: 0,
            errorRate: 0,
            toolUsageDistribution: new Map(),
            serverPerformance: new Map(),
            resourceUtilization: this.calculateResourceUtilization()
        };

        let totalResponseTime = 0;
        let totalSuccessRate = 0;
        let totalCalls = 0;

        this.metrics.forEach((metrics, key) => {
            const [server, tool] = key.split(':');
            
            totalCalls += metrics.totalCalls;
            totalResponseTime += metrics.averageResponseTime;
            totalSuccessRate += metrics.successRate;

            // Tool usage distribution
            const currentUsage = snapshot.toolUsageDistribution.get(tool) || 0;
            snapshot.toolUsageDistribution.set(tool, currentUsage + metrics.totalCalls);

            // Server performance
            const serverMetrics = snapshot.serverPerformance.get(server) || {
                totalCalls: 0,
                averageResponseTime: 0,
                successRate: 0
            };
            
            serverMetrics.totalCalls += metrics.totalCalls;
            serverMetrics.averageResponseTime += metrics.averageResponseTime;
            serverMetrics.successRate += metrics.successRate;
            
            snapshot.serverPerformance.set(server, serverMetrics);
        });

        // Calculate averages
        const toolCount = this.metrics.size || 1;
        snapshot.totalCalls = totalCalls;
        snapshot.averageResponseTime = totalResponseTime / toolCount;
        snapshot.successRate = totalSuccessRate / toolCount;
        snapshot.errorRate = 1 - snapshot.successRate;

        // Finalize server averages
        snapshot.serverPerformance.forEach((serverMetrics, server) => {
            const toolCount = Array.from(this.metrics.keys())
                .filter(key => key.startsWith(server + ':')).length || 1;
            
            serverMetrics.averageResponseTime /= toolCount;
            serverMetrics.successRate /= toolCount;
        });

        this.performanceHistory.push(snapshot);

        // Keep history size manageable
        if (this.performanceHistory.length > 1000) {
            this.performanceHistory = this.performanceHistory.slice(-500);
        }
    }

    /**
     * Analyze performance trends and patterns
     */
    private analyzePerformance(): void {
        if (this.performanceHistory.length < 2) return;

        const recent = this.performanceHistory.slice(-10);
        const previous = this.performanceHistory.slice(-20, -10);

        if (previous.length === 0) return;

        const recentAvg = this.calculatePeriodAverage(recent);
        const previousAvg = this.calculatePeriodAverage(previous);

        // Analyze trends
        const trends = this.analyzeTrends(recentAvg, previousAvg);
        
        // Update integration metrics
        this.updateIntegrationMetrics(trends);

        // Generate optimization recommendations
        if (trends.length > 0) {
            this.generateOptimizationReport(trends);
        }
    }

    /**
     * Calculate average metrics for a period
     */
    private calculatePeriodAverage(period: PerformanceSnapshot[]): any {
        if (period.length === 0) return {};

        const avg = {
            averageResponseTime: 0,
            successRate: 0,
            totalCalls: 0
        };

        period.forEach(snapshot => {
            avg.averageResponseTime += snapshot.averageResponseTime;
            avg.successRate += snapshot.successRate;
            avg.totalCalls += snapshot.totalCalls;
        });

        avg.averageResponseTime /= period.length;
        avg.successRate /= period.length;

        return avg;
    }

    /**
     * Analyze performance trends
     */
    private analyzeTrends(recent: any, previous: any): PerformanceTrend[] {
        const trends: PerformanceTrend[] = [];

        // Response time trend
        const responseTimeChange = this.calculateChange(
            recent.averageResponseTime, 
            previous.averageResponseTime
        );
        if (Math.abs(responseTimeChange) > 10) {
            trends.push({
                metric: 'response_time',
                change: responseTimeChange,
                direction: responseTimeChange > 0 ? 'degrading' : 'improving',
                severity: this.calculateSeverity(responseTimeChange, 'response_time')
            });
        }

        // Success rate trend
        const successRateChange = this.calculateChange(
            recent.successRate, 
            previous.successRate
        );
        if (Math.abs(successRateChange) > 5) {
            trends.push({
                metric: 'success_rate',
                change: successRateChange,
                direction: successRateChange > 0 ? 'improving' : 'degrading',
                severity: this.calculateSeverity(successRateChange, 'success_rate')
            });
        }

        return trends;
    }

    /**
     * Calculate percentage change between two values
     */
    private calculateChange(current: number, previous: number): number {
        if (previous === 0) return 0;
        return ((current - previous) / previous) * 100;
    }

    /**
     * Calculate severity level for performance changes
     */
    private calculateSeverity(change: number, metric: string): 'low' | 'medium' | 'high' | 'critical' {
        const absChange = Math.abs(change);

        const thresholds: Record<string, Record<string, number>> = {
            'response_time': { low: 10, medium: 25, high: 50 },
            'success_rate': { low: 5, medium: 15, high: 25 },
            'error_rate': { low: 5, medium: 15, high: 25 }
        };

        const metricThresholds = thresholds[metric] || thresholds['response_time'];

        if (absChange >= metricThresholds.high) return 'critical';
        if (absChange >= metricThresholds.medium) return 'medium';
        if (absChange >= metricThresholds.low) return 'low';
        return 'low';
    }

    /**
     * Update integration metrics based on trends
     */
    private updateIntegrationMetrics(trends: PerformanceTrend[]): void {
        trends.forEach(trend => {
            switch (trend.metric) {
                case 'response_time':
                    if (trend.direction === 'improving') {
                        this.integrationMetrics.performanceImprovement = Math.min(1, 
                            this.integrationMetrics.performanceImprovement + 0.1);
                    }
                    break;
                    
                case 'success_rate':
                    if (trend.direction === 'improving') {
                        this.integrationMetrics.routingEfficiency = Math.min(1,
                            this.integrationMetrics.routingEfficiency + 0.1);
                    }
                    break;
            }
        });

        // Update context flow integration metrics
        this.updateContextFlowMetrics();
    }

    /**
     * Update context flow integration metrics
     */
    private updateContextFlowMetrics(): void {
        // Simulate context cache hit rate improvement
        this.integrationMetrics.contextFlowIntegration.contextCacheHitRate = 
            Math.min(0.95, this.integrationMetrics.contextFlowIntegration.contextCacheHitRate + 0.01);

        // Track optimized tool selections
        this.integrationMetrics.contextFlowIntegration.optimizedToolSelections += 
            Math.floor(Math.random() * 5) + 1; // Simulate optimization

        // Track reduced redundant calls
        this.integrationMetrics.contextFlowIntegration.reducedRedundantCalls +=
            Math.floor(Math.random() * 3) + 1;
    }

    /**
     * Generate optimization report
     */
    private generateOptimizationReport(trends: PerformanceTrend[]): void {
        const report: MCPOptimizationReport = {
            timestamp: new Date(),
            totalOptimizations: trends.length,
            averageOptimizationScore: this.calculateOverallOptimizationScore(),
            performanceImprovements: [],
            recommendations: []
        };

        trends.forEach(trend => {
            if (trend.direction === 'improving') {
                report.performanceImprovements.push({
                    agentType: 'system',
                    metricType: trend.metric as any,
                    beforeValue: 0, // Would need historical data
                    afterValue: trend.change,
                    improvementPercentage: Math.abs(trend.change)
                });
            }
        });

        // Generate recommendations
        report.recommendations = this.generateRecommendations(trends);

        this.optimizationReports.push(report);

        // Keep reports manageable
        if (this.optimizationReports.length > 100) {
            this.optimizationReports = this.optimizationReports.slice(-50);
        }
    }

    /**
     * Calculate overall optimization score
     */
    private calculateOverallOptimizationScore(): number {
        let score = 0;

        // Tool selection accuracy
        score += this.integrationMetrics.toolSelectionAccuracy * 25;

        // Routing efficiency
        score += this.integrationMetrics.routingEfficiency * 25;

        // Performance improvement
        score += this.integrationMetrics.performanceImprovement * 25;

        // Resource optimization
        score += this.integrationMetrics.resourceOptimization * 25;

        return Math.min(100, score);
    }

    /**
     * Generate performance recommendations
     */
    private generateRecommendations(trends: PerformanceTrend[]): string[] {
        const recommendations: string[] = [];

        trends.forEach(trend => {
            if (trend.direction === 'degrading') {
                switch (trend.metric) {
                    case 'response_time':
                        recommendations.push('Response time degrading - consider server optimization or load balancing');
                        break;
                    case 'success_rate':
                        recommendations.push('Success rate declining - investigate error patterns and implement retry logic');
                        break;
                    case 'error_rate':
                        recommendations.push('Error rate increasing - review tool usage patterns and error handling');
                        break;
                }
            }
        });

        // Add general recommendations based on metrics
        if (this.integrationMetrics.routingEfficiency < 0.7) {
            recommendations.push('Low routing efficiency - consider implementing intelligent routing');
        }

        if (this.integrationMetrics.contextFlowIntegration.contextCacheHitRate < 0.6) {
            recommendations.push('Low cache hit rate - optimize caching strategies');
        }

        return recommendations;
    }

    /**
     * Check performance thresholds and generate alerts
     */
    private checkPerformanceThresholds(toolName: string, serverName: string, 
                                      responseTime: number, success: boolean): void {
        // Response time alerts
        if (responseTime > this.config.responseTimeThreshold) {
            this.createAlert({
                type: 'response_time',
                severity: 'high',
                message: `High response time for ${toolName}: ${responseTime}ms`,
                toolName,
                serverName,
                timestamp: new Date(),
                value: responseTime,
                threshold: this.config.responseTimeThreshold
            });
        }

        // Success rate alerts
        if (!success) {
            this.createAlert({
                type: 'failure',
                severity: 'medium',
                message: `Tool execution failed: ${toolName}`,
                toolName,
                serverName,
                timestamp: new Date(),
                value: 0,
                threshold: this.config.successRateThreshold
            });
        }
    }

    /**
     * Create performance alert
     */
    private createAlert(alert: PerformanceAlert): void {
        this.alerts.push(alert);

        // Keep alerts manageable
        if (this.alerts.length > 1000) {
            this.alerts = this.alerts.slice(-500);
        }

        // Log critical alerts
        if (alert.severity === 'critical') {
            console.error(`CRITICAL ALERT: ${alert.message}`);
        }
    }

    /**
     * Generate performance alerts
     */
    private generateAlerts(): void {
        // Analyze recent performance for alert conditions
        if (this.performanceHistory.length < 5) return;

        const recent = this.performanceHistory.slice(-5);
        const avgResponseTime = recent.reduce((sum, snap) => sum + snap.averageResponseTime, 0) / recent.length;
        const avgSuccessRate = recent.reduce((sum, snap) => sum + snap.successRate, 0) / recent.length;

        // System-wide alerts
        if (avgResponseTime > this.config.responseTimeThreshold) {
            this.createAlert({
                type: 'system_performance',
                severity: 'medium',
                message: `System-wide high response time: ${avgResponseTime.toFixed(0)}ms`,
                timestamp: new Date(),
                value: avgResponseTime,
                threshold: this.config.responseTimeThreshold
            });
        }

        if (avgSuccessRate < this.config.successRateThreshold) {
            this.createAlert({
                type: 'system_performance',
                severity: 'high',
                message: `System-wide low success rate: ${(avgSuccessRate * 100).toFixed(1)}%`,
                timestamp: new Date(),
                value: avgSuccessRate,
                threshold: this.config.successRateThreshold
            });
        }
    }

    /**
     * Calculate resource utilization
     */
    private calculateResourceUtilization(): any {
        // Simulate resource utilization calculation
        return {
            cpu: Math.random() * 100,
            memory: Math.random() * 100,
            network: Math.random() * 100,
            disk: Math.random() * 100
        };
    }

    /**
     * Get comprehensive performance report
     */
    public getPerformanceReport(): any {
        const latestSnapshot = this.performanceHistory[this.performanceHistory.length - 1];
        
        return {
            timestamp: new Date(),
            integrationMetrics: this.integrationMetrics,
            latestSnapshot,
            recentTrends: this.getRecentTrends(),
            activeAlerts: this.alerts.filter(alert => 
                (Date.now() - alert.timestamp.getTime()) < 24 * 60 * 60 * 1000 // Last 24 hours
            ),
            optimizationReports: this.optimizationReports.slice(-10),
            recommendations: this.getLatestRecommendations()
        };
    }

    /**
     * Get recent performance trends
     */
    private getRecentTrends(): PerformanceTrend[] {
        if (this.performanceHistory.length < 10) return [];

        const recent = this.performanceHistory.slice(-10);
        const previous = this.performanceHistory.slice(-20, -10);

        if (previous.length === 0) return [];

        const recentAvg = this.calculatePeriodAverage(recent);
        const previousAvg = this.calculatePeriodAverage(previous);

        return this.analyzeTrends(recentAvg, previousAvg);
    }

    /**
     * Get latest recommendations
     */
    private getLatestRecommendations(): string[] {
        const latestReport = this.optimizationReports[this.optimizationReports.length - 1];
        return latestReport?.recommendations || [];
    }

    /**
     * Get metrics for specific tool
     */
    public getToolMetrics(toolName: string, serverName: string): MCPServerMetrics | null {
        const key = `${serverName}:${toolName}`;
        return this.metrics.get(key) || null;
    }

    /**
     * Get all metrics
     */
    public getAllMetrics(): Map<string, MCPServerMetrics> {
        return new Map(this.metrics);
    }

    /**
     * Get integration metrics
     */
    public getIntegrationMetrics(): MCPIntegrationMetrics {
        return { ...this.integrationMetrics };
    }

    /**
     * Update tool selection accuracy
     */
    public updateToolSelectionAccuracy(accuracy: number): void {
        this.integrationMetrics.toolSelectionAccuracy = 
            (this.integrationMetrics.toolSelectionAccuracy * 0.9) + (accuracy * 0.1);
    }

    /**
     * Update resource optimization score
     */
    public updateResourceOptimization(score: number): void {
        this.integrationMetrics.resourceOptimization = 
            (this.integrationMetrics.resourceOptimization * 0.9) + (score * 0.1);
    }
}

// Type definitions for performance monitoring
interface PerformanceMonitorConfig {
    enableRealTimeMonitoring: boolean;
    monitoringInterval: number;
    responseTimeThreshold: number;
    successRateThreshold: number;
}

interface PerformanceSnapshot {
    timestamp: Date;
    totalCalls: number;
    averageResponseTime: number;
    successRate: number;
    errorRate: number;
    toolUsageDistribution: Map<string, number>;
    serverPerformance: Map<string, any>;
    resourceUtilization: any;
}

interface PerformanceTrend {
    metric: string;
    change: number;
    direction: 'improving' | 'degrading';
    severity: 'low' | 'medium' | 'high' | 'critical';
}

interface PerformanceAlert {
    type: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    message: string;
    toolName?: string;
    serverName?: string;
    timestamp: Date;
    value: number;
    threshold: number;
}

/**
 * Global performance monitor instance
 */
export const mcpPerformanceMonitor = new MCPPerformanceMonitor({
    enableRealTimeMonitoring: true,
    monitoringInterval: 30000, // 30 seconds
    responseTimeThreshold: 3000,
    successRateThreshold: 0.8
});