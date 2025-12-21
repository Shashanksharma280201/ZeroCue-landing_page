import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Monitor, TrendingUp } from 'lucide-react';

const mvps = [
  {
    icon: Smartphone,
    title: 'Mobile App',
    status: '90%',
    color: 'accent-sage',
  },
  {
    icon: Monitor,
    title: 'Web POS',
    status: '85%',
    color: 'accent-terracotta',
  },
  {
    icon: TrendingUp,
    title: 'Platform',
    status: 'Ready',
    color: 'stone',
  },
];

const MVPs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-cream-50 to-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-accent-charcoal mb-6">
            The Platform
          </h2>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {mvps.map((mvp, index) => {
            const Icon = mvp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative p-8 bg-white rounded-3xl border-2 border-cream-300 hover:border-accent-sage hover:shadow-2xl transition-all duration-500">
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent-sage/20 to-accent-sage/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-6">
                    <Icon className="w-10 h-10 text-accent-sage" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-accent-charcoal mb-4 text-center">
                    {mvp.title}
                  </h3>

                  {/* Status */}
                  <div className="text-center">
                    <div className="inline-block px-4 py-2 bg-accent-sage/10 text-accent-sage text-lg font-bold rounded-full">
                      {mvp.status}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="px-10 py-4 bg-accent-charcoal text-cream-50 rounded-lg font-medium text-lg hover:bg-stone transition-colors duration-300 hover:shadow-xl">
            Schedule a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MVPs;
