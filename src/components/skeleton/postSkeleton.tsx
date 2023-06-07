export default function PostSkeleton() {
  return (
    <>
      {[1, 2].map((item) => (
        <div key={item} className='common-bg mt-4 flex h-fit w-full gap-4 rounded-lg p-4'>
          <div className='h-12 w-12 rounded-full bg-slate-400/25'></div>
          <div className='flex-1'>
            <div className='flex w-full animate-pulse items-center gap-4'>
              <div className='h-6 w-40 rounded-full bg-slate-400/25'></div>
              <div className='flex-1'></div>
              <div className='h-6 w-20 rounded-full bg-slate-400/25'></div>
            </div>
            <div className='mt-4 animate-pulse pb-40'>
              <div className='mb-4 h-4 w-48 rounded-full bg-slate-400/25'></div>
            </div>
            <div className='mt-4 flex w-full animate-pulse items-center gap-4'>
              <div className='h-8 w-8 rounded-lg bg-slate-400/25'></div>
              <div className='h-8 w-8 rounded-lg bg-slate-400/25'></div>
              <div className='h-8 w-8 rounded-lg bg-slate-400/25'></div>
              <div className='h-8 w-8 rounded-lg bg-slate-400/25'></div>
              <div className='flex-1'></div>
              <div className='h-8 w-8 rounded-lg bg-slate-400/25'></div>
            </div>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      ))}
    </>
  );
}
