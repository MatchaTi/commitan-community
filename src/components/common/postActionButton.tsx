import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';
import { HiExternalLink } from 'react-icons/hi';
import Button from './button';

interface IPostAction {
  postId: string;
  isCommentOpen: boolean;
  toggleCommentSection: () => void;
  lengthComment: number;
}

export default function PostActionButton({ postId, isCommentOpen, toggleCommentSection, lengthComment }: IPostAction) {
  return (
    <div className='mt-2 flex w-full items-center'>
      <div className='flex flex-1 items-center gap-1 sm:gap-4'>
        <Button
          type='button'
          size='sm'
          color='transparent'
          className='group flex items-center gap-1 hover:text-pink-400'
        >
          <AiOutlineHeart className='rounded-lg p-1 text-3xl group-hover:bg-pink-400/25' /> <span>699</span>
        </Button>
        <Button
          type='button'
          size='sm'
          color='transparent'
          onClick={toggleCommentSection}
          className={`${isCommentOpen && 'text-green-400'} group flex items-center gap-1 hover:text-green-400`}
        >
          <BiCommentDetail
            className={`${isCommentOpen && 'bg-green-400/25'} rounded-lg p-1 text-3xl group-hover:bg-green-400/25`}
          />
          <span>{lengthComment}</span>
        </Button>
        <Button type='button' size='sm' color='transparent' className='group hover:text-sky-400'>
          <FiSend className='rounded-lg p-1 text-3xl group-hover:bg-sky-400/25' />
        </Button>
        <Link href={`/posts/${postId}`}>
          <Button type='button' size='sm' color='transparent' className='group hover:text-orange-400'>
            <HiExternalLink className='rounded-lg p-1 text-3xl group-hover:bg-orange-400/25' />
          </Button>
        </Link>
      </div>
      <Button type='button' size='sm' color='transparent' className='group hover:text-yellow-400'>
        <BsBookmark className='rounded-lg p-1 text-3xl group-hover:bg-yellow-400/25' />
      </Button>
    </div>
  );
}
