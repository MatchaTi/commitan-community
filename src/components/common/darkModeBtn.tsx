'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Button from './button';

interface IProps {
  visibility?: string;
  context?: keyof DarkContext;
}

interface DarkContext {
  sidebar: string;
  navbar: string;
}

export default function DarkModeBtn({ visibility, context }: IProps) {
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
      <Button
        type='button'
        size='none'
        color={context === 'sidebar' ? 'primary' : 'common'}
        corner={context === 'sidebar' ? 'md' : 'full'}
        className='inline-flex h-8 w-8 items-center justify-center'
        visibility={visibility}
        onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
        fullField={context === 'sidebar'}
      >
        {theme == 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
      </Button>
    </>
  );
}
