'use client';

import { useUiStore } from '@/stores/uiStore';
import { useEffect, useRef, useState } from 'react';
import { shallow } from 'zustand/shallow';
import Button from './button';
import CodeEditor from './codeEditor';
import ModalWrapper from './modalWrapper';
import OptionButton from './optionButton';
import { listCategory } from '@/utils/data';
import ProfileImage from './profileImage';
import { postData } from '@/utils/utils';
import ConditionalUploadBtn from '../layout/conditionalUploadBtn';

interface IUpload {
  title: string;
  desc: string;
  category: string;
  linkSourceCode: string;
  linkLiveDemo: string;
}

export default function UploadModal() {
  const [
    showUploadModal,
    toggleShowUploadModal,
    showLinkSourceCode,
    toggleSourceCode,
    showLinkLiveDemo,
    toggleLiveDemo,
  ] = useUiStore(
    (state) => [
      state.showUploadModal,
      state.toggleShowUploadModal,
      state.showLinkSourceCode,
      state.toggleSourceCode,
      state.showLinkLiveDemo,
      state.toggleLiveDemo,
    ],
    shallow
  );
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [inputUserUpload, setInputUserUpload] = useState<IUpload>({
    title: '',
    desc: '',
    category: 'general',
    linkSourceCode: '',
    linkLiveDemo: '',
  });
  const [syntax, setSyntax] = useState('');
  const [pathFile, setPathFile] = useState('');
  const [heightValue, setHeightValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const code = {
    syntax,
    pathFile,
  };

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;

    if (name == 'desc') {
      setInputUserUpload({
        ...inputUserUpload,
        [name]: value,
      });
      setHeightValue(value);
    } else {
      setInputUserUpload({
        ...inputUserUpload,
        [name]: value,
      });
    }
  }

  function handleModal() {
    toggleShowUploadModal(!showUploadModal);
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
    const username = '@bangalex';
    const badge = 'wengdev';
    const { title, desc, category, linkSourceCode, linkLiveDemo } = inputUserUpload;
    try {
      await postData({ username, title, desc, badge, category, linkSourceCode, linkLiveDemo, code });
      setInputUserUpload({
        title: '',
        desc: '',
        category: '',
        linkSourceCode: '',
        linkLiveDemo: '',
      });
      setSyntax('');
      setPathFile('');
      toggleShowUploadModal(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ConditionalUploadBtn handleModal={handleModal} toggleCodeEditor={toggleCodeEditor} />
      <ModalWrapper showUploadModal={showUploadModal} title='Buat Postingan' toggleUploadModal={handleModal}>
        <form onSubmit={handleSubmit}>
          <div className='mb-2 flex items-center gap-4'>
            <ProfileImage />
            <div>
              <h2 className='text-base font-semibold'>Kumala</h2>
              <select
                name='category'
                id='category'
                onChange={onChangeHandler}
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
            value={inputUserUpload.title}
            onChange={onChangeHandler}
            className='common-bg-secondary mb-2 w-full rounded-lg p-4 text-base font-semibold outline-none'
            maxLength={96}
            autoComplete='off'
            required
          />
          <textarea
            name='desc'
            id='desc'
            value={inputUserUpload.desc}
            onChange={onChangeHandler}
            ref={textareaRef}
            placeholder='Bagikan atau tanya sesuatu kepada lainnya!'
            className='mb-2 max-h-96 w-full resize-none bg-transparent outline-none'
            autoComplete='off'
            maxLength={4000}
          ></textarea>
          {showCodeEditor && (
            <CodeEditor
              context='upload'
              syntax={syntax}
              setSyntax={setSyntax}
              pathFile={pathFile}
              setPathFile={setPathFile}
            />
          )}
          {showLinkSourceCode && (
            <input
              type='text'
              placeholder='Link Source Code'
              name='linkSourceCode'
              id='linkSourceCode'
              value={inputUserUpload.linkSourceCode}
              onChange={onChangeHandler}
              className='mb-2 mt-4 w-full rounded-lg bg-pink-400/25 p-4 text-pink-400 outline-none placeholder:text-pink-800/25 dark:placeholder:text-pink-300/25'
              autoComplete='off'
            />
          )}
          {showLinkLiveDemo && (
            <input
              type='text'
              placeholder='Link Live Demo'
              name='linkLiveDemo'
              id='linkLiveDemo'
              value={inputUserUpload.linkLiveDemo}
              onChange={onChangeHandler}
              className='mb-2 w-full rounded-lg bg-green-400/25 p-4 text-green-400 outline-none placeholder:text-green-800/25 dark:placeholder:text-green-300/25'
              autoComplete='off'
            />
          )}
          <div className='mt-2 flex items-center justify-between'>
            <OptionButton
              context='upload'
              textOnly={textOnly}
              showCodeEditor={showCodeEditor}
              toggleCodeEditor={toggleCodeEditor}
              showLinkSourceCode={showLinkSourceCode}
              showLinkLiveDemo={showLinkLiveDemo}
              toggleLinkSourceCode={toggleSourceCode}
              toggleLinkLiveDemo={toggleLiveDemo}
            />
            <Button
              type='submit'
              disabled={!inputUserUpload.title}
              color={inputUserUpload.title ? 'primary' : 'disabled'}
            >
              Kirim
            </Button>
          </div>
        </form>
      </ModalWrapper>
    </>
  );
}
