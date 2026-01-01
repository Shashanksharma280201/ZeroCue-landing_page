import { lazy, Suspense } from 'react';
import Hero from './components/Hero';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { SectionTransition } from './components/ui/SectionTransition';

// Lazy load components below the fold for better initial load performance
const ProblemNarrative = lazy(() => import('./components/ProblemNarrative'));
const TransitionBridge = lazy(() => import('./components/TransitionBridge'));
const SolutionReveal = lazy(() => import('./components/SolutionReveal'));
const Phygital = lazy(() => import('./components/Phygital'));
const AppShowcase = lazy(() => import('./components/AppShowcase'));
const POSShowcase = lazy(() => import('./components/POSShowcase'));
const Solution = lazy(() => import('./components/Solution'));
const ForStores = lazy(() => import('./components/ForStores'));
const CTA = lazy(() => import('./components/CTA'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full py-24 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-accent-sage/30 border-t-accent-sage rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen">
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Hero section - always loaded */}
      <div id="hero">
        <Hero />
      </div>

      {/* Game-like problem narrative */}
      <Suspense fallback={<SectionLoader />}>
        <ProblemNarrative />
      </Suspense>

      {/* Transition bridge */}
      <Suspense fallback={<SectionLoader />}>
        <TransitionBridge />
      </Suspense>

      {/* Dramatic solution reveal */}
      <Suspense fallback={<SectionLoader />}>
        <SolutionReveal />
      </Suspense>

      {/* Phygital explanation with transitions */}
      <Suspense fallback={<SectionLoader />}>
        <SectionTransition id="phygital" parallaxIntensity={30}>
          <Phygital />
        </SectionTransition>
      </Suspense>

      {/* Mobile app showcase */}
      <Suspense fallback={<SectionLoader />}>
        <SectionTransition id="app" parallaxIntensity={40}>
          <AppShowcase />
        </SectionTransition>
      </Suspense>

      {/* POS showcase */}
      <Suspense fallback={<SectionLoader />}>
        <SectionTransition id="pos" parallaxIntensity={35}>
          <POSShowcase />
        </SectionTransition>
      </Suspense>

      {/* Solution overview */}
      <Suspense fallback={<SectionLoader />}>
        <SectionTransition id="solution" parallaxIntensity={25}>
          <Solution />
        </SectionTransition>
      </Suspense>

      {/* Retailer benefits */}
      <Suspense fallback={<SectionLoader />}>
        <ForStores />
      </Suspense>

      {/* CTA section */}
      <Suspense fallback={<SectionLoader />}>
        <div id="cta">
          <CTA />
        </div>
      </Suspense>

      {/* Footer */}
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
