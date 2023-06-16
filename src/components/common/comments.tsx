import { Comment } from '@/interfaces/post';
import { timeAgo } from '@/utils/utils';
import { GoPrimitiveDot } from 'react-icons/go';
import Badge from './badge';
import CodeEditor from './codeEditor';
import CommentControl from './commentControl';
import EditCommentModal from './editCommentModal';
import ProfileImage from './profileImage';
import { useState } from 'react';
import DeleteCommentModal from './deleteCommentModal';

interface IComment {
  postId: string;
  comment: Comment;
}

export default function Comments({ postId, comment }: IComment) {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  function handleEditModal() {
    setEditModal(!editModal);
  }

  function handleDeleteModal() {
    setDeleteModal(!deleteModal);
  }

  return (
    <div key={comment._id} className='mt-4 w-full rounded-lg'>
      {/* top information */}
      <div className='flex items-start justify-between'>
        <div className='mb-2 flex items-center gap-2'>
          <div>
            <ProfileImage size='medium' />
          </div>
          <div className='text-xs sm:text-sm'>
            <div className='flex items-center gap-1'>
              <h2 className='font-semibold'>{comment.username}</h2>
              <GoPrimitiveDot />
              <time>{timeAgo(comment.createdAt)}</time>
            </div>
            <Badge>Wengdev</Badge>
          </div>
        </div>
        <CommentControl handleEditModal={handleEditModal} handleDeleteModal={handleDeleteModal} />
        {editModal && (
          <EditCommentModal
            postId={postId}
            comment={comment}
            showEditCommentModal={editModal}
            handleEditCommentModal={handleEditModal}
          />
        )}
        {deleteModal && (
          <DeleteCommentModal
            postId={postId}
            commentId={comment._id}
            showDeleteCommentModal={deleteModal}
            handleDeleteCommentModal={handleDeleteModal}
          />
        )}
      </div>
      {/* bottom content */}
      <div className='mt-2'>
        <div className='mb-4 rounded-lg bg-light-secondary p-4 dark:bg-dark-secondary'>
          <p>{comment.text}</p>
          {comment.code && (
            <>
              {comment.code.syntax && comment.code.pathFile ? (
                <CodeEditor context='commented' syntax={comment.code.syntax} pathFile={comment.code.pathFile} />
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
