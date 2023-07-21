'use client';

import { listCategory } from '@/utils/data';
import { useEffect, useRef, useState } from 'react';
import Button from './button';
import ModalWrapper from './modalWrapper';
import ProfileImage from './profileImage';
import Spinner from './spinner';

interface IEditPost {
  showEditModal: boolean;
  handleEditProfileModal: () => void;
}

export default function EditProfileModal({ showEditModal, handleEditProfileModal }: IEditPost) {
  const [isLoading, setIsLoading] = useState(false);
  const [heightValue, setHeightValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;

    setText(value);
    setHeightValue(value);
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [heightValue]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 3000));
  }

  return (
    <>
      {showEditModal && (
        <ModalWrapper showModal={showEditModal} title='Edit Profil' toggleModal={handleEditProfileModal} width='md'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4 flex items-center gap-4'>
              <ProfileImage size='lg' />
              <div>
                <h2 className='font-semibold'>Set Foto Profil</h2>
                <p>Unggah foto atau ganti foto profil</p>
              </div>
            </div>
            <label htmlFor='username' className='mb-2 block font-semibold'>
              Username
            </label>
            <input
              type='text'
              placeholder='Username'
              name='username'
              id='username'
              //   value={''}
              //   onChange={onChangeHandler}
              className='common-accent mb-2 w-full rounded-lg border bg-transparent p-2.5 font-medium outline-none'
              maxLength={96}
              readOnly
            />
            <label htmlFor='bio' className='mb-2 block font-semibold'>
              Bio
            </label>
            <textarea
              name='bio'
              id='bio'
              value={text}
              onChange={onChangeHandler}
              ref={textareaRef}
              placeholder='Bio'
              className='common-accent max-h-96 w-full resize-none rounded-lg border bg-transparent p-2.5 outline-none'
              autoComplete='off'
              maxLength={150}
            ></textarea>
            <select
              name='category'
              id='category'
              //   onChange={onChangeHandler}
              value={''}
              className='common-bg-secondary max-h-27 my-2 rounded-full px-2 py-1 outline-none'
            >
              {listCategory.map(({ value, label }, index) => (
                <option key={index} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <div className='mt-2 flex items-center justify-between'>
              <Button
                type='submit'
                disabled={isLoading}
                color={true ? 'disable' : isLoading ? 'loading' : 'primary'}
                fullField
              >
                {isLoading ? (
                  <>
                    <Spinner size='sm' width='light' />
                    <span>Loading...</span>
                  </>
                ) : (
                  'Kirim'
                )}
              </Button>
            </div>
          </form>
        </ModalWrapper>
      )}
    </>
  );
}
