import Image from 'next/image';
import { cn } from '@/utils/utils';
import noAvatar from '../../../public/images/no-avatar.webp';

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
  src?: string;
};

const imageStyle = ({ size, corner, className, visibility }: ImageProps) => {
  const base = 'cursor-pointer bg-slate-300 overflow-hidden';

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

  return cn(base, variants.size[size || 'std'], variants.corner[corner || 'full'], className!, visibility!);
};

export default function ProfileImage({ className, visibility, size, corner, src }: ImageProps) {
  return (
    <div
      className={`${imageStyle({
        size,
        corner,
        className,
        visibility,
      } as ImageProps)}`}
    >
      <Image src={src ? '' : noAvatar} alt='Profile Image' className='w-full translate-y-1 scale-125' />
    </div>
  );
}
