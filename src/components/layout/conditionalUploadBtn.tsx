'use client';

import { useAuthVerify } from '@/hooks/protectPage';
import Button from '../common/button';
import OptionButton from '../common/optionButton';
import ProfileImage from '../common/profileImage';

interface IConditional {
  handleModal: () => void;
  toggleCodeEditor: () => void;
}

export default function ConditionalUploadBtn({ handleModal, toggleCodeEditor }: IConditional) {
  const verified = useAuthVerify();

  if (!verified)
    return (
      <section className='common-bg relative z-10 mt-20 w-full space-y-2 rounded-lg p-4 text-center'>
        <UnAuthorizedBtn />
      </section>
    );

  return (
    <section onClick={handleModal} className='common-bg relative z-10 mt-20 w-full rounded-lg p-4'>
      <AuthorizedBtn toggleCodeEditor={toggleCodeEditor} />
    </section>
  );
}

function AuthorizedBtn({ toggleCodeEditor }: { toggleCodeEditor: () => void }) {
  return (
    <>
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
    </>
  );
}

function UnAuthorizedBtn() {
  return (
    <>
      <div>
        <h2 className='headings font-semibold'>Ingin berbagi pengetahuanmu?</h2>
        <p>Temukan partner, diskusikan isu terkini, dan tingkatkan kemampuanmu bersama!</p>
      </div>
      <div className='flex justify-center'>
        <a href='auth/login'>
          <Button type='button'>Gabung Sekarang!</Button>
        </a>
      </div>
    </>
  );
}
