import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, RotateCcw } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Size Finder',
    metric: '4x faster',
    color: 'bg-accent-sage',
  },
  {
    icon: Calendar,
    title: 'Try & Reserve',
    metric: '4x conversion',
    color: 'bg-accent-terracotta',
  },
  {
    icon: RotateCcw,
    title: 'Express Returns',
    metric: '<1 min',
    color: 'bg-accent-charcoal',
  },
];

const KillerFeatures = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-accent-charcoal text-cream-50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-sage/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-terracotta/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 w-full mx-auto px-6 md:px-12 xl:px-20 2xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Key Features
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-accent-sage transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">
                    {feature.title}
                  </h3>

                  {/* Metric */}
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-accent-sage">
                      {feature.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KillerFeatures;
