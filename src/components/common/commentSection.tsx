'use client';

import OptionButton from './optionButton';
import { useState, useEffect, useRef } from 'react';
import CodeEditor from './codeEditor';
import Button from './button';
import ProfileImage from './profileImage';
import { GoPrimitiveDot } from 'react-icons/go';
import Badge from './badge';

const syntaxTest = `console.log('hello world!')`;
const pathFileTest = 'codeEditor.tsx';

export default function CommentSection() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [heightValue, setHeightValue] = useState('');
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [text, setText] = useState('');
  const [syntax, setSyntax] = useState('');
  const [pathFile, setPathFile] = useState('');
  const code = {
    syntax,
    pathFile,
  };

  function handleTextArea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setHeightValue(e.target.value);
    setText(e.target.value);
  }

  function handleCodeEditor() {
    setShowCodeEditor(!showCodeEditor);
    if (!showCodeEditor) {
      setSyntax('');
      setPathFile('');
    }
  }

  function textOnly() {
    setShowCodeEditor(false);
    setSyntax('');
    setPathFile('');
  }

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [heightValue]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      <section className='common-bg-secondary mb-4 mt-2 w-full rounded-lg p-4'>
        <form onSubmit={handleSubmit}>
          <textarea
            name='text'
            id='text'
            ref={textAreaRef}
            placeholder='Ketik komentar anda disini...'
            className='max-h-96 w-full resize-none bg-transparent sm:max-h-[430px]'
            maxLength={4000}
            onChange={handleTextArea}
            autoFocus
            required
          ></textarea>
          {showCodeEditor && (
            <CodeEditor syntax={syntax} setSyntax={setSyntax} pathFile={pathFile} setPathFile={setPathFile} />
          )}
          <div className='mt-2 flex items-center justify-between'>
            <OptionButton
              context='comment'
              showCodeEditor={showCodeEditor}
              toggleCodeEditor={handleCodeEditor}
              textOnly={textOnly}
            />
            <Button
              type='submit'
              disabled={(!syntax && !pathFile) || !text}
              color={(syntax && pathFile) || text ? 'primary' : 'disabled'}
            >
              Submit
            </Button>
          </div>
        </form>
      </section>
      <h3 className='text-base font-semibold'>3 Komentar</h3>
      <div className='mt-4 flex items-start gap-4 rounded-lg'>
        {/* left side start */}
        <div className='flex flex-col items-end'>
          {/* user image */}
          <ProfileImage size='medium' />
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
                <h2 className='font-semibold'>Kumala</h2>
                <GoPrimitiveDot />
                <time>1 jam yang lalu</time>
              </div>
              <Badge>Wengdev</Badge>
            </div>
          </div>
          {/* bottom content */}
          <div className='mt-2'>
            <div className='mb-4 rounded-lg bg-light-secondary p-4 dark:bg-dark-secondary'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sed fugiat molestiae repudiandae.
                Tenetur cupiditate eius, dignissimos iure provident sapiente, laborum commodi incidunt inventore
                nesciunt ipsum labore possimus facere unde!
              </p>
              <CodeEditor context='commented' syntax={syntaxTest} pathFile={pathFileTest} />
            </div>
          </div>
        </div>
        {/* right side end */}
      </div>
    </>
  );
}
