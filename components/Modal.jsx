'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Modal({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [pathname]);

  if (pathname === '/') return null;

  return (
    <AnimatePresence mode='wait'>
      {pathname !== '/' && (
        <>
          <Link href='/' scroll={false}>
            <motion.div
              key='modal-backdrop'
              className='modal'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}>
              <motion.div
                key='modal-content'
                initial={{ y: '200dvh' }}
                animate={{
                  y: '50dvh',
                  transition: { duration: 0.4, delay: 0.2, ease: [0.36, 0.66, 0.04, 1] },
                }}
                exit={{
                  y: '200dvh',
                  transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
                }}>
                {children}
              </motion.div>
            </motion.div>
          </Link>
        </>
      )}
    </AnimatePresence>
  );
}
