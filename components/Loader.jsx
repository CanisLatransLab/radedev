import Lottie from 'lottie-react';
import loader from '@/public/assets/loader.json';

function Loader() {
  return (
    <div className='grid h-screen w-full place-content-center'>
      <div className='mx-auto max-w-[20rem] '>
        <Lottie animationData={loader} />
      </div>
    </div>
  );
}

export default Loader;
