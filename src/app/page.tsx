import PostList from '@/components/common/postList';
import UploadModal from '@/components/common/uploadModal';
import Category from '@/components/layout/category';
import Following from '@/components/layout/following';
import Information from '@/components/layout/information';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/sidebar';
import Trending from '@/components/layout/trending';

export default function Home() {
  return (
    <div className='min-h-[4000px]'>
      <main className='grid gap-4 px-4 pb-10 sm:grid-cols-12 lg:px-0'>
        <Navbar />
        <Sidebar />
        <UploadModal />
        <aside className='no-scrollbar h-fit w-full gap-4 overflow-y-auto sm:fixed sm:left-0 sm:top-20 sm:grid sm:h-screen sm:max-h-screen sm:grid-cols-12 sm:px-4 sm:pb-40 lg:px-0'>
          <div className='space-y-4 sm:col-span-4 sm:col-start-9 lg:col-span-2 lg:col-start-10 lg:row-start-1'>
            <Trending />
            <Following />
            <Category />
            <Information visibility='sm:block hidden' />
          </div>
        </aside>
        <PostList />
      </main>
    </div>
  );
}
