import { verifyToken } from '@/libs/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ProfileSection from './profileSection';

export default function Profile() {
  const nextCookie = cookies();

  const token = nextCookie.get('token');

  const payload: any = token && verifyToken(token.value);

  if (payload && payload.error) redirect('/auth/login');

  return (
    <main className='order-2 mx-auto flex min-h-[2000px] w-full pt-16 sm:col-span-4 sm:col-start-1 sm:pt-20 xl:col-span-3 xl:col-start-2'>
      <ProfileSection />
    </main>
  );
}
