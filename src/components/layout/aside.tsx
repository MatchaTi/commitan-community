import Category from './category';
import Following from './following';
import Information from './information';
import Trending from './trending';

export default function Aside() {
  return (
    <div className='order-3 pl-4 sm:mb-10 sm:pb-20 sm:pt-20'>
      <aside className='hidden max-h-screen w-full overflow-y-auto pb-10 xl:sticky xl:right-0 xl:top-[70px] xl:block'>
        <Trending visibility='hidden xl:block' />
        <Following visibility='hidden xl:block' />
        <Category visibility='hidden xl:block' />
        <Information visibility='hidden xl:block' />
      </aside>
    </div>
  );
}
