import { cn } from '@/utils/utils';

interface ISize {
  sm: string;
  std: string;
  medium: string;
}

interface IColors {
  primary: string;
  inherit: string;
}

interface IWidth {
  light: string;
  regular: string;
}

interface SpinnerProps {
  className?: string;
  visibility?: string;
  color?: keyof IColors;
  size?: keyof ISize;
  width?: keyof IWidth;
}

const spinnerStyle = ({ className, visibility, color, size, width }: SpinnerProps) => {
  const base = 'animate-spin rounded-full border-b-transparent';

  const variants = {
    color: {
      primary: 'border-commitan-main',
      inherit: 'border-inherit',
    },
    size: {
      sm: 'h-4 w-4',
      std: 'h-6 w-6',
      medium: 'h-8 w-8',
    },
    width: {
      light: 'border-2',
      regular: 'border-4',
    },
  };

  return cn(
    base,
    variants.color[color || 'inherit'],
    variants.size[size || 'std'],
    variants.width[width || 'regular'],
    className!,
    visibility!
  );
};

export default function Spinner({ className, visibility, color, size, width }: SpinnerProps) {
  return <div className={spinnerStyle({ className, visibility, color, size, width } as SpinnerProps)}></div>;
}
