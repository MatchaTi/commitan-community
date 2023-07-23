import { verifyToken } from '@/libs/auth';
import { cookies } from 'next/headers';

interface IAuthVerify {
  isAuthenticated: boolean;
}

export function useAuthVerify(): IAuthVerify {
  const nextCookie = cookies();
  const token = nextCookie.get('token');
  const payload: any = token && verifyToken(token?.value);

  return {
    isAuthenticated: !payload.error,
  };
}
