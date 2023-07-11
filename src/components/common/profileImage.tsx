import { cn, generateAvatar } from '@/utils/utils';
import Image from 'next/image';

interface ISize {
  sm: string;
  std: string;
  md: string;
  lg: string;
}

interface ICorner {
  full: string;
  lg: string;
}

type ImageProps = {
  username?: string;
  className?: string;
  visibility?: string;
  size?: keyof ISize;
  corner?: keyof ICorner;
  src?: string;
};

const imageStyle = ({ size, corner, className, visibility }: ImageProps) => {
  const base = 'cursor-pointer bg-slate-300 overflow-hidden';

  const variants = {
    size: {
      sm: 'h-8 w-8',
      std: 'h-8 w-8 sm:h-12 sm:w-12',
      md: 'h-10 w-10',
      lg: 'h-28 w-28',
    },
    corner: {
      full: 'rounded-full',
      lg: 'rounded-lg',
    },
  };

  return cn(base, variants.size[size || 'std'], variants.corner[corner || 'full'], className!, visibility!);
};

export default function ProfileImage({ username, className, visibility, size, corner, src }: ImageProps) {
  return (
    <div
      className={`${imageStyle({
        src,
        size,
        corner,
        className,
        visibility,
      } as ImageProps)}`}
    >
      <Image
        src={src ? src : generateAvatar(username!)}
        alt={username ? username : 'Avatar'}
        className='h-full w-full object-cover'
        width={128}
        height={128}
      />
    </div>
  );
}
