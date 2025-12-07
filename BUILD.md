# Axivita Pharm - Build Instructions

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Development
```bash
npm run dev
```
- Starts dev server on http://localhost:3000
- Automatically opens browser
- Hot Module Replacement (HMR) enabled
- Source maps for CSS

### Production Build
```bash
npm run build
```
- Creates `dist/` folder with optimized files
- Minifies CSS and JavaScript
- Adds hashes to filenames for caching
- Optimizes HTML (removes comments, whitespace)

### Preview Build
```bash
npm run preview
```
- Starts local server to preview built project
- Available at http://localhost:4173

## 📁 Project Structure

```
novyrel/
├── index.html              # Main page
├── styles/                # CSS files
│   ├── main.css           # Common styles
│   ├── home.css           # Home page styles
│   ├── header.hbs         # Site header
│   └── footer.hbs         # Site footer
├── assets/                # Images and media
├── dist/                  # Built project (created automatically)
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies and scripts
```

## ⚙️ Vite Configuration

### Main Features:
- **Multi-page build**: All HTML files processed separately
- **Minification**: CSS and JS automatically minified
- **Hashing**: Filenames get hashes for caching
- **Templating**: Uses Handlebars for reusable components
- **Source maps**: For convenient debugging in dev mode

### Optimizations:
- CSS minification with Vite
- JavaScript minification with Terser
- HTML minification (removes comments, whitespace)
- Automatic separation of CSS and JS files into folders

## 🎨 Templating

Project uses Handlebars for creating reusable components:

### Usage in HTML:
```html
<!-- Insert variable -->
<h1>{{company.name}}</h1>

<!-- Insert partial template -->
{{> header}}

<!-- Conditional logic -->
{{#if isHomepage}}
  <a href="#">Homepage</a>
{{else}}
  <a href="../index.html">Homepage</a>
{{/if}}
```

## 📱 Responsive Design

All CSS files include media queries for:
- **Mobile devices**: up to 768px
- **Tablets**: 900px - 1200px
- **Desktop**: from 1200px

## 🔧 Production Setup

### For server deployment:
1. Run `npm run build`
2. Copy contents of `dist/` folder to server

### For GitHub Pages:
1. Run `npm run build:gh-pages`
2. Configure GitHub Actions for automatic deployment

## 🐛 Debugging

### Dev mode:
- Source maps enabled
- HMR for quick updates

### Production:
- All console.log automatically removed
- Code minified
- File sizes optimized

## 📦 Additional Features

### Adding new pages:
1. Create HTML file in `pages/` folder
2. Add it to `vite.config.js` in the `input` section
3. Create corresponding CSS file in `styles/`

### Adding JavaScript:
1. Create `.js` file
2. Import it in HTML: `<script type="module" src="./script.js"></script>`

### Image optimization:
- Use modern formats (WebP, AVIF)
- Optimize sizes before adding to project
- Consider using CDN for large images

## 🚀 Cache Busting Strategies

### Current Implementation (Query Parameters):
- Uses timestamp query parameters: `?v={{timestamp}}`
- Automatically generated on each build
- Forces browser to reload assets when content changes