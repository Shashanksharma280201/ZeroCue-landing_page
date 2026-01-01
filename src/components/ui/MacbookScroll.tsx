import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '../../lib/utils';
import { ImagePlaceholder } from './ImagePlaceholder';

interface MacbookScrollProps {
  src: string;
  title?: React.ReactNode;
  badge?: React.ReactNode;
  showGradient?: boolean;
  className?: string;
}

export function MacbookScroll({
  src,
  title,
  badge,
  showGradient = true,
  className,
}: MacbookScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);

  return (
    <div ref={ref} className={cn('w-full py-20 overflow-hidden', className)}>
      <motion.div
        style={{ scale, opacity }}
        className="relative mx-auto max-w-6xl perspective-1000"
      >
        <motion.div
          style={{ rotateX }}
          className="relative transform-gpu"
        >
          {/* Title Badge */}
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              {title}
            </motion.div>
          )}

          {/* MacBook Frame */}
          <div className="relative mx-auto" style={{ maxWidth: '1200px' }}>
            {/* Screen */}
            <div className="relative bg-stone-900 rounded-t-3xl p-4 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-stone-900 rounded-b-2xl z-10" />

              {/* Screen Content */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-white">
                {imageError ? (
                  <ImagePlaceholder
                    label="Mobile App Screenshot"
                    aspectRatio="aspect-[16/10]"
                    className="rounded-none"
                  />
                ) : (
                  <>
                    {!imageLoaded && (
                      <ImagePlaceholder
                        label="Loading..."
                        aspectRatio="aspect-[16/10]"
                        className="rounded-none"
                      />
                    )}
                    <img
                      src={src}
                      alt="MacBook Screen"
                      className={cn(
                        'w-full h-full object-cover object-top transition-opacity duration-500',
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      )}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                    />
                  </>
                )}

                {/* Gradient Overlay */}
                {showGradient && imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40 pointer-events-none" />
                )}
              </div>
            </div>

            {/* Base/Keyboard */}
            <div className="relative h-8 bg-gradient-to-b from-stone-700 via-stone-600 to-stone-700 rounded-b-3xl shadow-xl">
              {/* Keyboard reflection */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>

            {/* Bottom Stand */}
            <div className="relative mx-auto w-48 h-2 bg-gradient-to-b from-stone-600 to-stone-800 rounded-b-lg" />
          </div>

          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mt-12"
            >
              {badge}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
