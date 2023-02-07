import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import MasonaryLayout from '@/components/MasonaryLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>500+ Fueler Wallpaper Collection</title>
        <meta name="title" content="500+ Fueler Wallpaper Collection" />
        <meta
          name="description"
          content="Discover new and freshly looking mobile and laptop wallpapers. Time to give a makeover to your system"
        />
      </Head>
      <HeroSection header="" />
      <MasonaryLayout />
    </>
  );
}
