import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ImagePlaceholderProps {
  className?: string;
  aspectRatio?: string;
  label?: string;
}

export const ImagePlaceholder = ({
  className,
  aspectRatio = 'aspect-[16/10]',
  label = 'Screenshot Placeholder',
}: ImagePlaceholderProps) => {
  return (
    <div
      className={cn(
        'relative w-full bg-gradient-to-br from-accent-sage/20 via-cream-100 to-accent-terracotta/20 rounded-2xl overflow-hidden',
        aspectRatio,
        className
      )}
    >
      {/* Animated gradient overlay */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(139, 157, 131, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(196, 131, 107, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, rgba(107, 123, 102, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, rgba(139, 157, 131, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#6B7B66 1px, transparent 1px), linear-gradient(90deg, #6B7B66 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-lg"
        >
          <ImageIcon className="w-10 h-10 text-accent-sage" />
        </motion.div>
        <div className="text-sm font-medium text-accent-charcoal/60 text-center px-4">
          {label}
        </div>
        <div className="text-xs text-accent-charcoal/40 mt-1">
          Add screenshot to /public
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-accent-sage/20 to-transparent rounded-full blur-xl" />
      <div className="absolute bottom-4 left-4 w-32 h-32 bg-gradient-to-tl from-accent-terracotta/20 to-transparent rounded-full blur-xl" />
    </div>
  );
};

export const MobileAppPlaceholder = () => {
  return (
    <ImagePlaceholder
      aspectRatio="aspect-[9/19.5]"
      label="Mobile App Screenshot"
      className="max-w-sm mx-auto shadow-2xl"
    />
  );
};

export const DesktopPlaceholder = () => {
  return (
    <ImagePlaceholder
      aspectRatio="aspect-[16/10]"
      label="POS Dashboard Screenshot"
      className="shadow-2xl"
    />
  );
};
