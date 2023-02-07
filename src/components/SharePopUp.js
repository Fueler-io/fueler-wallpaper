import { IconX } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const SharePopUp = () => {
  return (
    <div className="fixed bottom-3 left-0 right-0 w-96 mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between">
        <h3 className="text-primary-blue font-medium">
          Thank you for using Fueler wallpapers
        </h3>
        <button
          role="button"
          className="button text-primary-blue hover:text-white rounded-full p-2"
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
  );
};

export default SharePopUp;
