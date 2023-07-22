'use client';

import Button from '@/components/common/button';
import Spinner from '@/components/common/spinner';
import { LoginResponse } from '@/interfaces/auth';
import { login } from '@/libs/auth';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

interface UserInput {
  email: string;
  password: string;
}

export default function LoginSection() {
  const [isShow, setIsShow] = useState(false);
  const [userInput, setUserInput] = useState<UserInput>({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleShowHide = () => setIsShow(!isShow);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 3000));
    try {
      const res: LoginResponse = await login({ ...userInput });
      if (res.status) if (res.status >= 400) throw new Error(res.message);
      if (res.token) Cookies.set('token', res.token, { secure: true, expires: 30 });
      toast.success(`${res.message}`);
      setIsLoading(false);
      router.push('/');
    } catch (error) {
      setIsLoading(false);
      toast.error(`${error}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='mb-8 w-full'>
      <div className='relative mb-8 w-full'>
        <input
          type='email'
          id='email'
          name='email'
          onChange={onChangeHandler}
          className='peer w-full rounded bg-transparent px-4 py-2 placeholder-transparent outline-none ring ring-light-accent focus:ring-commitan-main dark:ring-dark-accent focus:dark:ring-commitan-main'
          placeholder='Email'
          autoFocus
          autoComplete='off'
          required
        />
        <label
          htmlFor='email'
          className='common-bg absolute -top-2.5 left-4 -translate-x-2 cursor-text border-none px-2 text-xs shadow-none duration-300 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:opacity-30 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:opacity-100'
        >
          Email
        </label>
      </div>
      <div className='relative mb-2'>
        <input
          type={isShow ? 'text' : 'password'}
          id='password'
          name='password'
          onChange={onChangeHandler}
          className='peer w-full rounded bg-transparent px-4 py-2 placeholder-transparent outline-none ring ring-light-accent focus:ring-commitan-main dark:ring-dark-accent focus:dark:ring-commitan-main'
          placeholder='Kata sandi'
          autoComplete='off'
          required
        />
        <label
          htmlFor='password'
          className='common-bg absolute -top-2.5 left-4 -translate-x-2 cursor-text border-none px-2 text-xs shadow-none duration-300 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:opacity-30 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:opacity-100'
        >
          Kata sandi
        </label>
        <button type='button' onClick={handleShowHide} className='absolute right-2 top-2 text-xl'>
          {isShow ? <AiFillEyeInvisible /> : <AiFillEye />}
        </button>
      </div>
      <div className='mb-8 text-right'>
        <a href={'/auth/forgot'}>Lupa kata sandi?</a>
      </div>
      <Button type='submit' corner='full' fullField color={isLoading ? 'loading' : 'primary'} disabled={isLoading}>
        {isLoading ? (
          <>
            <Spinner size='sm' width='light' />
            <span>Loading...</span>
          </>
        ) : (
          'Login'
        )}
      </Button>
    </form>
  );
}
