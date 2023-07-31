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
        <div className='order-1 mt-20 sm:col-span-11 sm:col-start-2 xl:col-span-6 xl:col-start-3'>
          <UploadModal />
        </div>
        <section className='order-2 sm:col-span-11 sm:col-start-2 xl:fixed xl:left-0 xl:top-0 xl:order-3 xl:mt-20 xl:grid xl:grid-cols-12 xl:gap-4 xl:pl-[3.35rem]'>
          <div className='no-scrollbar xl:col-span-2 xl:col-start-9 xl:max-h-screen xl:overflow-auto xl:pb-20'>
            <div className='space-y-4'>
              <Trending />
              <Following />
              <Category />
              <Information visibility='hidden xl:block' />
            </div>
          </div>
        </section>
        <div className='order-3 h-[2000px] sm:col-span-11 sm:col-start-2 xl:order-2 xl:col-span-6 xl:col-start-3'>
          <PostList />
        </div>
      </MainLayout>
    </div>
  );
}
