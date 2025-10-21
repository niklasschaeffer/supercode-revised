#!/bin/bash

###
# Install OpenCode configuration files to the user's home directory
###

# Color codes for better output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Color

CONFIG_DIR="$HOME/.config/opencode"
JSONC_FILE="$CONFIG_DIR/opencode.jsonc"

# Print header
echo ""
echo -e "${CYAN}╔═════════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║${NC}  ${BOLD}${MAGENTA}OpenCode Configuration Installer${NC}                              ${CYAN}║${NC}"
echo -e "${CYAN}╚═════════════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${BLUE}📁 Target directory:${NC} ${BOLD}$CONFIG_DIR${NC}"
echo ""

# Create directories
echo -e "${YELLOW}🔨 Creating directory structure...${NC}"
mkdir -p "$CONFIG_DIR/agent"
mkdir -p "$CONFIG_DIR/command"
echo -e "${GREEN}   ✓ Directories created${NC}"
echo ""

# Copy agent markdown files (forcefully overwrite)
echo -e "${YELLOW}📝 Installing agent configuration files...${NC}"
if [ -d "./agent" ]; then
    AGENT_COUNT=$(ls -1 ./agent/*.md 2>/dev/null | wc -l)
    if [ $AGENT_COUNT -gt 0 ]; then
        cp -f ./agent/*.md "$CONFIG_DIR/agent/"
        echo -e "${GREEN}   ✓ Installed $AGENT_COUNT agent files${NC}"
    else
        echo -e "${RED}   ⚠ No agent files found${NC}"
    fi
else
    echo -e "${RED}   ⚠ Agent directory not found${NC}"
fi

# Copy command markdown files (forcefully overwrite)
echo -e "${YELLOW}📝 Installing command configuration files...${NC}"
if [ -d "./command" ]; then
    COMMAND_COUNT=$(ls -1 ./command/*.md 2>/dev/null | wc -l)
    if [ $COMMAND_COUNT -gt 0 ]; then
        cp -f ./command/*.md "$CONFIG_DIR/command/"
        echo -e "${GREEN}   ✓ Installed $COMMAND_COUNT command files${NC}"
    else
        echo -e "${RED}   ⚠ No command files found${NC}"
    fi
else
    echo -e "${RED}   ⚠ Command directory not found${NC}"
fi

# Copy root-level markdown files from .opencode (forcefully overwrite)
echo -e "${YELLOW}📝 Installing root configuration files...${NC}"
if [ -d "." ]; then
    ROOT_COUNT=$(ls -1 ./*.md 2>/dev/null | wc -l)
    if [ $ROOT_COUNT -gt 0 ]; then
        cp -f ./*.md "$CONFIG_DIR/"
        echo -e "${GREEN}   ✓ Installed $ROOT_COUNT root configuration files${NC}"
    else
        echo -e "${RED}   ⚠ No root configuration files found${NC}"
    fi
fi
echo ""

# Handle opencode.jsonc file (DO NOT overwrite if exists)
echo -e "${YELLOW}⚙️  Checking OpenCode configuration file...${NC}"
if [ -f "$JSONC_FILE" ]; then
    echo -e "${BLUE}   ℹ Configuration file already exists${NC}"
    echo -e "${BLUE}   → Skipping to preserve your existing settings${NC}"
    echo -e "${GREEN}   ✓ Existing configuration preserved${NC}"
else
    if [ -f ".opencode/opencode.jsonc.example" ]; then
        cp .opencode/opencode.jsonc.example "$JSONC_FILE"
        echo -e "${GREEN}   ✓ Created new configuration file from template${NC}"
    else
        echo -e "${RED}   ⚠ Template configuration file not found${NC}"
    fi
fi

echo ""
echo -e "${CYAN}╔═════════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║${NC}  ${BOLD}${GREEN}✨ Installation Complete!${NC}                                       ${CYAN}║${NC}"
echo -e "${CYAN}╚═════════════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${MAGENTA}🚀 OpenCode is ready to use!${NC}"
echo -e "${BLUE}   Configuration location:${NC} $CONFIG_DIR"
echo ""
