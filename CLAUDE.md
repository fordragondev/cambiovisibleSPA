# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

**Cambiovisiblec** - Premium peptide product catalog SPA by Lorena Caicedo. Showcases wellness and beauty peptides with e-commerce features.

**Tech Stack:**
- SvelteKit 2 with Svelte 5 (runes-based syntax)
- TypeScript (strict mode)
- Tailwind CSS 4 (Vite plugin)
- Vite build tool
- adapter-auto for deployment

## Development Commands

```bash
npm run dev              # Start dev server
npm run dev -- --open    # Dev server with auto-open browser
npm run check            # Type-check
npm run check:watch      # Type-check (watch mode)
npm run build            # Production build
npm run preview          # Preview production build
```

## Architecture

### SvelteKit Structure

- **`src/routes/`** - File-based routing (`+page.svelte`, `+layout.svelte`)
- **`src/lib/`** - Reusable components/utilities (accessible via `$lib` alias)
- **`src/app.html`** - HTML shell with SvelteKit placeholders
- **`static/`** - Static assets served from root

### Svelte 5 Runes Syntax

Always use modern Svelte 5 syntax:
- `$props()` instead of `export let`
- `$state()` for reactive state
- `{@render children()}` for slot content

### TypeScript

- Strict mode enabled
- `$lib` alias auto-configured
- Type definitions in `src/app.d.ts`

## Design System

### Styling Philosophy: Tailwind First

**ALWAYS prefer Tailwind utility classes over custom CSS.** Only create custom classes when Tailwind combinations become too verbose (5+ utilities).

#### Correct Approach (Tailwind utilities)
```svelte
<h2 class="font-serif text-3xl font-semibold text-brown text-center mb-10">
  Section Title
</h2>
```

#### Acceptable (when utilities are too verbose)
```svelte
<h2 class="section-title">Section Title</h2>
```

### Design Tokens (Custom Tailwind Theme)

#### Color Utilities

Available as both utility classes and CSS variables:

**Primary Colors:**
- `text-primary` / `bg-primary` - Gold (#daa520)
- `text-brown` / `bg-brown` - Main brown (#8b6f47)

**Beige/Background:**
- `bg-beige-light` - Light beige (#f5f0e8)
- `bg-beige` - Medium beige (#e8dcc8)
- `bg-beige-dark` - Dark beige (#d4c4a8)

**Text Colors:**
- `text-text-dark` - Dark text (#5a4a42)
- `text-text` - Standard text (#6b5d52)

**Promotion/Accent:**
- `text-promo` / `bg-promo` - Promotion red (#ff6b6b)

**Gradients:**
- `bg-gradient-gold` - Gold gradient
- `bg-gradient-beige` - Beige gradient

**Shadows:**
- `shadow-gold` - Gold shadow (medium)
- `shadow-gold-lg` - Gold shadow (large)

#### Typography

**Font Families:**
- `font-serif` - Cormorant Garamond (headings, elegant text)
- `font-sans` - Montserrat (body text, UI)

**When to use serif vs sans-serif:**
- Headings, product titles, hero text → `font-serif`
- Body text, labels, buttons, UI → `font-sans`

**Typography Utilities:**

Prefer Tailwind utilities (`text-3xl`, `font-semibold`, etc.), but these custom utilities are available for complex patterns:

- `.text-display` - Hero headlines (56px serif)
- `.text-heading-lg` - Large headings (40px serif)
- `.text-heading` - Section headings (32px serif)
- `.text-subheading` - Subheadings (24px)
- `.text-body-lg` - Large body (20px)
- `.text-body` - Base body (18px)
- `.text-body-sm` - Small body (16px)
- `.text-label` - Labels (14px, uppercase)
- `.text-elegant` - Italic serif accent

### Legacy Component Classes

These exist for backward compatibility but **prefer Tailwind utilities** for new code:

- `.section-title` - Centered serif heading with spacing
- `.section-title-sm` - Smaller variant
- `.display-xl` - Hero display text
- `.product-title` - Product card titles
- `.body-text`, `.body-text-lg`, `.body-text-sm` - Body text variants

**When to use component classes:**
- Reusing exact patterns from existing components
- When you need responsive behavior built-in (these classes include mobile breakpoints)

### Responsive Design

All component classes automatically scale down on mobile (`max-width: 768px`). When using Tailwind utilities, add mobile breakpoints explicitly:

```svelte
<h1 class="text-4xl md:text-6xl font-serif">
  <!-- 4xl on mobile, 6xl on desktop -->
</h1>
```

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Navigation.svelte       # Sticky nav with mobile menu
│   │   ├── Hero.svelte             # Landing section
│   │   ├── ProductCard.svelte      # Product display
│   │   ├── FAQSection.svelte       # Accordion FAQ
│   │   └── ContactSection.svelte   # WhatsApp QR & contact
│   ├── data/
│   │   └── products.ts             # Product data & FAQs
│   └── types/
│       └── product.ts              # TypeScript interfaces
├── routes/
│   ├── +layout.svelte              # Global layout with fonts
│   └── +page.svelte                # Main catalog page
├── app.css                         # Tailwind config & design tokens
└── app.html                        # HTML shell (lang="es")
```

## Branding & Assets

### Favicon (Browser Tab Icon)

**Location:** `static/favicon.svg` and `src/lib/assets/favicon.svg`

**Design:** Custom peptide molecule icon with the following elements:

- **Background:** Gold circular gradient (brand gold #daa520 → dark gold #b8860b)
- **Molecule Structure:** 5 white circles representing amino acids/atoms connected by brown bonds
  - 1 circle at top center
  - 2 circles in middle row (left and right)
  - 2 circles in bottom row (left and right)
  - Connected by brown lines (#8b6f47) in a tree-like molecular structure
- **Symbolism:**
  - Peptides: Connected circles represent amino acids linked together
  - Science: Clean, geometric design suggests precision and quality
  - Premium: Gold color conveys luxury and premium quality
  - Wellness: Molecular structure represents health, biology, and transformation

The icon is defined in `src/app.html` with:
```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
```

## Completed Features

- TypeScript data structures for products, categories, FAQs
- 8 peptide products with details (benefits, pricing, availability)
- Custom Tailwind theme with brand colors
- Google Fonts (Cormorant Garamond + Montserrat)
- Mobile-first responsive design
- Sticky navigation with mobile menu
- Product cards with Instagram integration
- FAQ accordion
- WhatsApp QR code contact section
- Smooth scroll navigation
- Lazy loading images

## Pending Tasks

### Required Before Launch

1. **Update Contact Info** in `src/lib/data/products.ts`:
   ```typescript
   instagram: 'https://instagram.com/cambiovisiblec',  //TODO add real Instagram
   email: 'contacto@cambiovisiblec.com'  // TODO Add real email
   ```

2. **Add Product Images**:
   - Create `static/images/products/` folder  
   - Add 8 product images: `retatrutide.jpg`, `tirzepatide.jpg`, `glow.jpg`, `most.jpg`, `ephitalon.jpg`, `cagri.jpg`, `lipo-c.jpg`, `5-amino.jpg`
   - Update Instagram post URLs for each product

3. **Configure Deployment**:
   - Choose adapter: `adapter-static`, `adapter-vercel`, or `adapter-netlify`
   - Update `svelte.config.js`

### Optional Enhancements

- Testimonials section
- Analytics integration (Google Analytics, Meta Pixel)
- Product search/filter
- Shopping cart functionality
- Admin panel for product management
- Image optimization with `@sveltejs/enhanced-img`
- Dark mode toggle
- Multi-language support (English/Spanish)
- Blog section

## 🎯 UX/UI Improvement Roadmap

### High Priority (Critical for Conversions)

1. **Add WhatsApp CTA to Product Cards** (`ProductCard.svelte`)
   - Users must scroll to contact section to inquire - major conversion friction
   - Add "Consultar disponibilidad" button with pre-filled WhatsApp message including product name

2. **Improve Price Visibility** (`ProductCard.svelte`) DONE
   - Price wraps awkwardly on mobile, inconsistent between single-price and variant products
   - Create dedicated pricing section with larger display and visual separation

3. **Make Instagram Links Discoverable on Mobile** (`ProductCard.svelte`)
   - Hover-only overlay doesn't work on touch devices
   - Add persistent Instagram icon badge visible always, not just on hover

4. **Add Active Navigation States** (`Navigation.svelte`)
   - Users can't tell which section they're viewing
   - Implement scroll-spy with active state highlighting on nav links

5. **Add Loading States** (All components)
   - No feedback on interactions, especially on slower connections
   - Add skeleton loaders for images, smooth transitions for navigation

6. **Better Handling for Coming Soon Products** (`ProductCard.svelte`, `+page.svelte`)
   - Full product display with no action available creates frustration
   - Add "Notify me when available" feature or distinct visual treatment (opacity, watermark)

7. **Fix Promotion Badge Positioning** (`ProductCard.svelte`)
   - Negative top positioning can cause badge cut-off in grid layout
   - Position inside card boundary with ribbon-style design

### Medium Priority (User Experience Enhancements)

8. **Clarify Hero CTA Hierarchy** (`Hero.svelte`)
   - Two equal-weight CTAs split user attention
   - Make "Explorar Productos" dominant, "Contáctame" secondary (outlined style)

9. **Hide QR Code on Mobile** (`ContactSection.svelte`)
   - QR code pointless on mobile (can't scan from same device)
   - Hide on viewports < 768px, make WhatsApp button more prominent

10. **Add Visual Distinction Between Categories** (`+page.svelte`) DONE
    - Categories blend together, hard to scan
    - Add subtle background color variation, increase spacing, consider sticky category nav

11. **Improve Benefits List Presentation** (`ProductCard.svelte`)
    - Benefits list too dense and hard to scan
    - Increase spacing, use contextual icons instead of checkmarks, consider "See more" expansion

12. **Add Trust Signals** (Multiple components)
    - No certifications, guarantees, or social proof visible
    - Add "99.9% purity certified" badges, certification logos, customer testimonials

13. **Make Promotion Details More Scannable** (`ProductCard.svelte`)
    - Scarcity indicators buried in paragraph text
    - Move to top, use bold numbers, add visual progress indicator

14. **Standardize WhatsApp Button Styling** (`Navigation.svelte`, `ContactSection.svelte`, `Hero.svelte`)
    - Inconsistent WhatsApp CTA styling across components
    - Use same colors, SVG icon (not emoji), consistent hover states

15. **Add FAQ Search/Filter** (`FAQSection.svelte`)
    - Not scalable as FAQ list grows
    - Add text filter input with real-time search

### Low Priority (Polish & Future Enhancements)

16. **Add Micro-Interactions** (All components)
    - Add stagger animations for product grid, smooth easing on scroll, FAQ slide+fade

17. **Strengthen Typography Hierarchy** (`ProductCard.svelte`, `Hero.svelte`) DONE
    - Increase contrast between heading levels, use different font weights

18. **Accessibility Improvements** (All components)
    - Audit color contrast (WCAG AA), add ARIA labels, improve focus states, test keyboard navigation

19. **Social Proof Integration** (`Hero.svelte`, `ContactSection.svelte`)
    - Embed Instagram feed widget, show follower count, display recent testimonials

20. **Mobile Touch Target Optimization** (All interactive elements) DONE 
    - Ensure minimum 44x44px tap targets for all buttons/links

21. **Performance Optimization** (`ProductCard.svelte`)
    - Implement responsive images (srcset), WebP format, blur-up placeholders, lazy loading

22. **Add "Back to Top" Button** (Global) DONE
    - Sticky button appears after scrolling past hero section

### Quick Wins (High Impact, Low Effort)

These can be implemented in a single session:
- Hide QR code on mobile (CSS media query)
- Add persistent Instagram badge on product images
- Increase benefits list spacing (adjust padding/line-height)
- Add "Back to top" button with smooth scroll
- Standardize WhatsApp button colors across components
- Add loading spinner to WhatsApp/Instagram links

### Implementation Timeline

**Week 1 (Critical Conversions):**
1. WhatsApp CTA buttons on product cards
2. Price visibility improvements
3. Instagram indicator always visible
4. Loading states for user feedback

**Week 2 (User Experience):**
5. Active navigation states (scroll-spy)
6. Coming-soon product handling
7. Trust signals (certification badges)
8. Mobile QR code optimization

**Week 3 (Polish):**
9. Animations & micro-interactions
10. Accessibility improvements (ARIA, keyboard nav, contrast)
11. Testimonials section
12. Performance optimization (images, lazy loading)

## Key Implementation Notes

### Product Images & Instagram
- Product images clickable → link to Instagram posts
- Hover overlay shows "Ver en Instagram"
- Lazy loading enabled
- Replace placeholder paths with actual images

### WhatsApp Integration
- QR code auto-generated via `qrserver.com` API
- Updates automatically when phone number changes
- Direct WhatsApp link for mobile users

### Categories
Three product categories:
1. **Control de Peso** (Weight Control): RETATRUTIDE, TIRZEPATIDE
2. **Belleza & Rejuvenecimiento** (Beauty): GLOW, MOST, EPHITALON
3. **Metabolismo & Energía** (Metabolism): CAGRI, LIPO-C, 5-AMINO

### Styling Best Practices

1. **Prefer Tailwind Utilities:**
   ```svelte
   <!-- Good: Tailwind utilities -->
   <div class="bg-beige-light p-6 rounded-lg shadow-gold">
     <h3 class="font-serif text-2xl text-brown mb-4">Title</h3>
     <p class="text-base text-text-dark">Body text</p>
   </div>
   ```

2. **Use Custom Classes Sparingly:**
   ```svelte
   <!-- Only when Tailwind becomes too verbose -->
   <h2 class="section-title">My Section</h2>
   ```

3. **CSS Variables for Advanced Customization:**
   ```css
   /* Component-specific styles when needed */
   .custom-element {
     font-family: var(--font-serif);
     color: var(--color-brown);
     font-size: var(--font-size-2xl);
   }
   ```

4. **Mobile Responsiveness:**
   ```svelte
   <div class="px-4 md:px-8 py-8 md:py-16">
     <h1 class="text-3xl md:text-5xl">Responsive</h1>
   </div>
   ```

## Configuration Notes

- **Tailwind CSS 4** integrated via `@tailwindcss/vite` plugin
- **Preloading:** `data-sveltekit-preload-data="hover"` for faster navigation
- **Adapter:** Currently `adapter-auto` (auto-detects deployment platform)
- **Language:** Spanish (`lang="es"` in `app.html`)
