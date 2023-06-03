'use client';

import { DefaultUser } from 'next-auth';
import Image from 'next/image';

export interface AvatarProps {
  image?: DefaultUser['image'];
}

const Avatar: React.FC<AvatarProps> = ({ image }) => {
  const imageSrc = image || '/images/placeholder.jpg';
  return (
    <Image
      className='rounded-full'
      height={30}
      width={30}
      alt='avatar'
      src={imageSrc}
    />
  );
};

export default Avatar;
