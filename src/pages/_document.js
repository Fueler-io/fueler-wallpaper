import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import loader from '../components/Loader';
import Image from 'next/image';

class MyDocument extends Document {
  render() {
    if (typeof window !== 'undefined') {
      var preloader = document.querySelector('.loading-wrapper');

      function myFunction() {
        preloader.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }
    return (
      <Html lang="en">
        <Head>
          {/* <!-- Facebook Meta Tags --> */}
          <meta
            property="og:url"
            content="https://https://fueler-wallpaper.netlify.app/"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="500+ Fueler Wallpaper Collection"
          />
          <meta
            property="og:description"
            content="Discover new and freshly looking mobile and laptop wallpapers. Time to give a makeover to your system"
          />
          <meta
            property="og:image"
            content="https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-wallpaper-meta-image.jpg"
          />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:domain"
            content="fueler-wallpaper.vercel.app"
          />
          <meta
            property="twitter:url"
            content="https://https://fueler-wallpaper.netlify.app/"
          />
          <meta
            name="twitter:title"
            content="500+ Fueler Wallpaper Collection"
          />
          <meta
            name="twitter:description"
            content="Discover new and freshly looking mobile and laptop wallpapers. Time to give a makeover to your system"
          />
          <meta
            name="twitter:image"
            content="https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-wallpaper-meta-image.jpg"
          />

          <link rel="icon" href="/icon.png" />
          <style>{loader}</style>
        </Head>

        <body className="metropolis">
          <div onLoad="myFunction()" id={'globalLoader'}>
            <div className="loading-wrapper">
              <Image
                src="/loader-icon.svg"
                id="loading"
                width={96}
                height={96}
                alt="loading animation"
              />
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
