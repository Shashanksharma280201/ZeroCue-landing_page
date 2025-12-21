import { motion } from 'framer-motion';
import { ArrowRight, Scan, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-accent-sage/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent-terracotta/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 w-full mx-auto px-6 py-24 md:px-12 xl:px-20 2xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-accent-charcoal leading-tight mb-6"
            >
              ZeroCue
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-accent-sage mb-4"
            >
              Fashion retail, reimagined
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-stone-light leading-relaxed max-w-xl"
            >
              Self-checkout for fashion stores. Find sizes, reserve, skip queues.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group px-8 py-4 bg-accent-charcoal text-cream-50 rounded-lg font-medium text-lg flex items-center justify-center gap-2 hover:bg-stone transition-colors duration-300">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-accent-charcoal text-accent-charcoal rounded-lg font-medium text-lg hover:bg-accent-charcoal hover:text-cream-50 transition-colors duration-300">
                For Retailers
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-cream-300"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent-charcoal">2 min</div>
                <div className="text-xs sm:text-sm text-stone-lighter">Avg checkout</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent-charcoal">30%</div>
                <div className="text-xs sm:text-sm text-stone-lighter">Faster</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent-charcoal">Zero</div>
                <div className="text-xs sm:text-sm text-stone-lighter">Queue time</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Animated visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Central phone mockup */}
              <motion.div
                className="relative z-20 w-72 h-[600px] bg-gradient-to-br from-cream-100 to-cream-200 rounded-[3rem] shadow-2xl border-8 border-cream-300 overflow-hidden"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 space-y-6">
                  <motion.div
                    className="w-40 h-40 bg-accent-sage/20 rounded-3xl flex items-center justify-center"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Scan className="w-20 h-20 text-accent-sage" />
                  </motion.div>
                  <div className="text-center space-y-2">
                    <div className="text-sm font-medium text-stone">Scan any item</div>
                    <div className="w-48 h-2 bg-accent-sage/30 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-accent-sage rounded-full"
                        animate={{
                          width: ["0%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-20 -left-8 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ShoppingBag className="w-12 h-12 text-accent-terracotta" />
              </motion.div>

              <motion.div
                className="absolute bottom-32 -right-8 w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-charcoal">₹0</div>
                  <div className="text-xs text-stone-lighter">Queue time</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-stone-lighter rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-stone-lighter rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
