import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { TextReveal } from './ui/TextReveal';
import { Monitor, QrCode, ShieldCheck, BarChart3, Camera, Wifi, WifiOff } from 'lucide-react';
import { motion } from 'framer-motion';

const POSShowcase = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-cream-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #6B7B66 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-terracotta/10 rounded-full mb-6">
            <Monitor className="w-4 h-4 text-accent-terracotta" />
            <span className="text-sm font-medium text-accent-terracotta">ZentroPOS for Retailers</span>
          </div>

          <TextReveal
            text="Empowering Store Operations with Smart Technology"
            className="mb-6 text-accent-charcoal"
          />

          <p className="text-xl text-stone-light max-w-3xl mx-auto leading-relaxed">
            A complete point-of-sale solution designed for fashion retail—featuring QR verification,
            real-time inventory sync, and robust offline support.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="mb-12">
          <BentoGridItem
            index={0}
            className="md:col-span-2"
            title="QR Receipt Verification"
            description="Instant verification at exit with camera or USB scanner. Validate purchases in under 3 seconds with visual confirmation and anti-fraud protection."
            icon={<QrCode className="w-6 h-6" />}
            header={
              <div className="relative w-full h-48 bg-gradient-to-br from-accent-sage/20 to-accent-terracotta/20 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                  >
                    <QrCode className="w-20 h-20 text-accent-charcoal" />
                  </motion.div>
                </div>
              </div>
            }
          />

          <BentoGridItem
            index={1}
            title="Multi-Scanner Support"
            description="Works with camera, USB barcode scanners, or manual entry. Auto-detects keyboard wedge mode for seamless integration."
            icon={<Camera className="w-6 h-6" />}
            header={
              <div className="relative w-full h-48 bg-gradient-to-br from-accent-charcoal/10 to-accent-sage/10 rounded-2xl flex items-center justify-center">
                <Camera className="w-16 h-16 text-accent-charcoal" />
              </div>
            }
          />

          <BentoGridItem
            index={2}
            title="Real-Time Inventory"
            description="Live product catalog sync with size/color variant tracking. Staff can check availability across the entire store instantly."
            icon={<BarChart3 className="w-6 h-6" />}
            header={
              <div className="relative w-full h-48 bg-gradient-to-br from-accent-terracotta/10 to-accent-sage/10 rounded-2xl overflow-hidden p-4">
                <div className="space-y-2">
                  {[70, 45, 90, 30].map((width, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${width}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-6 bg-accent-sage/40 rounded"
                    />
                  ))}
                </div>
              </div>
            }
          />

          <BentoGridItem
            index={3}
            className="md:col-span-2"
            title="Offline-First Architecture"
            description="Continues operating during internet outages with local caching. Automatic sync when connection restores—zero downtime for your store."
            icon={<WifiOff className="w-6 h-6" />}
            header={
              <div className="relative w-full h-48 bg-gradient-to-br from-accent-sage/20 to-accent-charcoal/20 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Wifi className="w-12 h-12 text-accent-sage" />
                  </motion.div>
                  <div className="w-px h-16 bg-stone-lighter" />
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <WifiOff className="w-12 h-12 text-accent-terracotta" />
                  </motion.div>
                </div>
              </div>
            }
          />

          <BentoGridItem
            index={4}
            title="Security & Compliance"
            description="Row-level security, JWT tokens with 24-hour expiry, and comprehensive audit trails for every transaction."
            icon={<ShieldCheck className="w-6 h-6" />}
            header={
              <div className="relative w-full h-48 bg-gradient-to-br from-accent-charcoal/10 to-accent-terracotta/10 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-16 h-16 text-accent-charcoal" />
              </div>
            }
          />
        </BentoGrid>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '< 3s', label: 'QR Verification Time' },
            { value: '24/7', label: 'Offline Support' },
            { value: '2-way', label: 'Real-time Sync' },
            { value: '100%', label: 'Secure Transactions' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-white border border-cream-200 rounded-xl"
            >
              <div className="text-3xl font-bold text-accent-sage mb-2">{stat.value}</div>
              <div className="text-sm text-stone-lighter">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default POSShowcase;
