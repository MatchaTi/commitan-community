'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

interface IProps {
  visibility?: string;
}

export default function DarkModeBtn({ visibility }: IProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
        className={`${
          visibility && visibility
        } inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg shadow-light-accent hover:bg-white/80 dark:bg-dark-main dark:shadow-none dark:hover:bg-dark-main/80 xl:inline-flex`}
      >
        {theme == 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
    </>
  );
}
