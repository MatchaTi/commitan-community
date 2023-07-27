'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AiFillHome } from 'react-icons/ai';
import { BsBookmarkFill, BsFillChatLeftDotsFill, BsFire } from 'react-icons/bs';
import { IoPersonCircle } from 'react-icons/io5';
import commitanLogo from '../../../public/images/commitan-logo.svg';
import DarkModeBtn from '../common/darkModeBtn';

interface MenuItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    href: '/',
    label: 'Beranda',
    icon: <AiFillHome className='text-2xl sm:text-xl' />,
  },
  {
    href: 'rekomendasi',
    label: 'Rekomendasi',
    icon: <BsFire className='text-2xl sm:text-xl' />,
  },
  {
    href: 'tersimpan',
    label: 'Tersimpan',
    icon: <BsBookmarkFill className='text-xl sm:text-lg' />,
  },
  {
    href: 'chat',
    label: 'Chat',
    icon: <BsFillChatLeftDotsFill className='text-xl sm:text-lg' />,
  },
  {
    href: 'profil',
    label: 'Profil',
    icon: <IoPersonCircle className='text-2xl sm:-translate-x-0.5' />,
  },
];

export default function Sidebar() {
  const pathName = usePathname();
  const splitedPath = pathName.split('/');

  return (
    <>
      <nav className='group fixed bottom-0 left-0 z-50 w-full overflow-hidden text-xs duration-200 ease-in-out sm:bottom-auto sm:top-0 sm:h-screen sm:w-[3.35rem] sm:hover:w-40'>
        <ul className='common-bg flex h-full w-full items-center justify-between p-4 sm:flex-col sm:items-start sm:justify-start sm:gap-6 sm:p-1.5'>
          <li className='hidden h-10 w-10 items-center justify-center sm:flex'>
            <Image src={commitanLogo} alt='Commitan Logo' width={28} height={28} />
          </li>
          {menuItems.map(({ href, label, icon }, i) => (
            <a
              href={href}
              key={i}
              className='common-accent relative flex min-w-max items-center gap-2 overflow-hidden duration-200 ease-in-out after:absolute after:bottom-0 after:w-full after:-translate-x-[150%] after:border-b after:border-light-text after:duration-300 after:ease-in-out dark:border-dark-accent dark:border-light-accent/5 after:dark:border-dark-text sm:border-b sm:p-2.5 sm:hover:after:translate-x-0 sm:group-hover:px-4'
            >
              <div className={`${splitedPath[1] == href && 'text-commitan-main'}`}>{icon}</div>
              <div className='hidden hover:text-commitan-main sm:group-hover:block'>{label}</div>
            </a>
          ))}
          <li className='hidden flex-1 sm:block'></li>
          <li className='hidden w-full sm:block sm:pb-2'>
            <DarkModeBtn context='sidebar' />
          </li>
        </ul>
      </nav>
    </>
  );
}
