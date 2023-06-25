import Image from 'next/image';
import Link from 'next/link';
import commitanLogo from '../../../public/images/commitan-logo.svg';
import DarkModeBtn from '../common/darkModeBtn';
import ProfileMenu from '../common/profileMenu';

export default function Navbar() {
  return (
    <header className='fixed left-0 right-0 top-0 z-50 mx-auto w-full max-w-[1440px] backdrop-blur-sm xl:px-20 2xl:px-0'>
      <div className='grid w-full grid-cols-2 items-center justify-between px-4 py-4 sm:grid-cols-3 sm:pl-20 xl:grid-cols-5 xl:px-0 xl:pl-0 '>
        {/* row 1 start*/}
        <Link href='/' className='hidden items-center gap-4 xl:flex'>
          <Image src={commitanLogo} alt='Commitan Logo' width={28} height={28} priority />
          <h1 className='font-bold sm:text-xl'>Commitan.</h1>
        </Link>
        {/* row 1 end*/}
        {/* row 2 start*/}
        <button className='common-bg rounded-lg px-4 py-2 text-left sm:col-span-3 sm:py-3'>Pencarian...</button>
        {/* row 2 end*/}
        {/* row 3 start*/}
        <div className='flex items-center justify-between gap-4 pl-4 sm:hidden xl:flex xl:gap-2'>
          <div className='order-2 xl:order-1'>
            <ProfileMenu />
          </div>
          <div className='order-1 flex w-full items-center justify-end gap-4 xl:order-2'>
            <button className='common-bg flex h-8 w-8 items-center justify-center rounded-full p-4'>n</button>
            <DarkModeBtn />
          </div>
        </div>
        {/* row 3 end*/}
      </div>
    </header>
  );
}
