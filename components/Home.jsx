'use client';

import Hero from './Hero/Hero';
import Portfolio from './Portfolio/Portfolio';
import GetInTouch from './About/GetInTouch';
import Footer from './Footer/Footer';
import Nav from '@/components/Nav/Nav';

import { useMediaQuery } from 'usehooks-ts';
import Mobile from './Mobile';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from './Loader';

function Home() {
  const [isMobile, setIsMobile] = useState(null);
  const isMobileQuery = useMediaQuery('(max-width: 900px)');

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile === null) {
    // Render a loading state to avoid HTML mismatch
    return <Loader />;
  }

  if (isMobile) {
    return (
      <>
        <Mobile />
      </>
    );
  } else {
    return (
      <>
        <Nav />
        <Hero />
        <Portfolio />
        <GetInTouch />
        <Footer />
      </>
    );
  }
}

export default Home;
