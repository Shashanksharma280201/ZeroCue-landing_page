import { MacbookScroll } from './ui/MacbookScroll';
import { TextReveal } from './ui/TextReveal';
import { Sparkles, Smartphone, Zap } from 'lucide-react';

const AppShowcase = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-cream-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-sage/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-terracotta/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-sage/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent-sage" />
            <span className="text-sm font-medium text-accent-sage">The ScanPay Experience</span>
          </div>

          <TextReveal
            text="Shopping Reimagined for the Modern Consumer"
            className="mb-6 text-accent-charcoal"
          />

          <p className="text-xl text-stone-light max-w-3xl mx-auto leading-relaxed">
            Our mobile app transforms the fashion shopping experience with smart features
            that work seamlessly online and offline—built specifically for India's retail landscape.
          </p>
        </div>

        {/* MacBook Showcase */}
        <MacbookScroll
          src="/mobile-app-showcase.png"
          showGradient={true}
          title={
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-accent-charcoal">
                Scan. Reserve. Skip Queues.
              </h3>
              <p className="text-lg text-stone-light max-w-2xl mx-auto">
                Experience the complete shopping journey from product discovery to checkout—all from your phone.
              </p>
            </div>
          }
          badge={
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-sage/20 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-accent-sage" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-accent-charcoal">Native Experience</div>
                  <div className="text-xs text-stone-lighter">iOS & Android</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-terracotta/20 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent-terracotta" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-accent-charcoal">Offline First</div>
                  <div className="text-xs text-stone-lighter">Works without internet</div>
                </div>
              </div>
            </div>
          }
        />

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {[
            {
              title: 'Barcode Scanning',
              description: 'Scan any product to see size availability, prices, and reserve items instantly',
              stat: '< 2 sec',
              statLabel: 'Scan time',
            },
            {
              title: 'Size Finder',
              description: 'Check real-time inventory across sizes, colors, and styles without asking staff',
              stat: '100%',
              statLabel: 'Accuracy',
            },
            {
              title: 'Smart Checkout',
              description: 'Generate QR receipt, pay via UPI, and verify at exit—no queues, no hassle',
              stat: '30 sec',
              statLabel: 'Checkout',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white border border-cream-200 rounded-2xl hover:border-accent-sage/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-sage/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="text-4xl font-bold text-accent-sage mb-2">{feature.stat}</div>
                <div className="text-xs text-stone-lighter mb-4 uppercase tracking-wide">{feature.statLabel}</div>
                <h4 className="text-xl font-bold text-accent-charcoal mb-3">{feature.title}</h4>
                <p className="text-stone-light leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
