'use client';

import Button from '@/components/common/button';
import { useState } from 'react';
import { BsBookmark, BsGrid3X3 } from 'react-icons/bs';

export default function ProfileSection() {
  const [content, setContent] = useState(1);

  return (
    <div className='relative z-10 mx-auto w-full pt-6'>
      <div className='mb-6'>
        <div className='relative flex items-center gap-4'>
          <div
            className={`${
              content == 1 ? 'left-0' : 'left-[122px]'
            } absolute -top-[18px] w-[105px] border-t-2 border-light-text duration-300 ease-in-out dark:border-dark-text`}
          ></div>
          <Button
            type='button'
            onClick={() => setContent(1)}
            color='transparent'
            size='none'
            className={`${content == 1 ? 'opacity-100' : 'opacity-50'}`}
          >
            <BsGrid3X3 />
            <span className='uppercase'>Postingan</span>
          </Button>
          <Button
            type='button'
            onClick={() => setContent(2)}
            color='transparent'
            size='none'
            className={`${content == 2 ? 'opacity-100' : 'opacity-50'}`}
          >
            <BsBookmark />
            <span className='uppercase'>Tersimpan</span>
          </Button>
        </div>
      </div>
      <div>{content == 1 ? 'hello' : 'world'}</div>
    </div>
  );
}
