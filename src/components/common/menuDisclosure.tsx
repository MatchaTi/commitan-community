'use client';

import { Disclosure } from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';

interface IDisclosure {
  title: string;
  children: React.ReactNode;
}

export default function MenuDisclosure({ title, children }: IDisclosure) {
  return (
    <div className='w-full'>
      <Disclosure as='div' className='divide-y divide-dark-accent/10 dark:divide-light-accent/5'>
        {({ open }) => (
          <>
            <Disclosure.Button className='headings flex w-full items-center justify-between p-4 text-left text-base font-medium duration-150 ease-in-out hover:bg-dark-secondary/5 focus:outline-none focus-visible:ring focus-visible:ring-commitan-main focus-visible:ring-opacity-75 hover:dark:bg-light-secondary/5'>
              <span>{title}</span>
              <HiChevronDown className={`${open && 'rotate-180'} paragraphs text-3xl duration-150 ease-in-out`} />
            </Disclosure.Button>
            <Disclosure.Panel className='p-4'>{children}</Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
