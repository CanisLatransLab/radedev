'use client';

import hand from '@/public/assets/hand.png';
import head from '@/public/assets/head.png';
import Image from 'next/image';
import Lottie from 'lottie-react';
import maintenance from '@/public/assets/maintenance.json';

import { motion } from 'framer-motion';

function Mobile() {
  return (
    <div className='relative flex h-[100vh] w-full flex-col gap-16 overflow-hidden bg-clBlack text-clWhite'>
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
        className='absolute -left-8 -top-20 max-w-[15rem] opacity-50 mix-blend-screen invert'>
        <Image src={hand} alt='hand' className='bg-blend-screen' />
      </motion.div>
      <motion.div
        initial={{ bottom: '-200' }}
        animate={{ bottom: -20 }}
        transition={{ type: 'spring', delay: 0.3 }}
        className='absolute -bottom-20 -right-8 max-w-[15rem] rotate-180 opacity-50 mix-blend-screen  invert'>
        <Image src={hand} alt='hand' className='bg-blend-screen' />
      </motion.div>
      <motion.h2
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        className=' mx-auto mt-5 text-[2.5rem] font-black text-secondary'>
        radek
        <span className='font-thin text-primary'>kojtych.</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className=' mx-auto grid h-screen place-content-center'>
        <div className='relative -translate-y-[13rem]'>
          <div className='max-w-[15rem] opacity-50 mix-blend-screen invert'>
            <Image src={head} alt='head' className='bg-blend-screen' />
          </div>
          <div className=' absolute -left-10 top-[13rem]'>
            <div className='relative h-[17rem] w-[19rem]'>
              <h1 className='absolute top-8 text-[3rem] font-bold text-secondary'>#CREATIVE</h1>
              <h1 className='absolute left-14 top-10 text-[9rem] font-bold text-primary'>DEV.</h1>
              <h1 className='absolute top-4 text-[9rem] font-bold text-primary'>_</h1>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: '200%', x: '-50%', left: '50%', top: '50%' }}
        animate={{
          y: '-50%',
          x: '-50%',
          left: '50%',
          top: '50%',
          transition: { type: 'spring', bounce: 0.2, duration: 1, delay: 2.5 },
        }}
        className=' absolute left-1/2 top-1/2 grid h-[50rem]  w-[30rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[4rem] border  border-clWhite/30 bg-gradient-to-br from-clWhite/5 to-transparent p-5 backdrop-blur-md'>
        <div className='absolute top-8 h-[3px] w-[15rem] rounded-3xl bg-clWhite/10' />
        <div className='-translate-y-10'>
          <div className='mx-auto max-w-[15rem] '>
            <Lottie animationData={maintenance} />
          </div>
          <p className='pb-10 text-center text-3xl'>Hey!</p>
          <p className='pb-5 text-center text-3xl'>
            I'm currently working on some new, cool features for this mobile website to provide an
            even better experience.
          </p>
          <p className='pb-10 text-center text-3xl'>
            In the meantime please visit this website on a desktop device.
          </p>
          <p className='text-center text-3xl'>Thank you!</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Mobile;
