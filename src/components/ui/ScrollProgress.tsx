import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'problem', label: 'Problem' },
  { id: 'phygital', label: 'Phygital' },
  { id: 'app', label: 'App' },
  { id: 'pos', label: 'POS' },
  { id: 'solution', label: 'Solution' },
  { id: 'cta', label: 'Get Started' },
];

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const sectionIndex = Math.min(
        Math.floor(latest * sections.length),
        sections.length - 1
      );
      setActiveSection(sectionIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-sage origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Section indicators - side navigation */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => {
              const element = document.getElementById(section.id);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Indicator dot */}
            <motion.div
              className="relative flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === index
                    ? 'bg-accent-sage scale-150'
                    : 'bg-stone-lighter hover:bg-accent-sage/50'
                }`}
              />
              {activeSection === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute w-6 h-6 rounded-full border-2 border-accent-sage"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>

            {/* Label tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-4 px-3 py-1.5 bg-accent-charcoal text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            >
              {section.label}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-l-8 border-l-accent-charcoal border-y-4 border-y-transparent" />
            </motion.div>
          </motion.button>
        ))}
      </div>

      {/* Current section indicator - bottom center (mobile) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-cream-200 flex items-center gap-2"
        >
          <span className="text-sm font-medium text-accent-charcoal">
            {sections[activeSection]?.label}
          </span>
          <div className="w-px h-4 bg-cream-300" />
          <span className="text-xs text-stone-lighter">
            {activeSection + 1}/{sections.length}
          </span>
        </motion.div>
      </div>
    </>
  );
};
