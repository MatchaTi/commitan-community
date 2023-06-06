export default function Loading() {
  return (
    <div className='fixed inset-0 z-[9999] flex h-screen items-center justify-center bg-slate-100 dark:bg-slate-900'>
      <div className='grid w-fit animate-pulse grid-cols-2 grid-rows-2 gap-4'>
        <div className='h-28 w-28 rounded-lg bg-sky-600'></div>
        <div className='h-28 w-28 rounded-lg bg-sky-400'></div>
        <div className='h-28 w-28 rounded-lg bg-slate-200'></div>
        <div className='h-28 w-28 rounded-lg bg-sky-700'></div>
      </div>
    </div>
  );
}
