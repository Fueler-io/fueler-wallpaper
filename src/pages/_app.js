import { useEffect } from 'react';
import Layout from '@/components/Layout';
import '@/styles/globals.css';
import Head from 'next/head';
import '@fontsource/metropolis';
import '@fontsource/metropolis/500.css';
// Weight 500.
import '@fontsource/metropolis/900-italic.css';
// Italic variant.

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader) loader.style.display = 'none';
    }
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {/* <!-- Primary Meta Tags --> */}
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
