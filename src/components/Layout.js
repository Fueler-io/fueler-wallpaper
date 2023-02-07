import Navbar from './Navbar';
import { useEffect } from 'react';
import Footer from './Footer';
import { IconArrowUp } from '@tabler/icons-react';

export default function Layout({ children }) {
  useEffect(() => {
    const showOnPx = 300;
    const backToTopButton = document.querySelector('.back-to-top');

    const scrollContainer = () => {
      return document.documentElement || document.body;
    };

    document.addEventListener('scroll', () => {
      if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove('hidden');
      } else {
        backToTopButton.classList.add('hidden');
      }
    });

    const goToTop = () => {
      document.body.scrollIntoView({
        behavior: 'smooth',
      });
    };

    backToTopButton.addEventListener('click', goToTop);
  });
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-8 md:px-16 lg:px-24">
        {children}
      </main>
      <Footer />
      <button className="back-to-top hidden" role="button">
        <IconArrowUp />
      </button>
    </>
  );
}
