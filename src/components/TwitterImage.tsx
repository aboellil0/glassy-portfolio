'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface TwitterImageProps extends ImageProps {
  containerClassName?: string
}

export default function TwitterImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  fill,
  width,
  height,
  priority,
  sizes,
  style,
  onLoad,
  ...props
}: TwitterImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${containerClassName} ${fill ? 'w-full h-full' : ''}`}>
      {/* Twitter/X Shimmer Loading Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 animate-twitter-shimmer pointer-events-none bg-white/[0.04]" />
      )}

      {/* Image with smooth progressive fade-in */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        style={style}
        onLoad={(e) => {
          setIsLoaded(true)
          if (onLoad) onLoad(e)
        }}
        className={`transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-[1.03]'
        } ${className}`}
        {...props}
      />
    </div>
  )
}
