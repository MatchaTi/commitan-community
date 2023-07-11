import Button from '../common/button';
import OptionButton from '../common/optionButton';
import ProfileImage from '../common/profileImage';

interface IConditional {
  handleModal: () => void;
  toggleCodeEditor: () => void;
}

export default function ConditionalUploadBtn({ handleModal, toggleCodeEditor }: IConditional) {
  return (
    <section onClick={handleModal} className='common-bg rounded-lg p-4'>
      <div className='flex items-center gap-4'>
        <ProfileImage />
        <button className='common-accent flex-1 rounded-lg border p-4 text-left'>
          Bagikan atau tanya sesuatu kepada lainnya!
        </button>
      </div>
      <div className='mt-2 flex items-center justify-between'>
        <OptionButton context='home' toggleCodeEditor={toggleCodeEditor} />
        <Button type='button'>Unggah</Button>
      </div>
    </section>
  );
}
