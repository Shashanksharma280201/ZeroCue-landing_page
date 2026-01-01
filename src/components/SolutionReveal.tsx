import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Smartphone, Monitor, Zap, ShieldCheck, Sparkles } from 'lucide-react';
import { MacbookScroll } from './ui/MacbookScroll';

export const SolutionReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealStage, setRevealStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest > 0.2) setRevealStage(1);
      if (latest > 0.4) setRevealStage(2);
      if (latest > 0.6) setRevealStage(3);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.9]);

  return (
    <section
      ref={containerRef}
      id="solution-reveal"
      className="relative min-h-[200vh] bg-gradient-to-b from-white via-cream-50 to-white overflow-hidden"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-accent-sage/5 via-transparent to-transparent" />

        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 max-w-7xl mx-auto px-6"
        >
          {/* Stage 0: The word "Solution" emerges */}
          {revealStage === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', duration: 1.2 }}
                className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-accent-sage to-accent-terracotta rounded-full mb-8"
              >
                <Sparkles className="w-16 h-16 text-white" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-accent-sage via-accent-terracotta to-accent-charcoal bg-clip-text text-transparent"
              >
                The Solution
              </motion.h2>
            </motion.div>
          )}

          {/* Stage 1: ZeroCue introduction */}
          {revealStage === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring' }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="inline-block px-6 py-2 bg-accent-sage/10 rounded-full mb-4">
                  <span className="text-accent-sage font-medium">Introducing</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-bold text-accent-charcoal mb-6">
                  ZeroCue
                </h2>
                <p className="text-2xl md:text-3xl text-stone-light max-w-3xl mx-auto leading-relaxed">
                  A complete phygital platform that eliminates queues and transforms fashion retail
                </p>
              </motion.div>

              {/* Feature pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center justify-center gap-4 mt-12"
              >
                {[
                  { icon: Smartphone, label: 'Mobile Self-Checkout' },
                  { icon: Monitor, label: 'Smart POS Verification' },
                  { icon: Zap, label: 'Offline-First' },
                  { icon: ShieldCheck, label: 'Secure & Compliant' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
                    className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-accent-sage/30 rounded-full"
                  >
                    <feature.icon className="w-5 h-5 text-accent-sage" />
                    <span className="font-medium text-accent-charcoal">{feature.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Stage 2: How it works */}
          {revealStage === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center max-w-5xl mx-auto"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-charcoal mb-16">
                How It Works
              </h3>

              {/* Journey cards in a single column */}
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Scan Products',
                    description: 'Shoppers scan items with their phone to check sizes and prices',
                    icon: Smartphone,
                  },
                  {
                    step: '2',
                    title: 'Skip the Queue',
                    description: 'Self-checkout via mobile app with UPI payment integration',
                    icon: Zap,
                  },
                  {
                    step: '3',
                    title: 'Quick Verification',
                    description: 'Show QR receipt at exit for instant verification',
                    icon: ShieldCheck,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, type: 'spring' }}
                    className="relative bg-white border-2 border-cream-200 rounded-3xl p-8 hover:border-accent-sage/50 hover:shadow-2xl transition-all duration-300 group"
                  >
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-sage/5 to-accent-terracotta/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative flex items-center gap-8">
                      {/* Step number with icon */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-20 h-20 bg-gradient-to-br from-accent-sage to-accent-terracotta rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                            {item.step}
                          </div>
                          {/* Floating icon */}
                          <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                            className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-accent-sage/20"
                          >
                            <item.icon className="w-5 h-5 text-accent-sage" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-left">
                        <h4 className="text-2xl md:text-3xl font-bold text-accent-charcoal mb-3 group-hover:text-accent-sage transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-lg text-stone-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Arrow indicator (except for last item) */}
                      {index < 2 && (
                        <div className="hidden md:block absolute -bottom-6 left-1/2 -translate-x-1/2 z-10">
                          <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-8 h-8 bg-accent-sage rounded-full flex items-center justify-center text-white shadow-lg"
                          >
                            ↓
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 mt-16"
              >
                {[
                  { value: '< 2 min', label: 'Scan to Pay' },
                  { value: '30%', label: 'Faster Checkout' },
                  { value: '< 3 sec', label: 'Exit Verification' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-br from-accent-sage/10 to-accent-terracotta/10 rounded-2xl border border-accent-sage/20"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-accent-sage mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-stone">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Stage 3: MacBook showcase reveal */}
          {revealStage >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: 1 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-4xl font-bold text-accent-charcoal mb-4">
                  See It In Action
                </h3>
                <p className="text-xl text-stone-light">
                  Experience the complete shopping journey
                </p>
              </div>

              <MacbookScroll
                src="/mobile-app-showcase.png"
                showGradient={true}
                badge={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                  >
                    <div className="inline-block px-6 py-3 bg-accent-sage text-white rounded-full font-medium">
                      Scroll to explore detailed features below
                    </div>
                  </motion.div>
                }
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionReveal;
