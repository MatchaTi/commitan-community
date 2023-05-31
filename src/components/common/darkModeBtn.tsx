'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Button from './button';

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
      <Button
        type='button'
        size='none'
        color='common'
        corner='full'
        className='inline-flex h-8 w-8 items-center justify-center'
        visibility={visibility}
        onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
      >
        {theme == 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
      </Button>
    </>
  );
}
