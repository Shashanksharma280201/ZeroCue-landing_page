import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Building2, Phone, Send, CheckCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface LeadCaptureProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'retailer' | 'shopper';
}

const LeadCapture = ({ isOpen, onClose, type }: LeadCaptureProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // In production, this would send to your backend/email service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Log to console (in production, send to backend)
      console.log('Lead captured:', {
        ...formData,
        type,
        timestamp: new Date().toISOString(),
      });

      // Show success state
      setIsSuccess(true);

      // Reset form after 3 seconds and close
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
        });
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (err) {
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full pointer-events-auto overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-accent-sage to-accent-terracotta p-6 text-white relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <h2 className="text-2xl font-bold mb-2">
                  {type === 'retailer' ? 'Partner with ZeroCue' : 'Join the Waitlist'}
                </h2>
                <p className="text-white/90 text-sm">
                  {type === 'retailer'
                    ? 'Transform your fashion store with seamless self-checkout'
                    : 'Be the first to experience queue-free shopping'}
                </p>
              </div>

              {/* Form */}
              <div className="p-6">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-accent-charcoal mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sage focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-accent-charcoal mb-1">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-lighter" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sage focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-accent-charcoal mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-lighter" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sage focus:border-transparent"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Company (for retailers) */}
                    {type === 'retailer' && (
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-accent-charcoal mb-1">
                          Company Name *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-lighter" />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required={type === 'retailer'}
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sage focus:border-transparent"
                            placeholder="Your fashion store"
                          />
                        </div>
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-accent-charcoal mb-1">
                        {type === 'retailer' ? 'Tell us about your store' : 'Message (optional)'}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sage focus:border-transparent resize-none"
                        placeholder={type === 'retailer' ? 'Number of stores, location, etc.' : 'Any specific requirements?'}
                      />
                    </div>

                    {/* Error message */}
                    {error && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                        {error}
                      </div>
                    )}

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-gradient-to-r from-accent-sage to-accent-terracotta text-white rounded-lg font-medium text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {type === 'retailer' ? 'Request Demo' : 'Join Waitlist'}
                        </>
                      )}
                    </button>

                    <p className="text-xs text-stone-lighter text-center mt-2">
                      We'll get back to you within 24 hours
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4"
                    >
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-accent-charcoal mb-2">
                      Thank You!
                    </h3>
                    <p className="text-stone-lighter">
                      {type === 'retailer'
                        ? "We'll contact you soon to schedule a demo."
                        : "You're on the waitlist! We'll notify you when we launch."}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeadCapture;
