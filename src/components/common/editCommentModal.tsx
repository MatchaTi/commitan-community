'use client';

import { Comment } from '@/interfaces/post';
import { useUserPostStore } from '@/stores/postsStore';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { shallow } from 'zustand/shallow';
import Button from './button';
import CodeEditor from './codeEditor';
import ModalWrapper from './modalWrapper';
import OptionButton from './optionButton';
import ProfileImage from './profileImage';
import Spinner from './spinner';

interface IEdit {
  text: string;
}

interface IEditComment {
  postId: string;
  comment: Comment;
  showEditCommentModal: boolean;
  handleEditCommentModal: () => void;
}

export default function EditCommentModal({
  postId,
  comment,
  showEditCommentModal,
  handleEditCommentModal,
}: IEditComment) {
  const [editComment] = useUserPostStore((state) => [state.editComment], shallow);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [inputUserEdit, setInputUserEdit] = useState<IEdit>({
    text: comment.text,
  });
  const [syntax, setSyntax] = useState(comment.code?.syntax);
  const [pathFile, setPathFile] = useState(comment.code?.pathFile);
  const [isLoading, setIsLoading] = useState(false);
  const [heightValue, setHeightValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const code = {
    syntax,
    pathFile,
  };

  function onChangeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setInputUserEdit({
      ...inputUserEdit,
      [name]: value,
    });
    setHeightValue(value);
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [heightValue]);

  function toggleCodeEditor() {
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const username = 'Kumala';
    await new Promise((r) => setTimeout(r, 3000));
    try {
      const res = await axios.patch(`${process.env.API_URL}/posts/${postId}/comments/edit/${comment._id}`, {
        username,
        ...inputUserEdit,
        code,
      });
      setIsLoading(false);
      const updatedComment = res.data.comment;
      editComment(postId, comment._id, updatedComment);
      handleEditCommentModal();
      toast.success(res.data.message);
    } catch (error) {
      // wip error handling
      toast.error(error as string);
    }
  }

  return (
    <>
      {showEditCommentModal && (
        <ModalWrapper showModal={showEditCommentModal} title='Edit Komentar' toggleModal={handleEditCommentModal}>
          <form onSubmit={handleSubmit}>
            <div className='mb-2 flex items-center gap-4'>
              <ProfileImage />
              <div>
                <h2 className='text-base font-semibold'>{comment.username}</h2>
              </div>
            </div>
            <textarea
              name='text'
              id='text'
              value={inputUserEdit.text}
              onChange={onChangeHandler}
              ref={textareaRef}
              placeholder='Ketik komentar anda disini...'
              className='mb-2 max-h-96 w-full resize-none bg-transparent outline-none'
              autoComplete='off'
              maxLength={4000}
            ></textarea>
            {showCodeEditor || (syntax && pathFile) ? (
              <CodeEditor
                context='editComment'
                syntax={syntax!}
                setSyntax={setSyntax}
                pathFile={pathFile!}
                setPathFile={setPathFile}
              />
            ) : null}
            <div className='mt-2 flex items-center justify-between'>
              <OptionButton
                context='editComment'
                textOnly={textOnly}
                showCodeEditor={showCodeEditor}
                toggleCodeEditor={toggleCodeEditor}
              />
              <Button
                type='submit'
                disabled={!inputUserEdit.text || isLoading}
                color={!inputUserEdit.text ? 'disabled' : isLoading ? 'loading' : 'primary'}
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
        </ModalWrapper>
      )}
    </>
  );
}
