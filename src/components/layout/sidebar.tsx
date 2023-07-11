'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AiFillHome } from 'react-icons/ai';
import { BsBookmarkFill, BsFillChatLeftDotsFill, BsFire } from 'react-icons/bs';
import { IoPersonCircle } from 'react-icons/io5';
import commitanLogo from '../../../public/images/commitan-logo.svg';
import DarkModeBtn from '../common/darkModeBtn';
import Notification from '../common/notification';

interface MenuItem {
  href: string;
  order: string;
  label: string;
  icon?: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    href: '',
    order: 'order-1',
    label: 'Beranda',
    icon: <AiFillHome className='text-2xl group-hover:text-commitan-main sm:text-xl xl:text-3xl' />,
  },
  {
    href: 'rekomendasi',
    order: 'order-2',
    label: 'Rekomendasi',
    icon: <BsFire className='text-2xl group-hover:text-commitan-main sm:text-xl xl:text-3xl' />,
  },
  {
    href: 'tersimpan',
    order: 'order-3',
    label: 'Tersimpan',
    icon: <BsBookmarkFill className='text-xl group-hover:text-commitan-main sm:text-lg xl:text-2xl' />,
  },
  {
    href: 'chat',
    order: 'order-4',
    label: 'Chat',
    icon: <BsFillChatLeftDotsFill className='text-xl group-hover:text-commitan-main sm:text-lg xl:text-2xl' />,
  },
  {
    href: 'profil',
    order: 'order-6',
    label: 'Profil',
    icon: <IoPersonCircle className='text-2xl group-hover:text-commitan-main sm:text-3xl' />,
  },
];

export default function Sidebar() {
  const pathName = usePathname();
  const splitedPath = pathName.split('/');

  return (
    <div className='order-1'>
      <nav className='fixed bottom-0 left-0 z-[9999] w-full bg-white p-4 px-8 dark:bg-dark-main sm:top-0 sm:w-auto sm:px-2 xl:sticky xl:top-20 xl:bg-transparent xl:p-0 xl:dark:bg-transparent'>
        <ul className='relative flex items-center justify-between gap-4 sm:h-screen sm:flex-col sm:gap-10 sm:pt-3 xl:h-auto xl:items-start'>
          <li className='hidden sm:inline xl:hidden'>
            <Image src={commitanLogo} alt='Commitan Logo' width={28} height={28} />
          </li>
          {menuItems.map(({ label, href, icon, order }, index) => {
            return (
              <li
                key={index}
                className={`${
                  href == splitedPath[1] && 'text-commitan-main'
                } ${order} duration-100 hover:text-commitan-main`}
              >
                <a href={`/${href}`} className='flex items-center gap-4 xl:w-40'>
                  {icon} <span className='hidden xl:inline'>{label}</span>
                </a>
              </li>
            );
          })}
          <li className='order-5 hidden flex-1 sm:inline xl:hidden'>
            <Notification />
          </li>
          <li className='order-7 hidden -translate-y-8 sm:inline xl:hidden '>
            <DarkModeBtn />
          </li>
        </ul>
      </nav>
    </div>
  );
}
