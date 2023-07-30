import PostList from '@/components/common/postList';
import UploadModal from '@/components/common/uploadModal';
import Category from '@/components/layout/category';
import Following from '@/components/layout/following';
import Information from '@/components/layout/information';
import MainLayout from '@/components/layout/mainLayout';
import Trending from '@/components/layout/trending';

export default function Home() {
  return (
    <div className='min-h-[2000px]'>
      <MainLayout>
        <div className='sm:col-span-7 sm:col-start-2 xl:col-span-5 xl:col-start-3'>
          <UploadModal />
        </div>
        <aside className='no-scrollbar h-fit w-full gap-4 overflow-y-auto sm:fixed sm:left-0 sm:top-20 sm:grid sm:h-screen sm:max-h-screen sm:grid-cols-11 sm:px-4 sm:pb-40 xl:px-0 xl:pl-[3.35rem]'>
          <div className='space-y-4 sm:col-span-3 sm:col-start-9 xl:col-span-2 xl:col-start-8 xl:row-start-1'>
            <Trending />
            <Following />
            <Category />
            <Information visibility='sm:block hidden' />
          </div>
        </aside>
        <div className='sm:col-span-7 sm:col-start-2 xl:col-span-5 xl:col-start-3'>
          <PostList />
        </div>
      </MainLayout>
    </div>
  );
}
