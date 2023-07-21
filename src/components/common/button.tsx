import { cn } from '@/utils/utils';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IColors {
  primary: string;
  common: string;
  outline: string;
  disable: string;
  delete: string;
  transparent: string;
  loading: string;
}

interface ISize {
  std: string;
  none: string;
  sm: string;
  md: string;
  lg: string;
}

interface ICorner {
  full: string;
  sm: string;
  md: string;
  lg: string;
}

type ButtonProps = {
  className?: string;
  visibility?: string;
  children: React.ReactNode;
  color?: keyof IColors;
  size?: keyof ISize;
  corner?: keyof ICorner;
  fullField?: boolean;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const buttonStyle = ({ color, size, corner, className, visibility, fullField }: ButtonProps) => {
  const base = `${fullField && 'w-full'} font-semibold flex items-center justify-center gap-2`;

  const variants = {
    color: {
      primary: 'bg-commitan-main text-white hover:bg-sky-400 active:bg-commitan-main/50 duration-150 ease-in-out',
      common: 'common-bg',
      outline:
        'bg-transparent border border-commitan-main text-commitan-main hover:bg-commitan-main hover:text-white duration-150 ease-in-out active:bg-commitan-main/50 active:border-opacity-0',
      disable: 'cursor-not-allowed bg-commitan-main opacity-50',
      delete: 'bg-red-500 text-white hover:bg-red-400 active:bg-red-500/50 duration-150 ease-in-out',
      transparent: 'bg-transparent hover:text-commitan-main active:text-opacity-50 duration-150 ease-in-out',
      loading: 'bg-commitan-secondary text-white cursor-not-allowed',
    },
    size: {
      none: 'p-0',
      std: 'p-4',
      sm: 'p-1',
      md: 'px-4 py-2',
      lg: 'px-6 py-4',
    },
    corner: {
      full: 'rounded-full',
      sm: 'rounded-sm',
      md: 'rounded',
      lg: 'rounded-lg',
    },
  };

  return cn(
    base,
    variants.color[color || 'primary'],
    variants.size[size || 'md'],
    variants.corner[corner || 'md'],
    className!,
    visibility!
  );
};

export default function Button({
  className,
  visibility,
  children,
  color = 'primary',
  size = 'md',
  corner = 'md',
  fullField,
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
        fullField,
      } as ButtonProps)}`}
    >
      {children}
    </button>
  );
}
