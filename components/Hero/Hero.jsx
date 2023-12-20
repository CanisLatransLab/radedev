'use client';

import hand from '@/public/assets/hand.png';
import head from '@/public/assets/head.png';

import { motion, useScroll, useTransform, useAnimate, useInView, stagger } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useMediaQuery } from 'usehooks-ts';

//Tech logos
import logoReact from '@/public/assets/logo-react.svg';
import logoNext from '@/public/assets/logo-next.svg';
import logoTailwind from '@/public/assets/logo-tailwind.svg';
import logoAstro from '@/public/assets/logo-astro.svg';
import logoTs from '@/public/assets/logo-ts.svg';
import logoSass from '@/public/assets/logo-sass.svg';

import Lenis from '@studio-freight/lenis';

export default function Hero() {
  // //smooth scroll
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  //Breakpoints
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isTabletHoriz = useMediaQuery('(max-width: 1400px)');

  //Animation on scroll left-top hand
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);
  const inViewRef = useRef(null);

  //End of hero Ref
  const targetRef3 = useRef(null);
  const targetRef4 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
    offset: ['start end', 'start start'],
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: targetRef3,
    offset: ['start end', 'start start'],
  });

  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: targetRef4,
    offset: ['start end', 'end start'],
  });

  //Hand
  const handScaleDownMobile = useTransform(scrollYProgress2, [0.2, 1], [0.4, 0.6]);
  const handScaleDown = useTransform(scrollYProgress2, [0.2, 1], [1, 0.6]);
  const handYMobile = useTransform(scrollYProgress2, [0.2, 1], [0, -60]);
  const handY = useTransform(scrollYProgress2, [0.2, 1], [-50, -140]);
  const handInvert = useTransform(scrollYProgress, (pos) => {
    return pos >= 0.6 ? 'invert(0)' : 'invert(1)';
  });
  //Second hand
  const handOpacity = useTransform(scrollYProgress2, [0, 1], [0.4, -1]);
  //glas opacity
  const glassOpacity = useTransform(scrollYProgress2, [0.5, 1], [1, 0]);
  //head animations
  const headXMobile = useTransform(scrollYProgress2, [0, 1], [-300, -300]);
  const headXTablet = useTransform(scrollYProgress2, [0, 1], [-100, -100]);
  const headX = useTransform(scrollYProgress2, [0, 1], [300, 800]);
  const headYTablet = useTransform(scrollYProgress2, [0, 1], [350, 900]);
  const headYTabletHoriz = useTransform(scrollYProgress2, [0, 1], [350, 500]);
  //radekkojtych colour anim
  const radekCol = useTransform(scrollYProgress, (pos) => {
    return pos >= 0.8 ? '#EB4B4B' : '#DDDCD4';
  });
  const kojtychCol = useTransform(scrollYProgress, (pos) => {
    return pos >= 0.8 ? '#222222' : '#EB4B4B';
  });
  //tittle display
  const displayTitle = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? 'none' : 'block';
  });

  //hero title anim
  const [scope, animate] = useAnimate();
  // const [isPresent, safeToRemove] = usePresence();

  const isInView = useInView(inViewRef);

  const heroTittle = useTransform(scrollYProgress, (pos) => {
    if (pos === 1) {
      animate('#title1', { y: [120, 0] }, { type: 'spring', duration: 1, ease: 'easeOut' });
      animate('#title2', { x: [-40, 0] }, { type: 'spring', duration: 1, ease: 'easeOut' });
      animate(
        '#title3',
        { y: [120, 0] },
        { type: 'spring', duration: 1, ease: 'easeOut', delay: 0.1 },
      );
      animate(
        '#title4',
        { y: [120, 0] },
        { type: 'spring', duration: 1, ease: 'easeOut', delay: 0.2 },
      );

      animate(
        '#techIcons',
        { y: [120, 0] },
        { type: 'spring', duration: 1, ease: 'easeOut', delay: stagger(0.05) },
      );
    }
  });

  const techLogos = [
    { logo: logoReact, alt: 'React' },
    { logo: logoNext, alt: 'Next' },
    { logo: logoTailwind, alt: 'Tailwind' },
    { logo: logoAstro, alt: 'Astro' },
    { logo: logoTs, alt: 'TypeScript' },
    { logo: logoSass, alt: 'Sass' },
  ];

  //animating hero section out:
  const heroOut = useTransform(scrollYProgress4, (pos) => {
    return pos === 1 ? 'absolute' : 'fixed';
  });

  const heroTextUp = useTransform(scrollYProgress3, [0.2, 1], [0, -1000]);
  const heroRadekUp = useTransform(scrollYProgress3, [0.5, 1], [0, -250]);
  const heroRadekUpMobile = useTransform(scrollYProgress3, [0.2, 1], [0, -250]);
  const heroHandImgUp = useTransform(scrollYProgress3, [0.2, 1], [0, -440]);
  const heroHeadImgUp = useTransform(scrollYProgress4, [0.1, 1], [0, -1500]);
  // const heroHeadOpacity = useTransform(scrollYProgress3, [0.9, 1], [1, 0]);

  return (
    <>
      <motion.section
        id='nav-home'
        ref={targetRef}
        className='relative min-h-[100dvh] w-full overflow-hidden bg-clBlack'>
        <motion.div className=' left-0 z-10 w-full' style={{ position: heroOut }}>
          <motion.div style={{ y: heroHandImgUp }}>
            <motion.div
              style={{
                scale: isMobile ? handScaleDownMobile : handScaleDown,
                y: isMobile ? handYMobile : handY,
                filter: handInvert,
                transition: 'all .5s',
              }}
              className='absolute left-[-15rem] top-[-35rem] scale-[.5] opacity-40 sm:left-[-5rem] sm:top-[-10rem] sm:scale-[.9]'>
              <Image
                src={hand}
                height={860}
                alt='Hand'
                placeholder='blur'
                className='h-auto w-full'
              />
            </motion.div>
          </motion.div>
          <motion.div
            style={{ opacity: handOpacity }}
            className=' absolute bottom-[-25rem] right-[-20rem] hidden rotate-180 scale-[.7] opacity-40 mix-blend-screen invert lg:block 2xl:right-[0rem]'>
            <Image
              src={hand}
              height={860}
              alt='Hand'
              placeholder='blur'
              className='h-auto w-full'
            />
          </motion.div>
          <div className='container relative z-10 mx-auto flex h-[100dvh] flex-col p-10 '>
            <motion.h2
              style={{
                color: radekCol,
                transition: 'color 1s',
                y: isMobile || isTablet ? heroRadekUpMobile : heroRadekUp,
              }}
              className=' mx-auto text-[3rem] font-black text-secondary'>
              radek
              <motion.span
                style={{ color: kojtychCol, transition: 'color 1s' }}
                className='font-thin text-primary'>
                kojtych.
              </motion.span>
            </motion.h2>
            <div className=' relative 2xl:translate-y-[-5rem]'>
              <motion.div
                style={{ opacity: glassOpacity }}
                className=' z-5 absolute left-[50%] top-5 h-[86rem] max-h-[87rem] w-full max-w-[137rem] -translate-x-1/2 rounded-[9rem] border border-clWhite/20  bg-gradient-to-br from-[#ffffff07] to-transparent backdrop-blur-md sm:top-[8rem]'></motion.div>
              <div className='realtive mx-auto mt-24 h-full max-h-[87rem] w-full max-w-[170rem]'>
                <motion.div className='relative' style={{ y: heroHeadImgUp }}>
                  <motion.div
                    style={{
                      left: isMobile
                        ? headXMobile
                        : isTablet
                        ? headXTablet
                        : isTabletHoriz
                        ? headYTabletHoriz
                        : headX,
                      filter: handInvert,
                      transition: 'filter .6s',
                      top: isMobile ? '' : isTablet ? headYTablet : '',
                    }}
                    className='absolute top-[51rem] -translate-y-1/2 translate-x-[20rem] scale-[.4] opacity-30 mix-blend-screen  sm:top-[35rem] sm:scale-[.6] lg:top-[40rem] xl:top-[50rem] xl:scale-[.8]'>
                    <Image src={head} width={570} alt='Head' placeholder='blur' />
                  </motion.div>
                </motion.div>

                <motion.div
                  ref={inViewRef}
                  style={{ opacity: glassOpacity, display: displayTitle }}
                  className='absolute left-[1.5rem] top-[10rem] scale-[.6] sm:left-[4rem] sm:top-[60rem] sm:scale-[1] md:left-[10rem] lg:top-[40rem]'>
                  <div className='relative 2xl:scale-[.85]'>
                    <h1 className='absolute text-[8rem] font-bold text-primary'>#CREATIVE</h1>
                    <h1 className='absolute left-40 top-10 text-[21.5rem] font-bold text-secondary'>
                      DEV.
                    </h1>
                    <h1 className='absolute -top-4 text-[21.5rem] font-bold text-secondary'>_</h1>
                  </div>
                </motion.div>

                {/* Hero text */}
                <motion.div style={{ y: heroTextUp }}>
                  <motion.div
                    style={{
                      opacity: isInView ? '0' : '1',
                      transition: 'opacity .3s',
                    }}
                    className='translate-y-[40%] md:translate-y-[70%] lg:translate-y-[90%] 2xl:scale-[.8]'
                    ref={scope}>
                    <div className='overflow-hidden text-center'>
                      <h1
                        id='title1'
                        className='translate-y-[12rem] text-[3.5rem] font-extralight text-clBlack sm:text-[8rem] md:text-[10rem]'>
                        designing / building
                      </h1>
                    </div>
                    <div className='flex justify-center gap-5 md:-mt-5 '>
                      <div>
                        <h1
                          id='title2'
                          className='text-[2.3rem] font-bold text-primary sm:text-[5rem] md:text-[6rem]'>
                          exceptional
                        </h1>
                      </div>
                      <div className='overflow-hidden'>
                        <h1
                          id='title3'
                          className='translate-y-[12rem] text-[2.3rem] font-extralight text-clBlack sm:text-[5rem] md:text-[6rem]'>
                          digital experience
                        </h1>
                      </div>
                    </div>
                    <div className='overflow-hidden text-center md:-mt-5'>
                      <h1
                        id='title4'
                        className='translate-y-[12rem] text-[3rem] font-extralight text-clBlack sm:text-[5rem] md:text-[6rem]'>
                        for <span className='font-bold'>web</span> and{' '}
                        <span className='font-bold'>mobile.</span>
                      </h1>
                    </div>
                    {/* Logos */}
                    <div className='flex items-center justify-center gap-8 overflow-hidden '>
                      {techLogos.map((logo) => (
                        <div id='techIcons' className='mt-24 translate-y-[12rem] ' key={logo.alt}>
                          <Image src={logo.logo} width={45} alt={logo.alt} className='h-auto' />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
      <motion.section ref={targetRef2} className='h-[100dvh] bg-secondary'></motion.section>
      <div className='relative h-screen bg-secondary' ref={targetRef3}>
        <div className='h-screen' ref={targetRef4}></div>
      </div>
    </>
  );
}
