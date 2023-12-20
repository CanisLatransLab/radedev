'use client';
import { forwardRef } from 'react';

const PortfolioModal = forwardRef(({ closeModal, children }, ref) => {
  return (
    <dialog
      className='pointer-events-none inset-0 mt-[5rem] block h-full w-full max-w-[95vw] translate-y-56 rounded-[4rem]  bg-secondary p-[5rem] opacity-0 backdrop:bg-[rgba(0,0,0,0.5)]  backdrop:backdrop-blur-sm focus:outline-none [&:not([open])]:pointer-events-none [&[open]]:translate-y-0 [&[open]]:opacity-100'
      ref={ref}
      onClick={(e) => {
        if (e.target === ref.current) {
          closeModal();
        }
      }}>
      {children}
    </dialog>
  );
});

export default PortfolioModal;
