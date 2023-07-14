'use client';

import { useUserUploadStore } from '@/stores/globalStore';
import { BiCodeCurly, BiEdit } from 'react-icons/bi';
import { HiCode, HiExternalLink, HiOutlinePhotograph } from 'react-icons/hi';
import { shallow } from 'zustand/shallow';
import Button from './button';
import Tooltip from './tooltip';

interface OptionContext {
  upload: string;
  home: string;
  comment: string;
  edit: string;
  editComment: string;
  speedDial: string;
}

interface IOption {
  context: keyof OptionContext;
  textOnly?: () => void;
  showCodeEditor?: boolean;
  toggleCodeEditor?: () => void;
  showLinkSourceCode?: boolean;
  toggleLinkSourceCode?: (showLinkSourceCode: boolean) => void;
  showLinkLiveDemo?: boolean;
  toggleLinkLiveDemo?: (showLinkLiveDemo: boolean) => void;
}

export default function OptionButton({
  context,
  textOnly,
  showCodeEditor,
  toggleCodeEditor,
  showLinkSourceCode,
  toggleLinkSourceCode,
  showLinkLiveDemo,
  toggleLinkLiveDemo,
}: IOption) {
  const [onChangeHandler, inputUserUpload] = useUserUploadStore(
    (state) => [state.onChangeHandler, state.inputUserUpload],
    shallow
  );

  return (
    <div
      className={`${
        context == 'speedDial' && 'hidden flex-col-reverse gap-4 group-hover:flex'
      } flex items-center text-slate-400 dark:text-slate-300`}
    >
      <div className='group relative'>
        <Button
          type='button'
          size='sm'
          color='transparent'
          onClick={textOnly}
          className={`${
            context == 'speedDial' && 'animate-speed-dial text-purple-500'
          } group flex items-center hover:text-purple-500`}
        >
          <BiEdit className='rounded-lg p-1 text-3xl group-hover:bg-purple-400/25' />
        </Button>
        <Tooltip position={context == 'speedDial' ? 'left' : 'topStart'}>
          <span className='flex w-full items-center justify-center font-semibold'>Hanya Teks</span>
        </Tooltip>
      </div>
      {context == 'home' || context == 'upload' || context == 'edit' || context == 'speedDial' ? (
        <div className='group relative'>
          <label htmlFor='image' className='group cursor-pointer'>
            <Button
              type='button'
              size='sm'
              color='transparent'
              className={`${context == 'speedDial' && 'animate-speed-dial'} ${
                inputUserUpload.image && 'text-yellow-500'
              } group flex items-center group-hover:text-yellow-500`}
            >
              <HiOutlinePhotograph
                className={`${
                  inputUserUpload.image && 'bg-yellow-400/25'
                } rounded-lg p-1 text-3xl group-hover:bg-yellow-400/25`}
              />
            </Button>
          </label>
          <input
            type='file'
            id='image'
            name='image'
            accept='.jpg, .png, .jpeg'
            max={1}
            onChange={onChangeHandler}
            className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
          />
          <Tooltip position={context == 'speedDial' ? 'left' : 'topStart'}>
            <span className='flex w-full items-center justify-center font-semibold'>Foto</span>
          </Tooltip>
        </div>
      ) : null}
      <div className='group relative'>
        <Button
          type='button'
          size='sm'
          color='transparent'
          onClick={toggleCodeEditor}
          className={`${showCodeEditor && 'text-sky-500'} ${
            context == 'speedDial' && 'animate-speed-dial text-sky-500'
          } group flex items-center hover:text-sky-400`}
        >
          <HiCode
            className={`${showCodeEditor && 'bg-sky-400/25'} rounded-lg p-1 text-3xl group-hover:bg-sky-400/25`}
          />
        </Button>
        <Tooltip position={context == 'speedDial' ? 'left' : 'topStart'}>
          <span className='flex w-full items-center justify-center font-semibold'>Code Editor</span>
        </Tooltip>
      </div>
      {context == 'upload' || context == 'edit' ? (
        <>
          <div className='group relative'>
            <Button
              type='button'
              size='sm'
              color='transparent'
              onClick={() => toggleLinkSourceCode?.(!showLinkSourceCode)}
              className={`${showLinkSourceCode && 'text-pink-500'} group flex items-center hover:text-pink-400`}
            >
              <BiCodeCurly
                className={`${
                  showLinkSourceCode && 'bg-pink-400/25'
                } rounded-lg p-1 text-3xl group-hover:bg-pink-400/25`}
              />
            </Button>
            <Tooltip position='topStart'>
              <span className='flex w-full items-center justify-center font-semibold'>Link Source Code</span>
            </Tooltip>
          </div>
          <div className='group relative'>
            <Button
              type='button'
              size='sm'
              color='transparent'
              onClick={() => toggleLinkLiveDemo?.(!showLinkLiveDemo)}
              className={`${showLinkLiveDemo && 'text-green-500'} group flex items-center hover:text-green-400`}
            >
              <HiExternalLink
                className={`${
                  showLinkLiveDemo && 'bg-green-400/25'
                } rounded-lg p-1 text-3xl group-hover:bg-green-400/25`}
              />
            </Button>
            <Tooltip position='topStart'>
              <span className='flex w-full items-center justify-center font-semibold'>Link Live Demo</span>
            </Tooltip>
          </div>
        </>
      ) : null}
    </div>
  );
}
