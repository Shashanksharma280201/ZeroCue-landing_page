import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Search, XCircle, TrendingDown, Users, AlertCircle } from 'lucide-react';

const Problem = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="relative z-10 w-full mx-auto px-6 md:px-12 xl:px-20 2xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-accent-charcoal mb-6">
            The Problem
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Shoppers side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ y }}
          >
            <div className="text-center mb-8 sm:mb-12">
              <Users className="w-12 h-12 sm:w-16 sm:h-16 text-accent-terracotta mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-charcoal">Shoppers</h3>
            </div>

            <div className="space-y-6">
              <div className="text-center p-6 sm:p-8 bg-cream-50 rounded-3xl">
                <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-accent-terracotta mx-auto mb-3 sm:mb-4" />
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent-terracotta mb-2">6-10 min</div>
                <div className="text-xs sm:text-sm text-stone">Queue time</div>
              </div>

              <div className="text-center p-6 sm:p-8 bg-cream-50 rounded-3xl">
                <Search className="w-10 h-10 sm:w-12 sm:h-12 text-accent-terracotta mx-auto mb-3 sm:mb-4" />
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent-terracotta mb-2">40%</div>
                <div className="text-xs sm:text-sm text-stone">Time finding sizes</div>
              </div>

              <div className="text-center p-6 sm:p-8 bg-cream-50 rounded-3xl">
                <XCircle className="w-10 h-10 sm:w-12 sm:h-12 text-accent-terracotta mx-auto mb-3 sm:mb-4" />
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent-terracotta mb-2">30%</div>
                <div className="text-xs sm:text-sm text-stone">Wasted trips</div>
              </div>
            </div>
          </motion.div>

          {/* Stores side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          >
            <div className="text-center mb-8 sm:mb-12">
              <AlertCircle className="w-12 h-12 sm:w-16 sm:h-16 text-stone mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-charcoal">Stores</h3>
            </div>

            <div className="space-y-6">
              <div className="text-center p-6 sm:p-8 bg-cream-50 rounded-3xl">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-stone mx-auto mb-3 sm:mb-4" />
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone mb-2">60%</div>
                <div className="text-xs sm:text-sm text-stone-light">Staff on billing</div>
              </div>

              <div className="text-center p-6 sm:p-8 bg-cream-50 rounded-3xl">
                <TrendingDown className="w-10 h-10 sm:w-12 sm:h-12 text-stone mx-auto mb-3 sm:mb-4" />
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone mb-2">15-20%</div>
                <div className="text-xs sm:text-sm text-stone-light">Lost sales</div>
              </div>

              <div className="text-center p-6 sm:p-8 bg-cream-50 rounded-3xl">
                <XCircle className="w-10 h-10 sm:w-12 sm:h-12 text-stone mx-auto mb-3 sm:mb-4" />
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone mb-2">Zero</div>
                <div className="text-xs sm:text-sm text-stone-light">Size visibility</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
