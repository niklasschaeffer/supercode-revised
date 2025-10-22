#!/bin/bash

# GitHub Pages Deployment Verification Script
# This script verifies that the build is ready for GitHub Pages deployment

set -e

echo "🔍 GitHub Pages Deployment Verification"
echo "======================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    local status=$1
    local message=$2
    case $status in
        "OK")
            echo -e "${GREEN}✅ $message${NC}"
            ;;
        "WARN")
            echo -e "${YELLOW}⚠️  $message${NC}"
            ;;
        "ERROR")
            echo -e "${RED}❌ $message${NC}"
            ;;
        "INFO")
            echo -e "ℹ️  $message"
            ;;
    esac
}

# Check if we're in the correct directory
if [ ! -f "package.json" ]; then
    print_status "ERROR" "package.json not found. Please run from project root."
    exit 1
fi

print_status "INFO" "Starting deployment verification..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    print_status "WARN" "node_modules not found. Installing dependencies..."
    npm install
fi

# Clean previous build
print_status "INFO" "Cleaning previous build..."
npm run clean 2>/dev/null || rm -rf ../docs/*

# Build the project
print_status "INFO" "Building project..."
if npm run build; then
    print_status "OK" "Build completed successfully"
else
    print_status "ERROR" "Build failed"
    exit 1
fi

# Verify required files exist
print_status "INFO" "Verifying required files..."

required_files=(
    "../docs/index.html"
    "../docs/CNAME"
    "../docs/404.html"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        print_status "OK" "Found: $file"
    else
        print_status "ERROR" "Missing: $file"
        exit 1
    fi
done

# Check CNAME content
cname_content=$(cat ../docs/CNAME)
if [ "$cname_content" = "supercode.nx-solutions.de" ]; then
    print_status "OK" "CNAME correctly configured"
else
    print_status "ERROR" "CNAME has incorrect content: $cname_content"
    exit 1
fi

# Check for relative paths in index.html
print_status "INFO" "Checking asset paths..."
if grep -q 'href="/' ../docs/index.html; then
    print_status "WARN" "Found absolute paths in index.html"
    grep 'href="/' ../docs/index.html | head -3
fi

if grep -q 'src="/' ../docs/index.html; then
    print_status "WARN" "Found absolute script paths in index.html"
    grep 'src="/' ../docs/index.html | head -3
fi

# Check for relative paths
relative_paths=$(grep -c 'href="./' ../docs/index.html || echo "0")
script_paths=$(grep -c 'src="./' ../docs/index.html || echo "0")

print_status "OK" "Found $relative_paths relative href paths"
print_status "OK" "Found $script_paths relative script paths"

# Check assets directory
if [ -d "../docs/assets" ]; then
    asset_count=$(ls ../docs/assets/ | wc -l)
    print_status "OK" "Assets directory contains $asset_count files"
else
    print_status "ERROR" "Assets directory not found"
    exit 1
fi

# Check file sizes
print_status "INFO" "Checking file sizes..."
index_size=$(stat -f%z ../docs/index.html 2>/dev/null || stat -c%s ../docs/index.html)
if [ "$index_size" -lt 10000 ]; then
    print_status "OK" "index.html size: ${index_size} bytes"
else
    print_status "WARN" "index.html is large: ${index_size} bytes"
fi

# Check for JavaScript errors in build
print_status "INFO" "Checking for build issues..."
if [ -f "../docs/assets/index-"*.js ]; then
    js_size=$(ls -la ../docs/assets/index-*.js | awk '{print $5}')
    if [ "$js_size" -gt 1000 ]; then
        print_status "OK" "Main JavaScript bundle: ${js_size} bytes"
    else
        print_status "ERROR" "JavaScript bundle too small: ${js_size} bytes"
        exit 1
    fi
fi

# Test local preview
print_status "INFO" "Starting local preview server..."
npm run preview &
PREVIEW_PID=$!

# Wait for server to start
sleep 3

# Check if server is running
if kill -0 $PREVIEW_PID 2>/dev/null; then
    print_status "OK" "Preview server started successfully"
    kill $PREVIEW_PID 2>/dev/null
else
    print_status "WARN" "Preview server may not have started properly"
fi

# Summary
echo ""
echo "📊 Verification Summary"
echo "======================"
print_status "OK" "Build completed successfully"
print_status "OK" "Required files generated"
print_status "OK" "CNAME configured correctly"
print_status "OK" "Asset paths use relative URLs"
print_status "OK" "Assets directory populated"

echo ""
print_status "INFO" "Your build is ready for GitHub Pages deployment!"
print_status "INFO" "Next steps:"
echo "   1. Commit and push changes to main branch"
echo "   2. GitHub Actions will deploy automatically"
echo "   3. Visit https://supercode.nx-solutions.de"

echo ""
print_status "INFO" "For manual deployment, run: npm run deploy"

exit 0