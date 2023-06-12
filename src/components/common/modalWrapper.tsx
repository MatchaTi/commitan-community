import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface IWrapper {
  title: string;
  children: React.ReactNode;
  showModal: boolean;
  toggleModal: () => void;
}

export default function ModalWrapper({ title, children, showModal, toggleModal }: IWrapper) {
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
          <div className='fixed inset-0 top-20 overflow-y-auto px-4'>
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
                <Dialog.Panel className='common-bg w-full max-w-[800px] transform overflow-y-auto rounded-lg p-4 transition-all'>
                  <Dialog.Title as='h3' className='text-center text-base font-medium'>
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
