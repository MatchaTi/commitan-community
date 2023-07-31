'use client';

import { useAuthVerify } from '@/hooks/protectPage';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillPersonFill, BsGrid3X3 } from 'react-icons/bs';
import Button from './button';
import ModalWrapper from './modalWrapper';

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputUser, setInputUser] = useState('');
  const [isUser, setIsUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<any>(null);
  const verified = useAuthVerify();

  const handleModal = () => setIsOpen(!isOpen);

  function onChangeHandler() {
    setInputUser(inputRef.current!.value);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        if (inputUser.startsWith('@')) {
          console.log(inputUser, 'user');
          console.log(isLoading, 'loading');
          setIsUser(true);
        } else {
          setIsUser(false);
          console.log(isLoading, 'loading');
          console.log(inputUser, 'postingan');
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (inputUser.length >= 4 && timeRef.current) {
      clearTimeout(timeRef.current);
    }

    timeRef.current = setTimeout(() => {
      if (inputUser.length >= 4) {
        fetchData();
      }
    }, 1000);
  }, [inputUser, isLoading]);

  if (!verified) {
    return (
      <>
        <button
          type='button'
          onClick={handleModal}
          className='common-bg w-full rounded px-4 py-2 text-left sm:col-span-3 sm:py-3'
        >
          Search...
        </button>
        <ModalWrapper title='' showModal={isOpen} toggleModal={handleModal}>
          <div className='w-full space-y-2 text-center'>
            <div>
              <h2 className='headings font-semibold'>Ingin berbagi pengetahuanmu?</h2>
              <p>Temukan partner, diskusikan isu terkini, dan tingkatkan kemampuanmu bersama!</p>
            </div>
            <div className='flex justify-center'>
              <a href='auth/login'>
                <Button type='button'>Gabung Sekarang!</Button>
              </a>
            </div>
          </div>
        </ModalWrapper>
      </>
    );
  }

  return (
    <>
      <button
        type='button'
        onClick={handleModal}
        className='common-bg w-full rounded px-4 py-2 text-left sm:col-span-3 sm:py-3'
      >
        Search...
      </button>
      <ModalWrapper title='Pencarian' showModal={isOpen} toggleModal={handleModal}>
        <div className='common-accent mb-2 flex w-full items-center gap-2 rounded border p-2'>
          <div className='text-2xl'>
            <AiOutlineSearch />
          </div>
          <input
            type='text'
            ref={inputRef}
            value={inputUser}
            onChange={onChangeHandler}
            className='w-full bg-transparent outline-none'
            placeholder='Ketik untuk mencari...'
          />
        </div>
        {isLoading && <div>loading...</div>}
        <div>{isUser ? 'User' : 'Postingan'}</div>
        <div>
          <div className='common-accent border-b py-2'>
            <div className='mb-2 flex items-center gap-4 font-semibold'>
              <BsFillPersonFill />
              <div>User</div>
            </div>
            <div>Awali dengan @user untuk mencari user</div>
          </div>
          <div className='pt-2'>
            <div className='mb-2 flex items-center gap-4 font-semibold'>
              <BsGrid3X3 />
              <div>Postingan</div>
            </div>
            <div>Ketik judul postingan untuk mencari postingan</div>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
}
