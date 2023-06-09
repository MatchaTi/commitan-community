'use client';

import { useUserUploadStore } from '@/stores/globalStore';
import { useUserPostStore } from '@/stores/postsStore';
import { listCategory } from '@/utils/data';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlinePlus } from 'react-icons/ai';
import { TfiClose } from 'react-icons/tfi';
import { shallow } from 'zustand/shallow';
import ConditionalUploadBtn from '../layout/conditionalUploadBtn';
import Button from './button';
import CodeEditor from './codeEditor';
import ModalWrapper from './modalWrapper';
import OptionButton from './optionButton';
import ProfileImage from './profileImage';
import Spinner from './spinner';

export default function UploadModal() {
  const [addPosts] = useUserPostStore((state) => [state.addPost], shallow);
  const [inputUserUpload, onChangeHandler, heightValue, imageMsg, imagePreview, clearField, clearImage] =
    useUserUploadStore(
      (state) => [
        state.inputUserUpload,
        state.onChangeHandler,
        state.heightValue,
        state.imageMsg,
        state.imagePreview,
        state.clearField,
        state.clearImage,
      ],
      shallow
    );
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showLinkSourceCode, setShowLinkSourceCode] = useState(false);
  const [showLinkLiveDemo, setShowLinkLiveDemo] = useState(false);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [syntax, setSyntax] = useState('');
  const [pathFile, setPathFile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const code = {
    syntax,
    pathFile,
  };

  const handleModal = () => setShowUploadModal(!showUploadModal);

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
    const username = '@bangalex';
    const badge = 'wengdev';
    try {
      const res = await axios.post(`${process.env.API_URL}/posts`, {
        username,
        badge,
        ...inputUserUpload,
        code,
      });
      clearField();
      setSyntax('');
      setPathFile('');
      setIsLoading(false);
      setShowLinkSourceCode(false);
      setShowLinkLiveDemo(false);
      const newPosts = [res.data.post];
      addPosts(newPosts);
      setShowUploadModal(false);
      toast.success(res.data.message);
    } catch (error) {
      // wip error handling
      toast.error(error as string);
    }
  }

  return (
    <>
      <ConditionalUploadBtn handleModal={handleModal} toggleCodeEditor={toggleCodeEditor} />
      <div
        className='group fixed bottom-16 right-4 z-[9999] flex flex-col-reverse gap-4 sm:bottom-10 sm:right-10'
        onClick={handleModal}
      >
        <Button corner='full' size='std'>
          <AiOutlinePlus className='text-xl font-bold duration-300 ease-in-out group-hover:rotate-45' />
        </Button>
        <OptionButton
          context='speedDial'
          textOnly={textOnly}
          showCodeEditor={showCodeEditor}
          toggleCodeEditor={toggleCodeEditor}
        />
      </div>
      <ModalWrapper showModal={showUploadModal} title='Buat Postingan' toggleModal={handleModal}>
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
          {imageMsg && <p className='my-4 font-semibold text-red-500'>{imageMsg}</p>}
          {imagePreview ? (
            <div className='relative my-4 w-full'>
              <div>
                <Image src={imagePreview} alt={imagePreview} width={500} height={250} className='mx-auto rounded-lg' />
              </div>
              <Button type='button' color='transparent' onClick={clearImage} className='absolute right-0 top-0 text-lg'>
                <TfiClose />
              </Button>
            </div>
          ) : null}
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
            className='mb-2 max-h-96 w-full resize-none bg-transparent text-slate-400 outline-none dark:text-slate-300'
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
              className='mb-2 mt-2 w-full rounded-lg bg-green-400/25 p-4 text-green-400 outline-none placeholder:text-green-800/25 dark:placeholder:text-green-300/25'
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
              toggleLinkSourceCode={setShowLinkSourceCode}
              toggleLinkLiveDemo={setShowLinkLiveDemo}
            />
            <Button
              type='submit'
              disabled={!inputUserUpload.title || isLoading}
              color={!inputUserUpload.title ? 'disable' : isLoading ? 'loading' : 'primary'}
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
    </>
  );
}
