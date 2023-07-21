import MenuDisclosure from '@/components/common/menuDisclosure';
import { disclosureItems } from '@/utils/data';

export default function Rules() {
  return (
    <div className='mt-32'>
      <div className='text-center'>
        <h2 className='headings mx-auto max-w-5xl text-4xl font-bold leading-normal sm:max-w-3xl sm:text-5xl xl:max-w-5xl xl:text-7xl'>
          Peraturan
        </h2>
      </div>
      <div className='common-bg mx-auto mt-10 w-full overflow-hidden rounded-lg xl:w-4/6'>
        {disclosureItems.map(({ title, desc }, i) => (
          <MenuDisclosure key={i} title={title}>
            <p>{desc}</p>
          </MenuDisclosure>
        ))}
      </div>
    </div>
  );
}
