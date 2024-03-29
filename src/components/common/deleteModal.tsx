'use client';

import { useUserPostStore } from '@/stores/postsStore';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { shallow } from 'zustand/shallow';
import Button from './button';
import ModalWrapper from './modalWrapper';
import Spinner from './spinner';

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
  const [deletePost] = useUserPostStore((state) => [state.deletePost], shallow);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleDeletePost() {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 3000));
    try {
      const res = await axios.delete(`${process.env.API_URL}/posts/${postId}`);
      handleDeleteModal();
      setIsLoading(false);
      deletePost(postId);
      toast.success(res.data.message);
      if (context == 'detail') {
        router.push('/');
      }
    } catch (error) {
      // wip error handling
      toast.error(error as string);
    }
  }

  return (
    <>
      {showDeleteModal && (
        <ModalWrapper showModal={showDeleteModal} title='Hapus Postingan' toggleModal={handleDeleteModal} width='sm'>
          <h2 className='mb-10 text-base'>
            Anda yakin ingin menghapus postingan ini? Tindakan ini akan menghapus postingan ini secara permanen dan
            tidak dapat dipulihkan.
          </h2>
          <Button
            type='button'
            onClick={handleDeletePost}
            disabled={isLoading}
            color={isLoading ? 'loading' : 'delete'}
            fullField
          >
            {isLoading ? (
              <>
                <Spinner size='sm' width='light' />
                <span>Loading...</span>
              </>
            ) : (
              'Hapus'
            )}
          </Button>
        </ModalWrapper>
      )}
    </>
  );
}
