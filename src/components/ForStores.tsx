import { motion } from 'framer-motion';
import {
  Monitor,
  Package,
  QrCode,
  Calendar,
  BarChart3,
  Store,
  Users,
  Building2,
  CheckCircle,
  TrendingUp,
  Clock,
  Shield
} from 'lucide-react';

const posFeatures = [
  {
    icon: Monitor,
    title: 'Modern POS',
    description: 'Barcode-first checkout with real-time inventory sync',
    color: 'bg-accent-sage',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Stock tracking, low-stock alerts, product CRUD operations',
    color: 'bg-accent-terracotta',
  },
  {
    icon: QrCode,
    title: 'Verification Station',
    description: 'QR scanning, item verification, exit clearance workflow',
    color: 'bg-accent-charcoal',
  },
  {
    icon: Calendar,
    title: 'Reservation Dashboard',
    description: 'Claim, prepare, and assign trial rooms for Try & Reserve orders',
    color: 'bg-accent-sage',
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    description: 'Sales reports, inventory analysis, staff performance tracking',
    color: 'bg-accent-terracotta',
  },
  {
    icon: Building2,
    title: 'Multi-Store Support',
    description: 'Chain management with centralized control and monitoring',
    color: 'bg-accent-charcoal',
  },
  {
    icon: Users,
    title: 'User Management',
    description: 'Role-based access: Owner, Manager, Cashier, Verifier',
    color: 'bg-accent-sage',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Multi-tenant architecture with data isolation and RLS',
    color: 'bg-accent-terracotta',
  },
];

const benefits = [
  {
    metric: '80%',
    label: 'Reduce Queue Time',
    description: 'Self-checkout eliminates billing bottlenecks',
  },
  {
    metric: '30%',
    label: 'Increase Sales',
    description: 'Better inventory visibility and faster checkout',
  },
  {
    metric: '60%',
    label: 'Staff Efficiency',
    description: 'Redeploy billing staff to customer service',
  },
  {
    metric: '<1 min',
    label: 'Return Processing',
    description: 'Express returns improve customer satisfaction',
  },
];

const ForStores = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-accent-charcoal to-stone text-cream-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-terracotta/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full mx-auto px-6 md:px-12 xl:px-20 2xl:px-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-accent-sage/20 rounded-full mb-6">
            <span className="text-accent-sage font-semibold">For Retail Stores</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Power Your Store with ZeroCue
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-cream-200 max-w-3xl mx-auto">
            Complete POS system with inventory management, verification, and analytics
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="mb-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white/10 rounded-2xl border border-white/20 hover:border-accent-sage hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-bold text-accent-sage mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold mb-2">
                  {benefit.label}
                </div>
                <div className="text-sm text-cream-300">
                  {benefit.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* POS Features */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Complete POS Suite
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {posFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="h-full p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-accent-sage hover:bg-white/10 transition-all duration-300">
                    {/* Icon */}
                    <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold mb-2">
                      {feature.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-cream-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Technology Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
            Built for Scale & Security
          </h3>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <CheckCircle className="w-10 h-10 text-accent-sage mb-3" />
              <h4 className="text-xl font-bold mb-2">Multi-Tenant Architecture</h4>
              <p className="text-cream-300">
                Secure data isolation for each store with Supabase Row-Level Security
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <TrendingUp className="w-10 h-10 text-accent-terracotta mb-3" />
              <h4 className="text-xl font-bold mb-2">Real-Time Sync</h4>
              <p className="text-cream-300">
                Inventory updates across all devices instantly with PostgreSQL
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <Clock className="w-10 h-10 text-accent-sage mb-3" />
              <h4 className="text-xl font-bold mb-2">24/7 Operations</h4>
              <p className="text-cream-300">
                Cloud-hosted infrastructure with 99.9% uptime guarantee
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <Users className="w-10 h-10 text-accent-terracotta mb-3" />
              <h4 className="text-xl font-bold mb-2">Role-Based Access</h4>
              <p className="text-cream-300">
                Granular permissions for Owner, Manager, Cashier, and Verifier roles
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="group px-10 py-5 bg-accent-sage text-accent-charcoal rounded-xl font-semibold text-lg hover:bg-accent-sage/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Schedule Demo
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-10 py-5 border-2 border-cream-100 text-cream-100 rounded-xl font-semibold text-lg hover:bg-cream-100 hover:text-accent-charcoal transition-all duration-300">
              Contact Sales
            </button>
          </div>
          <p className="mt-6 text-cream-300">
            Join 100+ stores already using ZeroCue
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ForStores;
