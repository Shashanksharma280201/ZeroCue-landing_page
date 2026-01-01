# ZeroCue Landing Page - Design v2

A luxury editorial-style landing page for ZeroCue with an immersive, game-like storytelling experience. Built with React, Vite, Tailwind CSS, and Framer Motion.

## What's New in Design v2

Design v2 transforms the landing page into a cinematic journey with:
- **Scroll Progress System**: Visual navigation with progress tracking
- **Game-Like Problem Narrative**: Interactive 5-level problem storytelling
- **Dramatic Solution Reveal**: 4-stage cinematic solution presentation
- **Seamless Transitions**: Parallax effects and smooth section flows

See [DESIGN_V2.md](./DESIGN_V2.md) for complete documentation.

## Features

### 🎨 Premium Design
- **Luxury Editorial Feel**: Refined gradients, high-end typography, and sophisticated color palette (sage, terracotta, charcoal)
- **Aceternity UI Components**: Custom-built premium components for interactive showcases
- **Spotlight Effects**: Dynamic animated backgrounds and visual depth
- **Responsive Design**: Optimized for all screen sizes from mobile to 4K displays

### ✨ Interactive Components

#### MacBook Scroll Showcase
- Displays mobile app screenshots inside an animated MacBook mockup
- Scroll-triggered 3D transformations (scale, rotation, opacity)
- Smart image loading with beautiful gradient placeholders
- Located in `AppShowcase.tsx`

#### Bento Grid Layout
- Premium card-based grid for POS feature display
- Staggered entrance animations
- Hover effects with gradient overlays
- Used in `POSShowcase.tsx`

#### Text Reveal Animations
- Word-by-word reveal on scroll
- Gradient text effects
- Opacity and scale transformations based on scroll position

### 🚀 Performance Optimizations

- **Lazy Loading**: All sections below the fold are code-split and lazy-loaded
- **React Suspense**: Smooth loading states with branded spinners
- **Smart Image Component**: Attempts to load real images, gracefully falls back to animated placeholders
- **Framer Motion**: Hardware-accelerated animations using transform-gpu

### 📱 Screenshot Management

The landing page uses a smart image system that:
1. Attempts to load screenshots from `/public` directory
2. Shows animated placeholders if images don't exist
3. Provides smooth transitions when images load

**Required Screenshots** (see `SCREENSHOTS_NEEDED.md`):
- `public/mobile-app-showcase.png` - Main mobile app composite
- `public/pos-dashboard.png` - POS verification interface

## Project Structure

```
landing/
├── src/
│   ├── components/
│   │   ├── ui/                        # Aceternity UI & Design v2 components
│   │   │   ├── MacbookScroll.tsx      # MacBook showcase component
│   │   │   ├── BentoGrid.tsx          # Premium grid layout
│   │   │   ├── TextReveal.tsx         # Scroll-based text animations
│   │   │   ├── Spotlight.tsx          # Animated background effects
│   │   │   ├── ImagePlaceholder.tsx   # Beautiful loading placeholders
│   │   │   ├── SmartImage.tsx         # Intelligent image loading
│   │   │   ├── ScrollProgress.tsx     # NEW: Progress tracker & navigation
│   │   │   └── SectionTransition.tsx  # NEW: Parallax section wrapper
│   │   ├── Hero.tsx                   # Landing hero with gradient tagline
│   │   ├── ProblemNarrative.tsx       # NEW: Game-like 5-level problem story
│   │   ├── SolutionReveal.tsx         # NEW: 4-stage cinematic reveal
│   │   ├── Phygital.tsx               # Phygital experience explanation
│   │   ├── AppShowcase.tsx            # Mobile app showcase
│   │   ├── POSShowcase.tsx            # POS system showcase
│   │   ├── Solution.tsx               # Solution overview
│   │   ├── ForStores.tsx              # Retailer benefits
│   │   ├── CTA.tsx                    # Call-to-action section
│   │   ├── LeadCapture.tsx            # Lead capture modal
│   │   └── Footer.tsx                 # Site footer
│   ├── lib/
│   │   └── utils.ts                   # Utility functions (cn helper)
│   ├── App.tsx                        # Main app with lazy loading & v2 structure
│   └── main.tsx                       # App entry point
├── public/                            # Static assets
├── DESIGN_V2.md                       # NEW: Complete Design v2 documentation
├── SCREENSHOTS_NEEDED.md              # Screenshot requirements guide
└── README.md                          # This file
```

## Section Flow

The landing page follows a carefully designed narrative journey:

1. **Hero** - Brand introduction with animated visuals and scroll prompt
2. **Problem Narrative** (NEW) - Interactive 5-level game revealing retail pain points
3. **Solution Reveal** (NEW) - 4-stage cinematic solution presentation
4. **Phygital** - Explanation of the phygital retail concept (with parallax)
5. **AppShowcase** - Mobile app features in MacBook Scroll component (with parallax)
6. **POSShowcase** - POS system features in Bento Grid layout (with parallax)
7. **Solution** - Complete solution overview (with parallax)
8. **ForStores** - Retailer-specific benefits
9. **CTA** - Final call-to-action with stats
10. **Footer** - Contact and legal information

**Scroll Progress**: Fixed navigation system tracks user position throughout journey.

## Development

### Setup
```bash
cd landing
npm install
npm run dev
```

Server runs on `http://localhost:5173` (or next available port)

### Build for Production
```bash
npm run build
npm run preview
```

### Technologies
- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Animation library
- **TypeScript** - Type safety
- **Lucide React** - Icon library

## Adding Real Screenshots

1. **Take Screenshots**
   - Mobile app: Complete shopping flow from scan to checkout
   - POS dashboard: Verification station interface

2. **Create Mockups** (Optional but recommended)
   - Use tools like Figma, Screely, or Mockup World
   - Place screenshots in device frames for professional look

3. **Export and Add**
   ```bash
   # Add files to public directory
   landing/public/mobile-app-showcase.png
   landing/public/pos-dashboard.png
   ```

4. **Refresh the Page**
   - SmartImage components will automatically load the new images
   - Placeholders will be replaced with real screenshots

## Customization

### Colors
Update Tailwind config to change the color palette:
```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'accent-sage': '#8B9D83',      // Primary green
      'accent-terracotta': '#C4836B', // Accent orange
      'accent-charcoal': '#3A3A3A',   // Dark text
    }
  }
}
```

### Animations
All animations are configured in component files using Framer Motion:
- Scroll triggers: `whileInView` with `viewport={{ once: true }}`
- Parallax: `useScroll` + `useTransform`
- Staggered delays: Incrementing `delay` values

### Content
All text content is inline in component files for easy editing:
- Hero tagline: `Hero.tsx:80`
- Section headings: Look for `TextReveal` or `<h2>` tags
- Stats and features: Component-specific arrays (e.g., `AppShowcase.tsx:63`)

## Lead Capture

The landing page includes a dual-mode lead capture system:

- **Shoppers**: "Get Started" button - joins waitlist
- **Retailers**: "For Retailers" and "Request Demo" buttons - partners form

Forms include:
- Name, Email (required)
- Phone, Company (retailers only)
- Message field
- Success animation with auto-close

Currently logs to console - integrate with your backend/CRM by updating `LeadCapture.tsx:28-38`

## Performance Tips

### Image Optimization
- Use WebP format for better compression
- Keep screenshot file sizes under 500KB
- Consider using a CDN for production

### Animation Performance
- All animations use CSS transforms (GPU-accelerated)
- `transform-gpu` class forces hardware acceleration
- Scroll effects use `will-change` for optimization

### Lazy Loading
- Hero loads immediately (above the fold)
- All other sections lazy-load as user scrolls
- Reduces initial bundle size by ~60%

## Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari 14+, Chrome Android
- **Features**: ES2020, CSS Grid, Flexbox, CSS Custom Properties

## Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Static Hosting
```bash
npm run build
# Upload 'dist' folder to your host
```

## Environment Variables

No environment variables required for landing page. All configuration is in code.

## Maintenance

### Updating Stats
Stats are hardcoded in component files. Search for:
- Queue time stats: `Problem.tsx`
- Feature stats: `AppShowcase.tsx`, `POSShowcase.tsx`
- CTA stats: `CTA.tsx:100-113`

### Adding Sections
1. Create component in `src/components/`
2. Add to `App.tsx` with lazy loading
3. Wrap in `<Suspense>` with `SectionLoader` fallback

### Troubleshooting
- **Animations not working**: Check Framer Motion version compatibility
- **Images not loading**: Verify files are in `/public` and paths are correct
- **Slow performance**: Check bundle size with `npm run build` and analyze
- **TypeScript errors**: Run `npm run type-check` (if configured)

## License

Proprietary - ZeroCue © 2025

---

**Built with ❤️ for fashion retail innovation**

For questions or support, contact the ZeroCue team.
