'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimate, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';

//Tech logos
import {
  logoReact,
  logoNext,
  logoJs,
  logoFramer,
  logoTailwind,
  logoAstro,
  logoTs,
  logoSass,
  logoCloud,
  enlarge,
} from '@/public/assets/index';

export default function ProjectCard({ delayTime, onClick, title, stack, avatar, work }) {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  const [scope, animate] = useAnimate();

  const hoverStart = async () => {
    animate(
      scope.current,
      { y: -8, filter: 'saturate(1)', boxShadow: '0 35px 40px -15px rgba(0,0,0,0.15)' },
      { duration: 0.4 },
    );
    animate('#avatar', { scale: 0.95, opacity: 1 }, { duration: 0.4 });
  };
  const hoverEnd = async () => {
    animate(
      scope.current,
      {
        y: 0,
        filter: 'saturate(.1)',
        boxShadow: '0 35px 40px -5px rgba(0,0,0,0.05)',
      },
      { duration: 0.4 },
    );
    animate('#avatar', { scale: 1.05, opacity: 0.8 }, { duration: 0.4 });
  };

  const stackLogos = {
    logoReact,
    logoNext,
    logoJs,
    logoFramer,
    logoTailwind,
    logoAstro,
    logoTs,
    logoSass,
    logoCloud,
    enlarge,
  };

  return (
    <motion.div
      onClick={onClick}
      ref={inViewRef}
      variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
      initial='hidden'
      animate={mainControls}
      transition={{ duration: 0.7, delay: delayTime, ease: 'easeOut' }}>
      <motion.div
        ref={scope}
        onHoverStart={hoverStart}
        onHoverEnd={hoverEnd}
        style={{
          boxShadow: '0 35px 40px -5px rgba(0,0,0,0.05)',
          opacity: 0.8,
          filter: 'saturate(.1)',
        }}
        className='mt-[4rem] h-[50rem] max-w-[32.5rem] cursor-pointer rounded-[6rem] border border-clWhite p-8 sm:max-w-[35.5rem] mobile:h-[46rem]'>
        <div className='overflow-hidden  rounded-[4rem]'>
          <Image
            style={{ scale: 1.05 }}
            id='avatar'
            src={avatar}
            width={610}
            height={610}
            quality={100}
            alt='Projeckt1.0 avatar'
            className='mx-auto h-auto w-full rounded-[4rem]'
          />
        </div>
        <div className='mt-4 pl-8'>
          <h3 className='text-[2.8rem] font-bold'>{title}</h3>
          <p className='text-[1.7rem]'>{work}</p>
          <div className='flex justify-between'>
            <div className='flex gap-4 pt-12'>
              {stack.map((tech, i) => {
                const LogoImage = stackLogos[tech];
                if (!stackLogos) {
                  return null;
                }
                return (
                  <div className=' w-ful flex max-w-[3rem]' key={i}>
                    <Image src={LogoImage} alt='tech logo' className='h-auto w-full' />
                  </div>
                );
              })}
            </div>
            <div className='max-w-[2rem] self-end pb-4 pr-8'>
              <Image src={enlarge} alt='tech logo' className=' h-auto w-full' />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
