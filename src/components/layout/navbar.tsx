import DarkModeBtn from '../common/darkModeBtn';
import Notification from '../common/notification';
import ProfileMenu from '../common/profileMenu';
import SearchModal from '../common/searchModal';

export default function Navbar() {
  return (
    <nav className='fixed left-0 top-0 z-50 grid w-full grid-cols-12 items-center gap-4 px-4 py-4 backdrop-blur-sm lg:px-0'>
      <div className='col-span-7 sm:col-start-2 lg:col-span-6 lg:col-start-4'>
        <SearchModal />
      </div>
      <div className='col-span-5 flex items-center justify-between sm:col-span-4 lg:col-span-2'>
        <ProfileMenu />
        <DarkModeBtn visibility='sm:hidden' />
        <Notification />
      </div>
    </nav>
  );
}
