'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from './button';
import ModalWrapper from './modalWrapper';

interface DeleteContext {
  home: string;
  detail: string;
  profile: string;
}

interface IDelete {
  postId: string;
  context: keyof DeleteContext;
  showDeleteModal: boolean;
  handleDeleteModal: () => void;
}

export default function DeleteModal({ postId, context, showDeleteModal, handleDeleteModal }: IDelete) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleDeletePost() {
    setIsLoading(true);
    try {
      await axios.delete(`${process.env.API_URL}/posts/${postId}`);
      handleDeleteModal();
      setIsLoading(false);
      if (context == 'detail') {
        router.push('/');
      }
    } catch (error) {
      // action error
      console.log(error, 'error');
    }
  }

  return (
    <>
      {showDeleteModal && (
        <ModalWrapper showModal={showDeleteModal} title='Hapus Postingan' toggleModal={handleDeleteModal}>
          <h2 className='text-base'>
            Anda yakin ingin menghapus postingan ini? Tindakan ini akan menghapus postingan ini secara permanen dan
            tidak dapat dipulihkan.
          </h2>
          <div className='mt-4 flex w-full justify-end gap-4'>
            <Button color='outline' onClick={handleDeleteModal}>
              Tutup
            </Button>
            <Button disabled={isLoading} color={isLoading ? 'disabled' : 'delete'} onClick={handleDeletePost}>
              {isLoading ? 'Loading...' : 'Hapus'}
            </Button>
          </div>
        </ModalWrapper>
      )}
    </>
  );
}
