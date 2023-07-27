import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface IWidth {
  sm: string;
  md: string;
  lg: string;
}

interface IPosition {
  top: string;
  mid: string;
}

type IWrapper = {
  title: string;
  width?: keyof IWidth;
  position?: keyof IPosition;
  children: React.ReactNode;
  showModal: boolean;
  toggleModal: () => void;
};

const modalWidth = ({ width, position }: IWrapper) => {
  const variants = {
    width: {
      sm: 'max-w-[350px]',
      md: 'max-w-[600px]',
      lg: 'max-w-[800px]',
    },
  };

  return variants.width[width || 'lg'];
};

const modalPosition = ({ position }: IWrapper) => {
  const variants = {
    postion: {
      top: 'top-20',
      mid: 'top-1/2 -translate-y-1/3',
    },
  };

  return variants.postion[position || 'top'];
};
export default function ModalWrapper({ title, width, position, children, showModal, toggleModal }: IWrapper) {
  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog as='div' className='relative z-[9999]' onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-75'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-75'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            {/* backdrop */}
            <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm' />
          </Transition.Child>
          <div className={`${modalPosition({ position } as IWrapper)} fixed inset-0 overflow-y-auto px-4`}>
            <div className='flex min-h-full items-start justify-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel
                  className={`${modalWidth({
                    width,
                  } as IWrapper)} common-bg w-full transform overflow-y-auto rounded-lg p-4 shadow-slate-400/25 transition-all`}
                >
                  <Dialog.Title as='h3' className='headings text-center text-base font-medium'>
                    {title}
                  </Dialog.Title>
                  <div className='mt-2'>{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
