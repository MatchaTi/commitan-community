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
            <div className='fixed left-0 top-16 z-10 grid w-full grid-cols-12 items-center gap-4 px-4 py-4 lg:px-0'>
              <Popover.Panel className='col-span-12 rounded-lg bg-light-main py-4 shadow-lg shadow-light-accent dark:border dark:border-light-accent/5 dark:bg-dark-secondary dark:shadow-none sm:col-start-8 lg:col-span-3 lg:col-start-9'>
                <h3 className='px-4 pb-2 font-bold'>Notifikasi</h3>
                <div className='max-h-96 w-full divide-y divide-dark-accent/10 overflow-y-auto dark:divide-light-accent/5'>
                  {notif.map((item) => (
                    <Fragment key={item}>
                      <div className='flex w-full items-center gap-4 px-4 py-4 duration-150 ease-in-out hover:bg-dark-secondary/5 hover:dark:bg-light-secondary/5'>
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
                    </Fragment>
                  ))}
                </div>
                <div className='px-4 pt-2'>{notif.length} Notifikasi</div>
              </Popover.Panel>
            </div>
          </Transition>
        </>
      </Popover>
    </>
  );
}
