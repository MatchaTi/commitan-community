'use client';

import { useEffect, useState } from 'react';
import DarkModeBtn from '../common/darkModeBtn';
import Notification from '../common/notification';
import ProfileMenu from '../common/profileMenu';
import SearchModal from '../common/searchModal';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Navbar() {
  const [data, setData] = useState<{
    username: string;
    notification: [];
  }>({
    username: '',
    notification: [],
  });

  useEffect(() => {
    const token = Cookies.get('token');
    const getdata = async () => {
      const response = await axios.get(`${process.env.API_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(response.data.data[0]);
    };
    getdata();
  }, []);

  return (
    <nav className='fixed left-0 top-0 z-50 grid w-full grid-cols-12 items-center gap-4 px-4 py-4 backdrop-blur-sm xl:px-0 xl:pl-[3.35rem]'>
      <div className='col-span-6 sm:col-span-8 sm:col-start-2 xl:col-span-6 xl:col-start-3'>
        <SearchModal />
      </div>
      <div className='col-span-6 flex items-center justify-between sm:col-span-3 xl:col-span-2'>
        <ProfileMenu username={data.username} />
        <DarkModeBtn visibility='sm:hidden' />
        <Notification notification={data.notification} />
      </div>
    </nav>
  );
}
