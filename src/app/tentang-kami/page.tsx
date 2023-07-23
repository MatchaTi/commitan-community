import axios from 'axios';
import Image from 'next/image';

export default async function About() {
  async function getUser(username: string) {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    return res.data;
  }
  const adi = await getUser('MatchaTi');
  const dipa = await getUser('MuhammadRadifa');

  return (
    <div className='mx-auto mt-32 w-full max-w-[1440px]'>
      <div className='text-center'>
        <h1 className='mb-6 text-base font-semibold text-commitan-main'>Tentang Kami</h1>
        <h2 className='headings mx-auto max-w-5xl text-4xl font-bold leading-normal sm:max-w-3xl sm:text-5xl xl:max-w-5xl xl:text-7xl'>
          Jelajahi Dunia Ngoding Bersama Komunitas yang Inspiratif.
        </h2>
      </div>
      <div className='mx-auto mt-10 w-full xl:w-4/6'>
        <div className='flex w-full flex-wrap items-center justify-center gap-4 sm:gap-0'>
          <div className='rounded-full bg-light-headings/5 p-3 duration-300 ease-in-out hover:bg-light-text/10 dark:bg-dark-main hover:dark:bg-dark-secondary'>
            <div className='h-24 w-24 overflow-hidden rounded-full sm:h-32 sm:w-32'>
              <Image
                src={adi.avatar_url}
                alt={adi.login}
                width={128}
                height={128}
                loading='lazy'
                className='w-full object-cover'
              />
            </div>
          </div>
          <div className='relative hidden w-40 border-b-4 border-light-headings/5 dark:border-dark-main sm:block'>
            <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1.5 rounded-full bg-[#E8ECF0] dark:bg-dark-main'></div>
          </div>
          <div className='rounded-full bg-light-headings/5 p-3 duration-300 ease-in-out hover:bg-light-text/10 dark:bg-dark-main hover:dark:bg-dark-secondary'>
            <div className='h-24 w-24 overflow-hidden rounded-full sm:h-32 sm:w-32'>
              <Image
                src={dipa.avatar_url}
                alt={dipa.login}
                width={128}
                height={128}
                loading='lazy'
                className='w-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='relative mt-10 text-base'>
        {/* <div className='bg-base absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 border-none px-4'>
          Commitan.
        </div> */}
        <div className='common-accent mx-auto w-full space-y-6 rounded-lg p-8 xl:w-4/6'>
          <p>
            Selamat datang di Commitan! Commitan hadir sebagai tempat yang menginspirasi bagi para developer untuk
            berkolaborasi dan tumbuh bersama. Bersama-sama, kita akan menjelajahi berbagai topik teknologi terbaru,
            memecahkan tantangan, dan merayakan setiap pencapaian.
          </p>
          <p>
            Kami percaya bahwa kolaborasi dan berbagi pengetahuan adalah kunci untuk mengembangkan diri dan menciptakan
            inovasi. Oleh karena itu, Commitan memfasilitasi ruang diskusi dan forum yang ramah, di mana Anda dapat
            berinteraksi dengan sesama developer, menanyakan pertanyaan, atau berbagi pengetahuan Anda sendiri.
          </p>
          <p>
            Bergabunglah dengan kami sekarang dan mulailah memperluas jaringan, menemukan inspirasi, serta mengasah
            keterampilan Anda sebagai developer. Sama-sama kita dapat menciptakan dunia teknologi yang lebih cemerlang
            dan menginspirasi!
          </p>
          <p>
            <span className='mt-1'>—</span> Tim Commitan
          </p>
        </div>
      </div>
    </div>
  );
}
