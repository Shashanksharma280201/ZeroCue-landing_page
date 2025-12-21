import { motion } from 'framer-motion';
import { Monitor, Store, Zap, Plus, Equal } from 'lucide-react';

const Phygital = () => {

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-cream-50 relative overflow-hidden">
      <div className="relative z-10 w-full mx-auto px-6 md:px-12 xl:px-20 2xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-accent-charcoal mb-6">
            Phygital Shopping
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-stone-light max-w-3xl mx-auto">
            Physical + Digital
          </p>
        </motion.div>

        {/* Visual Formula */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
            {/* Online */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 max-w-xs"
            >
              <div className="p-8 bg-white rounded-3xl border-2 border-accent-sage shadow-lg">
                <Monitor className="w-16 h-16 text-accent-sage mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-accent-charcoal text-center mb-4">
                  Online
                </h3>
                <ul className="space-y-2 text-sm sm:text-base text-stone text-center">
                  <li>Browse from home</li>
                  <li>See all inventory</li>
                  <li>Compare & decide</li>
                </ul>
              </div>
            </motion.div>

            {/* Plus */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Plus className="w-12 h-12 text-stone-lighter hidden md:block" />
            </motion.div>

            {/* Offline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 max-w-xs"
            >
              <div className="p-8 bg-white rounded-3xl border-2 border-accent-terracotta shadow-lg">
                <Store className="w-16 h-16 text-accent-terracotta mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-accent-charcoal text-center mb-4">
                  Offline
                </h3>
                <ul className="space-y-2 text-sm sm:text-base text-stone text-center">
                  <li>Try before buy</li>
                  <li>Instant gratification</li>
                  <li>Touch & feel</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Equals */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-center mb-12"
          >
            <Equal className="w-12 h-12 text-stone-lighter mx-auto" />
          </motion.div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="p-10 bg-gradient-to-br from-accent-charcoal to-stone rounded-3xl shadow-2xl">
              <Zap className="w-20 h-20 text-accent-sage mx-auto mb-6" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cream-50 text-center mb-6">
                ZeroCue Phygital
              </h3>
              <div className="grid grid-cols-2 gap-4 text-cream-200 text-center">
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-accent-sage mb-1">2 min</div>
                  <div className="text-xs sm:text-sm">Checkout</div>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-accent-sage mb-1">Zero</div>
                  <div className="text-xs sm:text-sm">Queues</div>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-accent-sage mb-1">4x</div>
                  <div className="text-xs sm:text-sm">Faster</div>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-accent-sage mb-1">67%</div>
                  <div className="text-xs sm:text-sm">Time saved</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Phygital;
