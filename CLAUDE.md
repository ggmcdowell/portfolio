# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimalist game developer portfolio website designed for showcasing work through full-screen images with smooth scrolling and lazy loading. The portfolio uses vanilla JavaScript with modern browser features.

## Architecture

### Core Structure
- **Single-page application** with full-screen sections for each portfolio piece
- **Lazy loading system** using Intersection Observer API for performance
- **Smooth scroll-snap navigation** with visual indicators
- **No build process required** - runs directly in browser

### Key Components

**Image Loading Strategy**:
- Uses `data-src` attributes for lazy loading (script.js:11-37)
- Preloads next image when current section becomes visible (script.js:59-67)
- First image loads immediately for instant visual feedback (script.js:109-116)

**Navigation System**:
- Scroll-snap CSS for precise section alignment (style.css:9)
- Dot indicators with click-to-navigate functionality (script.js:88-92)
- Automatic indicator updates based on scroll position (script.js:94-107)

## Development Tasks

### Testing
Open `index.html` directly in any modern browser - no server required.

### Adding Portfolio Items
1. Add image to `images/` folder named `project-XX.jpg`
2. Add new `<section>` in index.html with incremented `data-index`
3. Add corresponding `<div class="indicator-dot">` to navigation

### Deployment
The site is designed for GitHub Pages deployment. Files should be committed directly to the repository root, and GitHub Pages should be configured to serve from the main branch.

## Image Requirements
- Name format: `project-01.jpg`, `project-02.jpg`, etc.
- Recommended: 1920x1080 minimum resolution
- Keep under 500KB for optimal loading performance