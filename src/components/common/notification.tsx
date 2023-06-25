'use client';

import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { IoIosNotifications } from 'react-icons/io';
import ProfileImage from './profileImage';

export default function Notification() {
  const notif = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <Popover
        className={`common-bg relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full sm:shadow-none xl:shadow-lg`}
      >
        <>
          <Popover.Button className={'flex h-full w-full items-center justify-center rounded-full'}>
            <div className='absolute right-0 top-0 h-2 w-2 rounded-full bg-red-400 after:absolute after:right-0 after:top-0 after:h-2 after:w-2 after:animate-ping after:rounded-full after:bg-red-400'></div>
            <IoIosNotifications className={`text-xl font-bold`} />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='fixed right-0 top-20 z-20 w-full px-4 sm:left-12 sm:top-96 sm:w-96 xl:left-auto xl:right-16 xl:top-[72px] 2xl:-right-4'>
              <div className='common-bg rounded-lg p-4'>
                <h3 className='pb-2 font-bold'>Notifikasi</h3>
                <div className='max-h-96 w-full divide-y divide-light-accent overflow-y-auto dark:divide-dark-accent'>
                  {notif.map(() => (
                    <>
                      <div className='flex w-full items-center gap-4 py-4'>
                        {/* profile picture user */}
                        <div>
                          <ProfileImage size='sm' />
                        </div>
                        {/* name, desc, and time */}
                        <div>
                          <span className='block'>Kumala menyukai postingan Anda</span>
                          <span className='block text-xs'>9 jam yang lalu</span>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div className='pt-2'>{notif.length} Notifikasi</div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
    </>
  );
}
