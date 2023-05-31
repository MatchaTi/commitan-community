'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

interface IProps {
  className?: string;
}

export default function DarkModeBtn({ className }: IProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <>
      {currentTheme === 'dark' ? (
        <button
          onClick={() => setTheme('light')}
          className={`${
            className ? className + 'hidden' : 'sm:hidden'
          } dark:bg-dark-main dark:hover:bg-dark-main/80 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg shadow-slate-200 hover:bg-white/80 dark:shadow-none sm:text-sm xl:inline-flex`}
        >
          <BsFillSunFill />
        </button>
      ) : (
        <button
          onClick={() => setTheme('dark')}
          className={`${
            className ? className + 'hidden' : 'sm:hidden'
          } dark:bg-dark-main dark:hover:bg-dark-main/80 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg shadow-slate-200 hover:bg-white/80 dark:shadow-none sm:text-sm xl:inline-flex`}
        >
          <BsFillMoonFill />
        </button>
      )}
    </>
  );
}
