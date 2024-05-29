'use client';

import { motion, useScroll, useTransform, useAnimate } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';
import Image from 'next/image';

import heart from '@/public/assets/heart.png';
import bones from '@/public/assets/bones.png';
import brain from '@/public/assets/brain2.png';

import { useRef } from 'react';
import ProjectCard from './ProjectCard';

import { folioData } from '../../constant/index';
import Link from 'next/link';

export default function Portfolio() {
  //Breakpoints
  const isMobile = useMediaQuery('(max-width: 640px)');
  // const isTablet = useMediaQuery('(max-width: 1024px)');
  // const isTabletHoriz = useMediaQuery('(max-width: 1400px)');
  //Refs
  const targetRef = useRef(null);
  const refSecond = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start start'],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: refSecond,
    offset: ['start end', 'end start'],
  });

  // Heart animation:
  const heartY = useTransform(scrollYProgress, [0, 1], [-150, -550]);
  const heartYMobile = useTransform(scrollYProgress, [0, 1], [100, -550]);
  const glassY = useTransform(scrollYProgress, [0, 1], [-150, -1500]);
  const glassYmobile = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const bonesY = useTransform(scrollYProgress, [0, 0.5, 1], [400, -100, 0]);

  const whoAmIY = useTransform(scrollYProgress2, [0, 1], [700, -700]);
  const whoAmIyMobile = useTransform(scrollYProgress2, [0, 1], [-200, -200]);
  const brainYmobile = useTransform(scrollYProgress3, [0, 1], [400, -600]);

  const toggleModal = () => {
    if (!modalRef.current) {
      return;
    }

    modalRef.current.hasAttribute('open') ? modalRef.current.close() : modalRef.current.showModal();
  };

  return (
    <section className='relative h-screen bg-secondary' ref={targetRef}>
      <motion.div
        className='absolute top-[-50rem] ml-[10rem] opacity-[.3] mobile:max-w-[20rem]'
        style={{ y: isMobile ? heartYMobile : heartY }}>
        <Image src={heart} width={350} alt='heart' placeholder='blur' />
      </motion.div>
      <div ref={refSecond}>
        <motion.div
          className='absolute right-0 opacity-30 mobile:hidden'
          style={{ x: 40, y: isMobile ? 1750 : bonesY, scale: isMobile ? 0.8 : '' }}>
          <Image src={bones} width={600} alt='bones' placeholder='blur' />
        </motion.div>

        <motion.div
          className=' bg-white-1/2 relative z-50 max-h-[380rem] rounded-[9rem] border border-clWhite pb-[4rem] backdrop-blur-md md:mx-[10%] mobile:w-full'
          style={{ y: isMobile ? glassYmobile : glassY }}>
          <div
            className='mt-10 flex justify-center md:mr-[15rem] md:justify-end'
            id='nav-portfolio'>
            <h2 className='text-[3.5rem] font-extralight text-clBlack sm:text-[5rem] md:text-[4.5rem]'>
              recent work I've <span className='font-bold text-primary'>delivered.</span>
            </h2>
          </div>

          <div className='mx-auto flex max-w-[130rem] flex-wrap justify-center gap-20'>
            {folioData.map((folio, i) => {
              return (
                <Link href={`/projects/${folio.id}`} key={folio.id} scroll={false}>
                  <ProjectCard
                    title={folio.title}
                    stack={folio.stack}
                    avatar={folio.avatar}
                    work={folio.work}
                    delayTime={0.3 + i * 0.1}
                  />
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
      {/*  // Who am I Section: */}
      <div className='relative flex translate-y-[-60rem] justify-center mobile:translate-y-[-100rem] mobile:flex-col'>
        <motion.div
          className='max-sm:absolute max-sm:top-[-30rem] opacity-[.2]'
          style={{ y: isMobile ? brainYmobile : '', scale: isMobile ? 0.7 : '' }}>
          <Image src={brain} width={450} alt='brain' quality={100} />
        </motion.div>
        <motion.div style={{ y: whoAmIY }}>
          <h2 className='max-md:text-center text-[5rem] font-extralight text-clBlack sm:text-[5rem] md:text-[6rem] mobile:mx-auto mobile:text-center'>
            who <span className='font-bold text-primary'>am I.</span>
          </h2>
          <p
            className='max-md:mx-auto max-md:max-w-[35rem]  mt-8 max-w-[95rem] text-2xl font-thin md:text-[2.5rem] md:leading-[3.5rem] mobile:mx-auto mobile:w-[30rem] mobile:text-center'
            id='nav-about'>
            From the lens to lines of code, Radek&apos;s journey is a testament to passion and
            adaptability. Initially self-taught, he discovered a deep love for programming that
            evolved from a hobby into a full-blown profession. With a rich 15-year background in
            professional photography, videography, and animation, his transition into the tech realm
            was both bold and seamless. Today, after four impactful years as a front-end developer
            with significant back-end expertise, he&apos;s venturing into the world of mobile
            development. Drawing from his years behind the camera, Radek possesses an acute design
            sensibility, paying attention to UI designs and animations to elevate user experience.{' '}
          </p>

          <p className='max-md:mx-auto max-md:max-w-[35rem]  mt-8 max-w-[95rem] text-2xl font-thin md:text-[2.5rem] md:leading-[3.5rem] mobile:mx-auto mobile:w-[30rem] mobile:text-center'>
            While he primarily specialises in React, he remains ever-curious, always exploring new
            technologies. Over the years, he&apos;s had the privilege of working with clients like
            Monster Energy, Red Bull, Adidas, Nestle, and more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Path: app/components/Portfolio.jsx
