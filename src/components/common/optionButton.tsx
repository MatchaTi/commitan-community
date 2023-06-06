import { BiEdit } from 'react-icons/bi';
import { HiCode } from 'react-icons/hi';
import Button from './button';

interface OptionContext {
  upload: string;
  home: string;
  comment: string;
}

interface IOption {
  context: keyof OptionContext;
  textOnly?: () => void;
  showCodeEditor?: boolean;
  toggleCodeEditor?: () => void;
  showLinkSourceCode?: boolean;
  toggleLinkSourceCode?: () => void;
  showLinkLiveDemo?: boolean;
  toggleLinkLiveDemo?: () => void;
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
    <div className='flex items-center'>
      <Button
        type='button'
        size='sm'
        color='transparent'
        onClick={textOnly}
        className='group flex items-center hover:text-purple-400'
      >
        <BiEdit className='rounded-lg p-1 text-3xl group-hover:bg-purple-400/25' />
      </Button>
      <Button
        type='button'
        size='sm'
        color='transparent'
        onClick={toggleCodeEditor}
        className={`${showCodeEditor && 'text-sky-500'} group flex items-center hover:text-sky-400`}
      >
        <HiCode className={`${showCodeEditor && 'bg-sky-400/25'} rounded-lg p-1 text-3xl group-hover:bg-sky-400/25`} />
      </Button>
    </div>
  );
}
