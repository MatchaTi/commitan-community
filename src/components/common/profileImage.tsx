// import Image from 'next/image';
import { cn } from '@/utils/utils';

interface ISize {
  sm: string;
  std: string;
  medium: string;
}

interface ICorner {
  full: string;
  lg: string;
}

type ImageProps = {
  className?: string;
  visibility?: string;
  size?: keyof ISize;
  corner?: keyof ICorner;
  //   src: string
};

const imageStyle = ({ size, corner }: ImageProps) => {
  const base = 'cursor-pointer bg-slate-300';

  const variants = {
    size: {
      sm: 'h-8 w-8',
      std: 'h-8 w-8 sm:h-12 sm:w-12',
      medium: 'h-10 w-10',
    },
    corner: {
      full: 'rounded-full',
      lg: 'rounded-lg',
    },
  };

  return cn(base, variants.size[size || 'std'], variants.corner[corner || 'full']);
};

export default function ProfileImage({ className, visibility, size, corner }: ImageProps) {
  return (
    <div
      className={`${imageStyle({
        size,
        corner,
      } as ImageProps)} ${className} ${visibility}`}
    >
      {/* <Image src={src} alt='Profile Image' width={28} height={28} fill /> */}
    </div>
  );
}
