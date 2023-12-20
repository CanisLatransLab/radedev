import ProjDetails from '@/components/Portfolio/ProjDetails';
import Image from 'next/image';
import Link from 'next/link';

import { folioData } from '../../../constant/index';
import back from '../../../public/assets/icon-back.svg';

export default function projectDetails({ params }) {
  const id = params.id;

  const project = folioData.find((item) => item.id.toString() === id);

  return (
    <main className='flex flex-col items-center justify-center p-12'>
      <Link href='/' className='flex cursor-pointer gap-6 self-start px-24 mobile:p-12'>
        <Image src={back} width={30} height={30} alt='go back' />
        <p className='text-[1.8rem] font-thin underline underline-offset-4 sm:text-[2rem]'>
          Go <strong className='font-bold'>back.</strong>
        </p>
      </Link>

      <ProjDetails project={project} />

      <Link href='/' className='flex cursor-pointer gap-6 self-start p-24 mobile:p-12'>
        <Image src={back} width={30} height={30} alt='go back' />
        <p className='text-[1.8rem] underline underline-offset-4 sm:text-[2rem]'>
          Go <strong className='font-bold'>back.</strong>
        </p>
      </Link>

      <p className='text-4xl font-thin md:mb-16 mobile:mx-auto mobile:mb-12 mobile:text-3xl'>
        designed & built by <span className='font-bold text-primary'>radek</span>
        <span className='font-bold text-clBlack'>kojtych</span>
      </p>
    </main>
  );
}
