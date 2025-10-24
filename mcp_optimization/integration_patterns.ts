/**
 * MCP Integration Patterns for Consolidated Agent Structure
 * 
 * Optimized patterns for 13-agent structure with intelligent tool selection
 * and context flow integration
 */

import { MCPToolSelectionResult, AgentTaskContext } from './types';

/**
 * MCP Integration Patterns Manager
 * Provides optimized patterns for different agent types and scenarios
 */
export class MCPIntegrationPatterns {
    private patterns: Map<string, IntegrationPattern>;
    private contextFlowOptimizer: ContextFlowOptimizer;
    private memorySystemIntegrator: MemorySystemIntegrator;

    constructor() {
        this.patterns = new Map();
        this.contextFlowOptimizer = new ContextFlowOptimizer();
        this.memorySystemIntegrator = new MemorySystemIntegrator();
        this.initializePatterns();
    }

    /**
     * Initialize integration patterns for all agent types
     */
    private initializePatterns(): void {
        // Primary Agent Patterns
        this.patterns.set('orchestrator', this.createOrchestratorPattern());
        this.patterns.set('system-architect', this.createSystemArchitectPattern());
        
        // Development Agent Patterns
        this.patterns.set('frontend-engineer', this.createFrontendEngineerPattern());
        this.patterns.set('backend-engineer', this.createBackendEngineerPattern());
        this.patterns.set('database-engineer', this.createDatabaseEngineerPattern());
        this.patterns.set('devops-engineer', this.createDevOpsEngineerPattern());
        
        // Quality Agent Patterns
        this.patterns.set('qa-engineer', this.createQAEngineerPattern());
        this.patterns.set('security-engineer', this.createSecurityEngineerPattern());
        this.patterns.set('refactoring-expert', this.createRefactoringExpertPattern());
        
        // Specialist Agent Patterns
        this.patterns.set('deep-research-specialist', this.createDeepResearchSpecialistPattern());
        this.patterns.set('root-cause-analyst', this.createRootCauseAnalystPattern());
        this.patterns.set('mobile-optimization', this.createMobileOptimizationPattern());
        
        // Support Agent Patterns
        this.patterns.set('generator-specialist', this.createGeneratorSpecialistPattern());
        this.patterns.set('task-manager', this.createTaskManagerPattern());
    }

    /**
     * Get optimized integration pattern for agent and task
     */
    public getIntegrationPattern(agentType: string, taskContext: AgentTaskContext): OptimizedPattern {
        const basePattern = this.patterns.get(agentType);
        if (!basePattern) {
            throw new Error(`No pattern found for agent type: ${agentType}`);
        }

        // Apply context flow optimization
        const contextOptimized = this.contextFlowOptimizer.optimizePattern(
            basePattern, 
            taskContext
        );

        // Apply memory system integration
        const memoryIntegrated = this.memorySystemIntegrator.integratePattern(
            contextOptimized,
            taskContext
        );

        // Generate final optimized pattern
        return this.generateOptimizedPattern(memoryIntegrated, taskContext);
    }

    /**
     * Create Orchestrator integration pattern
     */
    private createOrchestratorPattern(): IntegrationPattern {
        return {
            agentType: 'orchestrator',
            universalTools: [
                'sequential_sequentialthinking',
                'serena_read_memory',
                'context7_resolve_library_id'
            ],
            domainTools: [
                'in-memoria_get_pattern_recommendations',
                'in-memoria_predict_coding_approach',
                'desktop-commander_read_file',
                'task'
            ],
            toolSelectionStrategy: 'context-aware',
            optimizationLevel: 'maximum',
            workflowPattern: 'orchestration-driven'
        };
    }

    /**
     * Create Frontend Engineer integration pattern
     */
    private createFrontendEngineerPattern(): IntegrationPattern {
        return {
            agentType: 'frontend-engineer',
            universalTools: [
                'sequential_sequentialthinking',
                'serena_read_memory',
                'context7_resolve_library_id'
            ],
            domainTools: [
                'playwright_browser_navigate',
                'playwright_browser_snapshot',
                'chrome-devtools_take_screenshot',
                'shadcn_search_items_in_registries',
                'desktop-commander_write_file'
            ],
            toolSelectionStrategy: 'ui-focused',
            optimizationLevel: 'high',
            workflowPattern: 'component-development'
        };
    }

    /**
     * Create Backend Engineer integration pattern
     */
    private createBackendEngineerPattern(): IntegrationPattern {
        return {
            agentType: 'backend-engineer',
            universalTools: [
                'sequential_sequentialthinking',
                'serena_read_memory',
                'context7_resolve_library_id'
            ],
            domainTools: [
                'desktop-commander_start_process',
                'desktop-commander_interact_with_process',
                'forgejo_create_repo',
                'forgejo_create_issue',
                'in-memoria_search_codebase'
            ],
            toolSelectionStrategy: 'api-focused',
            optimizationLevel: 'high',
            workflowPattern: 'backend-development'
        };
    }

    /**
     * Create Database Engineer integration pattern
     */
    private createDatabaseEngineerPattern(): IntegrationPattern {
        return {
            agentType: 'database-engineer',
            universalTools: [
                'sequential_sequentialthinking',
                'serena_read_memory',
                'context7_resolve_library_id'
            ],
            domainTools: [
                'desktop-commander_start_process',
                'desktop-commander_interact_with_process',
                'in-memoria_search_codebase',
                'context7_get_library_docs'
            ],
            toolSelectionStrategy: 'data-focused',
            optimizationLevel: 'medium',
            workflowPattern: 'database-operations'
        };
    }

    /**
     * Create DevOps Engineer integration pattern
     */
    private createDevOpsEngineerPattern(): IntegrationPattern {
        return {
            agentType: 'devops-engineer',
            universalTools: [
                'sequential_sequentialthinking',
                'serena_read_memory',
                'context7_resolve_library_id'
            ],
            domainTools: [
                'forgejo_create_repo',
                'forgejo_create_pull_request',
                'forgejo_list_repo_issues',
                'desktop-commander_start_process',
                'desktop-commander_write_file'
            ],
            toolSelectionStrategy: 'infrastructure-focused',
            optimizationLevel: 'high',
            workflowPattern: 'deployment-automation'
        };
    }

    /**
     * Create QA Engineer integration pattern
     */
    private createQAEngineerPattern(): IntegrationPattern {
        return {
            agentType: 'qa-engineer',
            universalTools: [
                'sequential_sequentialthinking',
                'serena_read_memory',
                'context7_resolve_library_id'
            ],
            domainTools: [
                'playwright_browser_navigate',
                'playwright_browser_snapshot',
                'chrome-devtools_performance_start_trace',
                'chrome-devtools_take_screenshot',
                'desktop-commander_start_process'
            ],
            toolSelectionStrategy: 'testing-focused',
            optimizationLevel: 'high',
            workflowPattern: 'quality-assurance'
        };
    }

    /**
     * Create Security Engineer integration pattern
     */
    private createSecurityEngineerPattern(): IntegrationPattern {
        return {
            agentType: 'security-engineer',
            universalTools: [
                'sequential_sequentialthinking',
                'serena_read_memory',
                'context7_resolve_library_id'
            ],
            domainTools: [
                'desktop-commander_start_process',
                'tavily_tavily_search',
                'in-memoria_search_codebase',
                'forgejo_list_repo_issues'
            ],
            toolSelectionStrategy: 'security-focused',
            optimizationLevel: 'maximum',
            workflowPattern: 'security-analysis'
        };
    }

    /**
     * Create Refactoring Expert integration pattern
     */
    private createRefactoringExpertPattern(): IntegrationPattern {
        return {
            agentType: 'refactoring-expert',
            universalTools: [
                'sequential_sequentialthinking',
                'serena_read_memory',
                'context7_resolve_library_id'
            ],
            domainTools: [
                'in-memoria_search_codebase',
                'in-memoria_get_pattern_recommendations',
                'desktop-commander_read_file',
                'desktop-commander_edit_block',
                'serena_replace_regex'
            ],
            toolSelectionStrategy: 'refactoring-focused',
            optimizationLevel: 'high',
            workflowPattern: 'code-improvement'
        };
    }

    /**
     * Create Deep Research Specialist integration pattern
     */
    private createDeepResearchSpecialistPattern(): IntegrationPattern {
        return {
            agentType: 'deep-research-specialist',
            universalTools: [
                'sequential_sequentialthinking',
                'serena_read_memory',
                'context7_resolve_library_id'
            ],
            domainTools: [
                'tavily_tavily_search',
                'tavily_tavily_extract',
                'tavily_tavily_crawl',
                'tavily_tavily_map',
                'webfetch'
            ],
            toolSelectionStrategy: 'research-focused',
            optimizationLevel: 'maximum',
            workflowPattern: 'research-intensive'
        };
    }

    /**
     * Create Root Cause Analyst integration pattern
     */
    private createRootCauseAnalystPattern(): IntegrationPattern {
        return {
            agentType: 'root-cause-analyst',
            universalTools: [
                'sequential_sequentialthinking',
                'serena_read_memory',
                'context7_resolve_library_id'
            ],
            domainTools: [
                'in-memoria_search_codebase',
                'tavily_tavily_search',
                'desktop-commander_start_process',
                'serena_search_for_pattern'
            ],
            toolSelectionStrategy: 'analysis-focused',
            optimizationLevel: 'high',
            workflowPattern: 'investigative-analysis'
        };
    }

    /**
     * Create Mobile Optimization integration pattern
     */
    private createMobileOptimizationPattern(): IntegrationPattern {
        return {
            agentType: 'mobile-optimization',
            universalTools: [
                'sequential_sequentialthinking',
                'serena_read_memory',
                'context7_resolve_library_id'
            ],
            domainTools: [
                'playwright_browser_navigate',
                'chrome-devtools_take_screenshot',
                'chrome-devtools_resize_page',
                'shadcn_search_items_in_registries'
            ],
            toolSelectionStrategy: 'mobile-focused',
            optimizationLevel: 'medium',
            workflowPattern: 'responsive-optimization'
        };
    }

    /**
     * Create Generator Specialist integration pattern
     */
    private createGeneratorSpecialistPattern(): IntegrationPattern {
        return {
            agentType: 'generator-specialist',
            universalTools: [
                'sequential_sequentialthinking',
                'serena_read_memory',
                'context7_resolve_library_id'
            ],
            domainTools: [
                'in-memoria_get_pattern_recommendations',
                'serena_create_text_file',
                'serena_read_file',
                'prompt-kit_get_item'
            ],
            toolSelectionStrategy: 'generation-focused',
            optimizationLevel: 'high',
            workflowPattern: 'template-generation'
        };
    }

    /**
     * Create Task Manager integration pattern
     */
    private createTaskManagerPattern(): IntegrationPattern {
        return {
            agentType: 'task-manager',
            universalTools: [
                'sequential_sequentialthinking',
                'serena_read_memory',
                'context7_resolve_library_id'
            ],
            domainTools: [
                'in-memoria_predict_coding_approach',
                'task',
                'serena_write_memory'
            ],
            toolSelectionStrategy: 'coordination-focused',
            optimizationLevel: 'medium',
            workflowPattern: 'task-management'
        };
    }

    /**
     * Generate final optimized pattern
     */
    private generateOptimizedPattern(basePattern: IntegrationPattern, 
                                    taskContext: AgentTaskContext): OptimizedPattern {
        return {
            agentType: basePattern.agentType,
            selectedTools: this.selectOptimalTools(basePattern, taskContext),
            executionSequence: this.optimizeExecutionSequence(basePattern, taskContext),
            optimizationStrategy: this.determineOptimizationStrategy(basePattern, taskContext),
            expectedPerformance: this.predictPerformance(basePattern, taskContext),
            contextIntegration: this.generateContextIntegration(basePattern, taskContext)
        };
    }

    /**
     * Select optimal tools based on pattern and context
     */
    private selectOptimalTools(pattern: IntegrationPattern, context: AgentTaskContext): string[] {
        const allTools = [...pattern.universalTools, ...pattern.domainTools];
        const taskKeywords = this.extractTaskKeywords(context.taskDescription);
        
        // Score tools based on relevance
        const scoredTools = allTools.map(tool => ({
            tool,
            score: this.scoreToolForTask(tool, taskKeywords, pattern.toolSelectionStrategy)
        }));

        // Sort by score and return top tools
        scoredTools.sort((a, b) => b.score - a.score);
        
        const maxTools = this.getMaxToolsForAgent(pattern.agentType, context.priority);
        return scoredTools.slice(0, maxTools).map(item => item.tool);
    }

    /**
     * Extract task keywords for matching
     */
    private extractTaskKeywords(taskDescription: string): string[] {
        return taskDescription.toLowerCase()
            .split(/\s+/)
            .filter(word => word.length > 3)
            .map(word => word.replace(/[^\w]/g, ''));
    }

    /**
     * Score tool relevance for specific task
     */
    private scoreToolForTask(tool: string, keywords: string[], strategy: string): number {
        let score = 0;

        // Base scoring by tool category
        const toolCategories: Record<string, Record<string, number>> = {
            'ui-focused': {
                'playwright_browser_navigate': 10,
                'chrome-devtools_take_screenshot': 9,
                'shadcn_search_items_in_registries': 8
            },
            'api-focused': {
                'desktop-commander_start_process': 9,
                'forgejo_create_repo': 8,
                'in-memoria_search_codebase': 7
            },
            'testing-focused': {
                'playwright_browser_navigate': 10,
                'chrome-devtools_performance_start_trace': 9,
                'desktop-commander_start_process': 7
            },
            'research-focused': {
                'tavily_tavily_search': 10,
                'tavily_tavily_extract': 9,
                'webfetch': 8
            }
        };

        const categoryScores = toolCategories[strategy] || {};
        score += categoryScores[tool] || 5;

        // Keyword matching bonus
        keywords.forEach(keyword => {
            if (tool.toLowerCase().includes(keyword)) {
                score += 3;
            }
        });

        return score;
    }

    /**
     * Get maximum tools for agent based on type and priority
     */
    private getMaxToolsForAgent(agentType: string, priority: string): number {
        const baseLimits: Record<string, number> = {
            'orchestrator': 7,
            'system-architect': 6,
            'deep-research-specialist': 8,
            'frontend-engineer': 6,
            'backend-engineer': 6,
            'qa-engineer': 5,
            'security-engineer': 6
        };

        const priorityMultipliers: Record<string, number> = {
            'low': 0.7,
            'medium': 0.85,
            'high': 1.0,
            'critical': 1.2
        };

        const baseLimit = baseLimits[agentType] || 5;
        const multiplier = priorityMultipliers[priority] || 1.0;

        return Math.floor(baseLimit * multiplier);
    }

    /**
     * Optimize execution sequence for efficiency
     */
    private optimizeExecutionSequence(pattern: IntegrationPattern, context: AgentTaskContext): string[] {
        const tools = this.selectOptimalTools(pattern, context);
        
        // Group by execution phase
        const phases = {
            'context': tools.filter(t => t.includes('serena') || t.includes('memory')),
            'analysis': tools.filter(t => t.includes('sequential') || t.includes('search')),
            'execution': tools.filter(t => t.includes('desktop') || t.includes('process')),
            'validation': tools.filter(t => t.includes('playwright') || t.includes('chrome'))
        };

        // Return optimized sequence
        return [
            ...phases.context,
            ...phases.analysis,
            ...phases.execution,
            ...phases.validation
        ];
    }

    /**
     * Determine optimization strategy
     */
    private determineOptimizationStrategy(pattern: IntegrationPattern, context: AgentTaskContext): string {
        if (context.priority === 'critical') {
            return 'speed-optimized';
        } else if (context.resourceConstraints) {
            return 'resource-optimized';
        } else if (pattern.optimizationLevel === 'maximum') {
            return 'comprehensive';
        } else {
            return 'balanced';
        }
    }

    /**
     * Predict performance for pattern
     */
    private predictPerformance(pattern: IntegrationPattern, context: AgentTaskContext): any {
        const toolCount = pattern.universalTools.length + pattern.domainTools.length;
        const optimizationLevel = pattern.optimizationLevel;

        const basePerformance: Record<string, number> = {
            'low': 3000,
            'medium': 2000,
            'high': 1500,
            'maximum': 1000
        };

        return {
            estimatedExecutionTime: basePerformance[optimizationLevel] * (toolCount / 5),
            successProbability: optimizationLevel === 'maximum' ? 0.95 : 0.85,
            resourceEfficiency: optimizationLevel === 'maximum' ? 0.9 : 0.8
        };
    }

    /**
     * Generate context integration details
     */
    private generateContextIntegration(pattern: IntegrationPattern, context: AgentTaskContext): any {
        return {
            contextFlowOptimization: true,
            memorySystemIntegration: true,
            cacheUtilization: 'high',
            redundancyElimination: 'active',
            intelligentRouting: pattern.optimizationLevel === 'maximum'
        };
    }

    /**
     * Get all available patterns
     */
    public getAllPatterns(): Map<string, IntegrationPattern> {
        return new Map(this.patterns);
    }

    /**
     * Update pattern for agent
     */
    public updatePattern(agentType: string, pattern: IntegrationPattern): void {
        this.patterns.set(agentType, pattern);
    }
}

/**
 * Context Flow Optimizer
 * Integrates with existing context flow optimization
 */
class ContextFlowOptimizer {
    public optimizePattern(pattern: IntegrationPattern, context: AgentTaskContext): IntegrationPattern {
        // Apply context flow optimizations
        return {
            ...pattern,
            domainTools: this.optimizeToolSelection(pattern.domainTools, context),
            optimizationLevel: this.enhanceOptimizationLevel(pattern.optimizationLevel, context)
        };
    }

    private optimizeToolSelection(tools: string[], context: AgentTaskContext): string[] {
        // Filter and prioritize tools based on context flow analysis
        return tools.filter(tool => {
            if (context.localEnvironmentOnly && tool.includes('tavily')) {
                return false;
            }
            if (context.requiresRealTimeData && tool.includes('memory')) {
                return false;
            }
            return true;
        });
    }

    private enhanceOptimizationLevel(current: string, context: AgentTaskContext): string {
        if (context.priority === 'critical' && current !== 'maximum') {
            return 'high';
        }
        return current;
    }
}

/**
 * Memory System Integrator
 * Integrates with unified memory system
 */
class MemorySystemIntegrator {
    public integratePattern(pattern: IntegrationPattern, context: AgentTaskContext): IntegrationPattern {
        // Apply memory system integrations
        return {
            ...pattern,
            universalTools: this.ensureMemoryTools(pattern.universalTools),
            domainTools: this.addMemoryOptimizedTools(pattern.domainTools, context)
        };
    }

    private ensureMemoryTools(tools: string[]): string[] {
        const requiredMemoryTools = ['serena_read_memory', 'in-memoria_search_codebase'];
        
        requiredMemoryTools.forEach(requiredTool => {
            if (!tools.some(tool => tool.includes(requiredTool.split('_')[0]))) {
                tools.push(requiredTool);
            }
        });

        return tools;
    }

    private addMemoryOptimizedTools(tools: string[], context: AgentTaskContext): string[] {
        // Add memory-optimized alternatives
        if (context.taskDescription.includes('pattern')) {
            tools.push('in-memoria_get_pattern_recommendations');
        }
        
        return tools;
    }
}

// Type definitions
interface IntegrationPattern {
    agentType: string;
    universalTools: string[];
    domainTools: string[];
    toolSelectionStrategy: string;
    optimizationLevel: string;
    workflowPattern: string;
}

interface OptimizedPattern {
    agentType: string;
    selectedTools: string[];
    executionSequence: string[];
    optimizationStrategy: string;
    expectedPerformance: any;
    contextIntegration: any;
}

/**
 * Global integration patterns instance
 */
export const mcpIntegrationPatterns = new MCPIntegrationPatterns();