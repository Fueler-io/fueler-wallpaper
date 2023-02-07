import Link from 'next/link';
import FuelerLogoWordmark from './FuelerLogoWordmark';
import ThunderBolt from './ThunderBolt';

export default function HeroSection({ header }) {
  return (
    <>
      <section className="mt-10">
        <div className="rounded-xl bg-gradient-to-tr hero-1">
          <div className="flex flex-col md:flex-row gpa-4 md:gap-16 py-8 items-center justify-center xs:flex-wrap sm:mt-4">
            <ThunderBolt height={120} />
            <div className="flex flex-col justify-center items-center mt-20">
              <h1 className="text-4xl  lg:text-4xl font-bold text-center text-primary-blue">
                Fueler {header} Wallpaper Collection
              </h1>
              <div className="flex gap-4 items-center my-5">
                <h2 className="font-medium text-lg">From the makers of</h2>
                <Link href="https://fueler.io/" target="_blank">
                  <FuelerLogoWordmark IconHeight={24} />
                </Link>
              </div>
              <div
                className="flex justify-center mt-6 mb-8 xs:flex-col xs:gap-6"
                role="button"
                aria-describedby="more-info"
              >
                <Link
                  href="/desktopwallpaper"
                  className="text-2xl md:text-lg sm:text-base secondary-button font-medium mx-2 px-4 py-2 hover:text-white"
                >
                  🖥️ Desktop
                </Link>
                <Link
                  href="/mobilewallpaper"
                  className="text-2xl md:text-lg sm:text-base secondary-button font-medium mx-2 px-4 py-2 hover:text-white text-[#3E3D47]"
                >
                  📱 Mobile
                </Link>
              </div>
            </div>
            <ThunderBolt height={120} />
          </div>
        </div>
      </section>
    </>
  );
}
