import { AiOutlineHeart } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';
import Button from './button';

interface IPostAction {
  isCommentOpen: boolean;
  toggleCommentSection: () => void;
}

export default function PostActionButton({ isCommentOpen, toggleCommentSection }: IPostAction) {
  return (
    <div className='mt-2 flex w-full items-center'>
      <div className='flex flex-1 items-center gap-4'>
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
          <span>288</span>
        </Button>
        <Button type='button' size='sm' color='transparent' className='group hover:text-sky-400'>
          <FiSend className='rounded-lg p-1 text-3xl group-hover:bg-sky-400/25' />
        </Button>
      </div>
      <Button type='button' size='sm' color='transparent' className='group hover:text-yellow-400'>
        <BsBookmark className='rounded-lg p-1 text-3xl group-hover:bg-yellow-400/25' />
      </Button>
    </div>
  );
}
