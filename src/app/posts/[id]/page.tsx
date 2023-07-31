import Category from '@/components/layout/category';
import Following from '@/components/layout/following';
import Information from '@/components/layout/information';
import Trending from '@/components/layout/trending';
import type { UserPost } from '@/interfaces/post';
import axios from 'axios';
import { cache } from 'react';
import DetailSection from './detailSection';

interface PostData {
  data: UserPost;
}

const getData = cache(async (param: string) => {
  const res = await axios.get<PostData>(`${process.env.API_URL}/post/index/${param}`);

  return res.data.data;
});

export default async function DetailPost({ params }: { params: { id: string } }) {
  const dataPost = await getData(params.id);

  return (
    <>
      <section className='order-2 sm:col-span-11 sm:col-start-2 xl:fixed xl:left-0 xl:top-0 xl:order-3 xl:mt-20 xl:grid xl:grid-cols-12 xl:gap-4 xl:pl-[3.35rem]'>
        <div className='no-scrollbar xl:col-span-2 xl:col-start-9 xl:max-h-screen xl:overflow-auto xl:pb-20'>
          <div className='space-y-4'>
            <Trending visibility='hidden xl:block' />
            <Following visibility='hidden xl:block' />
            <Category visibility='hidden xl:block' />
            <Information visibility='hidden xl:block' />
          </div>
        </div>
      </section>
      <div className='order-3 mt-20 h-[2000px] sm:col-span-11 sm:col-start-2 xl:order-2 xl:col-span-6 xl:col-start-3'>
        <DetailSection data={dataPost} postId={params.id} />
      </div>
    </>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const dataPost = await getData(params.id);

  return { title: dataPost.title };
}
