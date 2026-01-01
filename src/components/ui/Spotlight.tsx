import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Spotlight = ({
  className,
  fill = 'white',
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className
      )}
    >
      <motion.div
        animate={{
          x: ['-50%', '50%'],
          y: ['-50%', '50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
        className="absolute w-[800px] h-[800px] rounded-full blur-[100px] opacity-20"
        style={{
          background: `radial-gradient(circle, ${fill} 0%, transparent 70%)`,
          left: '50%',
          top: '50%',
        }}
      />
    </motion.div>
  );
};

export const SpotlightCard = ({
  children,
  className,
  spotlightColor = '#8B9D83',
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) => {
  return (
    <div className={cn('relative group', className)}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className="absolute inset-0 rounded-3xl blur-xl"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${spotlightColor}20 0%, transparent 70%)`,
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
