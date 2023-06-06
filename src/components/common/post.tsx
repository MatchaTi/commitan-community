import Badge from './badge';
import ProfileImage from './profileImage';
import { BiCodeCurly } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { HiExternalLink } from 'react-icons/hi';

export default function Post() {
  return (
    <article className='common-bg mt-4 flex items-start gap-4 rounded-lg p-4'>
      {/* left side start */}
      <div className='hidden flex-col items-end sm:flex'>
        {/* user image */}
        <ProfileImage />
        {/* hooks */}
        <div className='mt-2 h-8 w-8 translate-x-2 border-b-4 border-l-4 border-light-accent dark:border-dark-accent '></div>
      </div>
      {/* left side end */}
      {/* right side start */}
      <div className='w-full'>
        {/* top information */}
        <div className='flex items-start justify-between'>
          <div className='mb-2'>
            <div className='flex items-center gap-2'>
              <ProfileImage visibility='sm:hidden' size='medium' />
              <div>
                <div className='flex items-center gap-2'>
                  <h2>Kumala</h2>
                  <GoPrimitiveDot />
                  <time>1 jam yang lalu</time>
                </div>
                <Badge>Wengdev</Badge>
              </div>
            </div>
          </div>
          <div className='flex gap-2'>
            <Badge color='random' visibility='hidden sm:flex'>
              JavaScript
            </Badge>
            <Badge color='sourceCode' visibility='hidden sm:flex'>
              <BiCodeCurly />
              Source Code
            </Badge>
            <Badge color='liveDemo' visibility='hidden sm:flex'>
              <HiExternalLink />
              Live Demo
            </Badge>
            <button type='button'>
              <BsThreeDots />
            </button>
          </div>
        </div>
        {/* bottom content */}
        <div className='mt-2'>
          <div className='mb-4 rounded-lg bg-light-accent p-4 dark:bg-dark-accent'>
            <h3 className='text-lg font-semibold'>Basic JavaScript</h3>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis amet quae laborum recusandae non? Illum
            doloremque cupiditate natus atque repellat enim fuga numquam veritatis rerum nihil nulla, quam, deserunt
            fugit! Ex rerum autem dolores soluta perspiciatis nam, inventore eveniet, consequatur fugit numquam fugiat
            deleniti vitae ut culpa libero amet quia quae voluptas porro qui veritatis. Iusto provident suscipit
            eligendi beatae, id blanditiis magni consequatur odio explicabo, nobis facere nostrum nesciunt dolore
            exercitationem accusantium dignissimos hic aliquid? Porro corporis adipisci necessitatibus perferendis.
            Excepturi nemo perferendis iure illum pariatur sequi adipisci voluptatum incidunt at consequuntur voluptates
            exercitationem earum provident dolor, quae minima.
          </p>
        </div>
      </div>
      {/* right side end */}
    </article>
  );
}
