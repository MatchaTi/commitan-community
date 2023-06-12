'use client';
import { AiFillHome } from 'react-icons/ai';
import { BsBookmarkFill, BsFillChatLeftDotsFill, BsFire } from 'react-icons/bs';
import { IoPersonCircle } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import commitanLogo from '../../../public/images/commitan-logo.svg';
import Image from 'next/image';
import DarkModeBtn from '../common/darkModeBtn';
import Link from 'next/link';

interface MenuItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    href: '/',
    label: 'Beranda',
    icon: <AiFillHome className='text-2xl group-hover:text-commitan-main sm:text-3xl' />,
  },
  {
    href: '/rekomendasi',
    label: 'Rekomendasi',
    icon: <BsFire className='text-2xl group-hover:text-commitan-main sm:text-3xl' />,
  },
  {
    href: '/tersimpan',
    label: 'Tersimpan',
    icon: <BsBookmarkFill className='text-xl group-hover:text-commitan-main sm:text-2xl' />,
  },
  {
    href: '/chat',
    label: 'Chat',
    icon: <BsFillChatLeftDotsFill className='text-xl group-hover:text-commitan-main sm:text-2xl' />,
  },
  {
    href: '/profil',
    label: 'Profil',
    icon: <IoPersonCircle className='text-2xl group-hover:text-commitan-main sm:text-3xl xl:inline' />,
  },
];

export default function Sidebar() {
  const pathName = usePathname();

  return (
    <div className='order-1'>
      <nav className='fixed bottom-0 left-0 z-[9999] w-full bg-white p-4 px-8 dark:bg-dark-main sm:top-0 sm:w-auto sm:px-4 xl:sticky xl:top-20 xl:bg-transparent xl:p-0 xl:dark:bg-transparent'>
        <ul className='relative flex items-center justify-between gap-4 sm:h-screen sm:flex-col sm:gap-10 sm:pt-3 xl:h-auto xl:items-start'>
          <li className='hidden sm:inline xl:hidden'>
            <Image src={commitanLogo} alt='Commitan Logo' width={28} height={28} />
          </li>
          {menuItems.map(({ label, href, icon }, index) => {
            return (
              <li key={index}>
                <Link
                  href={href}
                  className={`${
                    href == pathName && 'text-commitan-main'
                  } flex items-center gap-4 duration-100 hover:text-commitan-main xl:w-40`}
                >
                  {icon} <span className='hidden xl:inline'>{label}</span>
                </Link>
              </li>
            );
          })}
          <li className='hidden flex-1 sm:inline xl:hidden'>
            {/* notification */}
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-commitan-main'>n</div>
          </li>
          <li className='hidden -translate-y-8 sm:inline xl:hidden '>
            <DarkModeBtn />
          </li>
        </ul>
      </nav>
    </div>
  );
}
