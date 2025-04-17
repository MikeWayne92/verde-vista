import React, { useEffect } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Playfair_Display } from 'next/font/google';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

// Load fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Add smooth scrolling to top on route change
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up the event listener on component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={`${inter.variable} ${playfairDisplay.variable} font-sans`}>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
  );
} 