'use client';

import Button from '@/components/common/button';
import Spinner from '@/components/common/spinner';
import { RegisterResponse, VerifyResponse } from '@/interfaces/auth';
import { otpVerify, register } from '@/libs/auth';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

interface UserInput {
  fullname: string;
  email: string;
  password: string;
  otp_number: string;
}

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sendOtp?: () => void;
  email?: string;
  isLoading: boolean;
}

export default function RegisterSection() {
  const [userInput, setUserInput] = useState<UserInput>({
    fullname: '',
    email: '',
    password: '',
    otp_number: '',
  });
  const [isVerify, setIsVerify] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  }

  async function handleSubmitRegis(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 3000));
    try {
      const res: RegisterResponse = await register({ ...userInput });
      if (res.error) throw res.error[0].msg;
      if (res.status) if (res.status >= 400) throw new Error(res.message);
      setIsVerify(true);
      setIsLoading(false);
      toast.success(`${res.message}`);
    } catch (error) {
      setIsLoading(false);
      toast.error(`${error}`);
    }
  }

  async function sendOtp() {
    setIsLoading(true);
    const res = await axios.post(`${process.env.API_URL}/auth/send-otp`, { email: userInput.email });
    toast.success(res.data.message);
    setIsLoading(false);
  }

  async function handleSubmitOtp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 3000));
    try {
      const res: VerifyResponse = await otpVerify({ ...userInput });
      if (res.error) throw res.error[0].msg;
      if (res.status) if (res.status >= 400) throw new Error(res.message);
      if (res.token) Cookies.set('token', res.token, { secure: true, expires: 30 });
      toast.success(`${res.message}`);
      router.push('/');
    } catch (error) {
      setIsLoading(false);
      toast.error(`${error}`);
    }
  }

  return (
    <>
      {isVerify ? (
        <UserVerify
          email={userInput.email}
          handleSubmit={handleSubmitOtp}
          onChangeHandler={onChangeHandler}
          sendOtp={sendOtp}
          isLoading={isLoading}
        />
      ) : (
        <UserRegister handleSubmit={handleSubmitRegis} onChangeHandler={onChangeHandler} isLoading={isLoading} />
      )}
    </>
  );
}

function UserRegister({ handleSubmit, onChangeHandler, isLoading }: Props) {
  const [isShow, setIsShow] = useState(false);

  const handleShowHide = () => setIsShow(!isShow);

  return (
    <>
      <form onSubmit={handleSubmit} className='mb-8 w-full'>
        <div className='relative mb-8 w-full'>
          <input
            type='text'
            id='fullname'
            name='fullname'
            onChange={onChangeHandler}
            className='peer w-full rounded bg-transparent px-4 py-2 placeholder-transparent outline-none ring ring-light-accent focus:ring-commitan-main dark:ring-dark-accent focus:dark:ring-commitan-main'
            placeholder='Fullname'
            autoFocus
            autoComplete='off'
            required
          />
          <label
            htmlFor='fullname'
            className='common-bg absolute -top-2.5 left-4 -translate-x-2 cursor-text border-none px-2 text-xs shadow-none duration-300 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:opacity-30 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:opacity-100'
          >
            Fullname
          </label>
        </div>
        <div className='relative mb-8 w-full'>
          <input
            type='email'
            id='email'
            name='email'
            onChange={onChangeHandler}
            className='peer w-full rounded bg-transparent px-4 py-2 placeholder-transparent outline-none ring ring-light-accent focus:ring-commitan-main dark:ring-dark-accent focus:dark:ring-commitan-main'
            placeholder='Email'
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
        <div className='relative mb-8'>
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
        <Button type='submit' corner='full' fullField color={isLoading ? 'loading' : 'primary'} disabled={isLoading}>
          {isLoading ? (
            <>
              <Spinner size='sm' width='light' />
              <span>Loading...</span>
            </>
          ) : (
            'Kirim'
          )}
        </Button>
      </form>
      <div className='mt-4'>
        <span>Sudah punya akun? </span>
        <span className='text-commitan-main underline'>
          <a href={'/auth/login'}>Login</a>
        </span>
      </div>
    </>
  );
}

function UserVerify({ handleSubmit, onChangeHandler, email, isLoading, sendOtp }: Props) {
  return (
    <>
      <div className='foemdi mb-4 text-slate-400 dark:text-slate-300'>
        Kami sudah mengirim kode OTP ke email Anda: <span className='font-medium text-white'>{email}</span>
      </div>
      <form onSubmit={handleSubmit} className='mb-8 w-full'>
        <div className='w-full'>
          <input
            type='text'
            className='mb-4 w-full scale-150 bg-transparent text-center tracking-[16px] outline-none placeholder:scale-75 placeholder:tracking-normal'
            max={6}
            name='otp_number'
            autoComplete='off'
            onChange={onChangeHandler}
            maxLength={6}
            autoFocus
            placeholder='Masukkan 6 digit kode OTP'
          />
        </div>
        <Button type='submit' corner='full' fullField color={isLoading ? 'loading' : 'primary'} disabled={isLoading}>
          {isLoading ? (
            <>
              <Spinner size='sm' width='light' />
              <span>Loading...</span>
            </>
          ) : (
            'Kirim'
          )}
        </Button>
      </form>
      <div>
        <Button type='button' color='transparent' size='none' onClick={sendOtp} disabled={isLoading}>
          Kirim ulang kode OTP
        </Button>
      </div>
    </>
  );
}
