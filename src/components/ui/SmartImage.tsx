import { useState } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';
import { cn } from '../../lib/utils';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderLabel?: string;
  placeholderAspectRatio?: string;
}

export const SmartImage = ({
  src,
  alt,
  className,
  placeholderLabel,
  placeholderAspectRatio,
}: SmartImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (imageError) {
    return (
      <ImagePlaceholder
        label={placeholderLabel || alt}
        aspectRatio={placeholderAspectRatio}
        className={className}
      />
    );
  }

  return (
    <>
      {!imageLoaded && (
        <ImagePlaceholder
          label={placeholderLabel || alt}
          aspectRatio={placeholderAspectRatio}
          className={className}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          'transition-opacity duration-500',
          imageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0',
          className
        )}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
    </>
  );
};
