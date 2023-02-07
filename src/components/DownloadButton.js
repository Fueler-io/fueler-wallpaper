import { IconDownload, IconX } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Oval } from 'react-loader-spinner';

// import SharePopUp from "./SharePopUp";

const DownloadButton = ({ imageUrl, imageName }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      const response = await fetch(imageUrl, {
        headers: {
          'Content-Type': 'image/png',
        },
      });
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = imageName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
      setShowPopup(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <button
        style={{ border: '1.10111px solid rgba(181, 178, 197, 0.4)' }}
        className="p-2 text-black hover:text-white bg-white hover:bg-black rounded-lg"
        onClick={handleDownload}
        disabled={isDownloading}
        role="button"
        aria-label='download-image'
      >
        {isDownloading ? (
          <Oval
            height={18}
            width={18}
            color="#00fbff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#00fbff"
            strokeWidth={4}
            strokeWidthSecondary={4}
          />
        ) : (
          <IconDownload />
        )}
      </button>
      {showPopup && (
        <div className="fixed bottom-3 left-0 right-0 w-96 mx-auto bg-white p-6 rounded-lg drop-shadow-2xl">
          <div className="flex justify-between">
            <h3 className="text-primary-blue font-medium">
              Thank you for using Fueler wallpapers
            </h3>
            <button
              role="button"
              className="text-primary-blue hover:text-gray-600 rounded-full p-2"
              onClick={() => setShowPopup(false)}
            >
              <IconX size={14} />
            </button>
          </div>
          <p className="text-primary-blue font-light mt-4 mb-3">
            Please help us spreading the word
          </p>
          <Link href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ffueler-wallpaper.vercel.app%2F&text=Hey%20I%20just%20downloaded%20some%20awesome%20wallpapers%20by%20@fuelerHQ%20check%20them%20out%21%21&hashtags=%23wallpaper%20%23wallpaper2023">
            <button className="font-medium button text-primary-blue hover:text-white py-2 px-4 rounded">
              Share the word with Twitter
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default DownloadButton;
