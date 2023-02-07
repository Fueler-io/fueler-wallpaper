import Masonry from 'react-masonry-css';
import { MobileWallpaperCard, DesktopWallpaperCard } from './WallpaperCard';

const breakpointColumnsObj = {
  default: 3,
  700: 2,
  500: 1,
};

const MasonaryLayout = () => {
  return (
    <div className="mt-12">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <DesktopWallpaperCard
          thumbail={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-desktop-wallpaper/thumbnail/fueler-wallpaper-web-1.png'
          }
          download={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-desktop-wallpaper/wallpaper/fueler-wallpaper-web-1.png'
          }
          alt={'Laptop-wallpaper-1'}
        />
        <DesktopWallpaperCard
          thumbail={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-desktop-wallpaper/thumbnail/fueler-wallpaper-web-2.png'
          }
          download={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-desktop-wallpaper/wallpaper/fueler-wallpaper-web-2.png'
          }
          alt={'Laptop-wallpaper-2'}
        />
        <MobileWallpaperCard
          thumbail={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-mobile-wallpaper/thumbnail/3.png'
          }
          download={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-mobile-wallpaper/wallpaper/3.png'
          }
          alt={'Mobile wallpaper-3'}
        />
        <MobileWallpaperCard
          thumbail={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-mobile-wallpaper/thumbnail/4.png'
          }
          download={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-mobile-wallpaper/wallpaper/4.png'
          }
          alt={'Mobile wallpaper-4'}
        />
        <DesktopWallpaperCard
          thumbail={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-desktop-wallpaper/thumbnail/fueler-wallpaper-web-5.png'
          }
          download={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-desktop-wallpaper/wallpaper/fueler-wallpaper-web-5.png'
          }
          alt={'Laptop-wallpaper-5'}
        />
        <DesktopWallpaperCard
          thumbail={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-desktop-wallpaper/thumbnail/fueler-wallpaper-web-6.png'
          }
          download={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-desktop-wallpaper/wallpaper/fueler-wallpaper-web-6.png'
          }
          alt={'Laptop-wallpaper-6'}
        />
        <DesktopWallpaperCard
          thumbail={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-desktop-wallpaper/thumbnail/fueler-wallpaper-web-7.png'
          }
          download={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-desktop-wallpaper/wallpaper/fueler-wallpaper-web-7.png'
          }
          alt={'Laptop-wallpaper-1'}
        />
        <MobileWallpaperCard
          thumbail={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-mobile-wallpaper/thumbnail/8.png'
          }
          download={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-mobile-wallpaper/wallpaper/8.png'
          }
          alt={'Mobile wallpaper-8'}
        />
        <DesktopWallpaperCard
          thumbail={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-desktop-wallpaper/thumbnail/fueler-wallpaper-web-9.png'
          }
          download={
            'https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-wallpapers/fueler-desktop-wallpaper/wallpaper/fueler-wallpaper-web-9.png'
          }
          alt={'Laptop-wallpaper-9'}
        />
      </Masonry>
    </div>
  );
};

export default MasonaryLayout;
