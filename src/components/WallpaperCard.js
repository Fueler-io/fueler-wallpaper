import CopyButton from './CopyButton';
import DownloadButton from './DownloadButton';
import Image from 'next/image';

function DesktopWallpaperCard({ thumbail, alt, download }) {
  return (
    <div className="grow">
      <div className="flex flex-col p-6 justify-center gap-6 bg-white border-light rounded-2xl">
        <Image
          src={thumbail}
          width={304}
          height={171}
          alt={alt}
          className="object-cover rounded-lg w-full"
          priority={true}
          blurDataURL="URL"
          placeholder="Loading...."
        />

        <div className="flex flex-row gap-2">
          <DownloadButton imageUrl={download} imageName={alt} />
          <CopyButton imageUrl={download} />
        </div>
      </div>
    </div>
  );
}
function MobileWallpaperCard({ thumbail, alt, download }) {
  return (
    <div className="grow">
      <div className="flex flex-col p-6 justify-center gap-6 bg-white border-light rounded-2xl">
        <Image
          src={thumbail}
          width={152}
          height={329}
          alt={alt}
          className="object-cover rounded-lg w-full"
          priority={true}
          blurDataURL="URL"
          placeholder="Loading...."
        />

        <div className="flex flex-row gap-2">
          <DownloadButton imageUrl={download} imageName={alt} />
          <CopyButton imageUrl={download} />
        </div>
      </div>
    </div>
  );
}

export { MobileWallpaperCard, DesktopWallpaperCard };
