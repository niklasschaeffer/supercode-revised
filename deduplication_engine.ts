/**
 * Deduplication Engine - Eliminates redundant memory content across systems
 * Provides intelligent content hashing, similarity detection, and smart merging
 */

import { MemoryContent, MemoryMetadata } from './unified_memory_manager';

export interface DeduplicationResult {
  isDuplicate: boolean;
  existingContent?: any;
  existingId?: string;
  existingSystem?: string;
  similarity?: number;
  mergeStrategy?: MergeStrategy;
  metadata?: MemoryMetadata;
}

export interface ContentHash {
  algorithm: string;
  value: string;
  metadata: HashMetadata;
}

export interface HashMetadata {
  contentType: string;
  size: number;
  created: Date;
  version: string;
}

export interface SimilarityResult {
  score: number;
  commonElements: string[];
  differences: string[];
  confidence: number;
}

export interface MergeStrategy {
  type: 'replace' | 'merge' | 'append' | 'conflict-resolution';
  reasoning: string;
  confidence: number;
  steps: MergeStep[];
}

export interface MergeStep {
  action: string;
  source: 'existing' | 'new' | 'merged';
  content: string;
  reasoning: string;
}

export interface ContentSignature {
  hash: string;
  contentType: string;
  keyPhrases: string[];
  structure: ContentStructure;
  semanticFingerprint: string;
}

export interface ContentStructure {
  headings: string[];
  codeBlocks: number;
  lists: number;
  tables: number;
  links: number;
  complexity: number;
}

/**
 * Deduplication Engine - Advanced content deduplication
 */
export class DeduplicationEngine {
  private contentIndex: Map<string, ContentIndex> = new Map();
  private similarityCache: Map<string, SimilarityResult> = new Map();
  private hashIndex: Map<string, HashReference> = new Map();
  private deduplicationMetrics: DeduplicationMetrics;

  constructor() {
    this.deduplicationMetrics = {
      totalChecks: 0,
      duplicatesFound: 0,
      mergesPerformed: 0,
      spaceSaved: 0,
      averageCheckTime: 0
    };
  }

  /**
   * Check if content is duplicate
   */
  async check(content: MemoryContent): Promise<DeduplicationResult> {
    const startTime = Date.now();
    
    try {
      // 1. Generate content hash
      const contentHash = await this.generateContentHash(content);
      
      // 2. Check exact hash matches
      const exactMatch = this.hashIndex.get(contentHash.value);
      if (exactMatch) {
        this.updateMetrics('exact-duplicate', Date.now() - startTime);
        return {
          isDuplicate: true,
          existingContent: exactMatch.content,
          existingId: exactMatch.id,
          existingSystem: exactMatch.system,
          similarity: 1.0,
          mergeStrategy: {
            type: 'replace',
            reasoning: 'Exact content match found',
            confidence: 1.0,
            steps: []
          }
        };
      }

      // 3. Generate content signature
      const signature = await this.generateContentSignature(content);
      
      // 4. Check for similar content
      const similarContent = await this.findSimilarContent(signature);
      
      if (similarContent.length > 0) {
        const bestMatch = similarContent[0]; // Most similar
        const similarity = await this.calculateSimilarity(content, bestMatch.content);
        
        if (similarity.score > 0.8) {
          const mergeStrategy = await this.determineMergeStrategy(content, bestMatch.content, similarity);
          
          this.updateMetrics('similar-duplicate', Date.now() - startTime);
          return {
            isDuplicate: true,
            existingContent: bestMatch.content,
            existingId: bestMatch.id,
            existingSystem: bestMatch.system,
            similarity: similarity.score,
            mergeStrategy,
            metadata: bestMatch.metadata
          };
        }
      }

      // 5. No duplicate found - index new content
      await this.indexContent(content, contentHash, signature);
      
      this.updateMetrics('no-duplicate', Date.now() - startTime);
      return {
        isDuplicate: false
      };

    } catch (error) {
      this.updateMetrics('error', Date.now() - startTime);
      throw error;
    }
  }

  /**
   * Find similar content
   */
  async findSimilarContent(signature: ContentSignature): Promise<ContentIndex[]> {
    const similarContent: ContentIndex[] = [];
    
    // Search through content index for similar signatures
    this.contentIndex.forEach((index, id) => {
      if (this.isSignatureSimilar(signature, index.signature)) {
        similarContent.push({
          id,
          content: index.content,
          system: index.system,
          signature: index.signature,
          metadata: index.metadata
        });
      }
    });

    // Sort by similarity score
    return similarContent.sort((a, b) => 
      this.calculateSignatureSimilarity(signature, a.signature) - 
      this.calculateSignatureSimilarity(signature, b.signature)
    );
  }

  /**
   * Calculate similarity between two content pieces
   */
  async calculateSimilarity(content1: MemoryContent, content2: MemoryContent): Promise<SimilarityResult> {
    const cacheKey = this.generateSimilarityCacheKey(content1, content2);
    
    // Check cache first
    const cached = this.similarityCache.get(cacheKey);
    if (cached) {
      return cached;
    }

    // Calculate similarity using multiple factors
    const textSimilarity = this.calculateTextSimilarity(content1.content, content2.content);
    const structuralSimilarity = this.calculateStructuralSimilarity(content1.content, content2.content);
    const semanticSimilarity = await this.calculateSemanticSimilarity(content1.content, content2.content);
    
    // Weighted combination
    const overallSimilarity = (
      textSimilarity * 0.4 +
      structuralSimilarity * 0.3 +
      semanticSimilarity * 0.3
    );

    const commonElements = this.findCommonElements(content1.content, content2.content);
    const differences = this.findDifferences(content1.content, content2.content);

    const result: SimilarityResult = {
      score: overallSimilarity,
      commonElements,
      differences,
      confidence: this.calculateSimilarityConfidence(textSimilarity, structuralSimilarity, semanticSimilarity)
    };

    // Cache result
    this.similarityCache.set(cacheKey, result);

    return result;
  }

  /**
   * Determine merge strategy for duplicate content
   */
  async determineMergeStrategy(
    existingContent: MemoryContent, 
    newContent: MemoryContent, 
    similarity: SimilarityResult
  ): Promise<MergeStrategy> {
    // High similarity (>0.9) - replace if newer
    if (similarity.score > 0.9) {
      if (newContent.timestamp > existingContent.timestamp) {
        return {
          type: 'replace',
          reasoning: 'High similarity with newer content',
          confidence: 0.95,
          steps: [{
            action: 'replace',
            source: 'new',
            content: newContent.content,
            reasoning: 'Newer content replaces older duplicate'
          }]
        };
      } else {
        return {
          type: 'replace',
          reasoning: 'High similarity but existing content is newer',
          confidence: 0.95,
          steps: []
        };
      }
    }

    // Medium similarity (0.7-0.9) - merge intelligently
    if (similarity.score > 0.7) {
      const mergeSteps = await this.generateMergeSteps(existingContent, newContent, similarity);
      
      return {
        type: 'merge',
        reasoning: `Medium similarity (${similarity.score.toFixed(2)}) - intelligent merge recommended`,
        confidence: 0.8,
        steps: mergeSteps
      };
    }

    // Lower similarity (0.5-0.7) - append with note
    if (similarity.score > 0.5) {
      return {
        type: 'append',
        reasoning: `Some similarity (${similarity.score.toFixed(2)}) - append as related content`,
        confidence: 0.6,
        steps: [{
          action: 'append',
          source: 'new',
          content: newContent.content,
          reasoning: 'Related but distinct content'
        }]
      };
    }

    // Low similarity - keep separate
    return {
      type: 'conflict-resolution',
      reasoning: 'Low similarity - manual review recommended',
      confidence: 0.3,
      steps: []
    };
  }

  /**
   * Clean up dependencies when content is deleted
   */
  async cleanupDependencies(identifier: string): Promise<void> {
    // Remove from content index
    this.contentIndex.delete(identifier);
    
    // Remove from hash index
    const hashEntriesToRemove: string[] = [];
    this.hashIndex.forEach((ref, hash) => {
      if (ref.id === identifier) {
        hashEntriesToRemove.push(hash);
      }
    });
    
    hashEntriesToRemove.forEach(hash => this.hashIndex.delete(hash));
    
    // Clean up similarity cache
    const cacheEntriesToRemove: string[] = [];
    this.similarityCache.forEach((result, key) => {
      if (key.includes(identifier)) {
        cacheEntriesToRemove.push(key);
      }
    });
    
    cacheEntriesToRemove.forEach(key => this.similarityCache.delete(key));
  }

  /**
   * Get deduplication metrics
   */
  getDeduplicationMetrics(): DeduplicationMetrics {
    return { ...this.deduplicationMetrics };
  }

  // Private methods

  private async generateContentHash(content: MemoryContent): Promise<ContentHash> {
    // Use a combination of content hash and metadata hash
    const contentString = JSON.stringify({
      content: content.content,
      type: content.type,
      contentType: content.metadata.contentType
    });

    // Generate hash (simplified - would use crypto in production)
    const hash = await this.simpleHash(contentString);
    
    return {
      algorithm: 'sha256',
      value: hash,
      metadata: {
        contentType: content.type,
        size: content.content.length,
        created: content.timestamp,
        version: '1.0'
      }
    };
  }

  private async generateContentSignature(content: MemoryContent): Promise<ContentSignature> {
    const hash = await this.generateContentHash(content);
    const keyPhrases = this.extractKeyPhrases(content.content);
    const structure = this.analyzeStructure(content.content);
    const semanticFingerprint = await this.generateSemanticFingerprint(content.content);

    return {
      hash: hash.value,
      contentType: content.type,
      keyPhrases,
      structure,
      semanticFingerprint
    };
  }

  private async simpleHash(content: string): Promise<string> {
    // Simple hash function (would use crypto in production)
    let hash = 0;
    for (let i = 0; i < content.length; i++) {
      const char = content.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(16);
  }

  private extractKeyPhrases(content: string): string[] {
    // Extract key phrases using simple heuristics
    const phrases: string[] = [];
    
    // Extract headings
    const headingMatches = content.match(/^#{1,6}\s+(.+)$/gm);
    if (headingMatches) {
      phrases.push(...headingMatches.map(h => h.replace(/^#{1,6}\s+/, '').trim()));
    }
    
    // Extract code function names
    const functionMatches = content.match(/(?:function|class|interface)\s+(\w+)/g);
    if (functionMatches) {
      phrases.push(...functionMatches.map(f => f.split(/\s+/)[1]));
    }
    
    // Extract important terms (simple heuristic)
    const words = content.toLowerCase().match(/\b\w{4,}\b/g) || [];
    const wordFreq = new Map<string, number>();
    
    words.forEach(word => {
      wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
    });
    
    const frequentWords = Array.from(wordFreq.entries())
      .filter(([word, freq]) => freq > 2)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([word]) => word);
    
    phrases.push(...frequentWords);
    
    return [...new Set(phrases)]; // Remove duplicates
  }

  private analyzeStructure(content: string): ContentStructure {
    const headings = (content.match(/^#{1,6}\s+.+$/gm) || []).length;
    const codeBlocks = (content.match(/```[\s\S]*?```/g) || []).length;
    const lists = (content.match(/^\s*[-*+]\s+/gm) || []).length;
    const tables = (content.match(/\|.*\|/g) || []).length;
    const links = (content.match(/\[.*?\]\(.*?\)/g) || []).length;
    
    // Calculate complexity based on structure
    const complexity = (
      headings * 0.2 +
      codeBlocks * 0.3 +
      lists * 0.1 +
      tables * 0.2 +
      links * 0.1
    ) / content.length * 1000;

    return {
      headings,
      codeBlocks,
      lists,
      tables,
      links,
      complexity
    };
  }

  private async generateSemanticFingerprint(content: string): Promise<string> {
    // Simplified semantic fingerprint (would use NLP in production)
    const words = content.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3);
    
    const wordFreq = new Map<string, number>();
    words.forEach(word => {
      wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
    });
    
    // Get top 10 most frequent words
    const topWords = Array.from(wordFreq.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([word]) => word);
    
    return topWords.join('|');
  }

  private isSignatureSimilar(sig1: ContentSignature, sig2: ContentSignature): boolean {
    const similarity = this.calculateSignatureSimilarity(sig1, sig2);
    return similarity > 0.3; // Threshold for considering signatures similar
  }

  private calculateSignatureSimilarity(sig1: ContentSignature, sig2: ContentSignature): number {
    if (sig1.contentType !== sig2.contentType) return 0;
    
    // Compare key phrases
    const phraseSimilarity = this.calculateArraySimilarity(sig1.keyPhrases, sig2.keyPhrases);
    
    // Compare semantic fingerprints
    const semanticSimilarity = this.calculateSemanticFingerprintSimilarity(
      sig1.semanticFingerprint, 
      sig2.semanticFingerprint
    );
    
    // Compare structure
    const structureSimilarity = this.calculateStructureSimilarity(sig1.structure, sig2.structure);
    
    // Weighted combination
    return (
      phraseSimilarity * 0.4 +
      semanticSimilarity * 0.4 +
      structureSimilarity * 0.2
    );
  }

  private calculateArraySimilarity(arr1: string[], arr2: string[]): number {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    
    return intersection.size / union.size;
  }

  private calculateSemanticFingerprintSimilarity(fp1: string, fp2: string): number {
    const words1 = new Set(fp1.split('|'));
    const words2 = new Set(fp2.split('|'));
    const intersection = new Set([...words1].filter(x => words2.has(x)));
    const union = new Set([...words1, ...words2]);
    
    return intersection.size / union.size;
  }

  private calculateStructureSimilarity(struct1: ContentStructure, struct2: ContentStructure): number {
    const similarity = (
      Math.min(struct1.headings, struct2.headings) / Math.max(struct1.headings, struct2.headings) * 0.3 +
      Math.min(struct1.codeBlocks, struct2.codeBlocks) / Math.max(struct1.codeBlocks, struct2.codeBlocks) * 0.3 +
      Math.min(struct1.lists, struct2.lists) / Math.max(struct1.lists, struct2.lists) * 0.2 +
      Math.min(struct1.tables, struct2.tables) / Math.max(struct1.tables, struct2.tables) * 0.1 +
      Math.min(struct1.links, struct2.links) / Math.max(struct1.links, struct2.links) * 0.1
    );
    
    return similarity;
  }

  private calculateTextSimilarity(text1: string, text2: string): number {
    // Simple text similarity using word overlap
    const words1 = text1.toLowerCase().split(/\s+/);
    const words2 = text2.toLowerCase().split(/\s+/);
    
    const set1 = new Set(words1);
    const set2 = new Set(words2);
    
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    
    return intersection.size / union.size;
  }

  private calculateStructuralSimilarity(text1: string, text2: string): number {
    const struct1 = this.analyzeStructure(text1);
    const struct2 = this.analyzeStructure(text2);
    
    return this.calculateStructureSimilarity(struct1, struct2);
  }

  private async calculateSemanticSimilarity(text1: string, text2: string): Promise<number> {
    // Simplified semantic similarity (would use word embeddings in production)
    const fp1 = await this.generateSemanticFingerprint(text1);
    const fp2 = await this.generateSemanticFingerprint(text2);
    
    return this.calculateSemanticFingerprintSimilarity(fp1, fp2);
  }

  private findCommonElements(text1: string, text2: string): string[] {
    const words1 = text1.toLowerCase().split(/\s+/);
    const words2 = text2.toLowerCase().split(/\s+/);
    
    const set1 = new Set(words1);
    const set2 = new Set(words2);
    
    return [...set1].filter(word => set2.has(word)).slice(0, 10);
  }

  private findDifferences(text1: string, text2: string): string[] {
    const words1 = text1.toLowerCase().split(/\s+/);
    const words2 = text2.toLowerCase().split(/\s+/);
    
    const set1 = new Set(words1);
    const set2 = new Set(words2);
    
    const unique1 = [...set1].filter(word => !set2.has(word));
    const unique2 = [...set2].filter(word => !set1.has(word));
    
    return [...unique1.slice(0, 5), ...unique2.slice(0, 5)];
  }

  private calculateSimilarityConfidence(
    textSimilarity: number, 
    structuralSimilarity: number, 
    semanticSimilarity: number
  ): number {
    // Confidence based on consistency across different similarity measures
    const similarities = [textSimilarity, structuralSimilarity, semanticSimilarity];
    const mean = similarities.reduce((sum, sim) => sum + sim, 0) / similarities.length;
    const variance = similarities.reduce((sum, sim) => sum + Math.pow(sim - mean, 2), 0) / similarities.length;
    
    // Higher confidence when similarities are consistent (low variance)
    return mean * (1 - variance);
  }

  private async generateMergeSteps(
    existingContent: MemoryContent,
    newContent: MemoryContent,
    similarity: SimilarityResult
  ): Promise<MergeStep[]> {
    const steps: MergeStep[] = [];
    
    // Merge common elements
    if (similarity.commonElements.length > 0) {
      steps.push({
        action: 'preserve-common',
        source: 'existing',
        content: similarity.commonElements.join(', '),
        reasoning: 'Preserve common elements from existing content'
      });
    }
    
    // Add unique elements from new content
    if (similarity.differences.length > 0) {
      steps.push({
        action: 'add-unique',
        source: 'new',
        content: similarity.differences.join(', '),
        reasoning: 'Add unique elements from new content'
      });
    }
    
    // Merge metadata
    if (newContent.metadata.tags.length > existingContent.metadata.tags.length) {
      steps.push({
        action: 'merge-tags',
        source: 'merged',
        content: [...new Set([...existingContent.metadata.tags, ...newContent.metadata.tags])].join(', '),
        reasoning: 'Combine tags from both sources'
      });
    }
    
    return steps;
  }

  private async indexContent(
    content: MemoryContent, 
    hash: ContentHash, 
    signature: ContentSignature
  ): Promise<void> {
    const id = this.generateId(content);
    
    // Index content
    this.contentIndex.set(id, {
      id,
      content,
      system: content.metadata.source,
      signature,
      metadata: content.metadata
    });
    
    // Index hash
    this.hashIndex.set(hash.value, {
      id,
      hash: hash.value,
      timestamp: content.timestamp
    });
  }

  private generateId(content: MemoryContent): string {
    // Generate unique ID based on content and timestamp
    return `${content.type}-${content.timestamp.getTime()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private generateSimilarityCacheKey(content1: MemoryContent, content2: MemoryContent): string {
    const hash1 = this.generateQuickHash(content1.content);
    const hash2 = this.generateQuickHash(content2.content);
    return `${hash1}-${hash2}`;
  }

  private generateQuickHash(content: string): string {
    // Quick hash for cache key generation
    let hash = 0;
    for (let i = 0; i < Math.min(content.length, 100); i++) {
      hash = ((hash << 5) - hash) + content.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
  }

  private updateMetrics(type: string, processingTime: number): void {
    this.deduplicationMetrics.totalChecks++;
    this.deduplicationMetrics.averageCheckTime = 
      (this.deduplicationMetrics.averageCheckTime * (this.deduplicationMetrics.totalChecks - 1) + processingTime) / 
      this.deduplicationMetrics.totalChecks;
    
    switch (type) {
      case 'exact-duplicate':
      case 'similar-duplicate':
        this.deduplicationMetrics.duplicatesFound++;
        break;
      case 'merge':
        this.deduplicationMetrics.mergesPerformed++;
        break;
    }
    
    // Estimate space saved (simplified)
    if (type === 'exact-duplicate' || type === 'similar-duplicate') {
      this.deduplicationMetrics.spaceSaved += 1024; // Assume 1KB saved per duplicate
    }
  }
}

// Supporting interfaces

interface ContentIndex {
  id: string;
  content: MemoryContent;
  system: string;
  signature: ContentSignature;
  metadata: MemoryMetadata;
}

interface HashReference {
  id: string;
  hash: string;
  timestamp: Date;
}

interface DeduplicationMetrics {
  totalChecks: number;
  duplicatesFound: number;
  mergesPerformed: number;
  spaceSaved: number; // in bytes
  averageCheckTime: number; // in milliseconds
}

export default DeduplicationEngine;