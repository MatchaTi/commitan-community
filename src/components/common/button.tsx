import { cn } from '@/utils/utils';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IColors {
  primary: string;
  common: string;
  outline: string;
  disabled: string;
}

interface ISize {
  none: string;
  std: string;
  medium: string;
}

interface ICorner {
  full: string;
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

const buttonStyle = ({ color, size, corner }: ButtonProps) => {
  const base = 'font-semibold';

  const variants = {
    color: {
      primary: 'bg-commitan-main hover:opacity-80 text-white',
      common: 'common-bg',
      outline: 'bg-transparent border border-commitan-main text-commitan-main hover:bg-commitan-main hover:text-white',
      disabled: 'cursor-not-allowed grayscale bg-commitan-main',
    },
    size: {
      none: 'p-0',
      std: 'p-4',
      medium: 'px-4 py-2',
    },
    corner: {
      full: 'rounded-full',
      lg: 'rounded-lg',
    },
  };

  return cn(base, variants.color[color || 'primary'], variants.size[size || 'medium'], variants.corner[corner || 'lg']);
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
      } as ButtonProps)} ${className} ${visibility}`}
    >
      {children}
    </button>
  );
}
