export default function PostSkeleton() {
  return (
    <>
      {[1, 2, 3].map((item) => (
        <div key={item} className='common-bg mt-4 h-fit w-full rounded-lg p-4'>
          <div className='flex items-center gap-4 pb-20'>
            <div className='h-10 w-10 animate-pulse rounded-full bg-slate-400/25'></div>
            <div className='h-4 w-20 animate-pulse rounded-full bg-slate-400/25'></div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='h-4 w-20 animate-pulse rounded-full bg-slate-400/25'></div>
            <div className='h-4 w-20 animate-pulse rounded-full bg-slate-400/25'></div>
          </div>
          <span className='sr-only'>Loading...</span>
        </div>
      ))}
    </>
  );
}
