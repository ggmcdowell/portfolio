# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimalist game developer portfolio website showcasing work through full-screen images with smooth scrolling and lazy loading. Built with vanilla JavaScript using modern browser features - no framework dependencies.

## Architecture

### Core Components

**Lazy Loading System** (script.js:7-48)
- Intersection Observer monitors image visibility with 100px rootMargin for preloading
- Two-stage loading: placeholder spinner → image load → fade-in animation
- Preloads next image when current section reaches 50% visibility threshold
- First image bypasses lazy loading for immediate visual impact (script.js:109-116)

**Navigation & Scrolling**
- CSS scroll-snap for precise full-screen section alignment (style.css:9)
- Dual observation system:
  - Image observer for lazy loading (rootMargin: 100px)
  - Section observer for visibility tracking (threshold: 0.5)
- Debounced scroll handler with 50ms timeout for indicator updates (script.js:94-107)
- Click-to-navigate dot indicators with smooth scrolling (script.js:88-92)

**Visual Hierarchy**
- Fixed header positioning (60px left, 40px top)
- Right-side scroll indicators (60px right, vertically centered)
- Bottom-left project metadata overlay with slide-up animation on visibility
- Gradient overlay for text legibility (style.css:157-170)

### State Management
- `currentSection` tracks active viewport section
- `visible` class triggers overlay animations
- `loaded` class controls image fade-in
- `active` class highlights current dot indicator

## Development Commands

No build process - open `index.html` directly in browser for development.

## Adding Portfolio Items

1. Add image as `images/project-XX.jpg` (maintain sequential numbering)
2. Insert new section in index.html:
   ```html
   <section class="portfolio-section" data-index="X">
       <img data-src="images/project-XX.jpg" alt="Project Name" class="portfolio-image">
       <div class="image-overlay">
           <h2 class="project-title">Project Name</h2>
           <p class="project-description">Brief description</p>
       </div>
   </section>
   ```
3. Add corresponding indicator dot:
   ```html
   <div class="indicator-dot" data-section="X"></div>
   ```

## Responsive Behavior

- Ultra-wide displays (21:9+): Images scale to 95vw max width
- Portrait screens (3:4): Images scale to 90vh max height
- Mobile (<768px): Reduced padding from 60px to 30px, smaller title font

## Performance Considerations

- Images should be optimized to under 500KB each
- Lazy loading reduces initial page load
- Preloading next image ensures smooth transitions
- CSS containment via object-fit prevents layout shifts

## Deployment

GitHub Pages ready - commit to main branch root, enable Pages from repository settings.