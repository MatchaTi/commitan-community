import { pilKategori } from '@/utils/data';
import Link from 'next/link';

interface ICategory {
  className?: string;
  visibility?: string;
}

export default function Category({ className, visibility }: ICategory) {
  return (
    <section className={`${visibility} ${className} common-bg mt-4 w-full rounded-lg p-4`}>
      <h4 className='mb-4 text-base font-bold text-commitan-main'>Kategori</h4>
      <ul className='flex flex-wrap items-center gap-1'>
        {pilKategori.map((item, index) => {
          return (
            <li
              key={index}
              className='block cursor-pointer rounded-full border border-light-main px-4 py-2 duration-0 hover:border-commitan-main hover:bg-commitan-main hover:text-white dark:border-dark-accent'
            >
              <Link href={`/kategori?kategori=${item}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
