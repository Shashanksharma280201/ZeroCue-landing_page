import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, ScanBarcode, CreditCard, Check } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    number: '01',
    title: 'Download & Browse',
    description: 'Get the app and explore products from the comfort of your home. Reserve items you want to try.',
  },
  {
    icon: ScanBarcode,
    number: '02',
    title: 'Scan in Store',
    description: 'Walk in and scan product barcodes. Check sizes, read details, and add items to your cart instantly.',
  },
  {
    icon: CreditCard,
    number: '03',
    title: 'Checkout with UPI',
    description: 'Pay securely through the app with UPI. No billing counters, no waiting in line.',
  },
  {
    icon: Check,
    number: '04',
    title: 'Show & Exit',
    description: 'Present your QR receipt at the exit for quick verification. Walk out in seconds.',
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-accent-charcoal mb-6">
            How it works
          </h2>
          <p className="text-xl text-stone-light max-w-2xl mx-auto">
            Four simple steps to a faster shopping experience
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Connection line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-sage via-accent-terracotta to-accent-sage hidden md:block" />

          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
                    <div className="inline-block mb-4">
                      <span className="text-6xl md:text-7xl font-bold text-accent-sage/20">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-accent-charcoal mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-stone-light max-w-md">
                      {step.description}
                    </p>
                  </div>

                  {/* Center icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-cream-200"
                    >
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-accent-sage" />
                    </motion.div>
                  </div>

                  {/* Empty space for balance */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <button className="group px-10 py-5 bg-accent-charcoal text-cream-50 rounded-lg font-medium text-lg hover:bg-stone transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            Start Shopping Smarter
            <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
