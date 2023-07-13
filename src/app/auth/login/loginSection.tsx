'use client';

import Button from '@/components/common/button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import CommitanLogo from '../../../../public/images/commitan-logo.svg';

interface UserInput {
  email: string;
  password: string;
}

export default function LoginSection() {
  const [isShow, setIsShow] = useState(false);
  const [userInput, setUserInput] = useState<UserInput>({ email: '', password: '' });

  function handleShowHide() {
    setIsShow(!isShow);
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.table(userInput);
  }

  return (
    <div className='common-bg flex w-full max-w-fit flex-col items-center rounded-lg p-10'>
      <Link href={'/'} className='mb-20 flex items-center gap-2'>
        <div className='h-7 w-7'>
          <Image src={CommitanLogo} className='w-full' alt='Commitan Logo' />
        </div>
        <h1 className='text-xl font-bold'>Commitan.</h1>
      </Link>
      <h2 className='mb-10 text-xl font-semibold'>Selamat datang di Commitan</h2>
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
            className='common-bg absolute -top-2.5 left-4 cursor-text text-xs shadow-none duration-300 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:opacity-30 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:opacity-100'
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
            className='common-bg absolute -top-2.5 left-4 cursor-text text-xs shadow-none duration-300 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:opacity-30 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:opacity-100'
          >
            Kata sandi
          </label>
          <button type='button' onClick={handleShowHide} className='absolute right-2 top-2 text-xl'>
            {isShow ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>
        <div className='mb-8 text-right'>
          <Link href={'/auth/forgot'}>Lupa kata sandi?</Link>
        </div>
        <Button type='submit' corner='full' fullField={true}>
          Login
        </Button>
      </form>
      <div>
        <span>Belum punya akun? </span>
        <span className='text-commitan-main underline'>
          <Link href={'/auth/register'}>Buat akun</Link>
        </span>
      </div>
    </div>
  );
}
