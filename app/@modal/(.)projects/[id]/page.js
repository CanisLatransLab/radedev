import ProjDetails from '@/components/Portfolio/ProjDetails';

import { folioData } from '../../../../constant/index';

import Modal from '@/components/Modal';

export default function projectDetails({ params }) {
  const id = params.id;

  const project = folioData.find((item) => item.id.toString() === id);

  return (
    <Modal>
      <div className='projectContainer h-[95dvh] mobile:w-[95%] mobile:rounded-3xl'>
        <main className=' flex flex-col items-center justify-center'>
          <ProjDetails project={project} />

          <p className='text-4xl font-thin md:mb-16 mobile:mx-auto mobile:mb-12 mobile:text-3xl'>
            designed & built by <span className='font-bold text-primary'>radek</span>
            <span className='font-bold text-clBlack'>kojtych</span>
          </p>
        </main>
      </div>
    </Modal>
  );
}
