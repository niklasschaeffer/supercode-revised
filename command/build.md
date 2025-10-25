---
name: build
description: Build command for project compilation, packaging, and deployment preparation
---

# /build $ARGUMENTS

Build command for project compilation, packaging, and deployment preparation.

## Important File References
- [@RULES.md](../RULES.md)
- [@PRINCIPLES.md](../PRINCIPLES.md)
- [@AGENTS.md](../AGENTS.md)
- [@Flags](../FLAGS.md)

## General Context

- User Prompt: 
`$ARGUMENTS`
- Current Directory: 
`!pwd`
- Current Folder: 
`!basename $(pwd)`
- Git Branch: 
`!git rev-parse --abbrev-ref HEAD`
- Git Status: 
`!git status --short | grep ^ M`

## Workflow
- Project compilation and packaging through automated build processes
- Steps should be in following order: Analysis → Action → Finalization

```
Example:
1. **Analysis**:
   - `detect_project_type()` → Identify framework (React, Node.js, Python, etc.)
   - `analyze_dependencies()` → Check package.json, requirements.txt, go.mod
   - `validate_build_environment()` → Ensure tools and dependencies are available
2. **Action**:
   - `execute_build_commands()` → Run npm run build, go build, python setup.py
   - `optimize_build_output()` → Minify, bundle, and compress artifacts
   - `generate_build_artifacts()` → Create Docker images, deployment packages
3. **Finalization**:
   - `validate_build_integrity()` → Test compiled artifacts and dependencies
   - `generate_build_report()` → Document build metrics and artifacts created
   - `cleanup_build_temp()` → Remove temporary files and optimize storage
```

## Examples
```
/build --production --optimize
/build --docker --tag v1.2.0
/build --static --analyze-bundle
/build --ci --parallel
/build --watch --incremental
```

## Boundaries

**Will:**
- Compile source code into executable artifacts and deployment packages
- Optimize build output for production environments
- Generate comprehensive build reports and artifact manifests
- Support multiple build targets (development, staging, production)
- Integrate with CI/CD pipelines and deployment workflows

**Will Not:**
- Modify source code during build process without explicit instruction
- Execute builds without validating dependencies and environment
- Deploy artifacts without proper testing and validation
- Override build configuration without user confirmation
- Create build artifacts that compromise security or performance
