import { cn } from '@/utils/utils';

interface IPosition {
  topStart: string;
  topCenter: string;
  topEnd: string;
  right: string;
  bottomStart: string;
  bottomCenter: string;
  bottomEnd: string;
  left: string;
}

interface IWidth {
  minmax: string;
  sm: string;
  md: string;
  lg: string;
}

type ITooltip = {
  children: React.ReactNode;
  position: keyof IPosition;
  width?: keyof IWidth;
};

const tooltipStyle = ({ position, width }: ITooltip) => {
  const base =
    'absolute z-[9999] hidden rounded-lg bg-dark-secondary px-4 py-2 text-light-main group-hover:flex dark:bg-light-secondary dark:text-dark-main';

  const variants = {
    position: {
      topStart:
        'mb-2 bottom-full left-0 after:absolute after:left-1 after:top-full after:translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-dark-secondary after:dark:border-t-light-secondary',
      topCenter:
        'mb-2 bottom-full left-1/2 -translate-x-1/2 after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-dark-secondary after:dark:border-t-light-secondary',
      topEnd:
        'mb-2 bottom-full right-0 after:absolute after:right-1 after:top-full after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-dark-secondary after:dark:border-t-light-secondary',
      right:
        'ml-2 left-full top-1/2 -translate-y-1/2 after:absolute after:right-full after:top-1/2 after:-translate-y-1/2 after:border-8 after:border-y-transparent after:border-l-transparent after:border-r-dark-secondary after:dark:border-r-light-secondary',
      bottomStart:
        'mt-2 top-full left-0 after:absolute after:bottom-full after:left-1 after:translate-x-1/2 after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-dark-secondary after:dark:border-b-light-secondary',
      bottomCenter:
        'mt-2 top-full left-1/2 -translate-x-1/2 after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-dark-secondary after:dark:border-b-light-secondary',
      bottomEnd:
        'mt-2 top-full right-0 after:absolute after:bottom-full after:right-1 after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-dark-secondary after:dark:border-b-light-secondary',
      left: 'mr-2 right-full top-1/2 -translate-y-1/2 after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:border-8 after:border-y-transparent after:border-r-transparent after:border-l-dark-secondary after:dark:border-l-light-secondary',
    },
    width: {
      minmax: 'min-w-max',
      sm: 'max-w-[250px]',
      md: 'max-w-[400px]',
      lg: 'max-w-[500px]',
    },
  };

  return cn(base, variants.position[position || 'topCenter'], variants.width[width || 'minmax']);
};

export default function Tooltip({ children, position, width }: ITooltip) {
  return <div className={`${tooltipStyle({ position, width } as ITooltip)}`}>{children}</div>;
}
