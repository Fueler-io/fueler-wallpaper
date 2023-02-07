import Link from 'next/link';
import FuelerLogoWordmark from './FuelerLogoWordmark';

export default function Navbar() {
  return (
    <>
      <div className="sticky max-w-full top-0 items-center z-20 header border-b border-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 py-2 md:py-4">
          <div className="flex md:flex-row gap-2 justify-between items-center">
            <Link href="/" className="rounded-lg">
              <div className="flex items-start gap-2 cursor-pointer">
                <div className="block md:hidden">
                  <FuelerLogoWordmark IconHeight={24} />
                </div>
                <div className="hidden md:block lg:hidden">
                  <FuelerLogoWordmark IconHeight={32} />
                </div>
                <div className="hidden lg:block">
                  <FuelerLogoWordmark IconHeight={40} />
                </div>
                <div className="ring-2 ring-amber-400 rounded-md text-xs md:text-sm bg-white px-1 py-0.5 md:px-2 md:py-1 font-medium">
                  Wallpaper
                </div>
              </div>
            </Link>
            <div
              className="ml-0 md:ml-auto flex items-center justify-center gap-2"
              role="button"
              aria-describedby="more-info"
            >
              <Link
                href="/makers"
                className="text-sm md:text-md lg:text-lg hidden secondary-button font-medium px-4 py-2 hover:text-white text-[#3E3D47]"
              >
                👷🏼 Makers
              </Link>
              <Link
                href="https://twitter.com/FuelerHQ/status/1613030023191212032"
                className="textFont text-sm md:text-md lg:text-lg button font-medium px-4 py-2 rounded-lg hover:text-white"
                target={'_blank'}
              >
                Wall of lobe 😍
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
