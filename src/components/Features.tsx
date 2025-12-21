import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scan, Search, Clock, Sparkles, RotateCcw, ShoppingCart } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Size Finder',
    description: 'Instantly locate your perfect size across the entire store. Know exactly where each size is stocked, from floor racks to back rooms.',
  },
  {
    icon: Scan,
    title: 'Barcode Scanner',
    description: 'Simply scan any product with your phone to see details, check prices, and add items to your cart in seconds.',
  },
  {
    icon: Clock,
    title: 'Try & Reserve',
    description: 'Browse from home and reserve items to try in-store. Skip the search and head straight to the fitting room.',
  },
  {
    icon: ShoppingCart,
    title: 'Self Checkout',
    description: 'Complete your purchase instantly with UPI. No waiting in billing queues, no hassle.',
  },
  {
    icon: RotateCcw,
    title: 'Express Returns',
    description: 'Return items in under a minute. Scan your receipt, select items, and get instant refunds.',
  },
  {
    icon: Sparkles,
    title: 'Smart Cart',
    description: 'Your cart syncs across devices and remembers your preferences for a personalized shopping experience.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream-100/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-accent-charcoal mb-6">
            Everything you need
          </h2>
          <p className="text-xl text-stone-light max-w-2xl mx-auto">
            A complete self-checkout experience designed for fashion retail
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="h-full p-8 bg-white rounded-2xl border border-cream-300 hover:border-accent-sage transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-accent-sage/10 rounded-xl flex items-center justify-center group-hover:bg-accent-sage/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-accent-sage" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-accent-charcoal mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-stone-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
