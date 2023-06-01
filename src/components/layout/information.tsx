interface IInfo {
  className?: string;
  visibility?: string;
}

const infoItems = [
  {
    href: 'tentang-kami',
    label: 'Tentang Kami',
  },
  {
    href: 'kontak',
    label: 'Kontak',
  },
  {
    href: 'peraturan',
    label: 'Peraturan',
  },
  {
    href: 'kebijakan-privasi',
    label: 'Kebijakan Privasi',
  },
];

export default function Information({ className, visibility }: IInfo) {
  return (
    <section className={`${className} ${visibility} mb-10 mt-4 pb-10`}>
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
