'use client';

import { verifyToken } from '@/libs/auth';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

interface IAuthVerify {
  isAuthenticated: boolean;
}

export function useAuthVerify(): boolean {
  const [authResult, setAuthResult] = useState<IAuthVerify>({
    isAuthenticated: false,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchAuthResult() {
      const token = Cookies.get('token');

      if (token) {
        try {
          const payload: any = await verifyToken(token);

          const result: IAuthVerify = {
            isAuthenticated: !payload.error,
          };

          if (isMounted) {
            setAuthResult(result);
          }
        } catch (error) {
          if (isMounted) {
            setAuthResult({ isAuthenticated: false });
          }
        }
      }
    }

    fetchAuthResult();

    return () => {
      isMounted = false;
    };
  }, []);

  return authResult.isAuthenticated;
}
