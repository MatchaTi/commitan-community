// import ProfileSection from './profileSection';
'use client';

import Badge from '@/components/common/badge';
import Button from '@/components/common/button';
import Achievement from '@/components/layout/achievement';
import { AiFillCalendar } from 'react-icons/ai';
import ProfileSection from './profileSection';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Cookies from 'js-cookie';
import moment from 'moment';

interface IProfileUser<T> {
  _id: T;
  fullname: T;
  username: T;
  job: T;
  followers: Array<T>;
  following: Array<T>;
  createdAt: T;
  bio: T;
}

export default function Profile() {
  const params = useParams();
  const [data, setData] = useState<IProfileUser<string>>({
    _id: '',
    fullname: '',
    username: '',
    job: '',
    followers: [],
    following: [],
    createdAt: '',
    bio: '',
  });
  useEffect(() => {
    const token = Cookies.get('token');
    const getdata = async () => {
      const response = await axios.get(`${process.env.API_URL}/user/profile/${params.username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(response.data.data[0]);
    };
    getdata();
  }, []);

  return (
    <>
      <section className='order-1 mt-32 sm:col-span-11 sm:col-start-2 xl:col-span-8 xl:col-start-3 xl:mt-20'>
        <div className='mb-4 flex w-full flex-wrap items-center justify-between gap-4'>
          <div className='flex flex-wrap items-center gap-4'>
            <div className='h-40 w-40 rounded-full bg-red-500'></div>
            <div className='space-y-2'>
              <div className='flex flex-wrap items-center gap-4'>
                <span className='headings text-2xl font-bold'>{data.fullname}</span>
                <Badge>{data.job}</Badge>
              </div>
              <div className='flex flex-wrap items-center gap-4'>
                <span>{data.username}</span>
                <div className='flex items-center gap-4'>
                  <AiFillCalendar />
                  <span>Bergabung {moment(data.createdAt).format('DD MMMM YYYY')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-none'>
            <Button type='button' color='outline'>
              Edit Profil
            </Button>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='space-x-2'>
            <span className='headings font-semibold'>{data.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className='space-x-2'>
            <span className='headings font-semibold'>{data.following.length}</span>
            <span>Following</span>
          </div>
        </div>
      </section>
      <section className='order-3 h-[2000px] sm:col-span-11 sm:col-start-2 xl:order-2 xl:col-span-6 xl:col-start-3'>
        {data._id !== '' && <ProfileSection id={data._id} />}
      </section>
      <section className='order-2 sm:col-span-11 sm:col-start-2 xl:order-3 xl:col-span-2 xl:col-start-9'>
        <div className='xl:sticky xl:top-20 xl:z-10 xl:h-screen xl:overflow-auto'>
          <div className='common-bg w-full rounded-md p-4 leading-normal'>
            <h4 className='mb-4 text-base font-bold text-commitan-main'>Bio</h4>
            <q className='italic'>{data.bio}</q>
          </div>
          <Achievement />
        </div>
      </section>
    </>
  );
}
