import DarkModeBtn from '../common/darkModeBtn';
import Notification from '../common/notification';
import ProfileMenu from '../common/profileMenu';
import SearchModal from '../common/searchModal';

export default function Navbar() {
  return (
    <nav className='fixed left-0 top-0 z-50 grid w-full grid-cols-12 items-center gap-4 px-4 py-4 backdrop-blur-sm xl:px-0 xl:pl-[3.35rem]'>
      <div className='col-span-6 sm:col-span-8 sm:col-start-2 xl:col-span-6 xl:col-start-3'>
        <SearchModal />
      </div>
      <div className='col-span-6 flex items-center justify-between sm:col-span-3 xl:col-span-2'>
        <ProfileMenu />
        <DarkModeBtn visibility='sm:hidden' />
        <Notification />
      </div>
    </nav>
  );
}
