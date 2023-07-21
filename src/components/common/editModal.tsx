'use client';

import { UserPost } from '@/interfaces/post';
import { useUserPostStore } from '@/stores/postsStore';
import { listCategory } from '@/utils/data';
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
  title: string;
  desc: string;
  category: string;
  linkSourceCode: string;
  linkLiveDemo: string;
}

interface IEditPost {
  post: UserPost;
  showEditModal: boolean;
  handleEditModal: () => void;
}

export default function EditModal({ post, showEditModal, handleEditModal }: IEditPost) {
  const [editPost] = useUserPostStore((state) => [state.editPost], shallow);
  const [showLinkSourceCode, setShowLinkSourceCode] = useState(false);
  const [showLinkLiveDemo, setShowLinkLiveDemo] = useState(false);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [inputUserEdit, setInputUserEdit] = useState<IEdit>({
    title: post.title,
    desc: post.desc!,
    category: post.category,
    linkSourceCode: post.linkSourceCode!,
    linkLiveDemo: post.linkLiveDemo!,
  });
  const [syntax, setSyntax] = useState(post.code?.syntax);
  const [pathFile, setPathFile] = useState(post.code?.pathFile);
  const [isLoading, setIsLoading] = useState(false);
  const [heightValue, setHeightValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const code = {
    syntax,
    pathFile,
  };

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;

    if (name == 'desc') {
      setInputUserEdit({
        ...inputUserEdit,
        [name]: value,
      });
      setHeightValue(value);
    } else {
      setInputUserEdit({
        ...inputUserEdit,
        [name]: value,
      });
    }
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
    await new Promise((r) => setTimeout(r, 3000));
    try {
      const res = await axios.patch(`${process.env.API_URL}/posts/${post._id}`, {
        ...inputUserEdit,
        code,
      });
      setShowLinkSourceCode(false);
      setShowLinkLiveDemo(false);
      setIsLoading(false);
      const updatedPost = res.data.post;
      editPost(post._id, updatedPost);
      handleEditModal();
      toast.success(res.data.message);
    } catch (error) {
      // wip error handling
      toast.error(error as string);
    }
  }

  return (
    <>
      {showEditModal && (
        <ModalWrapper showModal={showEditModal} title='Edit Postingan' toggleModal={handleEditModal}>
          <form onSubmit={handleSubmit}>
            <div className='mb-2 flex items-center gap-4'>
              <ProfileImage />
              <div>
                <h2 className='headings text-base font-semibold'>Kumala</h2>
                <select
                  name='category'
                  id='category'
                  onChange={onChangeHandler}
                  value={inputUserEdit.category}
                  className='common-bg-secondary max-h-28 rounded px-2 py-1 outline-none'
                >
                  {listCategory.map(({ value, label }, index) => (
                    <option key={index} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <input
              type='text'
              placeholder='Judul'
              name='title'
              id='title'
              value={inputUserEdit.title}
              onChange={onChangeHandler}
              className='common-bg-secondary headings mb-2 w-full rounded-lg p-4 text-base font-semibold outline-none'
              maxLength={96}
              autoComplete='off'
              required
            />
            <textarea
              name='desc'
              id='desc'
              value={inputUserEdit.desc}
              onChange={onChangeHandler}
              ref={textareaRef}
              placeholder='Bagikan atau tanya sesuatu kepada lainnya!'
              className='mb-2 max-h-96 w-full resize-none bg-transparent outline-none '
              autoComplete='off'
              maxLength={4000}
            ></textarea>
            {showCodeEditor || (syntax && pathFile) ? (
              <CodeEditor
                context='edit'
                syntax={syntax!}
                setSyntax={setSyntax}
                pathFile={pathFile!}
                setPathFile={setPathFile}
              />
            ) : null}
            {showLinkSourceCode || inputUserEdit.linkSourceCode ? (
              <input
                type='text'
                placeholder='Link Source Code'
                name='linkSourceCode'
                id='linkSourceCode'
                value={inputUserEdit.linkSourceCode}
                onChange={onChangeHandler}
                className='mb-2 mt-4 w-full rounded-lg bg-pink-400/25 p-4 text-pink-400 outline-none placeholder:text-pink-800/25 dark:placeholder:text-pink-300/25'
                autoComplete='off'
              />
            ) : null}
            {showLinkLiveDemo || inputUserEdit.linkLiveDemo ? (
              <input
                type='text'
                placeholder='Link Live Demo'
                name='linkLiveDemo'
                id='linkLiveDemo'
                value={inputUserEdit.linkLiveDemo}
                onChange={onChangeHandler}
                className='mb-2 w-full rounded-lg bg-green-400/25 p-4 text-green-400 outline-none placeholder:text-green-800/25 dark:placeholder:text-green-300/25'
                autoComplete='off'
              />
            ) : null}
            <div className='mt-2 flex items-center justify-between'>
              <OptionButton
                context='edit'
                textOnly={textOnly}
                showCodeEditor={showCodeEditor}
                toggleCodeEditor={toggleCodeEditor}
                showLinkSourceCode={showLinkSourceCode}
                showLinkLiveDemo={showLinkLiveDemo}
                toggleLinkSourceCode={setShowLinkSourceCode}
                toggleLinkLiveDemo={setShowLinkLiveDemo}
              />
              <Button
                type='submit'
                disabled={!inputUserEdit.title || isLoading}
                color={!inputUserEdit.title ? 'disable' : isLoading ? 'loading' : 'primary'}
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
