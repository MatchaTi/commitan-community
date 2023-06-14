'use client';

import '@/style/CodeEditor.css';
import { JetBrains_Mono } from 'next/font/google';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-jsx';
import { useEffect, useRef, useState } from 'react';
import { BiCheckDouble } from 'react-icons/bi';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import Editor from 'react-simple-code-editor';

const jetBrains = JetBrains_Mono({ subsets: ['latin'] });

interface EditorContext {
  upload: string;
  posted: string;
  comment: string;
  commented: string;
  detail: string;
  edit: string;
  editComment: string;
}

interface ICode {
  context?: keyof EditorContext;
  syntax: string;
  setSyntax?: (syntax: string) => void;
  pathFile: string;
  setPathFile?: (pathFile: string) => void;
}

export default function CodeEditor({ context, syntax, setSyntax, pathFile, setPathFile }: ICode) {
  const [showExpandButton, setShowExpandButton] = useState(false);
  const [expandCode, setExpandCode] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (context == 'posted' || context == 'commented') {
      const editorHeight = editorRef.current?.clientHeight || 0;
      setShowExpandButton(editorHeight >= 250);
    }
  }, [context]);

  function handleCopy() {
    if (context == 'posted' || context == 'commented' || context == 'detail') {
      navigator.clipboard.writeText(syntax).then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      });
    }
  }

  return (
    <div
      className={`${jetBrains.className} mt-4 overflow-hidden rounded-lg border-2 border-light-accent bg-light-code-editor text-xs dark:border-dark-accent dark:bg-dark-code-editor sm:text-sm`}
    >
      <div className='flex w-full items-center justify-between border-b-2 border-inherit px-4 py-2'>
        <input
          type='text'
          value={pathFile}
          onChange={(e) => setPathFile?.(e.target.value)}
          readOnly={context == 'posted' || context == 'commented' || context == 'detail'}
          placeholder='Path / file name'
          className='bg-transparent outline-none'
          required
        />
        {context == 'posted' || context == 'commented' || context == 'detail' ? (
          <button
            type='button'
            onClick={handleCopy}
            className='translate-x-2 rounded-lg border-2 border-inherit p-2 text-lg'
          >
            {isCopied ? <BiCheckDouble className='text-green-400' /> : <HiOutlineClipboardDocumentList />}
          </button>
        ) : null}
      </div>
      <div
        ref={editorRef}
        className={`${
          context == 'posted' || context == 'commented'
            ? `${expandCode ? 'max-h-fit' : 'max-h-[250px] overflow-hidden'}`
            : `${context == 'detail' ? 'max-h-fit' : 'max-h-[430px] overflow-auto'}`
        } relative w-full`}
      >
        {showExpandButton && (
          <>
            {!expandCode && (
              <div className='absolute bottom-0 z-10 h-20 w-full bg-gradient-to-t from-light-main dark:from-dark-main'></div>
            )}
            <button
              type='button'
              onClick={() => setExpandCode(!expandCode)}
              className='absolute bottom-4 left-1/2 z-20 -translate-x-1/2'
            >
              {expandCode ? 'Lihat sedikit' : 'Lihat selengkapnya'}
            </button>
          </>
        )}
        <Editor
          value={syntax}
          onValueChange={(code) => setSyntax?.(code)}
          highlight={(code) => highlight(code, languages['jsx'], '')}
          padding={16}
          placeholder='Tulis kode anda disini...'
          readOnly={context == 'posted' || context == 'commented' || context == 'detail'}
          required
        />
      </div>
    </div>
  );
}
