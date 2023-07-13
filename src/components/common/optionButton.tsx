import { BiCodeCurly, BiEdit } from 'react-icons/bi';
import { HiCode, HiExternalLink } from 'react-icons/hi';
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
  return (
    <div
      className={`${
        context == 'speedDial' && 'flex-col-reverse gap-4 text-white'
      } flex items-center text-slate-400 dark:text-slate-300`}
    >
      <div className='group relative'>
        <Button
          type='button'
          size='sm'
          color='transparent'
          onClick={textOnly}
          className={`${context == 'speedDial' && 'animate-speed-dial'} group flex items-center hover:text-purple-400`}
        >
          <BiEdit className='rounded-lg p-1 text-3xl group-hover:bg-purple-400/25' />
        </Button>
        <Tooltip position={context == 'speedDial' ? 'left' : 'topStart'}>
          <span className='flex w-full items-center justify-center font-semibold'>Hanya Teks</span>
        </Tooltip>
      </div>
      <div className='group relative'>
        <Button
          type='button'
          size='sm'
          color='transparent'
          onClick={toggleCodeEditor}
          className={`${showCodeEditor && 'text-sky-500'} ${
            context == 'speedDial' && 'animate-speed-dial'
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
