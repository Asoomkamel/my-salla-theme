# My Custom Salla Theme

A custom Salla e-commerce theme built on the Twilight engine.

## Features

- Modern, responsive design
- RTL support (Arabic & English)
- Tailwind CSS styling
- Twig template engine
- Dark mode support
- Product cards with hover effects
- Shopping cart functionality
- Customer account pages
- Newsletter subscription
- Mobile-first approach

## Getting Started

### Prerequisites

- Node.js v22.18.0+ or v24.11.0+
- npm or pnpm
- Salla CLI (`npm install -g @salla.sa/cli`)
- Salla Partners account

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/my-salla-theme.git
cd my-salla-theme

# Install dependencies
pnpm install

# Login to Salla
salla login

# Preview the theme
salla theme preview
```

### Development

```bash
# Development mode with watch
pnpm watch

# Production build
pnpm production
```

## Theme Structure

```
my-salla-theme/
├── src/
│   ├── assets/
│   │   ├── js/          # JavaScript files
│   │   ├── styles/      # SCSS styles
│   │   └── images/      # Theme images
│   ├── locales/         # Translation files
│   │   ├── en.json      # English
│   │   └── ar.json      # Arabic
│   └── views/
│       ├── components/  # UI components
│       ├── layouts/     # Master layout
│       └── pages/       # Page templates
├── twilight.json         # Theme configuration
├── tailwind.config.js   # Tailwind CSS config
└── webpack.config.js    # Build configuration
```

## Customization

### Colors

Edit `tailwind.config.js` to change theme colors:

```javascript
colors: {
  'custom-primary': '#6366f1',
  'custom-secondary': '#8b5cf6',
}
```

### Features

Configure theme features in `twilight.json`:

```json
{
  "features": [
    "featured_products_style1",
    "latest_products",
    "brands"
  ]
}
```

## Deployment

1. Push changes to GitHub
2. Import theme in Salla Partners Portal
3. Preview and test in demo store
4. Submit for review

## Documentation

- [Salla Documentation](https://docs.salla.dev/)
- [Twilight Theme Guide](https://docs.salla.dev/doc-421877/)
- [Salla CLI Reference](https://docs.salla.dev/doc-429774/)

## License

MIT License - feel free to use for personal or commercial projects.
