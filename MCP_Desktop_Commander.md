# Desktop Commander MCP Server

**Purpose**: File system operations and shell command execution with intelligent process management and comprehensive system access.

## Triggers
- File system operations requiring read/write access to local files and directories
- Shell command execution for system administration and development tasks
- Process management for starting, monitoring, and terminating terminal sessions
- File search operations with pattern matching and content analysis
- System information gathering and performance monitoring
- Batch file operations and directory management tasks

## Tool Usage

### Primary Tools
- `read_file`: Read file contents with offset/length parameters for partial access
- `write_file`: Write or append to files with chunking support for large files
- `start_process`: Start terminal processes with intelligent state detection
- `interact_with_process`: Send commands to running processes and receive responses
- `start_search`: Streaming file and content searches with progressive results

```
Example for Desktop Commander MCP Server:
`read_file`: reads file contents with support for partial reading and negative offsets.
`write_file`: writes files in chunks with automatic performance optimization.
```

## Secondary Tools
- `list_directory`: Directory listings with recursive depth control and item limits
- `edit_block`: Surgical text replacements with context-aware matching
- `get_file_info`: Detailed file metadata including size, permissions, and line counts
- `list_sessions`: Active terminal session management with status monitoring
- `get_more_search_results`: Paginated search results with offset-based access

```
Example for Desktop Commander MCP Server:
`list_directory`: provides detailed directory listings with file type indicators.
`edit_block`: performs precise text replacements with minimal context requirements.
```

## Accessibility
- Direct file system access within allowed directories with configurable permissions
- Shell command execution through bash with comprehensive process management
- Terminal session handling with intelligent prompt detection and timeout management
- Cross-platform compatibility with Linux-specific optimizations and package manager support
- System resource monitoring including CPU, memory, and process information

## Choose When
- File operations require direct system access rather than symbolic manipulation
- Shell commands need to be executed with real-time output and process control
- Large file operations demand chunking and performance optimization
- Terminal sessions require interactive capabilities with state management
- System administration tasks need comprehensive file and process access

## Works best With
- Serena MCP: For symbolic code operations when file system access isn't required
- Sequential MCP: For complex workflow orchestration and decision-making processes
- In-Memoria MCP: For codebase intelligence and pattern recognition
- Context7 MCP: For library documentation and API reference integration
- Tavily MCP: For web research and external data gathering

## Examples
- "Edit the configuration file to update the database connection" → Desktop Commander reads the config file, performs surgical text replacement of database settings, and validates the changes
- "Run the test suite and capture the output" → Desktop Commander starts a terminal process, executes the test command, and returns the complete output with performance metrics
- "Search for all TODO comments in the codebase" → Desktop Commander initiates a streaming content search across all files, progressively returning matches with context
- "Create a new directory structure for the microservice" → Desktop Commander creates nested directories, writes configuration files, and sets up the complete project structure
- "Monitor the running processes and identify resource usage" → Desktop Commander lists all active processes, provides CPU and memory statistics, and enables process termination if needed