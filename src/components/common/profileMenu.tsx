'use client';

import { Menu, Transition } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import { BiLogOut, BiUser } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import ProfileImage from './profileImage';

export default function ProfileMenu() {
  const pathName = usePathname();
  const username = pathName.split('/');

  return (
    <Menu as='div' className={'relative z-50 translate-y-1'}>
      <Menu.Button>
        <div className='flex items-center gap-4'>
          <ProfileImage src={''} size='sm' username={username[2]} />
          <h2 className='hidden font-bold capitalize xl:block'>{username[2]}</h2>
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
            'absolute right-0 top-2 flex w-52 flex-col divide-y divide-dark-accent/10 overflow-hidden rounded bg-light-main shadow-lg shadow-light-accent outline-none dark:divide-light-accent/5 dark:bg-dark-secondary dark:shadow-none xl:left-0'
          }
        >
          <Menu.Item>
            {({ active }) => (
              <div className={`${active && 'bg-commitan-main text-white'} flex cursor-pointer items-center gap-2 p-3`}>
                <div>
                  <ProfileImage size='md' username={username[2]} />
                </div>
                <div>
                  <h3 className='font-semibold capitalize'>{username[2]}</h3>
                  <span className='text-xs'>@{username[2]}6996</span>
                </div>
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div
                className={`${
                  active && 'bg-commitan-main text-white'
                } flex cursor-pointer items-center gap-2 p-3 font-medium`}
              >
                <span className='text-xl'>
                  <BiUser />
                </span>
                <span>Profil</span>
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div
                className={`${
                  active && 'bg-commitan-main text-white'
                } flex cursor-pointer items-center gap-2 p-3 font-medium`}
              >
                <span className='text-xl'>
                  <FiSettings />
                </span>
                <span>Pengaturan</span>
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div
                className={`${
                  active && 'bg-red-400 text-white'
                } flex cursor-pointer items-center gap-2 p-3 font-medium text-red-400`}
              >
                <span className='text-xl'>
                  <BiLogOut />
                </span>
                <span>Log Out</span>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
