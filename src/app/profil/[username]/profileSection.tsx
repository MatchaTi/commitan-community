'use client';

import Badge from '@/components/common/badge';
import Button from '@/components/common/button';
import EditProfileModal from '@/components/common/editProfileModal';
import PostList from '@/components/common/postList';
import ProfileImage from '@/components/common/profileImage';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AiFillCalendar } from 'react-icons/ai';
import { BsBookmark, BsGrid3X3 } from 'react-icons/bs';

export default function ProfileSection() {
  const [content, setContent] = useState(1);
  const [editProfile, setEditProfile] = useState(false);
  const pathName = usePathname();
  const username = pathName.split('/');

  const handleEditProfileModal = () => setEditProfile(!editProfile);

  return (
    <div className='mx-auto w-full pt-6'>
      {/* top information start */}
      <div className='mb-4 space-y-4'>
        <div className='flex flex-wrap items-center gap-4'>
          <div>
            <ProfileImage size='lg' username={username[2]} />
          </div>
          <h2 className='flex-1 text-xl font-semibold capitalize'>{username[2]}</h2>
          <Button type='button' size='md' corner='md' color='outline' onClick={handleEditProfileModal}>
            Edit Profil
          </Button>
        </div>
        <div className='flex flex-wrap items-center gap-3'>
          <Badge>Wengdev</Badge>
          <div className='flex items-center gap-2 text-xs sm:text-sm'>
            <AiFillCalendar />
            <span>Bergabung 25 Juni 2023</span>
          </div>
        </div>
        <p className='text-slate-400 dark:text-slate-300'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, magnam nulla. Iusto laborum quaerat a
          reiciendis corrupti praesentium eligendi totam porro repudiandae voluptates! Ut ea praesentium maiores
          officiis aliquid eius!
        </p>
      </div>
      <div className='mb-6'>
        <div className='mb-4 flex w-full items-center gap-4 border-b-2 border-dark-accent/10 pb-4 text-slate-400 dark:border-light-accent/5 dark:text-slate-300'>
          <span>0 Followers</span>
          <span>0 Following</span>
        </div>
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
      {/* top information end */}
      {/* bottom content start */}
      <div>{content == 1 ? <PostList /> : 'world'}</div>
      {/* bottom content end */}
      {editProfile && <EditProfileModal showEditModal={editProfile} handleEditProfileModal={handleEditProfileModal} />}
    </div>
  );
}
