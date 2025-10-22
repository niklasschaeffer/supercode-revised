# GitHub Pages Deployment Guide

## Overview
This guide covers deploying the SuperCode landing page to GitHub Pages with custom domain support.

## Configuration Changes Made

### 1. Vite Configuration (`vite.config.ts`)
- **Base Path**: Changed from `base: '/'` to `base: './'` for relative asset paths
- **CNAME Generation**: Automatic CNAME file generation for custom domain
- **404.html**: Automatic 404.html generation for client-side routing support

### 2. React Router Configuration (`src/App.tsx`)
- **BrowserRouter**: Configured with basename for environment-specific routing
- **GitHub Pages Redirect**: Added redirect handler for seamless navigation
- **Environment Detection**: Different behavior for development vs production

### 3. Template Updates (`index.html`)
- **Relative Paths**: All asset references use relative paths (`./` instead of `/`)
- **Open Graph Images**: Fixed social media image paths for custom domain

## Deployment Process

### Automatic Deployment (GitHub Actions)
1. Push changes to `main` branch
2. GitHub Actions workflow automatically builds and deploys
3. Site available at https://supercode.nx-solutions.de

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## File Structure After Build
```
docs/
├── CNAME                 # Custom domain configuration
├── 404.html             # GitHub Pages routing fallback
├── index.html           # Main application entry
├── assets/              # Built assets with relative paths
│   ├── index-*.js
│   ├── index-*.css
│   └── vendor-*.js
└── robots.txt           # SEO configuration
```

## Custom Domain Configuration

### DNS Settings
- **Domain**: supercode.nx-solutions.de
- **Type**: CNAME
- **Target**: niklasschaeffer.github.io
- **TTL**: 3600 (recommended)

### GitHub Repository Settings
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: main /docs
4. Custom domain: supercode.nx-solutions.de

## Troubleshooting

### Common Issues

#### 404 Errors on Direct Navigation
- **Cause**: Missing 404.html or incorrect base path
- **Solution**: Ensure `base: './'` in vite.config.ts and 404.html exists

#### Asset Loading Issues
- **Cause**: Absolute paths in built HTML
- **Solution**: Check that all assets use relative paths (`./assets/`)

#### Custom Domain Not Working
- **Cause**: DNS propagation or incorrect CNAME
- **Solution**: Verify DNS settings and GitHub Pages configuration

### Testing Locally
```bash
# Test production build locally
npm run build
npm run preview

# Test with different base paths
BASE_URL='./' npm run build
```

## Performance Optimizations

### Build Configuration
- **Code Splitting**: Vendor, Radix UI, and icons separated
- **Minification**: Terser with console removal
- **Source Maps**: Enabled for debugging
- **Gzip Compression**: Automatic on GitHub Pages

### Asset Optimization
- **Bundle Analysis**: Use `npm run build:analyze`
- **Image Optimization**: WebP format for better compression
- **Font Preloading**: Google Fonts preconnected

## Security Considerations

### HTTPS Enforcement
- GitHub Pages automatically provides SSL certificates
- All resources loaded over HTTPS
- Mixed content prevention

### CSP Headers
- Consider adding Content Security Policy
- Restrict external resource loading
- Prevent XSS attacks

## Monitoring and Maintenance

### Build Monitoring
- GitHub Actions provides build logs
- Check for asset loading errors
- Monitor bundle size changes

### Performance Monitoring
- Google PageSpeed Insights
- GitHub Pages analytics
- Core Web Vitals tracking

## Rollback Procedure

### Quick Rollback
```bash
# Revert to previous commit
git revert HEAD

# Force push to trigger redeploy
git push origin main --force
```

### Emergency Rollback
1. Disable custom domain in GitHub Settings
2. Switch to default GitHub Pages domain
3. Fix configuration issues
4. Re-enable custom domain

## Future Improvements

### Advanced Features
- [ ] Service Worker for offline support
- [ ] Progressive Web App (PWA) features
- [ ] Advanced caching strategies
- [ ] CDN integration

### Automation
- [ ] Automated testing in CI/CD
- [ ] Performance regression testing
- [ ] Automated security scanning
- [ ] Dependency update automation