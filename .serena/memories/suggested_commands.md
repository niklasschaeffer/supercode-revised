# Suggested Commands

## Development Commands

### Package Management
```bash
npm install              # Install dependencies
npm update              # Update dependencies
```

### File Operations
```bash
ls -la                  # List all files with details
find . -name "*.md"     # Find all markdown files
grep -r "pattern" .     # Search for pattern in files
cat filename            # Display file contents
```

### Git Operations
```bash
git status              # Check repository status
git add .               # Stage all changes
git commit -m "msg"     # Commit with message
git log                 # View commit history
git diff                # View changes
```

### Project Commands

**Load Project Context**:
```bash
/load                   # Execute load command (retrieves Serena + In-Memoria context)
```

**Context Gathering**:
```bash
# Invoke context-gathering agent to create task manifests
```

## MCP Server Tools

### Serena
```bash
list_memories           # List available project memories
read_memory <name>      # Read specific memory
write_memory <name>     # Write to memory
activate_project <path> # Activate project
```

### In-Memoria
```bash
get_learning_status     # Check if project is analyzed
auto_learn_if_needed    # Trigger learning for new projects
get_developer_profile   # Get coding preferences
get_pattern_recommendations # Get pattern intelligence
```

## Useful Linux Commands

```bash
pwd                     # Print working directory
cd <directory>          # Change directory
mkdir <name>            # Create directory
rm <file>               # Remove file
cp <src> <dest>         # Copy file
mv <src> <dest>         # Move/rename file
wc -l <file>           # Count lines in file
head -n 20 <file>      # Show first 20 lines
tail -n 20 <file>      # Show last 20 lines
```
