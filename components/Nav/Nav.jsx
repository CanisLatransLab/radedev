'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { socials } from '../../constant/index';
import Image from 'next/image';

export default function Nav() {
  const [showNav, setShowNav] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const socialIcons = ['iconGithub', 'iconInstagram', 'iconLinkedin', 'iconBehance'];

  const isMobile = useMediaQuery('(max-width: 640px)');
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  // Nav Y positions states :
  const [yHome, setYHome] = useState(null);
  const [yPort, setYPort] = useState(null);
  const [yAbout, setYAbout] = useState(null);
  const [yContact, setYContact] = useState(null);

  useEffect(() => {
    if (isMobile) {
      setYHome(753);
      setYPort(1673);
      setYAbout(4365);
      setYContact(5467);
    } else if (isDesktop) {
      setYHome(1095);
      setYPort(2546);
      setYAbout(3454);
      setYContact(4590);
    }
  }, [isMobile, isDesktop]);

  //scrollY Navigation:
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    // console.log(latest);
    if (latest >= 1076) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  });

  const scrollTo = (yPosition) => {
    window.scrollTo({
      top: yPosition,
      behavior: 'smooth',
    });
  };

  const handleScrollToPosition = (e, yPosition) => {
    e.preventDefault();
    setNavToggle(false);
    scrollTo(yPosition);
  };

  //Nav animations:
  const variants = {
    open: {
      maxWidth: '37rem',
      height: '60rem',
      border: '1px solid white',
      boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.2)',
    },
    closed: {
      maxWidth: '6rem',
      height: '6rem',
    },
  };

  return (
    <motion.div
      variants={{
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0 },
      }}
      initial='hidden'
      animate={showNav ? 'visible' : 'hidden'}>
      <motion.div
        animate={navToggle ? 'open' : 'closed'}
        variants={variants}
        className={`fixed right-[2%] top-[2%] z-[60] h-[69rem] w-full max-w-[55rem] rounded-[5rem] ${
          navToggle
            ? 'bg-gradient-to-br from-transparent to-clWhite/[0.15] backdrop-blur-md'
            : 'backdrop-blur-none'
        } `}>
        <motion.div
          onClick={() => setNavToggle((prevToggle) => !prevToggle)}
          className='flexcursor-pointer scale-x-[-1] flex-col'>
          {/* Toggle */}
          <div className='z-[65] mt-[2rem] translate-x-[2rem] space-y-[.5rem]'>
            <motion.span
              animate={{
                rotateZ: navToggle ? 45 : 0,
                y: navToggle ? 8 : 0,
              }}
              className='text-tlo block h-[.35rem] w-[3.6rem] rounded-lg bg-clBlack'></motion.span>
            <motion.span
              animate={{
                width: navToggle ? 0 : 24,
              }}
              className=' block h-[.35rem] w-[2.4rem] rounded-lg bg-clBlack'></motion.span>
            <motion.span
              animate={{
                rotateZ: navToggle ? -45 : 0,
                y: navToggle ? -8 : 0,
                width: navToggle ? 36 : 16,
              }}
              className='block h-[.35rem] w-[1.9rem] rounded-lg bg-clBlack'></motion.span>
          </div>
        </motion.div>

        {/* Nav list */}
        <motion.nav
          animate={{ opacity: navToggle ? 1 : 0, transition: { duration: 0.6, delay: 0.3 } }}
          className='w-ful flex h-[70%] items-center justify-center'>
          {navToggle && (
            <ul className=' flex flex-col gap-10'>
              <a onClick={(e) => handleScrollToPosition(e, yHome)}>
                <li className='flex cursor-pointer  items-center gap-5 text-[2.8rem] text-clBlack transition-colors duration-[0.4] hover:text-primary'>
                  <span className='text-[1.6rem] font-thin'>0.1</span> HOME
                </li>
              </a>

              <a onClick={(e) => handleScrollToPosition(e, yPort)}>
                <li className='flex cursor-pointer items-center gap-5 text-[2.8rem]  text-clBlack transition-colors duration-[0.4] hover:text-primary'>
                  <span className='text-[1.6rem] font-thin'>0.2</span> PROJECTS
                </li>
              </a>
              <a onClick={(e) => handleScrollToPosition(e, yAbout)}>
                <li className='flex cursor-pointer  items-center gap-5 text-[2.8rem] text-clBlack transition-colors duration-[0.4]  hover:text-primary'>
                  <span className='text-[1.6rem] font-thin'>0.3</span> WHOAMI
                </li>
              </a>
              <a onClick={(e) => handleScrollToPosition(e, yContact)}>
                <li className='flex cursor-pointer items-center gap-5 text-[2.8rem]  text-clBlack transition-colors duration-[0.4]  hover:text-primary'>
                  <span className='text-[1.6rem] font-thin'>0.4</span> CONTACT
                </li>
              </a>
            </ul>
          )}
        </motion.nav>

        {/* Socials */}
        <div className='flex justify-center gap-8'>
          {navToggle &&
            socials.map((social, i) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.6, delay: 0.6 + i / 10 } }}
                  className='mobile:max-w-[3rem]'
                  key={social.id}>
                  <a
                    href={social.href}
                    className=' cursor-pointer'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <div className='max-w-[3rem]'>
                      <Image
                        src={social.icon}
                        width={32}
                        height={32}
                        alt={social.alt}
                        className='h-auto w-full'
                      />
                    </div>
                  </a>
                </motion.div>
              );
            })}
        </div>
      </motion.div>
    </motion.div>
  );
}
