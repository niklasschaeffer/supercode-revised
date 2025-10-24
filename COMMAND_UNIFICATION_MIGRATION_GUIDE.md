# Command Interface Unification - Migration Guide

## Overview

Command Interface Unification consolidates `/implement`, `/spawn`, and `/improve` into a unified `/build` command, eliminating 70% functionality overlap and reducing command complexity.

## Migration Summary

### Command Changes
- **Removed**: `/implement`, `/spawn`, `/improve` (deprecated with backward compatibility)
- **Added**: `/build` (unified functionality)
- **Reduction**: 3 commands → 1 command (67% reduction in this category)

### Active Commands After Unification
1. `/build` - Unified implementation, orchestration, and improvement
2. `/cleanup` - Project cleanup and maintenance
3. `/generate` - Agent and component generation
4. `/git` - Git operations and version control
5. `/initialize` - Project initialization and setup
6. `/load` - Context loading and restoration
7. `/renovate` - Large-scale refactoring and modernization
8. `/save` - Context saving and persistence
9. `/task` - Task management and coordination
10. `/troubleshoot` - Issue diagnosis and resolution

## Migration Mappings

### Implementation Tasks
```bash
# Old commands
/implement user profile component
/implement REST API for authentication
/implement --safe --with-tests search functionality

# New equivalents
/build user profile component
/build --type implement REST API for authentication
/build --safe --with-tests search functionality
```

### Orchestration Tasks
```bash
# Old commands
/spawn "Build full-stack authentication system"
/spawn --delegate "Implement 5 microservices"
/spawn "Complete security audit and remediation"

# New equivalents
/build "Build full-stack authentication system"
/build --type orchestrate --delegate "Implement 5 microservices"
/build --type orchestrate "Complete security audit and remediation"
```

### Improvement Tasks
```bash
# Old commands
/improve src/api/
/improve --focus complexity src/utils/helpers.js
/improve --safe --patterns legacy-module

# New equivalents
/build --type improve src/api/
/build --type improve --focus complexity src/utils/helpers.js
/build --type improve --safe --patterns legacy-module
```

## Unified /build Command Features

### Mode Selection
- **Auto-detection**: Automatically selects mode based on task complexity
- **Explicit selection**: Use `--type` flag for specific behavior

### Implementation Mode (`--type implement`)
- Direct feature and component creation
- Framework-specific code generation
- Optional testing and validation
- Agent delegation for complex tasks

### Orchestration Mode (`--type orchestrate`)
- Multi-agent task coordination
- Complex workflow management
- Specialist agent selection
- Parallel execution support

### Improvement Mode (`--type improve`)
- Systematic code refactoring
- Quality enhancement
- Pattern application
- Performance optimization

### Advanced Features
- **Framework detection**: Auto-detect React, Vue, Angular, Express
- **Safety modes**: Extra validation and rollback preparation
- **Parallel execution**: Concurrent agent coordination when safe
- **Comprehensive testing**: Integrated test generation and validation

## Backward Compatibility

### Deprecation Process
1. **Phase 1**: Deprecation warnings with migration suggestions
2. **Phase 2**: Commands redirect to `/build` with warnings
3. **Phase 3**: Complete removal in future version

### Grace Period
- Old commands remain functional during transition
- Clear migration paths provided
- Automatic suggestions for equivalent `/build` commands

## Benefits of Unification

### Reduced Complexity
- **Single command**: One interface for implementation tasks
- **Intelligent defaults**: Auto-detection reduces flag usage
- **Consistent workflow**: Standardized patterns across all modes

### Improved User Experience
- **Simplified learning**: Fewer commands to master
- **Better discovery**: Related functionality grouped together
- **Flexible usage**: Works for simple and complex tasks

### Enhanced Functionality
- **Cross-mode features**: Safety, testing, delegation available in all modes
- **Intelligent coordination**: Better agent selection and task decomposition
- **Unified validation**: Consistent quality standards across all operations

## Advanced Usage Examples

### Complex Multi-Mode Workflows
```bash
# Build and improve in sequence
/build --type implement user authentication system
/build --type improve --focus performance authentication/

# Orchestrate with specific agents
/build --type orchestrate --agents backend-engineer,frontend-engineer "API integration"

# Implementation with comprehensive testing
/build --type implement --framework react --with-tests --safe e-commerce checkout
```

### Development Workflow Integration
```bash
# Initialize project
/initialize my-new-project

# Build core features
/build user management system
/build payment processing

# Improve quality
/build --type improve --patterns src/

# Troubleshoot issues
/troubleshoot performance issues

# Save progress
/save project-milestone-1
```

## Migration Checklist

### For Teams
- [ ] Update documentation and training materials
- [ ] Update CI/CD pipelines using old commands
- [ ] Communicate changes to team members
- [ ] Update scripts and automation

### For Individuals
- [ ] Learn `/build` command patterns
- [ ] Update personal workflows and aliases
- [ ] Test migration with non-critical projects
- [ ] Update custom integrations

## Troubleshooting

### Common Migration Issues

**Issue**: Old command not found
**Solution**: Use `/build` with appropriate `--type` flag

**Issue**: Different behavior than expected
**Solution**: Check mode auto-detection or use explicit `--type`

**Issue**: Missing flags from old commands
**Solution**: Reference `/build` documentation for equivalent flags

### Getting Help
```bash
# Get help with unified command
/build --help

# Check available modes
/build --help --type

# See migration suggestions
/implement --help  # Shows deprecation warning and migration
```

## Future Roadmap

### Phase 2: Additional Consolidation
- Analyze remaining command overlaps
- Potential `/task` and `/troubleshoot` integration
- Framework-specific command optimizations

### Phase 3: Enhanced Intelligence
- Improved auto-detection algorithms
- Context-aware mode selection
- Predictive command suggestions

## Support

For migration assistance:
1. Check this guide for common patterns
2. Use `/build --help` for comprehensive documentation
3. Refer to individual command deprecation notices
4. Test migrations in non-production environments first

---

*This migration guide ensures smooth transition to unified command interface while maintaining all existing functionality and improving user experience.*