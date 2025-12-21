import { motion } from 'framer-motion';
import { Home, ShoppingBag, Scan, CreditCard, QrCode } from 'lucide-react';

const Solution = () => {

  const steps = [
    {
      icon: Home,
      label: 'Reserve from Home',
      time: '30 sec',
      description: 'Browse catalog, select items',
      color: 'bg-accent-sage'
    },
    {
      icon: ShoppingBag,
      label: 'Walk In Store',
      time: '0 sec',
      description: 'Items ready in fitting room',
      color: 'bg-accent-terracotta'
    },
    {
      icon: Scan,
      label: 'Scan & Add',
      time: '5 sec',
      description: 'Scan items you want to buy',
      color: 'bg-accent-sage'
    },
    {
      icon: CreditCard,
      label: 'Self Checkout',
      time: '2 min',
      description: 'Pay with UPI in app',
      color: 'bg-accent-terracotta'
    },
    {
      icon: QrCode,
      label: 'Exit Verification',
      time: '30 sec',
      description: 'Show QR and walk out',
      color: 'bg-accent-charcoal'
    },
  ];

  return (
    <section className="py-32 md:py-40 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-terracotta/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full mx-auto px-6 md:px-12 xl:px-20 2xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-accent-charcoal mb-6">
            How it works
          </h2>
        </motion.div>

        {/* Vertical timeline on desktop, cards on mobile */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-sage via-accent-terracotta to-accent-charcoal hidden md:block transform -translate-x-1/2" />

          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
                    <div className="p-6 bg-gradient-to-br from-white to-cream-50 rounded-2xl border border-cream-300 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-accent-charcoal">
                            {step.label}
                          </h3>
                          <p className="text-xs sm:text-sm text-accent-sage font-semibold">
                            {step.time}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-stone-light">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center number badge */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-cream-200">
                      <span className="text-2xl font-bold text-accent-charcoal">{index + 1}</span>
                    </div>
                  </div>

                  {/* Empty space for balance on desktop */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Total time CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-accent-charcoal to-stone rounded-3xl shadow-2xl">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-cream-50 mb-2">
              Total: ~3 minutes
            </p>
            <p className="text-base sm:text-lg md:text-xl text-cream-200">
              vs 10-15 minutes traditional checkout
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
