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
  enlarge,
} from '@/public/assets/index';

function ProjDetails({ project }) {
  const stackLogos = {
    logoReact,
    logoNext,
    logoJs,
    logoFramer,
    logoTailwind,
    logoAstro,
    logoTs,
    logoSass,
    enlarge,
  };

  return (
    <div className='flex flex-col items-center justify-start'>
      <h1 className='mb-16 pt-16 text-[4rem] mobile:mb-4  mobile:text-[3rem]'>{project.title}</h1>
      <div className='flex gap-6 pb-[4rem]'>
        {project.stack.map((tech, i) => {
          const LogoImage = stackLogos[tech];
          if (!stackLogos) {
            return null;
          }
          return (
            <div className=' w-ful flex max-w-[5rem] mobile:max-w-[4rem]  ' key={i}>
              <Image src={LogoImage} alt='tech logo' className='h-auto w-full' />
            </div>
          );
        })}
      </div>

      <div className='w-full py-8'>
        <Image
          src={project.details?.url01}
          alt={project.details.alt01}
          width={1920}
          height={1080}
        />
      </div>
      <p className='w-full max-w-[80rem] py-24 text-[2rem] font-thin mobile:p-8 mobile:text-[1.8rem]'>
        {project.details.desc}
      </p>

      {project.details.url02 && (
        <div className='w-full py-8 sm:max-w-[80%]'>
          <Image
            src={project.details.url02}
            alt={project.details.alt02}
            width={1920}
            height={1080}
          />
        </div>
      )}

      {project.details.url03 && (
        <div className='w-full py-8 sm:max-w-[80%]'>
          <Image
            src={project.details.url03}
            alt={project.details.alt03}
            width={1920}
            height={1080}
          />
        </div>
      )}

      <div className='mb-[6rem] w-full p-24 sm:w-[80rem] mobile:p-12'>
        <h2 className='text-[3rem] font-thin mobile:text-[2rem]'>
          Client: <strong className='font-bold'>{project.title}</strong>
        </h2>
        <div className='flex gap-6 py-6'>
          {project.stack.map((tech, i) => {
            const LogoImage = stackLogos[tech];
            if (!stackLogos) {
              return null;
            }
            return (
              <div className=' w-ful flex max-w-[5rem] self-center' key={i}>
                <Image src={LogoImage} alt='tech logo' className='h-auto w-full' />
              </div>
            );
          })}
        </div>

        <p className='pt-12 text-[2.5rem] font-thin mobile:text-[1.8rem]'>
          Tech: <strong className='font-bold'>{project.work}</strong>
        </p>

        {project.web && (
          <a
            href={project.web}
            target='_blank'
            rel='noopener noreferrer'
            className='cursor-pointe text-[2.5rem] underline mobile:text-[1.8rem]'>
            <p>Website</p>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjDetails;
