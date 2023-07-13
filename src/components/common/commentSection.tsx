'use client';

import type { Comment } from '@/interfaces/post';
import { useUserPostStore } from '@/stores/postsStore';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { shallow } from 'zustand/shallow';
import Button from './button';
import CodeEditor from './codeEditor';
import Comments from './comments';
import OptionButton from './optionButton';
import Spinner from './spinner';

interface CommentProps {
  comments: Comment[];
  postId: string;
}

export default function CommentSection({ comments, postId }: CommentProps) {
  const [addComment] = useUserPostStore((state) => [state.addComment], shallow);
  const [isLoading, setIsLoading] = useState(false);
  const [heightValue, setHeightValue] = useState('');
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [text, setText] = useState('');
  const [syntax, setSyntax] = useState('');
  const [pathFile, setPathFile] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const code = {
    syntax,
    pathFile,
  };

  function handleTextArea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setHeightValue(e.target.value);
    setText(e.target.value);
  }

  function handleCodeEditor() {
    setShowCodeEditor(!showCodeEditor);
    if (!showCodeEditor) {
      setSyntax('');
      setPathFile('');
    }
  }

  function textOnly() {
    setShowCodeEditor(false);
    setSyntax('');
    setPathFile('');
  }

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [heightValue]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 3000));
    const username = '@bangalex';
    const comment = {
      username,
      text,
      code,
    };
    try {
      const res = await axios.post(`${process.env.API_URL}/posts/${postId}/comments`, { ...comment });
      addComment(postId, res.data.comment);
      setText('');
      setSyntax('');
      setPathFile('');
      setIsLoading(false);
      toast.success(res.data.message);
    } catch (error) {
      // wip error handling
      toast.error(error as string);
    }
  }

  return (
    <>
      <section className='common-bg-secondary mb-4 mt-2 w-full rounded-lg p-4'>
        <form onSubmit={handleSubmit}>
          <textarea
            name='text'
            id='text'
            ref={textAreaRef}
            value={text}
            placeholder='Ketik komentar anda disini...'
            className='max-h-96 w-full resize-none bg-transparent text-slate-400 dark:text-slate-300 sm:max-h-[430px]'
            maxLength={4000}
            onChange={handleTextArea}
            autoFocus
            required
          ></textarea>
          {showCodeEditor && (
            <CodeEditor syntax={syntax} setSyntax={setSyntax} pathFile={pathFile} setPathFile={setPathFile} />
          )}
          <div className='mt-2 flex items-center justify-between'>
            <OptionButton
              context='comment'
              showCodeEditor={showCodeEditor}
              toggleCodeEditor={handleCodeEditor}
              textOnly={textOnly}
            />
            <Button
              type='submit'
              disabled={!text || isLoading}
              color={!text ? 'disabled' : isLoading ? 'loading' : 'primary'}
            >
              {isLoading ? (
                <div className='flex items-center gap-2'>
                  <Spinner size='sm' width='light' />
                  <span>Loading...</span>
                </div>
              ) : (
                'Kirim'
              )}
            </Button>
          </div>
        </form>
      </section>
      <h3 className='text-base font-semibold'>{comments.length} Komentar</h3>
      {comments.map((comment) => (
        <Comments key={comment._id} postId={postId} comment={comment} />
      ))}
    </>
  );
}
