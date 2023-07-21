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
      <div className='fixed left-0 right-0 top-4 z-[99] flex w-full items-center justify-between px-4 lg:hidden'>
        <div className='lg:hidden'>
          <Image src={CommitanIcon} alt='Commitan Icon' width={28} height={28} />
        </div>
        <Button type='button' color='transparent' size='none' onClick={() => setIsClicked(!isClicked)}>
          {isClicked ? <CgClose /> : <FaBars />}
        </Button>
      </div>
      <nav
        className={`${
          isClicked ? 'left-0' : '-left-full'
        } common-bg fixed top-0 z-50 mx-auto h-screen w-full max-w-[1440px] border-none shadow-none backdrop-blur-sm duration-300 ease-in-out lg:left-0 lg:right-0 lg:h-auto lg:bg-transparent lg:dark:bg-transparent xl:px-20 2xl:px-0`}
      >
        <div className='flex h-full w-full flex-col items-center justify-center gap-8 px-4 py-4 lg:flex-row lg:justify-between lg:gap-0 xl:px-0'>
          <div className='hidden items-center gap-4 lg:flex xl:w-1/6'>
            <div>
              <Image src={CommitanIcon} alt='Commitan Icon' width={28} height={28} />
            </div>
            <div className='headings text-xl font-bold'>Commitan.</div>
          </div>
          <ul className='paragraphs flex flex-col items-start justify-center gap-4 lg:flex-1 lg:flex-row lg:items-center lg:gap-8'>
            <li className='text-xl underline-offset-8 duration-150 ease-in-out hover:text-light-headings hover:underline hover:dark:text-dark-headings sm:text-base lg:text-sm'>
              <a href='/'>Beranda</a>
            </li>
            {infoItems.map(({ label, href }, i) => (
              <li
                key={i}
                className='text-xl underline-offset-8 duration-150 ease-in-out hover:text-light-headings hover:underline hover:dark:text-dark-headings sm:text-base lg:text-sm'
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
