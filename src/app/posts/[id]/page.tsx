import type { UserPost } from '@/interfaces/post';
import axios from 'axios';
import DetailSection from './detailSection';

async function getData(param: string) {
  const res = await axios.get<UserPost>(`${process.env.API_URL}/posts/${param}`);
  return res.data;
}

export default async function DetailPost({ params }: { params: { id: string } }) {
  const dataPost = await getData(params.id);

  return (
    <main className='order-2 mx-auto flex min-h-[2000px] w-full pt-16 sm:col-span-4 sm:col-start-1 sm:pt-20 xl:col-span-3 xl:col-start-2'>
      <DetailSection data={dataPost} postId={params.id} />
    </main>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const dataPost = await getData(params.id);

  return {
    title: dataPost.title,
  };
}
