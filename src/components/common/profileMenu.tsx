'use client';

import { useAuthVerify } from '@/hooks/protectPage';
import { Menu, Transition } from '@headlessui/react';
import Cookies from 'js-cookie';
import { BiLogOut, BiUser } from 'react-icons/bi';
import Button from './button';
import ProfileImage from './profileImage';

export default function ProfileMenu({ username }: { username: string }) {
  const verified = useAuthVerify();

  function logout() {
    Cookies.remove('token');
    window.location.reload();
  }

  if (!verified && !username) {
    return (
      <div>
        <a href='/auth/login'>
          <Button type='button'>Login</Button>
        </a>
      </div>
    );
  }

  return (
    <Menu as='div' className={'relative z-50 translate-y-0.5'}>
      <Menu.Button>
        <div className='flex items-center gap-4'>
          <ProfileImage src={''} size='sm' username={username} />
          <h2 className='headings hidden font-bold capitalize sm:block'>{username}</h2>
        </div>
      </Menu.Button>
      <Transition
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Menu.Items
          className={
            'absolute right-0 top-2 flex w-40 flex-col divide-y divide-dark-accent/10 overflow-hidden rounded bg-light-main shadow-lg shadow-light-accent outline-none dark:divide-light-accent/5 dark:border dark:border-light-accent/5 dark:bg-dark-secondary dark:shadow-none xl:left-0'
          }
        >
          <Menu.Item>
            {({ active }) => (
              <a
                // href={}
                className={`${
                  active && 'bg-commitan-main text-white'
                } flex cursor-pointer items-center gap-2 p-3 font-medium`}
              >
                <span className='text-xl'>
                  <BiUser />
                </span>
                <a href={`profil/${username}`}>
                  <span>Profil</span>
                </a>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                type='button'
                onClick={logout}
                className={`${
                  active && 'bg-red-400 text-white'
                } flex cursor-pointer items-center gap-2 p-3 font-medium text-red-400`}
              >
                <span className='text-xl'>
                  <BiLogOut />
                </span>
                <span>Log Out</span>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
