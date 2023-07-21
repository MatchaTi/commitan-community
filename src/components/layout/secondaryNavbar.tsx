'use client';

import { infoItems } from '@/utils/data';
import Image from 'next/image';
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { FaBars } from 'react-icons/fa';
import CommitanIcon from '../../../public/images/commitan-logo.svg';
import Button from '../common/button';

export default function SecondaryNavbar() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className='fixed left-0 right-0 top-4 z-[99] flex w-full items-center justify-between px-4 xl:hidden'>
        <div className='xl:hidden'>
          <Image src={CommitanIcon} alt='Commitan Icon' width={28} height={28} />
        </div>
        <Button type='button' color='transparent' onClick={() => setIsClicked(!isClicked)}>
          {isClicked ? <CgClose /> : <FaBars />}
        </Button>
      </div>
      <nav
        className={`${
          isClicked ? 'left-0' : '-left-full'
        } common-bg fixed top-0 z-50 mx-auto h-screen w-full max-w-[1440px] border-none shadow-none backdrop-blur-sm duration-300 ease-in-out xl:left-0 xl:right-0 xl:h-auto xl:bg-transparent xl:px-20 xl:dark:bg-transparent 2xl:px-0`}
      >
        <div className='flex h-full w-full flex-col items-center justify-center gap-8 px-4 py-4 xl:flex-row xl:justify-between xl:gap-0 xl:px-0'>
          <div className='hidden xl:block xl:w-1/6'>
            <Image src={CommitanIcon} alt='Commitan Icon' width={28} height={28} />
          </div>
          <ul className='paragraphs flex flex-col items-start justify-center gap-4 xl:flex-1 xl:flex-row xl:items-center xl:gap-8'>
            <li className='underline-offset-8 duration-150 ease-in-out hover:text-light-headings hover:underline hover:dark:text-dark-headings'>
              <a href='/'>Beranda</a>
            </li>
            {infoItems.map(({ label, href }, i) => (
              <li
                key={i}
                className='underline-offset-8 duration-150 ease-in-out hover:text-light-headings hover:underline hover:dark:text-dark-headings'
              >
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
          <div className='flex justify-end xl:w-1/6'>
            <a href='/auth/login'>
              <Button type='button'>Gabung Sekarang!</Button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
