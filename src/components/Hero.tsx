import { motion } from 'framer-motion';
import { ArrowRight, Scan, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import LeadCapture from './LeadCapture';
import { Spotlight } from './ui/Spotlight';
import { TextRevealGradient } from './ui/TextReveal';

const Hero = () => {
  const [isLeadCaptureOpen, setIsLeadCaptureOpen] = useState(false);
  const [leadCaptureType, setLeadCaptureType] = useState<'retailer' | 'shopper'>('shopper');

  const handleGetStarted = () => {
    setLeadCaptureType('shopper');
    setIsLeadCaptureOpen(true);
  };

  const handleForRetailers = () => {
    setLeadCaptureType('retailer');
    setIsLeadCaptureOpen(true);
  };

  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
      {/* Spotlight Effect */}
      <Spotlight className="top-0 left-0" fill="#8B9D83" />

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
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-accent-charcoal leading-tight mb-6"
            >
              ZeroCue
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-4"
            >
              <TextRevealGradient className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
                Fashion retail, reimagined
              </TextRevealGradient>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-stone-light leading-relaxed max-w-xl"
            >
              Self-checkout for fashion stores. Find sizes, reserve, skip queues.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleGetStarted}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-accent-charcoal text-cream-50 rounded-lg font-medium text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-stone transition-colors duration-300"
              >
                Get Started
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleForRetailers}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent-charcoal text-accent-charcoal rounded-lg font-medium text-base sm:text-lg hover:bg-accent-charcoal hover:text-cream-50 transition-colors duration-300"
              >
                For Retailers
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-cream-300"
            >
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-charcoal">2 min</div>
                <div className="text-xs sm:text-sm text-stone-lighter">Avg checkout</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-charcoal">30%</div>
                <div className="text-xs sm:text-sm text-stone-lighter">Faster</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-charcoal">Zero</div>
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
                className="relative z-20 w-80 h-[640px] rounded-[3.5rem] shadow-2xl overflow-hidden"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Phone frame */}
                <div className="absolute inset-0 bg-gradient-to-b from-stone-800 to-stone-900 p-3">
                  {/* Screen */}
                  <div className="relative h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/5 to-transparent z-10 flex items-center justify-between px-6 pt-2">
                      <span className="text-xs font-semibold text-accent-charcoal">9:41</span>
                      <div className="flex items-center gap-1">
                        {/* Signal bars */}
                        <svg className="w-4 h-3" viewBox="0 0 16 12" fill="none">
                          <rect x="0" y="8" width="2" height="4" rx="0.5" fill="#3A3A3A" opacity="0.6"/>
                          <rect x="4" y="5" width="2" height="7" rx="0.5" fill="#3A3A3A" opacity="0.8"/>
                          <rect x="8" y="2" width="2" height="10" rx="0.5" fill="#3A3A3A"/>
                          <rect x="12" y="0" width="2" height="12" rx="0.5" fill="#3A3A3A"/>
                        </svg>
                        {/* WiFi icon */}
                        <svg className="w-4 h-3" viewBox="0 0 16 12" fill="none">
                          <path d="M8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z" fill="#3A3A3A"/>
                          <path d="M8 8C9.10457 8 10 8.89543 10 10H6C6 8.89543 6.89543 8 8 8Z" fill="#3A3A3A" opacity="0.8"/>
                          <path d="M8 4C10.7614 4 13 6.23858 13 9H11C11 7.34315 9.65685 6 8 6C6.34315 6 5 7.34315 5 9H3C3 6.23858 5.23858 4 8 4Z" fill="#3A3A3A" opacity="0.6"/>
                        </svg>
                        {/* Battery icon */}
                        <svg className="w-6 h-3" viewBox="0 0 24 12" fill="none">
                          <rect x="0" y="2" width="20" height="8" rx="2" stroke="#3A3A3A" strokeWidth="1.5" fill="none"/>
                          <rect x="2" y="4" width="14" height="4" rx="1" fill="#8B9D83"/>
                          <rect x="20" y="4" width="2" height="4" rx="1" fill="#3A3A3A"/>
                        </svg>
                      </div>
                    </div>

                    {/* App content */}
                    <div className="absolute inset-0 flex flex-col pt-16 pb-6 px-4 bg-gradient-to-b from-cream-50 to-white">
                      {/* Header */}
                      <div className="mb-4 sm:mb-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-accent-charcoal mb-1">ZeroCue</h3>
                        <p className="text-xs text-stone-light">Shopping at Fashion Store</p>
                      </div>

                      {/* Scan interface */}
                      <motion.div
                        className="flex-1 flex flex-col items-center justify-center mb-6"
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="relative w-48 h-48 bg-gradient-to-br from-accent-sage/20 to-accent-terracotta/20 rounded-3xl flex items-center justify-center mb-4 border-2 border-accent-sage/30">
                          {/* Scanning beam effect */}
                          <motion.div
                            className="absolute inset-0 rounded-3xl"
                            style={{
                              background: 'linear-gradient(180deg, transparent 0%, rgba(139, 157, 131, 0.1) 50%, transparent 100%)',
                            }}
                            animate={{
                              y: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          <Scan className="w-24 h-24 text-accent-sage relative z-10" />
                        </div>
                        <p className="text-sm font-semibold text-accent-charcoal mb-2">Ready to Scan</p>
                        <p className="text-xs text-stone-light text-center max-w-[200px]">
                          Point camera at product barcode
                        </p>

                        {/* Animated scanning indicator */}
                        <motion.div
                          className="mt-4 w-40 h-1.5 bg-gradient-to-r from-transparent via-accent-sage/30 to-transparent rounded-full overflow-hidden relative"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <motion.div
                            className="absolute h-full w-16 bg-gradient-to-r from-transparent via-accent-sage to-transparent rounded-full shadow-lg"
                            style={{
                              filter: 'blur(2px)',
                            }}
                            animate={{
                              x: ['-100%', '150%'],
                            }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>
                      </motion.div>

                      {/* Bottom actions */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between px-4 py-3 bg-white rounded-xl border border-accent-sage/20 shadow-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-accent-sage/10 flex items-center justify-center">
                              <ShoppingBag className="w-4 h-4 text-accent-sage" />
                            </div>
                            <span className="text-xs font-medium text-accent-charcoal">0 items</span>
                          </div>
                          <span className="text-sm font-bold text-accent-sage">₹0</span>
                        </div>
                        <button className="w-full py-3.5 bg-gradient-to-r from-accent-sage to-accent-terracotta text-white rounded-xl text-sm font-bold shadow-xl hover:shadow-2xl transition-shadow">
                          Start Scanning
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-stone-900 rounded-b-3xl z-20"></div>
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

    {/* Lead Capture Modal */}
    <LeadCapture
      isOpen={isLeadCaptureOpen}
      onClose={() => setIsLeadCaptureOpen(false)}
      type={leadCaptureType}
    />
    </>
  );
};

export default Hero;
