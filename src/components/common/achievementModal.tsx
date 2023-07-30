import ModalWrapper from './modalWrapper';

interface IAchievementModal {
  showModal: boolean;
  handleModal: () => void;
  titleAchievement: string;
  labelAchievement: string;
}

export default function AchievementModal({
  showModal,
  handleModal,
  titleAchievement,
  labelAchievement,
}: IAchievementModal) {
  return (
    <ModalWrapper title='Pencapaian' showModal={showModal} toggleModal={handleModal} width='sm' position='mid'>
      <div className='text-center'>
        <div className='mx-auto my-4 h-20 w-20 bg-red-500'></div>
        <div className='headings text-xl font-semibold'>{titleAchievement}</div>
        <div>{labelAchievement}</div>
      </div>
    </ModalWrapper>
  );
}
