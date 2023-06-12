import { cn } from '@/utils/utils';

interface IColors {
  inherit: string;
  sourceCode: string;
  liveDemo: string;
  random: string;
}

interface BadgeProps {
  children: React.ReactNode;
  color?: keyof IColors;
  className?: string;
  visibility?: string;
}

const badgeStyle = ({ color ,className,visibility}: BadgeProps) => {
  const base =
    'cursor-pointer w-fit flex gap-2 items-center rounded-full bg-light-secondary px-2 py-1 text-xs font-semibold dark:bg-dark-secondary';
  const randomColors = [
    'text-red-400',
    'text-blue-400',
    'text-yellow-400',
    'text-purple-400',
    'text-green-400',
    'text-pink-400',
  ];
  const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];

  const variants = {
    color: {
      inherit: '',
      sourceCode: 'text-pink-400',
      liveDemo: 'text-green-400',
      random: randomColor,
    },
  };

  return cn(base, variants.color[color || 'inherit'],className!, visibility!);
};

export default function Badge({ color, children, className, visibility }: BadgeProps) {
  return <span className={`${badgeStyle({ color ,className,visibility} as BadgeProps)} `}>{children}</span>;
}
