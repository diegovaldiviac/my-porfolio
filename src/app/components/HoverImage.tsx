"use client"
import Image from 'next/image';
import { useState } from 'react';

interface HoverImageProps {
  src: string;
  alt: string;
  smallWidth: number;
  smallHeight: number;
  largeWidth: number;
  largeHeight: number;
}

const HoverImage: React.FC<HoverImageProps> = ({ src, alt, smallWidth, smallHeight, largeWidth, largeHeight }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block transition-transform duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={isHovered ? largeWidth : smallWidth}
        height={isHovered ? largeHeight : smallHeight}
        className={`transition-transform duration-300 ease-in-out cursor-pointer ${
          isHovered ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50' : ''
        }`}
      />
    </div>
  );
};

export default HoverImage;
