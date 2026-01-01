import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../../lib/utils';

export const TextReveal = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.7', 'start 0.3'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  const words = text.split(' ');

  return (
    <div ref={ref} className={cn('relative', className)}>
      <motion.div
        style={{ opacity, scale }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="inline-block mr-2 sm:mr-3"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export const TextRevealGradient = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'start 0.4'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div ref={ref} className={cn('relative', className)}>
      <motion.div
        style={{ opacity }}
        className="bg-gradient-to-r from-accent-sage via-accent-terracotta to-accent-charcoal bg-clip-text text-transparent"
      >
        {children}
      </motion.div>
    </div>
  );
};
