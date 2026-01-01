import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Clock, Search, XCircle, TrendingDown, Users, AlertCircle, ChevronDown } from 'lucide-react';

interface ProblemStage {
  id: number;
  title: string;
  subtitle: string;
  icon: any;
  stat: string;
  statLabel: string;
  color: string;
  description: string;
  persona: 'shopper' | 'retailer';
}

const problemStages: ProblemStage[] = [
  {
    id: 1,
    title: 'The Queue Problem',
    subtitle: 'Waiting in Line',
    icon: Clock,
    stat: '6-10 min',
    statLabel: 'Average queue time',
    color: '#C4836B',
    description: 'Shoppers spend precious time waiting in checkout lines, especially during peak hours.',
    persona: 'shopper',
  },
  {
    id: 2,
    title: 'The Size Hunt',
    subtitle: 'Finding Your Size',
    icon: Search,
    stat: '40%',
    statLabel: 'Time spent searching',
    color: '#C4836B',
    description: 'Hunting for the right size across racks, stores, or asking staff repeatedly.',
    persona: 'shopper',
  },
  {
    id: 3,
    title: 'The Wasted Trip',
    subtitle: 'Out of Stock',
    icon: XCircle,
    stat: '30%',
    statLabel: 'Trips end empty-handed',
    color: '#C4836B',
    description: 'Arriving at the store only to find your size is out of stock.',
    persona: 'shopper',
  },
  {
    id: 4,
    title: 'The Staff Bottleneck',
    subtitle: 'Retailer Challenges',
    icon: Users,
    stat: '60%',
    statLabel: 'Staff tied to billing',
    color: '#6B7B66',
    description: 'Store staff stuck at counters instead of helping customers on the floor.',
    persona: 'retailer',
  },
  {
    id: 5,
    title: 'The Lost Sale',
    subtitle: 'Revenue Impact',
    icon: TrendingDown,
    stat: '15-20%',
    statLabel: 'Lost sales opportunity',
    color: '#6B7B66',
    description: 'Sales lost due to long queues, poor size visibility, and frustrated customers.',
    persona: 'retailer',
  },
];

export const ProblemNarrative = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest > 0.08 && !hasStarted) {
        setHasStarted(true);
      }

      // Progress through stages based on scroll
      // Adjusted calculation to ensure first stage (index 0) shows properly
      if (latest > 0.15 && latest < 0.9) {
        const progress = (latest - 0.15) / (0.9 - 0.15); // Normalize to 0-1 range
        const newStage = Math.min(
          Math.floor(progress * problemStages.length),
          problemStages.length - 1
        );
        setActiveStage(Math.max(0, newStage));
      } else if (latest <= 0.15 && hasStarted) {
        setActiveStage(0); // Ensure we show first stage when just started
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, hasStarted]);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section
      ref={containerRef}
      id="problem"
      className="relative min-h-[400vh] bg-gradient-to-b from-white via-cream-50 to-white"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 opacity-5"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #6B7B66 1px, transparent 0)',
              backgroundSize: '50px 50px',
            }}
          />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title sequence */}
          {!hasStarted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 text-stone-lighter mb-4"
              >
                <span>Scroll to begin</span>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold text-accent-charcoal mb-6">
                The Problem
              </h2>
              <p className="text-xl text-stone-light">
                A game of frustration, played daily by millions
              </p>
            </motion.div>
          )}

          {/* Problem stages */}
          {hasStarted && problemStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{
                opacity: activeStage === index ? 1 : 0,
                scale: activeStage === index ? 1 : 0.8,
                y: activeStage === index ? 0 : 50,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
              style={{ pointerEvents: activeStage === index ? 'auto' : 'none' }}
            >
              <div className="relative w-full max-w-6xl">
                {/* Stage card */}
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: activeStage === index ? [0, 3, -3, 0] : 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-14 overflow-hidden"
                  style={{
                    borderTop: `4px solid ${stage.color}`,
                  }}
                >
                  {/* Gradient background overlay */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      background: `linear-gradient(135deg, ${stage.color} 0%, transparent 100%)`
                    }}
                  />

                  {/* Content */}
                  <div className="relative">
                    {/* Header with subtitle and progress */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 lg:mb-10">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md"
                          style={{ backgroundColor: stage.color }}
                        >
                          {stage.id}
                        </div>
                        <span className="text-lg sm:text-xl font-semibold" style={{ color: stage.color }}>
                          {stage.subtitle}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        {problemStages.map((_, i) => (
                          <div
                            key={i}
                            className="rounded-full transition-all duration-300"
                            style={{
                              width: i === index ? '40px' : '10px',
                              height: '10px',
                              backgroundColor: i <= index ? stage.color : '#E5E5E5',
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Icon and Title Row */}
                    <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: activeStage === index ? 1 : 0, rotate: 0 }}
                        transition={{ type: 'spring', delay: 0.1 }}
                        className="flex-shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{
                          backgroundColor: `${stage.color}15`,
                          border: `2px solid ${stage.color}30`
                        }}
                      >
                        <stage.icon
                          className="w-12 h-12"
                          style={{ color: stage.color }}
                        />
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent-charcoal mb-4">
                          {stage.title}
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-stone-light leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </div>

                    {/* Stat Card */}
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: activeStage === index ? 1 : 0.9, opacity: activeStage === index ? 1 : 0 }}
                      transition={{ type: 'spring', delay: 0.2 }}
                      className="p-6 sm:p-8 rounded-2xl border-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      style={{
                        backgroundColor: `${stage.color}08`,
                        borderColor: `${stage.color}30`
                      }}
                    >
                      <div className="flex-1">
                        <div className="text-sm sm:text-base font-medium text-stone mb-2">{stage.statLabel}</div>
                        <div
                          className="text-4xl sm:text-5xl md:text-6xl font-bold"
                          style={{ color: stage.color }}
                        >
                          {stage.stat}
                        </div>
                      </div>

                      {/* Persona badge */}
                      <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-sm border border-cream-200">
                        {stage.persona === 'shopper' ? (
                          <>
                            <Users className="w-5 h-5 text-accent-terracotta" />
                            <span className="text-sm font-semibold text-accent-charcoal">
                              SHOPPER
                            </span>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="w-5 h-5 text-accent-sage" />
                            <span className="text-sm font-semibold text-accent-charcoal">
                              RETAILER
                            </span>
                          </>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProblemNarrative;
