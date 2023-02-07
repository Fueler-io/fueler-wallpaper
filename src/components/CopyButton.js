import { IconCopy, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import Link from 'next/link';
import { Oval } from 'react-loader-spinner';

const CopyButton = ({ imageUrl }) => {
  const [isCopying, setIsCopying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleCopy = async () => {
    setIsCopying(true);
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      setShowPopup(true);
    } catch (error) {
      console.error(error);
    }
    setIsCopying(false);
  };

  return (
    <>
      <button
        style={{ border: '1.10111px solid rgba(181, 178, 197, 0.4)' }}
        className="p-2 text-black hover:text-white bg-white hover:bg-black rounded-lg"
        onClick={handleCopy}
        disabled={isCopying}
        role="button"
        aria-label="copy image"
      >
        {isCopying ? (
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
          <IconCopy />
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

export default CopyButton;
