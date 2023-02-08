import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] mx-auto flex flex-col justify-center items-center mt-10 pt-10 pb-10">
      <p className="text-center">
        <span className="font-semibold text-[#5A5961]">
          Built with 💖 By Team{' '}
          <Link href="https://fueler.io" target={'_blank'}>
            Fueler
          </Link>
        </span>
        <br />
        <strong className="text-primary-blue hover:text-[#fb25ff] ">
          <Link href="/makers">Meet the Creators</Link>
        </strong>
        <br />
        Credits reserved to all the respective artists who have created these
        masterpiece. Please{' '}
        <Link href="/makers" target={'_blank'}>
          dm
        </Link>{' '}
        for removal or credits.
      </p>
    </footer>
  );
}
