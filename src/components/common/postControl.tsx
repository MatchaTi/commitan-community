'use client';

import { useAuthVerify } from '@/hooks/protectPage';
import { Menu, Transition } from '@headlessui/react';
import { BsThreeDots } from 'react-icons/bs';
import { HiTrash } from 'react-icons/hi2';
import { MdEdit, MdReport } from 'react-icons/md';

interface IControl {
  handleEditModal: () => void;
  handleDeleteModal: () => void;
}

interface IItemControl {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export default function PostControl({ handleEditModal, handleDeleteModal }: IControl) {
  const verified = useAuthVerify();
  const itemControl: IItemControl[] = [
    { label: 'Edit', icon: <MdEdit />, onClick: handleEditModal },
    { label: 'Hapus', icon: <HiTrash />, onClick: handleDeleteModal },
  ];

  return (
    <>
      <div className='flex'>
        <Menu as='div' className='relative'>
          <Menu.Button>
            <BsThreeDots />
          </Menu.Button>
          <Transition
            enter='transition origin-top-left duration-75 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition origin-top-left duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <Menu.Items
              className={
                'absolute -left-20 top-0 z-50 flex flex-col divide-y divide-dark-accent/10 overflow-hidden rounded bg-light-main shadow-lg shadow-light-accent dark:divide-light-accent/5 dark:border dark:border-light-accent/5 dark:bg-dark-secondary dark:shadow-none'
              }
            >
              {!verified ? (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        // onclick={}
                        active && 'bg-commitan-main'
                      } inline-flex items-center gap-2 px-4 py-2 hover:text-light-main`}
                    >
                      <span>
                        <MdReport />
                      </span>
                      <span>Report</span>
                    </button>
                  )}
                </Menu.Item>
              ) : (
                <>
                  {itemControl.map(({ label, icon, onClick }, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <button
                          onClick={onClick}
                          className={`${
                            active && 'bg-commitan-main'
                          } inline-flex items-center gap-2 px-4 py-2 hover:text-light-main`}
                        >
                          <span>{icon}</span>
                          <span>{label}</span>
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </>
              )}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
}
