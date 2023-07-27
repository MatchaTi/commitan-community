export default function Footer() {
  return (
    <footer className='common-accent mt-10 w-full border-t bg-light-main dark:bg-dark-main'>
      <div className='mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between px-4 py-4 xl:px-20 2xl:px-0'>
        <a
          href='https://github.com/MatchaTi/commitan-community/issues'
          target={'_blank'}
          className='underline-offset-4 hover:underline'
        >
          Diskusi dengan Kami di Github
        </a>
        <p>&copy; 2023 Commitan oleh Tim Commitan</p>
      </div>
    </footer>
  );
}
