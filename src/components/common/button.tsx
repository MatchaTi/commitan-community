import { cn } from '@/utils/utils';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IColors {
  primary: string;
  common: string;
  common_reverse: string;
  outline: string;
  disabled: string;
  delete: string;
  transparent: string;
  loading: string;
}

interface ISize {
  none: string;
  sm: string;
  std: string;
  medium: string;
}

interface ICorner {
  full: string;
  round: string;
  lg: string;
}

type ButtonProps = {
  className?: string;
  visibility?: string;
  children: React.ReactNode;
  color?: keyof IColors;
  size?: keyof ISize;
  corner?: keyof ICorner;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const buttonStyle = ({ color, size, corner, className, visibility }: ButtonProps) => {
  const base = 'font-semibold';

  const variants = {
    color: {
      primary: 'bg-commitan-main text-white',
      common: 'common-bg',
      common_reverse: 'common-bg-reverse text-light-main dark:text-dark-main',
      outline: 'bg-transparent border border-commitan-main text-commitan-main hover:bg-commitan-main hover:text-white',
      disabled: 'cursor-not-allowed grayscale bg-commitan-main',
      delete: 'bg-red-400 text-white',
      transparent: 'bg-transparent',
      loading: 'bg-commitan-secondary text-white cursor-not-allowed',
    },
    size: {
      none: 'p-0',
      sm: 'p-1',
      std: 'p-4',
      medium: 'px-4 py-2',
    },
    corner: {
      full: 'rounded-full',
      round: 'rounded',
      lg: 'rounded-lg',
    },
  };

  return cn(
    base,
    variants.color[color || 'primary'],
    variants.size[size || 'medium'],
    variants.corner[corner || 'lg'],
    className!,
    visibility!
  );
};

export default function Button({
  className,
  visibility,
  children,
  color = 'primary',
  size = 'medium',
  corner = 'lg',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${buttonStyle({
        color,
        size,
        corner,
        className,
        visibility,
      } as ButtonProps)}`}
    >
      {children}
    </button>
  );
}
