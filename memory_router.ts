/**
 * Memory Router - Intelligent routing for memory operations
 * Directs operations to optimal memory system based on content type and use case
 */

import { MemoryQuery, MemoryContent, MemoryFilters, SearchQuery, WorkContext } from './unified_memory_manager';

export type MemorySystem = 'serena' | 'in-memoria' | 'hybrid' | 'unified';

export interface RoutingRule {
  contentType: string;
  primarySystem: MemorySystem;
  fallbackSystem?: MemorySystem;
  conditions?: RoutingCondition[];
  priority: number;
}

export interface RoutingCondition {
  type: 'content-size' | 'access-pattern' | 'user-preference' | 'session-context';
  operator: 'greater-than' | 'less-than' | 'equals' | 'contains';
  value: any;
}

export interface RoutingDecision {
  selectedSystem: MemorySystem;
  reasoning: string;
  confidence: number;
  alternatives: MemorySystem[];
}

/**
 * Memory Router - Intelligent routing logic
 */
export class MemoryRouter {
  private routingRules: Map<string, RoutingRule> = new Map();
  private accessPatterns: Map<string, AccessPattern> = new Map();
  private performanceMetrics: Map<string, PerformanceData> = new Map();

  constructor() {
    this.initializeRoutingRules();
    this.loadAccessPatterns();
    this.initializePerformanceMetrics();
  }

  /**
   * Route read operations to optimal system
   */
  async routeRead(query: MemoryQuery): Promise<MemorySystem> {
    const decision = await this.analyzeReadRequest(query);
    
    // Update access patterns
    this.updateAccessPattern('read', query.type || 'unified', decision.selectedSystem);
    
    return decision.selectedSystem;
  }

  /**
   * Route write operations to optimal system
   */
  async routeWrite(content: MemoryContent): Promise<MemorySystem> {
    const decision = await this.analyzeWriteRequest(content);
    
    // Update access patterns
    this.updateAccessPattern('write', content.type, decision.selectedSystem);
    
    return decision.selectedSystem;
  }

  /**
   * Route list operations to optimal system
   */
  async routeList(filters: MemoryFilters): Promise<MemorySystem> {
    const decision = await this.analyzeListRequest(filters);
    
    // Update access patterns
    this.updateAccessPattern('list', 'filtered', decision.selectedSystem);
    
    return decision.selectedSystem;
  }

  /**
   * Determine search strategy
   */
  async determineSearchStrategy(query: SearchQuery): Promise<MemorySystem> {
    const decision = await this.analyzeSearchRequest(query);
    
    // Update access patterns
    this.updateAccessPattern('search', query.type, decision.selectedSystem);
    
    return decision.selectedSystem;
  }

  /**
   * Find all locations for a memory identifier
   */
  async findLocations(identifier: string): Promise<MemorySystem[]> {
    const locations: MemorySystem[] = [];
    
    // Check Serena
    if (await this.checkSerenaLocation(identifier)) {
      locations.push('serena');
    }
    
    // Check In-Memoria
    if (await this.checkInMemoriaLocation(identifier)) {
      locations.push('in-memoria');
    }
    
    return locations;
  }

  /**
   * Get routing statistics
   */
  getRoutingStatistics(): RoutingStatistics {
    const stats: RoutingStatistics = {
      totalRoutings: 0,
      systemUsage: {
        serena: 0,
        'in-memoria': 0,
        hybrid: 0,
        unified: 0
      },
      averageConfidence: 0,
      routingEfficiency: 0
    };

    // Calculate statistics from performance metrics
    this.performanceMetrics.forEach((data, key) => {
      stats.totalRoutings += data.count;
      stats.systemUsage[data.selectedSystem] += data.count;
    });

    // Calculate average confidence
    const totalConfidence = Array.from(this.performanceMetrics.values())
      .reduce((sum, data) => sum + data.confidence, 0);
    stats.averageConfidence = stats.totalRoutings > 0 ? totalConfidence / stats.totalRoutings : 0;

    // Calculate routing efficiency (higher confidence = better routing)
    stats.routingEfficiency = stats.averageConfidence;

    return stats;
  }

  // Private methods

  private initializeRoutingRules(): void {
    // Session context routing
    this.routingRules.set('session-context', {
      contentType: 'session',
      primarySystem: 'serena',
      fallbackSystem: 'in-memoria',
      conditions: [
        { type: 'session-context', operator: 'contains', value: 'session' }
      ],
      priority: 1
    });

    // Project intelligence routing
    this.routingRules.set('project-intelligence', {
      contentType: 'project',
      primarySystem: 'in-memoria',
      fallbackSystem: 'serena',
      conditions: [
        { type: 'access-pattern', operator: 'contains', value: 'semantic-analysis' }
      ],
      priority: 2
    });

    // Architectural decisions routing
    this.routingRules.set('architectural-decisions', {
      contentType: 'architectural',
      primarySystem: 'serena',
      fallbackSystem: 'in-memoria',
      conditions: [
        { type: 'content-size', operator: 'greater-than', value: 1000 }
      ],
      priority: 3
    });

    // Code patterns routing
    this.routingRules.set('code-patterns', {
      contentType: 'pattern',
      primarySystem: 'in-memoria',
      fallbackSystem: 'serena',
      conditions: [
        { type: 'access-pattern', operator: 'contains', value: 'pattern-recognition' }
      ],
      priority: 4
    });

    // Semantic search routing
    this.routingRules.set('semantic-search', {
      contentType: 'semantic',
      primarySystem: 'in-memoria',
      fallbackSystem: 'serena',
      priority: 5
    });

    // Structured documentation routing
    this.routingRules.set('structured-documentation', {
      contentType: 'architectural',
      primarySystem: 'serena',
      fallbackSystem: 'in-memoria',
      conditions: [
        { type: 'content-size', operator: 'less-than', value: 5000 }
      ],
      priority: 6
    });

    // Default hybrid routing
    this.routingRules.set('default-hybrid', {
      contentType: 'unified',
      primarySystem: 'hybrid',
      priority: 10
    });
  }

  private loadAccessPatterns(): void {
    // Load historical access patterns
    // This would typically load from persistent storage
    this.accessPatterns.set('read-session', {
      operation: 'read',
      contentType: 'session',
      preferredSystem: 'serena',
      frequency: 0.8,
      lastAccess: new Date()
    });

    this.accessPatterns.set('read-pattern', {
      operation: 'read',
      contentType: 'pattern',
      preferredSystem: 'in-memoria',
      frequency: 0.9,
      lastAccess: new Date()
    });

    this.accessPatterns.set('search-semantic', {
      operation: 'search',
      contentType: 'semantic',
      preferredSystem: 'in-memoria',
      frequency: 0.85,
      lastAccess: new Date()
    });
  }

  private initializePerformanceMetrics(): void {
    // Initialize performance tracking
    this.performanceMetrics.set('serena-read', {
      selectedSystem: 'serena',
      count: 0,
      confidence: 0,
      averageResponseTime: 0
    });

    this.performanceMetrics.set('in-memoria-read', {
      selectedSystem: 'in-memoria',
      count: 0,
      confidence: 0,
      averageResponseTime: 0
    });

    this.performanceMetrics.set('hybrid-read', {
      selectedSystem: 'hybrid',
      count: 0,
      confidence: 0,
      averageResponseTime: 0
    });
  }

  private async analyzeReadRequest(query: MemoryQuery): Promise<RoutingDecision> {
    const contentType = query.type || 'unified';
    const rule = this.routingRules.get(contentType) || this.routingRules.get('default-hybrid')!;

    // Check conditions
    const conditionsMet = rule.conditions ? 
      await this.evaluateConditions(rule.conditions, query) : true;

    // Check access patterns
    const accessPattern = this.accessPatterns.get(`read-${contentType}`);
    const patternPreference = accessPattern ? accessPattern.preferredSystem : null;

    // Check performance metrics
    const performanceData = this.getPerformanceData(rule.primarySystem);
    const fallbackData = rule.fallbackSystem ? this.getPerformanceData(rule.fallbackSystem) : null;

    // Make decision
    let selectedSystem: MemorySystem;
    let reasoning: string;
    let confidence: number;

    if (patternPreference && accessPattern!.frequency > 0.7) {
      selectedSystem = patternPreference;
      reasoning = `Based on access pattern (frequency: ${accessPattern!.frequency})`;
      confidence = 0.8;
    } else if (conditionsMet && performanceData.averageResponseTime < 100) {
      selectedSystem = rule.primarySystem;
      reasoning = `Routing rule matched and performance acceptable (${performanceData.averageResponseTime}ms)`;
      confidence = 0.9;
    } else if (fallbackData && fallbackData.averageResponseTime < performanceData.averageResponseTime) {
      selectedSystem = rule.fallbackSystem!;
      reasoning = `Fallback system has better performance (${fallbackData.averageResponseTime}ms vs ${performanceData.averageResponseTime}ms)`;
      confidence = 0.7;
    } else {
      selectedSystem = rule.primarySystem;
      reasoning = 'Default routing rule applied';
      confidence = 0.6;
    }

    // Special case for semantic search
    if (query.content && this.isSemanticQuery(query.content)) {
      selectedSystem = 'in-memoria';
      reasoning = 'Semantic query detected, using In-Memoria for better semantic understanding';
      confidence = 0.85;
    }

    return {
      selectedSystem,
      reasoning,
      confidence,
      alternatives: this.getAlternatives(selectedSystem, rule)
    };
  }

  private async analyzeWriteRequest(content: MemoryContent): Promise<RoutingDecision> {
    const rule = this.routingRules.get(content.type) || this.routingRules.get('default-hybrid')!;

    // Check content characteristics
    const contentCharacteristics = this.analyzeContentCharacteristics(content);
    
    // Check conditions
    const conditionsMet = rule.conditions ? 
      await this.evaluateConditions(rule.conditions, content) : true;

    // Make decision
    let selectedSystem: MemorySystem;
    let reasoning: string;
    let confidence: number;

    if (content.type === 'session' || content.type === 'architectural') {
      selectedSystem = 'serena';
      reasoning = `${content.type} content best stored in Serena for structured organization`;
      confidence = 0.9;
    } else if (content.type === 'pattern' || content.type === 'semantic') {
      selectedSystem = 'in-memoria';
      reasoning = `${content.type} content best stored in In-Memoria for pattern recognition`;
      confidence = 0.9;
    } else if (contentCharacteristics.isLargeDocument) {
      selectedSystem = 'serena';
      reasoning = 'Large document better handled by Serena\'s structured storage';
      confidence = 0.8;
    } else if (contentCharacteristics.hasCodePatterns) {
      selectedSystem = 'in-memoria';
      reasoning = 'Code patterns better stored in In-Memoria for pattern analysis';
      confidence = 0.85;
    } else {
      selectedSystem = rule.primarySystem;
      reasoning = 'Default routing rule applied';
      confidence = 0.7;
    }

    return {
      selectedSystem,
      reasoning,
      confidence,
      alternatives: this.getAlternatives(selectedSystem, rule)
    };
  }

  private async analyzeListRequest(filters: MemoryFilters): Promise<RoutingDecision> {
    // Analyze filter complexity
    const filterComplexity = this.analyzeFilterComplexity(filters);
    
    let selectedSystem: MemorySystem;
    let reasoning: string;
    let confidence: number;

    if (filters.contentType === 'pattern' || filters.contentType === 'semantic') {
      selectedSystem = 'in-memoria';
      reasoning = 'Pattern/semantic content filtering optimized in In-Memoria';
      confidence = 0.9;
    } else if (filters.contentType === 'session' || filters.contentType === 'architectural') {
      selectedSystem = 'serena';
      reasoning = 'Session/architectural content filtering optimized in Serena';
      confidence = 0.9;
    } else if (filterComplexity.isComplex) {
      selectedSystem = 'hybrid';
      reasoning = 'Complex filters benefit from hybrid approach';
      confidence = 0.8;
    } else if (filters.tags && filters.tags.length > 0) {
      selectedSystem = 'in-memoria';
      reasoning = 'Tag-based filtering optimized in In-Memoria';
      confidence = 0.85;
    } else {
      selectedSystem = 'hybrid';
      reasoning = 'Default to hybrid for comprehensive results';
      confidence = 0.7;
    }

    return {
      selectedSystem,
      reasoning,
      confidence,
      alternatives: ['serena', 'in-memoria', 'hybrid']
    };
  }

  private async analyzeSearchRequest(query: SearchQuery): Promise<RoutingDecision> {
    let selectedSystem: MemorySystem;
    let reasoning: string;
    let confidence: number;

    if (query.type === 'semantic' || query.type === 'pattern') {
      selectedSystem = 'in-memoria';
      reasoning = `${query.type} search optimized in In-Memoria`;
      confidence = 0.95;
    } else if (query.type === 'text' && this.isSimpleTextSearch(query.query)) {
      selectedSystem = 'serena';
      reasoning = 'Simple text search efficient in Serena';
      confidence = 0.8;
    } else if (query.type === 'hybrid' || this.isComplexQuery(query.query)) {
      selectedSystem = 'hybrid';
      reasoning = 'Complex query benefits from hybrid search capabilities';
      confidence = 0.9;
    } else {
      selectedSystem = 'in-memoria';
      reasoning = 'Default to In-Memoria for advanced search capabilities';
      confidence = 0.75;
    }

    return {
      selectedSystem,
      reasoning,
      confidence,
      alternatives: ['serena', 'in-memoria', 'hybrid']
    };
  }

  private async evaluateConditions(conditions: RoutingCondition[], context: any): Promise<boolean> {
    return conditions.every(condition => {
      switch (condition.type) {
        case 'content-size':
          const contentSize = context.content?.length || 0;
          return this.compareValues(contentSize, condition.operator, condition.value);
        
        case 'access-pattern':
          // This would check access pattern history
          return true; // Simplified for now
        
        case 'user-preference':
          // This would check user preferences
          return true; // Simplified for now
        
        case 'session-context':
          const hasSessionContext = context.context?.sessionData || false;
          return this.compareValues(hasSessionContext, condition.operator, condition.value);
        
        default:
          return true;
      }
    });
  }

  private compareValues(actual: any, operator: string, expected: any): boolean {
    switch (operator) {
      case 'greater-than':
        return actual > expected;
      case 'less-than':
        return actual < expected;
      case 'equals':
        return actual === expected;
      case 'contains':
        return actual && actual.includes && actual.includes(expected);
      default:
        return false;
    }
  }

  private analyzeContentCharacteristics(content: MemoryContent): ContentCharacteristics {
    const isLargeDocument = content.content.length > 5000;
    const hasCodePatterns = /function|class|interface|import|export/.test(content.content);
    const hasSemanticStructure = /#{1,6}\s+|```|\*\*|_/.test(content.content);

    return {
      isLargeDocument,
      hasCodePatterns,
      hasSemanticStructure,
      complexity: this.calculateContentComplexity(content.content)
    };
  }

  private calculateContentComplexity(content: string): number {
    // Simple complexity calculation based on various factors
    let complexity = 0;
    
    // Length factor
    complexity += Math.min(content.length / 1000, 5);
    
    // Code factor
    complexity += (content.match(/function|class|interface/g) || []).length * 0.5;
    
    // Structure factor
    complexity += (content.match(/#{1,6}\s+|```|\*\*|_/g) || []).length * 0.2;
    
    return complexity;
  }

  private analyzeFilterComplexity(filters: MemoryFilters): FilterComplexity {
    const filterCount = Object.keys(filters).length;
    const hasComplexFilters = filters.dateRange || (filters.tags && filters.tags.length > 2);
    
    return {
      isComplex: filterCount > 2 || hasComplexFilters,
      filterCount,
      hasDateRange: !!filters.dateRange,
      hasMultipleTags: (filters.tags?.length || 0) > 2
    };
  }

  private isSemanticQuery(query: string): boolean {
    const semanticKeywords = ['what', 'how', 'why', 'explain', 'analyze', 'compare', 'relationship'];
    return semanticKeywords.some(keyword => query.toLowerCase().includes(keyword));
  }

  private isSimpleTextSearch(query: string): boolean {
    // Simple text searches are typically short and don't contain semantic keywords
    return query.length < 50 && !this.isSemanticQuery(query) && !this.isComplexQuery(query);
  }

  private isComplexQuery(query: string): boolean {
    const complexIndicators = ['AND', 'OR', 'NOT', '(', ')', '"', '*', '?'];
    return complexIndicators.some(indicator => query.includes(indicator));
  }

  private updateAccessPattern(operation: string, contentType: string, selectedSystem: MemorySystem): void {
    const key = `${operation}-${contentType}`;
    const existing = this.accessPatterns.get(key);
    
    if (existing) {
      existing.frequency = Math.min(existing.frequency + 0.1, 1.0);
      existing.lastAccess = new Date();
      if (existing.preferredSystem !== selectedSystem) {
        existing.preferredSystem = selectedSystem;
        existing.frequency = 0.5; // Reset frequency when preference changes
      }
    } else {
      this.accessPatterns.set(key, {
        operation,
        contentType,
        preferredSystem: selectedSystem,
        frequency: 0.1,
        lastAccess: new Date()
      });
    }
  }

  private getPerformanceData(system: MemorySystem): PerformanceData {
    const key = `${system}-read`;
    return this.performanceMetrics.get(key) || {
      selectedSystem: system,
      count: 0,
      confidence: 0,
      averageResponseTime: 1000 // Default high response time
    };
  }

  private getAlternatives(selectedSystem: MemorySystem, rule: RoutingRule): MemorySystem[] {
    const alternatives: MemorySystem[] = [];
    
    if (rule.fallbackSystem && rule.fallbackSystem !== selectedSystem) {
      alternatives.push(rule.fallbackSystem);
    }
    
    if (selectedSystem !== 'hybrid') {
      alternatives.push('hybrid');
    }
    
    ['serena', 'in-memoria'].forEach(system => {
      if (system !== selectedSystem && !alternatives.includes(system as MemorySystem)) {
        alternatives.push(system as MemorySystem);
      }
    });
    
    return alternatives.slice(0, 2); // Limit to 2 alternatives
  }

  private async checkSerenaLocation(identifier: string): Promise<boolean> {
    // This would actually check Serena for the identifier
    // For now, return a placeholder
    return false;
  }

  private async checkInMemoriaLocation(identifier: string): Promise<boolean> {
    // This would actually check In-Memoria for the identifier
    // For now, return a placeholder
    return false;
  }
}

// Supporting interfaces

interface AccessPattern {
  operation: string;
  contentType: string;
  preferredSystem: MemorySystem;
  frequency: number;
  lastAccess: Date;
}

interface PerformanceData {
  selectedSystem: MemorySystem;
  count: number;
  confidence: number;
  averageResponseTime: number;
}

interface ContentCharacteristics {
  isLargeDocument: boolean;
  hasCodePatterns: boolean;
  hasSemanticStructure: boolean;
  complexity: number;
}

interface FilterComplexity {
  isComplex: boolean;
  filterCount: number;
  hasDateRange: boolean;
  hasMultipleTags: boolean;
}

interface RoutingStatistics {
  totalRoutings: number;
  systemUsage: Record<string, number>;
  averageConfidence: number;
  routingEfficiency: number;
}

export default MemoryRouter;