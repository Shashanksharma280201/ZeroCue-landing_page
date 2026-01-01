import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  index = 0,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  index?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 bg-white border border-cream-200 rounded-3xl overflow-hidden',
        'hover:border-accent-sage/50 hover:scale-[1.02]',
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-sage/0 via-accent-terracotta/0 to-accent-charcoal/0 group-hover/bento:from-accent-sage/5 group-hover/bento:via-accent-terracotta/5 group-hover/bento:to-accent-charcoal/5 transition-all duration-500" />

      <div className="relative z-10">
        {header}
        <div className="mt-4 mb-2 flex items-center gap-2">
          {icon && <div className="text-accent-sage">{icon}</div>}
          <div className="font-bold text-accent-charcoal text-xl">
            {title}
          </div>
        </div>
        <div className="text-stone-light text-base leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
