'use client';

import type { UserPost } from '@/interfaces/post';
import { timeAgo } from '@/utils/utils';
import { useState } from 'react';
import { BiCodeCurly, BiCategory } from 'react-icons/bi';
import { GoPrimitiveDot } from 'react-icons/go';
import { HiExternalLink } from 'react-icons/hi';
import Badge from './badge';
import CodeEditor from './codeEditor';
import CommentSection from './commentSection';
import DeleteModal from './deleteModal';
import EditModal from './editModal';
import PostActionButton from './postActionButton';
import PostControl from './postControl';
import ProfileImage from './profileImage';

interface EditorContext {
  upload: string;
  posted: string;
  comment: string;
  commented: string;
  detail: string;
}

interface PostContext {
  home: string;
  detail: string;
  profile: string;
}

interface PostProps {
  data: UserPost;
  context: keyof PostContext;
  postId: string;
  editorContext: keyof EditorContext;
}

export default function Post({ data, context, postId, editorContext }: PostProps) {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  function toggleCommentSection() {
    setIsCommentOpen(!isCommentOpen);
  }

  function handleEditModal() {
    setEditModal(!editModal);
  }

  function handleDeleteModal() {
    setDeleteModal(!deleteModal);
  }

  return (
    <article className='common-bg mt-4 flex max-w-full items-start gap-4 rounded-lg p-4'>
      {/* left side start */}
      <div className='hidden flex-col items-end sm:flex'>
        {/* user image */}
        <ProfileImage />
        {/* hooks */}
        <div className='mt-2 h-8 w-8 translate-x-2 border-b-4 border-l-4 border-light-accent dark:border-dark-accent '></div>
      </div>
      {/* left side end */}
      {/* right side start */}
      <div className='w-full'>
        {/* top information */}
        <div className='flex items-start justify-between'>
          <div className='mb-2'>
            <div className='flex items-center gap-2'>
              <ProfileImage visibility='sm:hidden' size='medium' />
              <div className='text-xs sm:text-sm'>
                <div className='flex items-center gap-1'>
                  <h2 className='font-semibold'>{data.username}</h2>
                  <GoPrimitiveDot />
                  <time>{timeAgo(data.createdAt)}</time>
                </div>
                <Badge>{data.badge}</Badge>
              </div>
            </div>
          </div>
          <div className='flex gap-2'>
            <Badge color='category' className='capitalize' visibility='hidden sm:flex'>
              <BiCategory />
              {data.category ? data.category : 'General'}
            </Badge>
            {data.linkSourceCode && (
              <a href={data.linkSourceCode} target='_blank'>
                <Badge color='sourceCode' visibility='hidden sm:flex'>
                  <BiCodeCurly /> Source Code
                </Badge>
              </a>
            )}
            {data.linkLiveDemo && (
              <a href={data.linkLiveDemo} target='_blank'>
                <Badge color='liveDemo' visibility='hidden sm:flex'>
                  <HiExternalLink />
                  Live Demo
                </Badge>
              </a>
            )}
            <PostControl handleEditModal={handleEditModal} handleDeleteModal={handleDeleteModal} />
          </div>
        </div>
        {/* bottom content */}
        <div className='mt-2 max-w-full'>
          <div className='mb-4 rounded-lg bg-light-secondary p-2 dark:bg-dark-secondary sm:p-4'>
            <h3 className='font-semibold sm:text-lg'>{data.title}</h3>
          </div>
          <p>{data.desc}</p>
          {data.code && (
            <>
              {data.code.syntax && data.code.pathFile && (
                <CodeEditor context={editorContext} syntax={data.code.syntax} pathFile={data.code.pathFile} />
              )}
            </>
          )}
          <PostActionButton
            postId={postId}
            isCommentOpen={isCommentOpen}
            toggleCommentSection={toggleCommentSection}
            lengthComment={data.comments.length}
          />
          {isCommentOpen && <CommentSection postId={postId} comments={data.comments} />}
          {editModal && <EditModal post={data} showEditModal={editModal} handleEditModal={handleEditModal} />}
          {deleteModal && (
            <DeleteModal
              context={context}
              postId={postId}
              showDeleteModal={deleteModal}
              handleDeleteModal={handleDeleteModal}
            />
          )}
        </div>
      </div>
      {/* right side end */}
    </article>
  );
}
