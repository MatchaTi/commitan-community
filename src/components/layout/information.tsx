import { infoItems } from '@/utils/data';

interface IInfo {
  className?: string;
  visibility?: string;
}

export default function Information({ className, visibility }: IInfo) {
  return (
    <section className={`${className} ${visibility} mb-10 pb-10`}>
      <ul className='flex flex-wrap gap-4'>
        {infoItems.map(({ href, label }, index) => {
          return (
            <li key={index}>
              <a href={`/${href}`} className='opacity-60 hover:underline hover:opacity-100'>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
