# Game Developer Portfolio

A professional, minimalist portfolio website for showcasing game development work through full-screen images.

## Quick Start

### 1. Add Your Content
- Replace "Your Name" in `index.html` with your actual name
- Add your portfolio images to the `images/` folder
- Name them: `project-01.jpg`, `project-02.jpg`, etc.
- Update project titles and descriptions in `index.html`

### 2. Test Locally
Open `index.html` in your browser to preview

### 3. Deploy to GitHub Pages

#### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it (e.g., `portfolio` or `game-portfolio`)
4. Keep it **Public** (required for free GitHub Pages)
5. Don't initialize with README (you already have files)
6. Click **Create repository**

#### Step 2: Upload Your Files
1. In your new repository, click **uploading an existing file**
2. Drag and drop all files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `images/` folder with your images
3. Write commit message: "Initial portfolio upload"
4. Click **Commit changes**

#### Step 3: Enable GitHub Pages
1. In your repository, go to **Settings** tab
2. Scroll down to **Pages** section (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, select **main** (or master)
5. Select **/ (root)** folder
6. Click **Save**

#### Step 4: Access Your Site
- Wait 2-5 minutes for deployment
- Your site will be live at:
  `https://[your-username].github.io/[repository-name]/`
- GitHub will show the URL in the Pages settings

## Customization

### Adding More Projects
To add more than 6 projects, in `index.html`:
1. Copy a `<section>` block
2. Update the `data-index` number
3. Add corresponding `<div class="indicator-dot">` in nav
4. Update image filename

### Styling Changes
Edit `style.css` to customize:
- Colors: Change `#0a0a0a` (background) and `#ffffff` (text)
- Fonts: Update `font-family` in body
- Spacing: Adjust padding/margin values
- Animations: Modify transition timings

## Tips for Professional Presentation
- Use high-quality images (1920x1080 minimum)
- Keep file sizes optimized (under 500KB each)
- Maintain consistent aspect ratios
- Use descriptive but concise project titles
- Keep descriptions brief (1-2 sentences max)

## Browser Support
Works on all modern desktop browsers:
- Chrome
- Firefox
- Safari
- Edge

## Share Your Portfolio
Once deployed, share your GitHub Pages URL directly in:
- Job applications
- Email signatures
- LinkedIn
- Project proposals