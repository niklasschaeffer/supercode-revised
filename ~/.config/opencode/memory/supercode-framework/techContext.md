# SuperCode Framework - Technology Context

## Core Technology Stack

### Runtime Environment
- **Node.js**: 16.0.0+ (primary runtime)
- **TypeScript**: 5.2.2 (strict mode enabled)
- **Package Manager**: npm with comprehensive lock files
- **Operating System**: Cross-platform support (Linux, macOS, Windows)

### Build and Development Tools
- **Build Tool**: Vite 5.0.8 with advanced optimization
  - Advanced chunking and code splitting
  - Terser minification with source maps
  - Development server with HMR
  - Production build optimization
- **TypeScript Configuration**: Strict mode with path mapping
  - `tsconfig.json`: Core TypeScript configuration
  - `tsconfig.node.json`: Node.js-specific settings
  - Strict type checking and comprehensive linting
- **Linting**: ESLint with comprehensive rules
  - `.eslintrc.cjs`: ESLint configuration
  - TypeScript-specific linting rules
  - Code quality and consistency enforcement

### Frontend Technology Stack

#### Core Framework
- **React**: 18.2.0 with TypeScript support
- **React Router**: 6.20.0 for client-side routing
- **TypeScript**: Full type safety across components

#### UI and Styling
- **TailwindCSS**: 3.3.6 for utility-first styling
- **shadcn/ui**: Component library with Radix UI primitives
- **PostCSS**: 8.4.31 for CSS processing
- **Lucide React**: Icon library for consistent iconography

#### Build and Deployment
- **Vite**: 5.0.8 as the build tool and development server
- **GitHub Pages**: Deployment target with custom domain
- **Custom Domain**: Configured through CNAME and DNS

### Testing Infrastructure

#### End-to-End Testing
- **Playwright**: Comprehensive E2E testing framework
  - Cross-browser testing (Chrome, Firefox, Safari)
  - Mobile device emulation and testing
  - Visual regression testing with screenshot comparison
  - Automated responsive design validation

#### Testing Coverage
- **7 Screen Sizes**: Comprehensive responsive testing
  - Mobile: 375x667, 700x1024, 768x1024
  - Tablet: 900x1024
  - Desktop: 1200x1024, large displays
- **Visual Regression**: Automated screenshot comparison
- **Browser Testing**: Chrome DevTools integration

### MCP Server Ecosystem

#### Memory and Knowledge Management
- **Knowledge Graph**: Entity relationships and persistent knowledge
- **Memory Bank**: Project-based documentation and structured files
- **Integration**: Dual memory architecture for comprehensive knowledge management

#### Development and Operations
- **Desktop Commander**: Local environment and file system operations
- **Sequential MCP**: Complex reasoning and workflow orchestration
- **Context7**: Framework-specific documentation and best practices

#### Testing and Quality Assurance
- **Playwright**: E2E testing automation and browser control
- **Chrome DevTools**: Browser debugging and performance analysis

#### Tools and Utilities
- **Tavily**: Web search and content extraction capabilities
- **Forgejo**: Version control and repository management
- **Shadcn**: UI component library integration and management
- **Prompt Kit**: Template-based prompt management and generation

### OpenCode Integration

#### Core Plugin
- **@opencode-ai/plugin**: v0.15.8 (primary integration)
- **Purpose**: AI assistance and automation
- **Integration**: GitHub issues, comments, and workflow automation
- **Features**: Context-aware assistance and intelligent code analysis

#### Configuration Management
- **install.sh**: Automated configuration installer
- **Environment Setup**: Comprehensive environment configuration
- **Dependency Management**: Automated package installation and updates

### Documentation System

#### Living Documentation
- **Auto-Generation**: Documentation generated from code analysis
- **Comprehensive README**: Detailed usage examples and guides
- **API Documentation**: Derived from TypeScript type definitions
- **Component Documentation**: Generated from props and interfaces

#### Quality and Compliance
- **OpenDocs QA System**: Comprehensive validation framework
  - Template compliance validation
  - Documentation compliance audits
  - Feature approval workflows
  - Quality metrics tracking

### Configuration Files

#### Package Configuration
```json
{
  "name": "supercode-revised",
  "version": "1.0.0",
  "dependencies": {
    "@opencode-ai/plugin": "0.15.8"
  },
  "devDependencies": {
    "typescript": "^5.2.2",
    "vite": "^5.0.8"
  }
}
```

#### Build Configuration
- **vite.config.ts**: Main Vite configuration
- **vite.config.analyze.ts**: Bundle analysis configuration
- **tailwind.config.js**: TailwindCSS configuration
- **postcss.config.js**: PostCSS processing configuration

#### TypeScript Configuration
- **tsconfig.json**: Core TypeScript settings with strict mode
- **tsconfig.node.json**: Node.js-specific TypeScript configuration
- **Path Mapping**: Custom import paths for cleaner code organization

### Development Workflow

#### Local Development
1. **Installation**: `npm install` for dependencies
2. **Development Server**: `npm run dev` for local development
3. **Build**: `npm run build` for production builds
4. **Preview**: `npm run preview` for build preview

#### Quality Assurance
1. **Type Checking**: Automatic TypeScript compilation
2. **Linting**: ESLint with comprehensive rules
3. **Testing**: Playwright E2E test suite
4. **Build Validation**: Production build verification

#### Deployment
1. **Build Process**: Optimized production builds
2. **Testing**: Automated E2E testing validation
3. **Deployment**: GitHub Pages with custom domain
4. **Monitoring**: Automated deployment status tracking

### Performance Optimizations

#### Build Optimizations
- **Code Splitting**: Intelligent chunking for optimal loading
- **Tree Shaking**: Dead code elimination
- **Minification**: Terser optimization with source maps
- **Asset Optimization**: Image and resource optimization

#### Runtime Optimizations
- **Lazy Loading**: Component and route-based code splitting
- **Caching**: Browser and CDN caching strategies
- **Bundle Analysis**: Regular bundle size monitoring
- **Performance Monitoring**: Core Web Vitals tracking

### Security Considerations

#### Dependency Security
- **Lock Files**: Comprehensive dependency locking
- **Version Pinning**: Specific version management
- **Security Scanning**: Automated vulnerability scanning
- **Update Management**: Controlled dependency updates

#### Code Security
- **TypeScript**: Type safety for error prevention
- **ESLint**: Security-focused linting rules
- **Input Validation**: Comprehensive input sanitization
- **Access Control**: Secure access patterns and practices