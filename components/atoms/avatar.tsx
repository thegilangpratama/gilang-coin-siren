// components/atoms/Avatar.tsx
import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  imageSrc: string;
  flagSrc: string;
  altText: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageSrc, flagSrc, altText }) => {
  return (
    <div className="relative w-20 h-20">
      {/* Profile Image */}
      <Image
        src={imageSrc}
        alt={altText}
        width={80}
        height={80}
        className="rounded-full object-cover"
      />

      {/* Flag Image */}
      <div className="absolute bottom-1 right-1 w-5 h-5">
        <Image
          src={flagSrc}
          alt="Country Flag"
          width={20}
          height={20}
          className="rounded-sm object-cover"
        />
      </div>
    </div>
  );
};

export default Avatar;