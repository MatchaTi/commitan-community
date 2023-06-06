'use client';

import { useState } from 'react';
import { BiCodeCurly } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { HiExternalLink } from 'react-icons/hi';
import Badge from './badge';
import CodeEditor from './codeEditor';
import CommentSection from './commentSection';
import PostActionButton from './postActionButton';
import ProfileImage from './profileImage';
import type { UserPost } from '@/interfaces/post';

interface EditorContext {
  upload: string;
  posted: string;
  comment: string;
  commented: string;
  detail: string;
}

interface PostProps {
  data: UserPost;
  postId: string;
  editorContext: keyof EditorContext;
  mutate?: () => void;
}

export default function Post({ data, postId, editorContext, mutate }: PostProps) {
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  function toggleCommentSection() {
    setIsCommentOpen(!isCommentOpen);
  }

  return (
    <article className='common-bg mt-4 flex items-start gap-4 rounded-lg p-4'>
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
              <div>
                <div className='flex items-center gap-2'>
                  <h2 className='font-semibold'>{data.username}</h2>
                  <GoPrimitiveDot />
                  <time>12 jam yang lalu</time>
                </div>
                <Badge>{data.badge}</Badge>
              </div>
            </div>
          </div>
          <div className='flex gap-2'>
            <Badge color='random' visibility='hidden sm:flex'>
              {data.category}
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
            <button type='button'>
              <BsThreeDots />
            </button>
          </div>
        </div>
        {/* bottom content */}
        <div className='mt-2'>
          <div className='mb-4 rounded-lg bg-light-secondary p-4 dark:bg-dark-secondary'>
            <h3 className='text-lg font-semibold'>{data.title}</h3>
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
          {isCommentOpen && <CommentSection postId={postId} comments={data.comments} mutate={mutate!} />}
        </div>
      </div>
      {/* right side end */}
    </article>
  );
}
