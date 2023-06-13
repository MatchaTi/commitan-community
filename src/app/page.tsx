import PostList from '@/components/common/postList';
import UploadModal from '@/components/common/uploadModal';
import Category from '@/components/layout/category';
import Following from '@/components/layout/following';
import HomeLayout from '@/components/layout/homeLayout';
import Trending from '@/components/layout/trending';

export default function Home() {
  return (
    <HomeLayout>
      <main className='order-2 mx-auto flex min-h-[2000px] w-full pt-16 sm:col-span-4 sm:col-start-1 sm:pt-20 xl:col-span-3 xl:col-start-2'>
        <div className='mx-auto w-full'>
          <UploadModal />
          <Trending visibility='xl:hidden' />
          <Following visibility='xl:hidden' />
          <Category visibility='xl:hidden' />
          <PostList />
        </div>
      </main>
    </HomeLayout>
  );
}
