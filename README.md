# ZeroCue Landing Page

A modern, elegant landing page for ZeroCue - the self-checkout platform reimagining retail shopping.

## Features

- Clean, minimalist design inspired by premium retail experiences
- Smooth scroll animations using Framer Motion
- Fully responsive layout (mobile, tablet, desktop)
- Aesthetic color palette with sage green and terracotta accents
- TypeScript for type safety
- Tailwind CSS for rapid styling

## Tech Stack

- **Framework:** React 19 + Vite 7
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (body), Space Grotesk (headings)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at http://localhost:5173/

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
zerocue-landing/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Hero section with animated visuals
│   │   ├── Features.tsx      # Feature cards grid
│   │   ├── HowItWorks.tsx    # Step-by-step process flow
│   │   └── Footer.tsx        # Footer with links
│   ├── App.tsx               # Main app component
│   ├── index.css             # Global styles & Tailwind directives
│   └── main.tsx              # App entry point
├── tailwind.config.js        # Tailwind configuration with custom colors
├── postcss.config.js         # PostCSS configuration
└── index.html                # HTML template
```

## Design System

### Color Palette

- **Cream:** Background tones (#FDFCFB to #D9D1C5)
- **Stone:** Text colors (#4A4A4A to #9E9E9E)
- **Accent Sage:** #9CAF88 (primary accent)
- **Accent Terracotta:** #C97B63 (secondary accent)
- **Accent Charcoal:** #2C2C2C (headings, dark elements)

### Typography

- **Headings:** Space Grotesk (modern, geometric)
- **Body:** Inter (clean, readable)

### Animation Patterns

- Fade-in on load
- Slide-up for section reveals
- Floating elements with gentle Y-axis movement
- Hover effects with scale and translate
- Scroll-triggered animations using Framer Motion's `useInView`

## Customization

### Changing Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      cream: { /* your colors */ },
      accent: { /* your colors */ },
    }
  }
}
```

### Adding Sections

Create a new component in `src/components/` and import it in `App.tsx`:

```tsx
import NewSection from './components/NewSection';

function App() {
  return (
    <div>
      {/* ... other sections */}
      <NewSection />
    </div>
  );
}
```

## Performance

- Vite for fast builds and HMR
- Tree-shaking for minimal bundle size
- Lazy loading for images (can be added)
- CSS purging via Tailwind

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT

## Credits

Design inspiration from Midori Gardens and modern retail experiences.
