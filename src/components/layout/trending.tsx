import { FcLike } from 'react-icons/fc';
import ProfileImage from '../common/profileImage';

interface ITrending {
  className?: string;
  visibility?: string;
}

const posts = [
  {
    username: 'Kumala',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, earum.',
    likes: 3000,
  },
  {
    username: 'YJJA',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, earum.',
    likes: 2000,
  },
  {
    username: 'Anjayani',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, earum.',
    likes: 1000,
  },
];

export default function Trending({ className, visibility }: ITrending) {
  return (
    <section className={`${visibility} ${className} common-bg mt-4 w-full rounded-lg pt-4`}>
      <h4 className='mb-4 px-4 text-base font-bold text-commitan-main'>Trending</h4>
      <ul>
        {posts.map(({ username, content, likes }, index) => {
          return (
            <li
              key={index}
              className='cursor-pointer px-4 py-2 duration-150 ease-in-out hover:bg-dark-secondary/5 hover:dark:bg-light-secondary/5'
            >
              <div className='flex w-full items-center gap-2'>
                <div>
                  <ProfileImage size='md' />
                </div>
                <div className='text-xs sm:text-sm'>
                  <h3 className='font-semibold'>{username}</h3>
                  <p className='headings font-semibold'>{content}</p>
                  <span className='flex items-center gap-2'>
                    <FcLike /> {likes}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
