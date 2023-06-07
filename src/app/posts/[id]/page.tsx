import Post from '@/components/common/post';
import axios from 'axios';
import type { UserPost } from '@/interfaces/post';

async function getData(param: string) {
  const res = await axios.get<UserPost>(`${process.env.API_URL}/posts/${param}`);
  return res.data;
}

export default async function DetailPost({ params }: { params: { id: string } }) {
  const dataPost = await getData(params.id);
  return (
    <main className='order-2 mx-auto flex min-h-[2000px] w-full pt-16 sm:col-span-4 sm:col-start-1 sm:pt-20 xl:col-span-3 xl:col-start-2'>
      <div className='mx-auto w-full'>
        <Post data={dataPost} postId={dataPost.id} editorContext='detail' />
      </div>
    </main>
  );
}
