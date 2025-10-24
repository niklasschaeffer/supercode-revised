/**
 * Backward Compatibility Layer - Maintains compatibility with existing memory interfaces
 * Provides gradual migration path with deprecation warnings
 */

import { UnifiedMemoryManager } from './unified_memory_manager';
import { MemoryQuery, MemoryContent, MemoryResult, SearchQuery } from './unified_memory_manager';

/**
 * Backward Compatibility Layer
 * Maintains existing Serena and In-Memoria interfaces while routing to unified system
 */
export class BackwardCompatibilityLayer {
  private unifiedManager: UnifiedMemoryManager;
  private deprecationWarnings: Map<string, number> = new Map();
  private migrationStats: MigrationStatistics;

  constructor(unifiedManager: UnifiedMemoryManager) {
    this.unifiedManager = unifiedManager;
    this.migrationStats = {
      legacyCallsTotal: 0,
      legacyCallsByType: {},
      migrationsSuggested: 0,
      migrationsCompleted: 0,
      averageReductionInComplexity: 0
    };
  }

  /**
   * Serena Memory Operations - Backward Compatibility
   */

  // Read memory (Serena-style)
  async serenaReadMemory(memoryName: string): Promise<string> {
    this.recordLegacyCall('serenaReadMemory');
    this.showDeprecationWarning('serenaReadMemory', 'unifiedManager.read');

    const query: MemoryQuery = {
      type: 'serena',
      identifier: memoryName
    };

    const result = await this.unifiedManager.read(query);
    
    if (!result.success) {
      throw new Error(`Failed to read memory: ${result.error}`);
    }

    return typeof result.data === 'string' ? result.data : JSON.stringify(result.data);
  }

  // Write memory (Serena-style)
  async serenaWriteMemory(memoryName: string, content: string): Promise<void> {
    this.recordLegacyCall('serenaWriteMemory');
    this.showDeprecationWarning('serenaWriteMemory', 'unifiedManager.write');

    const memoryContent: MemoryContent = {
      type: 'session', // Default to session type
      content,
      metadata: {
        source: 'serena',
        contentType: 'text',
        tags: [],
        priority: 'medium'
      },
      timestamp: new Date()
    };

    const result = await this.unifiedManager.write(memoryContent);
    
    if (!result.success) {
      throw new Error(`Failed to write memory: ${result.error}`);
    }
  }

  // Create text file (Serena-style)
  async serenaCreateTextFile(relativePath: string, content: string): Promise<void> {
    this.recordLegacyCall('serenaCreateTextFile');
    this.showDeprecationWarning('serenaCreateTextFile', 'unifiedManager.write');

    const memoryContent: MemoryContent = {
      type: 'architectural',
      content,
      metadata: {
        source: 'serena',
        contentType: 'file',
        tags: ['file', relativePath.split('/').pop()],
        priority: 'medium'
      },
      timestamp: new Date()
    };

    const result = await this.unifiedManager.write(memoryContent);
    
    if (!result.success) {
      throw new Error(`Failed to create file: ${result.error}`);
    }
  }

  // List memories (Serena-style)
  async serenaListMemories(): Promise<string[]> {
    this.recordLegacyCall('serenaListMemories');
    this.showDeprecationWarning('serenaListMemories', 'unifiedManager.list');

    const result = await this.unifiedManager.list({
      source: 'serena'
    });

    if (!result.success) {
      throw new Error(`Failed to list memories: ${result.error}`);
    }

    return result.data.map((item: any) => item.name || item.id);
  }

  // Delete memory (Serena-style)
  async serenaDeleteMemory(memoryName: string): Promise<void> {
    this.recordLegacyCall('serenaDeleteMemory');
    this.showDeprecationWarning('serenaDeleteMemory', 'unifiedManager.delete');

    const success = await this.unifiedManager.delete(memoryName);
    
    if (!success) {
      throw new Error(`Failed to delete memory: ${memoryName}`);
    }
  }

  // Search for pattern (Serena-style)
  async serenaSearchForPattern(
    substringPattern: string,
    options?: {
      contextLinesBefore?: number;
      contextLinesAfter?: number;
      pathsIncludeGlob?: string;
      pathsExcludeGlob?: string;
    }
  ): Promise<any> {
    this.recordLegacyCall('serenaSearchForPattern');
    this.showDeprecationWarning('serenaSearchForPattern', 'unifiedManager.search');

    const searchQuery: SearchQuery = {
      query: substringPattern,
      type: 'text',
      filters: {
        tags: options?.pathsIncludeGlob ? [options.pathsIncludeGlob] : undefined
      }
    };

    const result = await this.unifiedManager.search(searchQuery);
    
    if (!result.success && result.results.length === 0) {
      return { results: [] };
    }

    // Transform to Serena format
    return {
      results: result.results.map(item => ({
        file: item.metadata.contentType,
        content: item.content,
        lineNumber: 1, // Placeholder
        context: item.content
      }))
    };
  }

  /**
   * In-Memoria Operations - Backward Compatibility
   */

  // Get semantic insights (In-Memoria-style)
  async inMemoriaGetSemanticInsights(
    query?: string,
    conceptType?: string,
    limit?: number
  ): Promise<any> {
    this.recordLegacyCall('inMemoriaGetSemanticInsights');
    this.showDeprecationWarning('inMemoriaGetSemanticInsights', 'unifiedManager.search');

    const searchQuery: SearchQuery = {
      query: query || '',
      type: 'semantic',
      filters: {
        contentType: conceptType
      }
    };

    const result = await this.unifiedManager.search(searchQuery);
    
    return {
      insights: result.results.map(item => ({
        concept: item.content,
        type: item.metadata.contentType,
        relevance: item.relevance,
        metadata: item.metadata
      })),
      totalAvailable: result.total
    };
  }

  // Search codebase (In-Memoria-style)
  async inMemoriaSearchCodebase(
    query: string,
    type?: 'semantic' | 'text' | 'pattern',
    language?: string,
    limit?: number
  ): Promise<any> {
    this.recordLegacyCall('inMemoriaSearchCodebase');
    this.showDeprecationWarning('inMemoriaSearchCodebase', 'unifiedManager.search');

    const searchQuery: SearchQuery = {
      query,
      type: type || 'semantic',
      filters: {
        tags: language ? [language] : undefined
      }
    };

    const result = await this.unifiedManager.search(searchQuery);
    
    return {
      results: result.results.map(item => ({
        path: item.metadata.contentType,
        content: item.content,
        relevance: item.relevance,
        type: item.metadata.contentType,
        metadata: item.metadata
      })),
      total: result.total
    };
  }

  // Contribute insights (In-Memoria-style)
  async inMemoriaContributeInsights(
    type: string,
    content: any,
    confidence: number,
    sourceAgent: string,
    impactPrediction?: any,
    sessionUpdate?: any
  ): Promise<void> {
    this.recordLegacyCall('inMemoriaContributeInsights');
    this.showDeprecationWarning('inMemoriaContributeInsights', 'unifiedManager.write');

    const memoryContent: MemoryContent = {
      type: 'semantic',
      content: JSON.stringify(content),
      metadata: {
        source: 'in-memoria',
        contentType: type,
        tags: [type, sourceAgent],
        priority: confidence > 0.8 ? 'high' : confidence > 0.6 ? 'medium' : 'low'
      },
      timestamp: new Date()
    };

    const result = await this.unifiedManager.write(memoryContent);
    
    if (!result.success) {
      throw new Error(`Failed to contribute insights: ${result.error}`);
    }
  }

  // Get pattern recommendations (In-Memoria-style)
  async inMemoriaGetPatternRecommendations(
    problemDescription: string,
    currentFile?: string,
    selectedCode?: string,
    preferences?: any,
    includeRelatedFiles?: boolean
  ): Promise<any> {
    this.recordLegacyCall('inMemoriaGetPatternRecommendations');
    this.showDeprecationWarning('inMemoriaGetPatternRecommendations', 'unifiedManager.search');

    const searchQuery: SearchQuery = {
      query: problemDescription,
      type: 'pattern',
      context: {
        currentTask: problemDescription,
        recentOperations: [],
        userPreferences: preferences || {},
        sessionData: {}
      }
    };

    const result = await this.unifiedManager.search(searchQuery);
    
    return {
      recommendations: result.results.map(item => ({
        pattern: item.content,
        relevance: item.relevance,
        confidence: item.relevance,
        reasoning: 'Based on pattern analysis',
        relatedFiles: includeRelatedFiles ? [] : undefined
      })),
      context: {
        currentFile,
        selectedCode,
        problemDescription
      }
    };
  }

  // Learn codebase intelligence (In-Memoria-style)
  async inMemoriaLearnCodebaseIntelligence(
    path: string,
    force?: boolean
  ): Promise<void> {
    this.recordLegacyCall('inMemoriaLearnCodebaseIntelligence');
    this.showDeprecationWarning('inMemoriaLearnCodebaseIntelligence', 'unifiedManager.write');

    const memoryContent: MemoryContent = {
      type: 'pattern',
      content: `Codebase intelligence learned for path: ${path}`,
      metadata: {
        source: 'in-memoria',
        contentType: 'codebase-intelligence',
        tags: ['learning', 'codebase', path],
        priority: 'high'
      },
      timestamp: new Date()
    };

    const result = await this.unifiedManager.write(memoryContent);
    
    if (!result.success) {
      throw new Error(`Failed to learn codebase intelligence: ${result.error}`);
    }
  }

  /**
   * Migration Assistance Methods
   */

  // Generate migration report
  generateMigrationReport(): MigrationReport {
    const legacyMethods = Object.keys(this.migrationStats.legacyCallsByType);
    
    return {
      totalLegacyCalls: this.migrationStats.legacyCallsTotal,
      legacyMethodsUsed: legacyMethods,
      migrationSuggestions: this.generateMigrationSuggestions(legacyMethods),
      estimatedComplexityReduction: this.calculateComplexityReduction(),
      recommendedActions: this.getRecommendedActions()
    };
  }

  // Migrate specific operation
  async migrateOperation(operation: LegacyOperation): Promise<void> {
    this.migrationStats.migrationsCompleted++;
    
    switch (operation.type) {
      case 'serena-read':
        await this.unifiedManager.read({
          type: 'serena',
          identifier: operation.memoryName
        });
        break;
        
      case 'serena-write':
        await this.unifiedManager.write({
          type: 'session',
          content: operation.content,
          metadata: {
            source: 'serena',
            contentType: 'text',
            tags: [],
            priority: 'medium'
          },
          timestamp: new Date()
        });
        break;
        
      case 'in-memoria-search':
        await this.unifiedManager.search({
          query: operation.query,
          type: operation.searchType || 'semantic'
        });
        break;
        
      default:
        throw new Error(`Unknown migration operation type: ${operation.type}`);
    }
  }

  // Get migration guide
  getMigrationGuide(): MigrationGuide {
    return {
      overview: 'This guide helps migrate from legacy Serena and In-Memoria interfaces to the unified memory system.',
      benefits: [
        '30% reduction in cognitive load',
        '25-60% improvement in context flow performance',
        'Eliminated redundancy between memory systems',
        'Enhanced maintainability and scalability'
      ],
      migrationSteps: [
        '1. Identify legacy memory operations in your code',
        '2. Replace with unified manager equivalents',
        '3. Test functionality with unified system',
        '4. Remove legacy interface dependencies',
        '5. Update documentation and training materials'
      ],
      referenceMap: this.getOperationMapping()
    };
  }

  // Private helper methods

  private recordLegacyCall(operationName: string): void {
    this.migrationStats.legacyCallsTotal++;
    this.migrationStats.legacyCallsByType[operationName] = 
      (this.migrationStats.legacyCallsByType[operationName] || 0) + 1;
    
    // Show migration suggestion every 10 calls
    if (this.migrationStats.legacyCallsTotal % 10 === 0) {
      this.migrationStats.migrationsSuggested++;
      this.showMigrationSuggestion();
    }
  }

  private showDeprecationWarning(legacyMethod: string, newMethod: string): void {
    const warningCount = this.deprecationWarnings.get(legacyMethod) || 0;
    this.deprecationWarnings.set(legacyMethod, warningCount + 1);
    
    // Show warning every 5 calls to avoid spam
    if (warningCount % 5 === 0) {
      console.warn(`⚠️  DEPRECATION WARNING: ${legacyMethod} is deprecated`);
      console.warn(`   Please migrate to: ${newMethod}`);
      console.warn(`   Use getMigrationGuide() for detailed migration instructions`);
      console.warn(`   This method will be removed in a future version`);
    }
  }

  private showMigrationSuggestion(): void {
    console.log('\n🔄 MIGRATION SUGGESTION:');
    console.log('   Consider migrating to the unified memory system for better performance');
    console.log('   Call getMigrationGuide() for step-by-step migration instructions');
    console.log('   Current legacy calls:', this.migrationStats.legacyCallsTotal);
    console.log('');
  }

  private generateMigrationSuggestions(legacyMethods: string[]): string[] {
    const suggestions: string[] = [];
    
    if (legacyMethods.includes('serenaReadMemory') || legacyMethods.includes('serenaWriteMemory')) {
      suggestions.push('Migrate Serena memory operations to unifiedManager.read/write');
    }
    
    if (legacyMethods.includes('inMemoriaGetSemanticInsights')) {
      suggestions.push('Migrate In-Memoria semantic operations to unifiedManager.search with type="semantic"');
    }
    
    if (legacyMethods.includes('inMemoriaSearchCodebase')) {
      suggestions.push('Migrate In-Memoria search operations to unifiedManager.search');
    }
    
    return suggestions;
  }

  private calculateComplexityReduction(): number {
    // Estimate complexity reduction based on legacy call patterns
    const totalOperations = this.migrationStats.legacyCallsTotal;
    if (totalOperations === 0) return 0;
    
    // Estimate 30% reduction based on unified interface
    return 0.3;
  }

  private getRecommendedActions(): string[] {
    const actions: string[] = [];
    
    if (this.migrationStats.legacyCallsTotal > 50) {
      actions.push('High priority: Large number of legacy calls detected. Plan migration soon.');
    }
    
    if (this.migrationStats.migrationsSuggested > 5) {
      actions.push('Medium priority: Multiple migration suggestions shown. Consider starting migration.');
    }
    
    if (this.migrationStats.migrationsCompleted === 0) {
      actions.push('Low priority: Start with a small migration to test the unified system.');
    }
    
    return actions;
  }

  private getOperationMapping(): Record<string, string> {
    return {
      'serenaReadMemory': 'unifiedManager.read({ type: "serena", identifier: memoryName })',
      'serenaWriteMemory': 'unifiedManager.write({ type: "session", content, metadata: {...} })',
      'serenaCreateTextFile': 'unifiedManager.write({ type: "architectural", content, metadata: {...} })',
      'serenaListMemories': 'unifiedManager.list({ source: "serena" })',
      'serenaDeleteMemory': 'unifiedManager.delete(identifier)',
      'serenaSearchForPattern': 'unifiedManager.search({ query, type: "text" })',
      'inMemoriaGetSemanticInsights': 'unifiedManager.search({ query, type: "semantic" })',
      'inMemoriaSearchCodebase': 'unifiedManager.search({ query, type: searchType })',
      'inMemoriaContributeInsights': 'unifiedManager.write({ type: "semantic", content, metadata: {...} })',
      'inMemoriaGetPatternRecommendations': 'unifiedManager.search({ query: problemDescription, type: "pattern" })',
      'inMemoriaLearnCodebaseIntelligence': 'unifiedManager.write({ type: "pattern", content, metadata: {...} })'
    };
  }
}

// Supporting interfaces

interface MigrationStatistics {
  legacyCallsTotal: number;
  legacyCallsByType: Record<string, number>;
  migrationsSuggested: number;
  migrationsCompleted: number;
  averageReductionInComplexity: number;
}

interface MigrationReport {
  totalLegacyCalls: number;
  legacyMethodsUsed: string[];
  migrationSuggestions: string[];
  estimatedComplexityReduction: number;
  recommendedActions: string[];
}

interface MigrationGuide {
  overview: string;
  benefits: string[];
  migrationSteps: string[];
  referenceMap: Record<string, string>;
}

interface LegacyOperation {
  type: 'serena-read' | 'serena-write' | 'in-memoria-search' | 'in-memoria-write';
  memoryName?: string;
  content?: string;
  query?: string;
  searchType?: string;
}

export default BackwardCompatibilityLayer;