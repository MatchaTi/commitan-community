'use client';

import { useState } from 'react';
import { BiCodeCurly } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { HiExternalLink } from 'react-icons/hi';
import Badge from './badge';
import CodeEditor from './codeEditor';
import CommentSection from './commentSection';
import PostActionButton from './postActionButton';
import ProfileImage from './profileImage';

const syntax = `import Image from 'next/image';\nimport commitanLogo from 'public/images/commitan-logo.svg';\nimport DarkModeBtn from '../common/DarkModeBtn';\nimport Notification from '../common/Notification';\nimport ProfileMenu from '../common/ProfileMenu';\nimport SearchModal from '../common/SearchModal';\n\nconst Navbar = () => {\n  return (\n    <header className='fixed left-0 right-0 top-0 z-20 mx-auto w-full max-w-[1440px] backdrop-blur-sm xl:px-20 2xl:px-0'>\n      {/* tablet start */}\n      <div className='grid w-full grid-cols-2 items-center justify-between px-4 py-4 sm:grid-cols-3 sm:pl-20 xl:grid-cols-5 xl:px-0 xl:pl-0'>\n        <div className='inline-flex cursor-pointer items-center xl:gap-4'>\n          <Image src={commitanLogo} alt='Commitan Logo' className='hidden xl:block' width={28} height={28} priority />\n          <h1 className='text-2xl font-bold text-slate-700 dark:text-slate-100 sm:hidden xl:block'>Commitan.</h1>\n        </div>\n        <SearchModal className='hidden sm:inline-flex' />\n        {/* tablet end */}\n        <div className='inline-flex items-center space-x-4 justify-self-end sm:w-full xl:col-start-5'>\n          <SearchModal className='sm:hidden' />\n          <Notification className='cursor-pointer sm:hidden' />\n          <DarkModeBtn className='cursor-pointer sm:hidden xl:hidden 2xl:hidden' />\n          {/* desktop start */}\n          <div className='hidden items-center xl:inline-flex xl:w-full xl:justify-between'>\n            <ProfileMenu />\n            <div className='inline-flex space-x-4'>\n              <DarkModeBtn className='cursor-pointer' />\n              <Notification className='xl:inline-flex' />\n            </div>\n          </div>\n          {/* desktop end */}\n        </div>\n      </div>\n    </header>\n  );\n};\n\nexport default Navbar;`;
const pathFile = 'codeEditor.tsx';

export default function Post() {
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  function toggleCommentSection() {
    setIsCommentOpen(!isCommentOpen);
  }

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
                  <h2 className='font-semibold'>Kumala</h2>
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
          <div className='mb-4 rounded-lg bg-light-secondary p-4 dark:bg-dark-secondary'>
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
          <CodeEditor context='posted' syntax={syntax} pathFile={pathFile} />
          <PostActionButton isCommentOpen={isCommentOpen} toggleCommentSection={toggleCommentSection} />
          {isCommentOpen && <CommentSection />}
        </div>
      </div>
      {/* right side end */}
    </article>
  );
}
