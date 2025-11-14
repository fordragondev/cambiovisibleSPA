# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SvelteKit single-page application (SPA) for **Cambiovisiblec** - a premium peptide product catalog by Lorena Caicedo. The site showcases a collection of wellness and beauty peptides with e-commerce features.

### Tech Stack:
- **SvelteKit 2** with Svelte 5 (modern runes-based syntax)
- **TypeScript** with strict mode enabled
- **Tailwind CSS 4** (latest version with Vite plugin)
- **Vite** as the build tool
- **adapter-auto** for deployment flexibility

## Development Commands

```bash
# Start development server
npm run dev

# Start dev server with browser auto-open
npm run dev -- --open

# Type-check without building
npm run check

# Type-check in watch mode
npm run check:watch

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture and Structure

### SvelteKit Conventions

This project follows standard SvelteKit file-based routing:

- **`src/routes/`** - File-based routing (e.g., `+page.svelte` for pages, `+layout.svelte` for layouts)
- **`src/lib/`** - Reusable components and utilities (accessible via `$lib` alias)
- **`src/app.html`** - HTML shell with `%sveltekit.head%` and `%sveltekit.body%` placeholders
- **`static/`** - Static assets served from root (e.g., `robots.txt`)

### Svelte 5 Specifics

This project uses **Svelte 5 runes syntax**:
- Use `$props()` for component props instead of `export let`
- Use `$state()` for reactive state
- Use `{@render children()}` for slot content
- Example in `src/routes/+layout.svelte:4`

### TypeScript Configuration

TypeScript extends from `.svelte-kit/tsconfig.json` (auto-generated) with:
- Strict mode enabled
- `$lib` alias handled by SvelteKit configuration
- Type definitions in `src/app.d.ts` for extending SvelteKit's `App` namespace

### Tailwind CSS Integration

Tailwind CSS 4 is integrated via `@tailwindcss/vite` plugin. The Vite config (`vite.config.ts:5`) loads Tailwind through the SvelteKit plugin chain.

## Key Implementation Notes

### Adapter Configuration

Currently using `@sveltejs/adapter-auto` which auto-detects deployment platform. For specific deployment targets (Vercel, Netlify, Node, static), you may need to switch adapters - see `svelte.config.js:14`.

### Preloading Strategy

The app uses `data-sveltekit-preload-data="hover"` in `src/app.html:8`, which preloads page data on hover for faster navigation.

## 🎨 Design System

### Color Palette (Tailwind CSS 4 Custom Theme)
- **Primary Gold**: `#daa520` (--color-primary)
- **Brown**: `#8b6f47` (--color-brown)
- **Beige**: `#f5f0e8`, `#e8dcc8`, `#d4c4a8`
- **Text**: `#5a4a42`, `#6b5d52`
- **Promotion Red**: `#ff6b6b`, `#ee5a6f`

### Typography
- **Headings**: Cormorant Garamond (serif)
- **Body**: Montserrat (sans-serif)

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Navigation.svelte       ✅ Sticky mobile-first nav
│   │   ├── Hero.svelte             ✅ Landing section
│   │   ├── ProductCard.svelte      ✅ Product display with Instagram link
│   │   ├── FAQSection.svelte       ✅ Accordion-style FAQ
│   │   └── ContactSection.svelte   ✅ WhatsApp QR code & contact
│   ├── data/
│   │   └── products.ts             ✅ Product catalog data & FAQs
│   └── types/
│       └── product.ts              ✅ TypeScript interfaces
├── routes/
│   ├── +layout.svelte              ✅ Global layout with fonts
│   └── +page.svelte                ✅ Main catalog page
├── app.css                         ✅ Tailwind config & custom styles
└── app.html                        ✅ HTML shell (lang="es")
```

## ✅ Completed Features

### Core Functionality
- ✅ TypeScript data structure for products, categories, FAQs
- ✅ 8 peptide products with full details (benefits, pricing, availability)
- ✅ Custom Tailwind CSS 4 theme with brand colors
- ✅ Google Fonts integration (Cormorant Garamond + Montserrat)
- ✅ Mobile-first responsive design
- ✅ SEO meta tags (Spanish language)

### Components
- ✅ **Navigation**: Sticky header with mobile menu, WhatsApp CTA
- ✅ **Hero**: Brand landing with CTA buttons
- ✅ **Product Cards**: Display with hover effects, Instagram links on images
- ✅ **Product Catalog**: Organized by 3 categories (Weight Control, Beauty, Metabolism)
- ✅ **FAQ Section**: Accordion with "Coming Soon" notice for out-of-stock items
- ✅ **Contact Section**: Auto-generated WhatsApp QR code, social links

### Features
- ✅ Promotion badges (RETATRUTIDE special offer)
- ✅ Availability badges (Low stock, Coming soon)
- ✅ Price variants (TIRZEPATIDE 10mg/20mg)
- ✅ Instagram overlay on product image hover
- ✅ Smooth scroll navigation
- ✅ WhatsApp deep linking
- ✅ Lazy loading images

## 🚧 Pending Tasks

### Required Before Launch
1. **Update Contact Info** in `src/lib/data/products.ts:4-7`:
   ```typescript
   whatsapp: '+57XXXXXXXXXX',  // Add real WhatsApp number
   instagram: 'https://instagram.com/cambiovisiblec',  // Add real Instagram
   email: 'contacto@cambiovisiblec.com'  // Add real email
   ```

2. **Add Product Images**:
   - Create `static/images/products/` folder
   - Add 8 product images: `retatrutide.jpg`, `tirzepatide.jpg`, `glow.jpg`, `most.jpg`, `ephitalon.jpg`, `cagri.jpg`, `lipo-c.jpg`, `5-amino.jpg`
   - Update Instagram post URLs for each product in `products.ts`

3. **Configure Deployment**:
   - Choose adapter: `adapter-static`, `adapter-vercel`, or `adapter-netlify`
   - Update `svelte.config.js:14`

### Optional Enhancements
- [ ] Testimonials section
- [ ] Analytics integration (Google Analytics, Meta Pixel)
- [ ] Product search/filter functionality
- [ ] Shopping cart functionality
- [ ] Admin panel for product management
- [ ] Image optimization with `@sveltejs/enhanced-img`
- [ ] Dark mode toggle
- [ ] Multi-language support (English/Spanish)
- [ ] Blog section for wellness tips

## 🔧 Key Implementation Notes

### Product Images & Instagram
- Product images are clickable and link to Instagram posts
- Hover overlay shows "Ver en Instagram" message
- Images use lazy loading for performance
- Currently using placeholder paths - replace with actual images

### WhatsApp Integration
- QR code auto-generated using `qrserver.com` API
- QR code updates automatically when phone number changes
- Direct WhatsApp link button included for mobile users

### Categories
The catalog has 3 product categories:
1. **Control de Peso** (Weight Control): RETATRUTIDE, TIRZEPATIDE
2. **Belleza & Rejuvenecimiento** (Beauty & Rejuvenation): GLOW, MOST, EPHITALON
3. **Metabolismo & Energía** (Metabolism & Energy): CAGRI, LIPO-C, 5-AMINO

### Data Source
Original catalog: `assets/catalogo_peptidos_2025.html`