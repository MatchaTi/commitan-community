'use client';

import Badge from '@/components/common/badge';
import Button from '@/components/common/button';
import ProfileImage from '@/components/common/profileImage';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AiFillCalendar } from 'react-icons/ai';
import { BsBookmark, BsGrid3X3 } from 'react-icons/bs';

export default function ProfileSection() {
  const [content, setContent] = useState(1);
  const pathName = usePathname();
  const username = pathName.split('/');

  return (
    <div className='mx-auto w-full pt-6'>
      {/* top information start */}
      <div className='mb-4 flex items-center justify-between'>
        {/* left side start */}
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
          <ProfileImage size='lg' />
          <div>
            <h2 className='text-xl font-semibold capitalize'>{username[2]}</h2>
            <div className='flex flex-wrap items-center gap-3'>
              <Badge>Wengdev</Badge>
              <div className='flex items-center gap-2 text-xs sm:text-sm'>
                <AiFillCalendar />
                <span>Bergabung 25 Juni 2023</span>
              </div>
            </div>
          </div>
        </div>
        {/* left side end */}
        {/* right side start */}
        <div className='-translate-y-10 sm:translate-y-0'>
          <Button type='button' color='outline'>
            Edit Profil
          </Button>
        </div>
        {/* right side end */}
      </div>
      <div className='mb-6'>
        <div className='mb-4 flex w-full items-center gap-4 border-b-2 border-light-accent pb-4 dark:border-dark-accent'>
          <span>0 Followers</span>
          <span>0 Following</span>
        </div>
        <div className='flex items-center gap-4'>
          <Button
            type='button'
            onClick={() => setContent(1)}
            color='transparent'
            size='none'
            className={`${content == 1 ? 'opacity-100' : 'opacity-50'} flex items-center gap-2`}
          >
            <BsGrid3X3 />
            <span className='uppercase'>Postingan</span>
          </Button>
          <Button
            type='button'
            onClick={() => setContent(2)}
            color='transparent'
            size='none'
            className={`${content == 2 ? 'opacity-100' : 'opacity-50'} flex items-center gap-2`}
          >
            <BsBookmark />
            <span className='uppercase'>Tersimpan</span>
          </Button>
        </div>
      </div>
      {/* top information end */}
      {/* bottom content start */}
      <div>{content == 1 ? 'hello' : 'world'}</div>
      {/* bottom content end */}
    </div>
  );
}
