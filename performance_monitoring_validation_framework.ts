/**
 * Performance Monitoring and Validation Framework - Comprehensive Performance Tracking
 * Monitors, validates, and optimizes performance across all advanced command components
 * Part of Phase 2 Advanced Command Implementation Unification
 */

import { ContextFlowIntegrationModule, IntegratedCommandContext } from './context_flow_integration_module';
import { MemorySystemIntegrationModule, MemoryOperation } from './memory_system_integration_module';
import { TaskComplexityAnalyzer, IntelligentRoutingEngine, AdvancedFlagProcessor } from './advanced_command_intelligence';
import { HybridWorkflowManager, CrossModeExecutionEngine } from './cross_mode_execution_engine';
import { ContextFlowOptimizer, OptimizationMetrics } from './context_flow_optimizer';
import { UnifiedMemoryManager, PerformanceMetrics } from './unified_memory_manager';

export interface PerformanceMonitoringConfig {
  enableRealTimeMonitoring: boolean;
  enablePredictiveAnalysis: boolean;
  enablePerformanceValidation: boolean;
  enableOptimizationRecommendations: boolean;
  monitoringInterval: number; // ms
  validationThresholds: ValidationThresholds;
  alertingConfig: AlertingConfig;
}

export interface ValidationThresholds {
  maxResponseTime: number; // ms
  minCacheHitRate: number; // 0-1
  minParallelEfficiency: number; // 0-1
  maxErrorRate: number; // 0-1
  minOptimizationRate: number; // 0-1
  maxContextSwitchOverhead: number; // ms
  minMemoryUtilization: number; // 0-1
}

export interface AlertingConfig {
  enableAlerts: boolean;
  alertChannels: ('console' | 'log' | 'memory')[];
  severityLevels: ('info' | 'warning' | 'error' | 'critical')[];
  alertCooldown: number; // ms
}

export interface PerformanceSnapshot {
  timestamp: Date;
  commandContext: IntegratedCommandContext;
  systemMetrics: SystemMetrics;
  optimizationMetrics: OptimizationMetrics;
  memoryMetrics: MemoryPerformanceMetrics;
  validationResults: ValidationResult[];
  performanceScore: number; // 0-100
}

export interface SystemMetrics {
  cpuUsage: number; // 0-1
  memoryUsage: number; // 0-1
  diskUsage: number; // 0-1
  networkLatency: number; // ms
  activeConnections: number;
  systemLoad: number; // 0-1
}

export interface MemoryPerformanceMetrics {
  totalOperations: number;
  averageResponseTime: number;
  cacheHitRate: number;
  errorRate: number;
  throughput: number; // operations/second
  utilization: number; // 0-1
}

export interface ValidationResult {
  metric: string;
  expected: number;
  actual: number;
  passed: boolean;
  deviation: number; // percentage
  severity: 'info' | 'warning' | 'error' | 'critical';
  recommendation?: string;
}

export interface PerformanceTrend {
  metric: string;
  timeframe: '1m' | '5m' | '15m' | '1h' | '6h' | '24h';
  trend: 'improving' | 'stable' | 'degrading';
  changeRate: number; // percentage
  confidence: number; // 0-1
  prediction: number; // predicted next value
}

export interface PerformanceAlert {
  id: string;
  timestamp: Date;
  severity: 'info' | 'warning' | 'error' | 'critical';
  metric: string;
  value: number;
  threshold: number;
  message: string;
  recommendation?: string;
  resolved: boolean;
}

export interface OptimizationRecommendation {
  id: string;
  timestamp: Date;
  category: 'performance' | 'memory' | 'routing' | 'optimization';
  priority: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  expectedImprovement: number; // percentage
  implementationComplexity: 'low' | 'medium' | 'high';
  autoApplicable: boolean;
}

/**
 * Performance Monitoring and Validation Framework
 */
export class PerformanceMonitoringValidationFramework {
  private config: PerformanceMonitoringConfig;
  private contextFlowIntegration: ContextFlowIntegrationModule;
  private memorySystemIntegration: MemorySystemIntegrationModule;
  private complexityAnalyzer: TaskComplexityAnalyzer;
  private routingEngine: IntelligentRoutingEngine;
  private flagProcessor: AdvancedFlagProcessor;
  private workflowManager: HybridWorkflowManager;
  private executionEngine: CrossModeExecutionEngine;
  private contextOptimizer: ContextFlowOptimizer;
  private memoryManager: UnifiedMemoryManager;
  
  private performanceHistory: PerformanceSnapshot[] = [];
  private activeAlerts: Map<string, PerformanceAlert> = new Map();
  private performanceTrends: Map<string, PerformanceTrend> = new Map();
  private optimizationRecommendations: OptimizationRecommendation[] = [];
  private validationHistory: ValidationResult[] = [];
  private monitoringActive: boolean = false;
  private lastAlertTime: number = 0;

  constructor(
    contextFlowIntegration: ContextFlowIntegrationModule,
    memorySystemIntegration: MemorySystemIntegrationModule,
    config?: Partial<PerformanceMonitoringConfig>
  ) {
    this.contextFlowIntegration = contextFlowIntegration;
    this.memorySystemIntegration = memorySystemIntegration;
    
    this.config = this.initializeConfig(config);
    
    // Initialize core components for monitoring
    this.complexityAnalyzer = new TaskComplexityAnalyzer();
    this.routingEngine = new IntelligentRoutingEngine();
    this.flagProcessor = new AdvancedFlagProcessor();
    this.workflowManager = new HybridWorkflowManager();
    this.executionEngine = new CrossModeExecutionEngine();
    this.contextOptimizer = new ContextFlowOptimizer();
    this.memoryManager = new UnifiedMemoryManager();
    
    this.setupMonitoring();
  }

  /**
   * Start comprehensive performance monitoring
   */
  startMonitoring(): void {
    if (this.monitoringActive) {
      console.warn('Performance monitoring is already active');
      return;
    }
    
    this.monitoringActive = true;
    console.log('Starting performance monitoring and validation framework');
    
    // Start periodic monitoring
    setInterval(() => {
      this.performMonitoringCycle();
    }, this.config.monitoringInterval);
    
    // Start trend analysis
    setInterval(() => {
      this.analyzePerformanceTrends();
    }, this.config.monitoringInterval * 5); // Every 5 cycles
    
    // Start optimization analysis
    setInterval(() => {
      this.generateOptimizationRecommendations();
    }, this.config.monitoringInterval * 10); // Every 10 cycles
    
    console.log('Performance monitoring started successfully');
  }

  /**
   * Stop performance monitoring
   */
  stopMonitoring(): void {
    this.monitoringActive = false;
    console.log('Performance monitoring stopped');
  }

  /**
   * Record performance snapshot for command execution
   */
  async recordPerformanceSnapshot(commandContext: IntegratedCommandContext): Promise<PerformanceSnapshot> {
    const timestamp = new Date();
    
    try {
      // 1. Collect system metrics
      const systemMetrics = await this.collectSystemMetrics();
      
      // 2. Collect optimization metrics
      const optimizationMetrics = this.contextOptimizer.getOptimizationMetrics();
      
      // 3. Collect memory performance metrics
      const memoryMetrics = await this.collectMemoryPerformanceMetrics();
      
      // 4. Perform validation
      const validationResults = await this.validatePerformance(
        commandContext,
        systemMetrics,
        optimizationMetrics,
        memoryMetrics
      );
      
      // 5. Calculate overall performance score
      const performanceScore = this.calculatePerformanceScore(
        commandContext,
        systemMetrics,
        optimizationMetrics,
        memoryMetrics,
        validationResults
      );
      
      // 6. Create performance snapshot
      const snapshot: PerformanceSnapshot = {
        timestamp,
        commandContext,
        systemMetrics,
        optimizationMetrics,
        memoryMetrics,
        validationResults,
        performanceScore
      };
      
      // 7. Store snapshot and update history
      this.performanceHistory.push(snapshot);
      this.maintainHistorySize();
      
      // 8. Check for alerts
      await this.checkForAlerts(snapshot);
      
      // 9. Update trends
      this.updatePerformanceTrends(snapshot);
      
      return snapshot;
      
    } catch (error) {
      console.error('Failed to record performance snapshot:', error);
      
      // Return minimal snapshot on error
      return {
        timestamp,
        commandContext,
        systemMetrics: { cpuUsage: 0, memoryUsage: 0, diskUsage: 0, networkLatency: 0, activeConnections: 0, systemLoad: 0 },
        optimizationMetrics: this.contextOptimizer.getOptimizationMetrics(),
        memoryMetrics: { totalOperations: 0, averageResponseTime: 0, cacheHitRate: 0, errorRate: 0, throughput: 0, utilization: 0 },
        validationResults: [],
        performanceScore: 0
      };
    }
  }

  /**
   * Validate performance against thresholds
   */
  async validatePerformance(
    commandContext: IntegratedCommandContext,
    systemMetrics: SystemMetrics,
    optimizationMetrics: OptimizationMetrics,
    memoryMetrics: MemoryPerformanceMetrics
  ): Promise<ValidationResult[]> {
    const results: ValidationResult[] = [];
    
    // 1. Validate response time
    results.push(this.validateMetric(
      'responseTime',
      this.config.validationThresholds.maxResponseTime,
      commandContext.performance.operationTime,
      'ms'
    ));
    
    // 2. Validate cache hit rate
    results.push(this.validateMetric(
      'cacheHitRate',
      this.config.validationThresholds.minCacheHitRate,
      optimizationMetrics.cacheHitRate,
      'rate'
    ));
    
    // 3. Validate parallel efficiency
    results.push(this.validateMetric(
      'parallelEfficiency',
      this.config.validationThresholds.minParallelEfficiency,
      optimizationMetrics.parallelEfficiency,
      'efficiency'
    ));
    
    // 4. Validate error rate
    results.push(this.validateMetric(
      'errorRate',
      this.config.validationThresholds.maxErrorRate,
      memoryMetrics.errorRate,
      'rate'
    ));
    
    // 5. Validate optimization rate
    results.push(this.validateMetric(
      'optimizationRate',
      this.config.validationThresholds.minOptimizationRate,
      this.calculateOptimizationRate(commandContext),
      'rate'
    ));
    
    // 6. Validate context switch overhead
    results.push(this.validateMetric(
      'contextSwitchOverhead',
      this.config.validationThresholds.maxContextSwitchOverhead,
      this.estimateContextSwitchOverhead(commandContext),
      'ms'
    ));
    
    // 7. Validate memory utilization
    results.push(this.validateMetric(
      'memoryUtilization',
      this.config.validationThresholds.minMemoryUtilization,
      memoryMetrics.utilization,
      'utilization'
    ));
    
    // 8. Store validation results
    this.validationHistory.push(...results);
    this.maintainValidationHistorySize();
    
    return results;
  }

  /**
   * Analyze performance trends
   */
  async analyzePerformanceTrends(): Promise<Map<string, PerformanceTrend>> {
    const timeframes = ['1m', '5m', '15m', '1h', '6h', '24h'] as const;
    const metrics = ['responseTime', 'cacheHitRate', 'parallelEfficiency', 'errorRate', 'throughput'];
    
    for (const metric of metrics) {
      for (const timeframe of timeframes) {
        const trend = await this.calculateTrend(metric, timeframe);
        this.performanceTrends.set(`${metric}-${timeframe}`, trend);
      }
    }
    
    return this.performanceTrends;
  }

  /**
   * Generate optimization recommendations
   */
  async generateOptimizationRecommendations(): Promise<OptimizationRecommendation[]> {
    const recommendations: OptimizationRecommendation[] = [];
    
    // 1. Performance-based recommendations
    const performanceRecs = await this.generatePerformanceRecommendations();
    recommendations.push(...performanceRecs);
    
    // 2. Memory-based recommendations
    const memoryRecs = await this.generateMemoryRecommendations();
    recommendations.push(...memoryRecs);
    
    // 3. Routing-based recommendations
    const routingRecs = await this.generateRoutingRecommendations();
    recommendations.push(...routingRecs);
    
    // 4. Optimization-based recommendations
    const optimizationRecs = await this.generateOptimizationBasedRecommendations();
    recommendations.push(...optimizationRecs);
    
    // 5. Filter and prioritize recommendations
    const filteredRecommendations = this.filterAndPrioritizeRecommendations(recommendations);
    
    // 6. Update recommendations list
    this.optimizationRecommendations = filteredRecommendations;
    
    return filteredRecommendations;
  }

  /**
   * Get comprehensive performance report
   */
  async getPerformanceReport(): Promise<any> {
    const latestSnapshot = this.performanceHistory[this.performanceHistory.length - 1];
    const trends = await this.analyzePerformanceTrends();
    const recommendations = await this.generateOptimizationRecommendations();
    
    return {
      summary: {
        totalSnapshots: this.performanceHistory.length,
        averagePerformanceScore: this.calculateAveragePerformanceScore(),
        activeAlerts: this.activeAlerts.size,
        totalRecommendations: recommendations.length
      },
      latest: latestSnapshot,
      trends: Object.fromEntries(trends),
      recommendations,
      alerts: Array.from(this.activeAlerts.values()),
      validation: {
        totalValidations: this.validationHistory.length,
        failureRate: this.calculateValidationFailureRate(),
        commonFailures: this.getCommonValidationFailures()
      },
      system: await this.collectSystemMetrics(),
      optimization: this.contextOptimizer.getOptimizationMetrics(),
      memory: await this.collectMemoryPerformanceMetrics()
    };
  }

  // Private methods

  private initializeConfig(config?: Partial<PerformanceMonitoringConfig>): PerformanceMonitoringConfig {
    return {
      enableRealTimeMonitoring: true,
      enablePredictiveAnalysis: true,
      enablePerformanceValidation: true,
      enableOptimizationRecommendations: true,
      monitoringInterval: 30000, // 30 seconds
      validationThresholds: {
        maxResponseTime: 2000, // 2 seconds
        minCacheHitRate: 0.7, // 70%
        minParallelEfficiency: 0.6, // 60%
        maxErrorRate: 0.05, // 5%
        minOptimizationRate: 0.8, // 80%
        maxContextSwitchOverhead: 100, // 100ms
        minMemoryUtilization: 0.3 // 30%
      },
      alertingConfig: {
        enableAlerts: true,
        alertChannels: ['console', 'log'],
        severityLevels: ['warning', 'error', 'critical'],
        alertCooldown: 60000 // 1 minute
      },
      ...config
    };
  }

  private setupMonitoring(): void {
    // Setup monitoring hooks
    if (this.config.enableRealTimeMonitoring) {
      console.log('Real-time performance monitoring enabled');
    }
    
    if (this.config.enablePredictiveAnalysis) {
      console.log('Predictive performance analysis enabled');
    }
    
    if (this.config.enablePerformanceValidation) {
      console.log('Performance validation enabled');
    }
    
    if (this.config.enableOptimizationRecommendations) {
      console.log('Optimization recommendations enabled');
    }
  }

  private async performMonitoringCycle(): Promise<void> {
    if (!this.monitoringActive) return;
    
    try {
      // Collect current metrics
      const systemMetrics = await this.collectSystemMetrics();
      const optimizationMetrics = this.contextOptimizer.getOptimizationMetrics();
      const memoryMetrics = await this.collectMemoryPerformanceMetrics();
      
      // Perform health checks
      await this.performHealthChecks(systemMetrics, optimizationMetrics, memoryMetrics);
      
      // Update monitoring data
      this.updateMonitoringData(systemMetrics, optimizationMetrics, memoryMetrics);
      
    } catch (error) {
      console.error('Monitoring cycle failed:', error);
    }
  }

  private async collectSystemMetrics(): Promise<SystemMetrics> {
    // Simulated system metrics collection
    // In a real implementation, this would use system monitoring tools
    
    return {
      cpuUsage: Math.random() * 0.8, // 0-80%
      memoryUsage: Math.random() * 0.7, // 0-70%
      diskUsage: Math.random() * 0.5, // 0-50%
      networkLatency: Math.random() * 100 + 10, // 10-110ms
      activeConnections: Math.floor(Math.random() * 50) + 10, // 10-60
      systemLoad: Math.random() * 0.6 // 0-60%
    };
  }

  private async collectMemoryPerformanceMetrics(): Promise<MemoryPerformanceMetrics> {
    const integrationMetrics = this.memorySystemIntegration.getMemoryIntegrationMetrics();
    const memoryPerformance = this.memoryManager.getPerformanceMetrics();
    
    return {
      totalOperations: integrationMetrics.totalMemoryOperations,
      averageResponseTime: integrationMetrics.averageMemoryResponseTime,
      cacheHitRate: integrationMetrics.cacheHitRate,
      errorRate: this.calculateErrorRate(),
      throughput: this.calculateThroughput(),
      utilization: integrationMetrics.dualMCPUtilization
    };
  }

  private validateMetric(
    metric: string,
    threshold: number,
    actual: number,
    unit: string
  ): ValidationResult {
    const passed = this.checkThreshold(metric, threshold, actual);
    const deviation = Math.abs((actual - threshold) / threshold) * 100;
    
    let severity: 'info' | 'warning' | 'error' | 'critical' = 'info';
    if (!passed) {
      severity = this.determineSeverity(metric, deviation);
    }
    
    return {
      metric,
      expected: threshold,
      actual,
      passed,
      deviation,
      severity,
      recommendation: passed ? undefined : this.generateRecommendation(metric, actual, threshold)
    };
  }

  private checkThreshold(metric: string, threshold: number, actual: number): boolean {
    switch (metric) {
      case 'responseTime':
      case 'contextSwitchOverhead':
        return actual <= threshold;
      case 'cacheHitRate':
      case 'parallelEfficiency':
      case 'optimizationRate':
      case 'memoryUtilization':
        return actual >= threshold;
      case 'errorRate':
        return actual <= threshold;
      default:
        return true;
    }
  }

  private determineSeverity(metric: string, deviation: number): 'warning' | 'error' | 'critical' {
    if (deviation > 50) return 'critical';
    if (deviation > 25) return 'error';
    return 'warning';
  }

  private generateRecommendation(metric: string, actual: number, threshold: number): string {
    const recommendations: Record<string, string> = {
      'responseTime': 'Consider optimizing command execution or increasing parallel processing',
      'cacheHitRate': 'Review cache strategy and consider increasing cache size',
      'parallelEfficiency': 'Optimize parallel execution and agent selection',
      'errorRate': 'Investigate error sources and improve error handling',
      'optimizationRate': 'Review optimization algorithms and configuration',
      'contextSwitchOverhead': 'Optimize agent handoffs and context preservation',
      'memoryUtilization': 'Improve memory management and allocation strategies'
    };
    
    return recommendations[metric] || 'Review system configuration and performance';
  }

  private calculatePerformanceScore(
    commandContext: IntegratedCommandContext,
    systemMetrics: SystemMetrics,
    optimizationMetrics: OptimizationMetrics,
    memoryMetrics: MemoryPerformanceMetrics,
    validationResults: ValidationResult[]
  ): number {
    let score = 100; // Start with perfect score
    
    // Deduct points for validation failures
    validationResults.forEach(result => {
      if (!result.passed) {
        switch (result.severity) {
          case 'critical':
            score -= 20;
            break;
          case 'error':
            score -= 10;
            break;
          case 'warning':
            score -= 5;
            break;
        }
      }
    });
    
    // Bonus points for good performance
    if (optimizationMetrics.cacheHitRate > 0.8) score += 5;
    if (optimizationMetrics.parallelEfficiency > 0.7) score += 5;
    if (memoryMetrics.throughput > 100) score += 5;
    
    return Math.max(0, Math.min(100, score));
  }

  private calculateOptimizationRate(commandContext: IntegratedCommandContext): number {
    const totalPossibleOptimizations = 10; // Estimated maximum
    const actualOptimizations = commandContext.optimizations.length;
    return actualOptimizations / totalPossibleOptimizations;
  }

  private estimateContextSwitchOverhead(commandContext: IntegratedCommandContext): number {
    // Simplified estimation based on workflow complexity
    return commandContext.workflow.length * 50; // 50ms per workflow step
  }

  private calculateErrorRate(): number {
    const recentOperations = this.performanceHistory.slice(-10);
    const failedOperations = recentOperations.filter(snapshot => 
      snapshot.performanceScore < 50
    ).length;
    
    return failedOperations / Math.max(1, recentOperations.length);
  }

  private calculateThroughput(): number {
    const recentSnapshots = this.performanceHistory.slice(-10);
    const timeSpan = recentSnapshots.length > 1 ? 
      (recentSnapshots[recentSnapshots.length - 1].timestamp.getTime() - 
       recentSnapshots[0].timestamp.getTime()) / 1000 : 1;
    
    return recentSnapshots.length / Math.max(1, timeSpan);
  }

  private async checkForAlerts(snapshot: PerformanceSnapshot): Promise<void> {
    if (!this.config.alertingConfig.enableAlerts) return;
    
    const now = Date.now();
    if (now - this.lastAlertTime < this.config.alertingConfig.alertCooldown) {
      return; // Cooldown period
    }
    
    // Check validation results for alerts
    for (const result of snapshot.validationResults) {
      if (!result.passed && this.shouldTriggerAlert(result)) {
        await this.triggerAlert(result, snapshot);
      }
    }
    
    this.lastAlertTime = now;
  }

  private shouldTriggerAlert(result: ValidationResult): boolean {
    return this.config.alertingConfig.severityLevels.includes(result.severity);
  }

  private async triggerAlert(result: ValidationResult, snapshot: PerformanceSnapshot): Promise<void> {
    const alert: PerformanceAlert = {
      id: this.generateAlertId(),
      timestamp: new Date(),
      severity: result.severity,
      metric: result.metric,
      value: result.actual,
      threshold: result.expected,
      message: `Performance validation failed for ${result.metric}: ${result.actual} (expected: ${result.expected})`,
      recommendation: result.recommendation,
      resolved: false
    };
    
    this.activeAlerts.set(alert.id, alert);
    
    // Send alert to configured channels
    await this.sendAlert(alert);
  }

  private async sendAlert(alert: PerformanceAlert): Promise<void> {
    const message = `[${alert.severity.toUpperCase()}] ${alert.message}`;
    
    for (const channel of this.config.alertingConfig.alertChannels) {
      switch (channel) {
        case 'console':
          console.warn(message);
          break;
        case 'log':
          // Log to file or logging system
          break;
        case 'memory':
          // Store in memory system
          await this.memoryManager.write({
            type: 'session',
            content: JSON.stringify(alert),
            metadata: {
              source: 'unified',
              contentType: 'alert',
              tags: ['performance', 'alert', alert.severity],
              priority: alert.severity === 'critical' ? 'high' : 'medium'
            },
            timestamp: new Date()
          });
          break;
      }
    }
  }

  private updatePerformanceTrends(snapshot: PerformanceSnapshot): void {
    // Update trend data with new snapshot
    const metrics = ['responseTime', 'cacheHitRate', 'parallelEfficiency', 'errorRate', 'throughput'];
    
    for (const metric of metrics) {
      const value = this.extractMetricValue(snapshot, metric);
      if (value !== undefined) {
        // Update trend calculations
        this.updateTrendData(metric, value, snapshot.timestamp);
      }
    }
  }

  private extractMetricValue(snapshot: PerformanceSnapshot, metric: string): number | undefined {
    switch (metric) {
      case 'responseTime':
        return snapshot.commandContext.performance.operationTime;
      case 'cacheHitRate':
        return snapshot.optimizationMetrics.cacheHitRate;
      case 'parallelEfficiency':
        return snapshot.optimizationMetrics.parallelEfficiency;
      case 'errorRate':
        return snapshot.memoryMetrics.errorRate;
      case 'throughput':
        return snapshot.memoryMetrics.throughput;
      default:
        return undefined;
    }
  }

  private updateTrendData(metric: string, value: number, timestamp: Date): void {
    // Simplified trend update - in production, this would use more sophisticated algorithms
    const key = `${metric}-current`;
    const existingTrend = this.performanceTrends.get(key);
    
    if (existingTrend) {
      // Update existing trend
      const changeRate = ((value - existingTrend.prediction) / existingTrend.prediction) * 100;
      existingTrend.changeRate = changeRate;
      existingTrend.prediction = value;
      existingTrend.trend = changeRate > 5 ? 'improving' : changeRate < -5 ? 'degrading' : 'stable';
    } else {
      // Create new trend
      this.performanceTrends.set(key, {
        metric,
        timeframe: '1m',
        trend: 'stable',
        changeRate: 0,
        confidence: 0.5,
        prediction: value
      });
    }
  }

  private async calculateTrend(metric: string, timeframe: string): Promise<PerformanceTrend> {
    // Simplified trend calculation
    const recentSnapshots = this.getRecentSnapshots(timeframe);
    
    if (recentSnapshots.length < 2) {
      return {
        metric,
        timeframe: timeframe as any,
        trend: 'stable',
        changeRate: 0,
        confidence: 0,
        prediction: 0
      };
    }
    
    const values = recentSnapshots.map(snapshot => this.extractMetricValue(snapshot, metric)).filter(v => v !== undefined) as number[];
    
    if (values.length < 2) {
      return {
        metric,
        timeframe: timeframe as any,
        trend: 'stable',
        changeRate: 0,
        confidence: 0,
        prediction: 0
      };
    }
    
    // Calculate trend
    const firstValue = values[0];
    const lastValue = values[values.length - 1];
    const changeRate = ((lastValue - firstValue) / firstValue) * 100;
    
    let trend: 'improving' | 'stable' | 'degrading';
    if (Math.abs(changeRate) < 5) {
      trend = 'stable';
    } else if (changeRate > 0) {
      trend = metric.includes('Error') || metric.includes('Time') ? 'degrading' : 'improving';
    } else {
      trend = metric.includes('Error') || metric.includes('Time') ? 'improving' : 'degrading';
    }
    
    return {
      metric,
      timeframe: timeframe as any,
      trend,
      changeRate,
      confidence: Math.min(1, values.length / 10),
      prediction: lastValue + (changeRate / 100 * lastValue)
    };
  }

  private getRecentSnapshots(timeframe: string): PerformanceSnapshot[] {
    const now = new Date();
    let cutoffTime: Date;
    
    switch (timeframe) {
      case '1m':
        cutoffTime = new Date(now.getTime() - 60 * 1000);
        break;
      case '5m':
        cutoffTime = new Date(now.getTime() - 5 * 60 * 1000);
        break;
      case '15m':
        cutoffTime = new Date(now.getTime() - 15 * 60 * 1000);
        break;
      case '1h':
        cutoffTime = new Date(now.getTime() - 60 * 60 * 1000);
        break;
      case '6h':
        cutoffTime = new Date(now.getTime() - 6 * 60 * 60 * 1000);
        break;
      case '24h':
        cutoffTime = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        break;
      default:
        cutoffTime = new Date(now.getTime() - 60 * 1000);
    }
    
    return this.performanceHistory.filter(snapshot => snapshot.timestamp >= cutoffTime);
  }

  private async generatePerformanceRecommendations(): Promise<OptimizationRecommendation[]> {
    const recommendations: OptimizationRecommendation[] = [];
    const latestSnapshot = this.performanceHistory[this.performanceHistory.length - 1];
    
    if (!latestSnapshot) return recommendations;
    
    // Response time recommendations
    if (latestSnapshot.commandContext.performance.operationTime > this.config.validationThresholds.maxResponseTime) {
      recommendations.push({
        id: this.generateRecommendationId(),
        timestamp: new Date(),
        category: 'performance',
        priority: 'high',
        title: 'High Response Time Detected',
        description: 'Command response time exceeds threshold. Consider optimizing execution path or enabling parallel processing.',
        expectedImprovement: 25,
        implementationComplexity: 'medium',
        autoApplicable: false
      });
    }
    
    return recommendations;
  }

  private async generateMemoryRecommendations(): Promise<OptimizationRecommendation[]> {
    const recommendations: OptimizationRecommendation[] = [];
    const memoryMetrics = await this.collectMemoryPerformanceMetrics();
    
    // Cache hit rate recommendations
    if (memoryMetrics.cacheHitRate < this.config.validationThresholds.minCacheHitRate) {
      recommendations.push({
        id: this.generateRecommendationId(),
        timestamp: new Date(),
        category: 'memory',
        priority: 'medium',
        title: 'Low Cache Hit Rate',
        description: 'Cache hit rate is below threshold. Consider adjusting cache strategy or increasing cache size.',
        expectedImprovement: 30,
        implementationComplexity: 'low',
        autoApplicable: true
      });
    }
    
    return recommendations;
  }

  private async generateRoutingRecommendations(): Promise<OptimizationRecommendation[]> {
    const recommendations: OptimizationRecommendation[] = [];
    
    // Routing efficiency recommendations
    const integrationMetrics = this.contextFlowIntegration.getIntegrationMetrics();
    
    if (integrationMetrics.optimizationRate < 0.8) {
      recommendations.push({
        id: this.generateRecommendationId(),
        timestamp: new Date(),
        category: 'routing',
        priority: 'medium',
        title: 'Suboptimal Routing Efficiency',
        description: 'Command routing optimization rate is below target. Review routing algorithms and agent selection.',
        expectedImprovement: 20,
        implementationComplexity: 'high',
        autoApplicable: false
      });
    }
    
    return recommendations;
  }

  private async generateOptimizationBasedRecommendations(): Promise<OptimizationRecommendation[]> {
    const recommendations: OptimizationRecommendation[] = [];
    const optimizationMetrics = this.contextOptimizer.getOptimizationMetrics();
    
    // Parallel efficiency recommendations
    if (optimizationMetrics.parallelEfficiency < this.config.validationThresholds.minParallelEfficiency) {
      recommendations.push({
        id: this.generateRecommendationId(),
        timestamp: new Date(),
        category: 'optimization',
        priority: 'medium',
        title: 'Low Parallel Efficiency',
        description: 'Parallel processing efficiency is below threshold. Consider optimizing parallel execution strategies.',
        expectedImprovement: 35,
        implementationComplexity: 'medium',
        autoApplicable: true
      });
    }
    
    return recommendations;
  }

  private filterAndPrioritizeRecommendations(recommendations: OptimizationRecommendation[]): OptimizationRecommendation[] {
    // Remove duplicates
    const uniqueRecommendations = recommendations.filter((rec, index, self) =>
      index === self.findIndex(r => r.title === rec.title)
    );
    
    // Sort by priority and expected improvement
    return uniqueRecommendations.sort((a, b) => {
      const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
      
      if (priorityDiff !== 0) return priorityDiff;
      return b.expectedImprovement - a.expectedImprovement;
    });
  }

  private async performHealthChecks(
    systemMetrics: SystemMetrics,
    optimizationMetrics: OptimizationMetrics,
    memoryMetrics: MemoryPerformanceMetrics
  ): Promise<void> {
    // System health checks
    if (systemMetrics.cpuUsage > 0.9) {
      console.warn('High CPU usage detected:', systemMetrics.cpuUsage);
    }
    
    if (systemMetrics.memoryUsage > 0.9) {
      console.warn('High memory usage detected:', systemMetrics.memoryUsage);
    }
    
    // Optimization health checks
    if (optimizationMetrics.cacheHitRate < 0.3) {
      console.warn('Very low cache hit rate:', optimizationMetrics.cacheHitRate);
    }
    
    // Memory health checks
    if (memoryMetrics.errorRate > 0.1) {
      console.warn('High error rate detected:', memoryMetrics.errorRate);
    }
  }

  private updateMonitoringData(
    systemMetrics: SystemMetrics,
    optimizationMetrics: OptimizationMetrics,
    memoryMetrics: MemoryPerformanceMetrics
  ): void {
    // Update internal monitoring data structures
    // This would be more sophisticated in a production implementation
  }

  private maintainHistorySize(): void {
    const maxHistorySize = 1000; // Keep last 1000 snapshots
    if (this.performanceHistory.length > maxHistorySize) {
      this.performanceHistory = this.performanceHistory.slice(-maxHistorySize);
    }
  }

  private maintainValidationHistorySize(): void {
    const maxHistorySize = 5000; // Keep last 5000 validations
    if (this.validationHistory.length > maxHistorySize) {
      this.validationHistory = this.validationHistory.slice(-maxHistorySize);
    }
  }

  private calculateAveragePerformanceScore(): number {
    if (this.performanceHistory.length === 0) return 0;
    
    const totalScore = this.performanceHistory.reduce((sum, snapshot) => sum + snapshot.performanceScore, 0);
    return totalScore / this.performanceHistory.length;
  }

  private calculateValidationFailureRate(): number {
    if (this.validationHistory.length === 0) return 0;
    
    const failures = this.validationHistory.filter(result => !result.passed).length;
    return failures / this.validationHistory.length;
  }

  private getCommonValidationFailures(): string[] {
    const failureCounts: Record<string, number> = {};
    
    this.validationHistory
      .filter(result => !result.passed)
      .forEach(result => {
        failureCounts[result.metric] = (failureCounts[result.metric] || 0) + 1;
      });
    
    return Object.entries(failureCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([metric]) => metric);
  }

  private generateAlertId(): string {
    return `alert-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
  }

  private generateRecommendationId(): string {
    return `rec-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
  }

  /**
   * Get current performance trends
   */
  public getPerformanceTrends(): Map<string, PerformanceTrend> {
    return new Map(this.performanceTrends);
  }

  /**
   * Get active alerts
   */
  public getActiveAlerts(): PerformanceAlert[] {
    return Array.from(this.activeAlerts.values());
  }

  /**
   * Get optimization recommendations
   */
  public getOptimizationRecommendations(): OptimizationRecommendation[] {
    return [...this.optimizationRecommendations];
  }

  /**
   * Resolve alert
   */
  public resolveAlert(alertId: string): void {
    const alert = this.activeAlerts.get(alertId);
    if (alert) {
      alert.resolved = true;
      this.activeAlerts.delete(alertId);
    }
  }

  /**
   * Apply auto-applicable recommendations
   */
  public async applyAutoRecommendations(): Promise<number> {
    const autoRecs = this.optimizationRecommendations.filter(rec => rec.autoApplicable);
    let appliedCount = 0;
    
    for (const rec of autoRecs) {
      try {
        await this.applyRecommendation(rec);
        appliedCount++;
      } catch (error) {
        console.error(`Failed to apply recommendation ${rec.id}:`, error);
      }
    }
    
    return appliedCount;
  }

  private async applyRecommendation(recommendation: OptimizationRecommendation): Promise<void> {
    // Implementation for applying auto-applicable recommendations
    console.log(`Applying recommendation: ${recommendation.title}`);
    
    // This would contain the actual logic to apply the recommendation
    // For now, we'll just log it
  }
}

export default PerformanceMonitoringValidationFramework;