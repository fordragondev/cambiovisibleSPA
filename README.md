# Cambiovisible

Premium peptide product catalog single-page application by Lorena Caicedo. A modern, responsive website showcasing wellness and beauty peptide products with integrated e-commerce features.

## Tech Stack

- **SvelteKit 2** with Svelte 5 (runes-based syntax)
- **TypeScript** (strict mode)
- **Tailwind CSS 4** (Vite plugin)
- **Vite** build tool
- **adapter-auto** for deployment

## Features

- Mobile-first responsive design
- Sticky navigation with mobile menu
- 8 premium peptide products across 3 categories
- Product cards with Instagram integration
- FAQ accordion section
- WhatsApp QR code contact integration
- Smooth scroll navigation
- Lazy loading images
- Custom Tailwind theme with brand colors

## Product Categories

1. **Control de Peso** (Weight Control)
2. **Belleza & Rejuvenecimiento** (Beauty & Rejuvenation)
3. **Metabolismo & Energía** (Metabolism & Energy)

## Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Start with browser auto-open:

```bash
npm run dev -- --open
```

## Type Checking

Run type checks:

```bash
npm run check
```

Watch mode for type checking:

```bash
npm run check:watch
```

## Building

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── lib/
│   ├── components/        # Reusable Svelte components
│   ├── data/             # Product data and FAQs
│   └── types/            # TypeScript interfaces
├── routes/
│   ├── +layout.svelte    # Global layout with fonts
│   └── +page.svelte      # Main catalog page
├── app.css              # Tailwind config & design tokens
└── app.html             # HTML shell (lang="es")
```

## Configuration

Before deploying, update the following in `src/lib/data/products.ts`:

- WhatsApp contact number
- Instagram profile URL
- Email address
- Product image paths

## Deployment

This project uses `adapter-auto` which automatically detects your deployment platform. For specific platforms, install the appropriate adapter:

- **Vercel**: `@sveltejs/adapter-vercel`
- **Netlify**: `@sveltejs/adapter-netlify`
- **Static hosting**: `@sveltejs/adapter-static`

Update `svelte.config.js` with your chosen adapter.

## License

All rights reserved.
