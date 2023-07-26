import Image from 'next/image';
import commitanLogo from '../../../public/images/commitan-logo.svg';
import DarkModeBtn from '../common/darkModeBtn';
import Notification from '../common/notification';
import ProfileMenu from '../common/profileMenu';
import SearchModal from '../common/searchModal';

export default function Navbar() {
  return (
    <header className='fixed left-0 right-0 top-0 z-50 mx-auto w-full max-w-[1440px] backdrop-blur-sm xl:px-20 2xl:px-0'>
      <div className='grid w-full grid-cols-2 items-center justify-between px-4 py-4 sm:grid-cols-3 sm:pl-20 xl:grid-cols-5 xl:px-0 xl:pl-0 '>
        {/* row 1 start*/}
        <a href='/' className='hidden items-center gap-4 xl:flex'>
          <div>
            <Image src={commitanLogo} alt='Commitan Logo' width={28} height={28} priority />
          </div>
          <h1 className='headings font-bold sm:text-xl'>Commitan.</h1>
        </a>
        {/* row 1 end*/}
        {/* row 2 start*/}
        <SearchModal />
        {/* row 2 end*/}
        {/* row 3 start*/}
        <div className='flex items-center justify-between gap-4 pl-4 sm:hidden xl:flex xl:gap-2'>
          <div className='order-2 xl:order-1'>
            <ProfileMenu />
          </div>
          <div className='order-1 flex w-full items-center justify-end gap-4 xl:order-2'>
            <Notification />
            <DarkModeBtn />
          </div>
        </div>
        {/* row 3 end*/}
      </div>
    </header>
  );
}
