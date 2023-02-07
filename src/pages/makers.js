import Head from 'next/head';
import makers from '@/data/makers';
import Image from 'next/image';
import HomeComponent from '@/components/HomeComponent';
import Link from 'next/link';
import { IconBrandGithub, IconConfetti } from '@tabler/icons-react';
import ThunderBolt from '@/components/ThunderBolt';
import FuelerLogoWordmark from '@/components/FuelerLogoWordmark';

export default function Makers() {
  return (
    <>
      <Head>
        <title>500+ Fueler Wallpaper Collection | Makers</title>
        <meta
          name="description"
          content="Discover new and freshly looking mobile and laptop wallpapers. Time to give a makeover to your system"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://fueler-wallpaper.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="500+ Fueler Wallpaper Collection" />
        <meta property="og:description" content="Discover new and freshly looking mobile and laptop wallpapers. Time to give a makeover to your system" />
        <meta property="og:image" content="https://raw.githubusercontent.com/Susmita-Dey/Fueler-Wallpaper/main/public/og-image.png?token=GHSAT0AAAAAAB5PVM5IVH2P2PMD3BOWYFLSY7CGTBQ" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="fueler-wallpaper.vercel.app" />
        <meta property="twitter:url" content="https://fueler-wallpaper.vercel.app/" />
        <meta name="twitter:title" content="500+ Fueler Wallpaper Collection" />
        <meta name="twitter:description" content="Discover new and freshly looking mobile and laptop wallpapers. Time to give a makeover to your system" />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/Susmita-Dey/Fueler-Wallpaper/main/public/og-image.png?token=GHSAT0AAAAAAB5PVM5IVH2P2PMD3BOWYFLSY7CGTBQ" />
      </Head>

      <section className="mt-10">
        <div className="rounded-xl bg-gradient-to-tr hero-1">
          <div className="container flex gap-16 pb-16 flex-col md:flex-row items-center justify-center">
            <ThunderBolt height={120} />
            <div className="flex flex-col justify-center items-center mt-10">
              <h2 className="text-center text-4xl md:text-3xl sm:text-xl font-bold mb-3 px-4 pt-16 textColor">
                Rockstar Makers Behind This <IconConfetti className="inline" />
              </h2>
              <p className="text-center text-2xl md:text-xl sm:text-lg font-medium mb-6 textColor">
                Know about the gorgeous team who is behind this project
              </p>
            </div>
            <ThunderBolt height={120} />
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-6">
        {makers.map((member, index) => (
          <div className="grow" key={index}>
            <div className="rounded-xl flex flex-col flex-wrap gap-4 items-center justify-center bg-white border-light p-6">
              <Image
                src={member.photo}
                width={250}
                height={250}
                className="object-cover rounded-lg w-full"
                alt={member.name}
                priority={true}
              />
              <div className="flex flex-col gap-2  items-center justify-center">
                <h3 className="textColor font-bold text-xl">{member.name}</h3>
                <h4 className="textColor font-medium text-lg">{member.bio}</h4>
              </div>
              <div className="flex flex-row gap-2 mt-2">
                <Link
                  href={member.fueler}
                  className="text-lg sm:text-base secondary-button font-medium mx-2 px-4 py-2 hover:text-white"
                  target="_blank"
                >
                  <div className="flex flex-row gap-2">
                    <FuelerLogoWordmark IconHeight={24} />
                  </div>
                </Link>
                <Link
                  href={member.github}
                  className="text-lg sm:text-base secondary-button font-medium px-2 py-2 hover:text-white"
                  target="_blank"
                >
                  <IconBrandGithub />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex justify-center mt-6 mb-8"
        role="button"
        aria-describedby="more-info"
      >
        <Link
          href="/desktopwallpaper"
          className="textFont text-sm md:text-md lg:text-lg secondary-button font-medium mx-2 px-4 py-2 hover:text-white"
        >
          🖥️ Desktop
        </Link>
        <Link
          href="/mobilewallpaper"
          className="textFont text-sm md:text-md lg:text-lg secondary-button font-medium mx-2 px-4 py-2 hover:text-white text-[#3E3D47]"
        >
          📱 Mobile
        </Link>
      </div>
      <HomeComponent />
    </>
  );
}
