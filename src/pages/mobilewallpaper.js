import Head from 'next/head';
import mobImg from '../data/mobileImages';
import HomeComponent from '@/components/HomeComponent';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { MobileWallpaperCard } from '@/components/WallpaperCard';

export default function mobilewallpaper() {
  // console.log(mobImg)
  return (
    <>
      <Head>
        <title>500+ Fueler Wallpaper Collection</title>
        <meta name="title" content="500+ Fueler Wallpaper Collection" />
        <meta name="description" content="Discover new and freshly looking mobile and laptop wallpapers. Time to give a makeover to your system" />

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
      <div className="w-full items-center justify-center flex-wrap flex-row">
        <HeroSection header="Mobile" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-12 gap-6">
          {mobImg.map((image, index) => (
            <MobileWallpaperCard
              key={index}
              thumbail={image.thumbnail}
              download={image.photo}
              alt={image.name}
            />
          ))}
        </div>
      </div>
      <HomeComponent />
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
    </>
  );
}
