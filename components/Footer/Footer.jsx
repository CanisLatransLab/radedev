'use client';

import Image from 'next/image';
import palm from '@/public/assets/palm.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { socials } from '../../constant/index';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import emailjs, { send } from '@emailjs/browser';
import toast from 'react-hot-toast';

function Footer() {
  const isMobile = useMediaQuery('(max-width: 640px)');

  // Mobile form logic:
  const formRef = useRef(null);
  const [btnProgress, setBtnProgress] = useState();

  const sendEmail = () => {
    emailjs
      .sendForm('service_ub3tkfa', 'template_0kcenp3', formRef.current, 'yiT9dxSafkMex6BhB')
      .then(
        (result) => {
          toast.success(`Message sent! I'll get back to you soon 😉`, {
            style: {
              background: '#222222',
              color: '#EFEFEF',
              width: '50rem',
              borderRadius: '10px',
              fontSize: '1.8rem',
            },
            duration: 8000,
          });
          formik.resetForm(); // Reset form using Formik
        },
        (error) => {
          toast.error(`Email not sent! 😞`, {
            style: {
              background: '#222222',
              color: '#EFEFEF',
              width: '50rem',
              heith: '8rem',
              borderRadius: '10px',
              fontSize: '1.8rem',
            },
            duration: 8000,
          });
        },
      );
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      typeOfProject: '',
      budget: '',
      idea: '',
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required('+  name is required'),
      email: Yup.string().email('+  invalid email address').required('+  email is required'),
      idea: Yup.string().required('+ message is required'),
    }),

    onSubmit: () => {
      // setfullData(values);
      setBtnProgress('sending ...');

      sendEmail();

      setTimeout(() => {
        setBtnProgress('submit');
      }, 1000);
    },
  });

  //Animations:
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start start'],
  });

  const palmY = useTransform(scrollYProgress, [-5, 1], [1500, 100]);

  const socialIcons = ['iconGithub', 'iconInstagram', 'iconLinkedin', 'iconBehance'];

  return (
    <footer
      className='relative mt-[-25%] flex h-[84.5rem] w-full mobile:mt-0  mobile:h-[265rem] fullHd:h-[88rem]'
      ref={targetRef}>
      <div className='relative flex w-full max-w-[130rem]  justify-center'>
        <form
          ref={formRef}
          onSubmit={formik.handleSubmit}
          className='absolute bottom-[30rem] z-[40] flex flex-col  sm:hidden'>
          <div className='flex gap-10 mobile:flex-col'>
            <input
              className={`focus:border-tlo focus:text-tlo focus:ring-tlo h-[4.8rem] w-[25rem] rounded-[1.7rem] border-[2px] border-clBlack bg-secondary  px-[2rem] text-[1.6rem]  transition-all duration-200 placeholder:text-[1.6rem] placeholder:font-thin placeholder:text-clGrey focus:h-[5.2rem] focus:bg-clBlack focus:text-clGrey focus:outline-none mobile:w-full ${
                formik.touched.fullName &&
                formik.errors.fullName &&
                'border-[#EB4B4B] placeholder:text-[#EB4B4B]'
              }`}
              name='fullName'
              type='text'
              placeholder={
                formik.touched.fullName && formik.errors.fullName
                  ? formik.errors.fullName
                  : '+  full name'
              }
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            <input
              className={`focus:border-tlo focus:text-tlo focus:ring-tlo h-[4.8rem] w-[41rem] rounded-[1.7rem] border-[2px] border-clBlack bg-secondary px-[2rem]  text-[1.6rem] transition-all  duration-200 placeholder:text-[1.6rem] placeholder:font-thin placeholder:text-clGrey focus:h-[5.2rem] focus:bg-clBlack focus:text-clGrey focus:outline-none mobile:w-full ${
                formik.touched.email &&
                formik.errors.email &&
                'border-[#EB4B4B] placeholder:text-[#EB4B4B]'
              }`}
              name='email'
              type='email'
              placeholder={
                formik.touched.email && formik.errors.email ? formik.errors.email : '+  your email'
              }
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
          </div>

          <div className='mt-8 flex gap-10 mobile:flex-col'>
            <input
              className='focus:border-tlo focus:text-tlo focus:ring-tlo h-[4.8rem] w-[33rem] rounded-[1.7rem] border-[2px] border-clBlack bg-secondary  px-[2rem] text-[1.6rem]  transition-all duration-200 placeholder:text-[1.6rem] placeholder:font-thin placeholder:text-clGrey focus:h-[5.2rem]  focus:bg-clBlack focus:text-clGrey focus:outline-none mobile:w-full'
              name='typeOfProject'
              type='text'
              value={formik.values.typeOfProject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={'+  type of project'}
            />
            <input
              className='focus:border-tlo focus:text-tlo focus:ring-tlo h-[4.8rem] w-[33rem] rounded-[1.7rem] border-[2px] border-clBlack bg-secondary  px-[2rem] text-[1.6rem]  transition-all duration-200 placeholder:text-[1.6rem] placeholder:font-thin placeholder:text-clGrey focus:h-[5.2rem]  focus:bg-clBlack focus:text-clGrey focus:outline-none mobile:w-full'
              name='budget'
              type='text'
              value={formik.values.budget}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={'+  budget'}
            />
          </div>

          <div className='mt-8'>
            <textarea
              className={`focus:border-tlo focus:text-tlo focus:ring-tlo rounded-[1.7rem] border-[2px] border-clBlack bg-transparent px-[2rem] pt-8  text-[1.6rem] leading-relaxed  transition-all duration-200 placeholder:text-[1.6rem] placeholder:font-thin placeholder:text-clGrey focus:bg-clBlack focus:pt-8 focus:text-clGrey focus:outline-none sm:w-[69rem] mobile:w-full ${
                formik.touched.idea &&
                formik.errors.idea &&
                'border-[#EB4B4B] placeholder:text-[#EB4B4B]'
              }`}
              placeholder={
                formik.touched.idea && formik.errors.idea
                  ? formik.errors.idea
                  : '+ describe the project idea.'
              }
              name='idea'
              cols='30'
              rows='10'
              value={formik.values.idea}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required></textarea>
          </div>

          <button
            className='p-x-[2.9rem] p-y-[1.1rem] text-tlo hover:bg-tlo mt-8 h-[5.5rem] w-[23rem] rounded-full border-none bg-clBlack text-[1.8rem]  font-light text-secondary transition-all duration-[.6s] hover:w-[28rem] hover:border-clBlack hover:font-medium hover:text-secondary focus:outline-none sm:self-end mobile:w-full'
            type='submit'>
            {btnProgress ? btnProgress : 'submit'}
          </button>
        </form>

        <motion.div
          className=' absolute bottom-0 left-[50%] -z-10 -translate-x-1/2 justify-center opacity-[0.3] mobile:z-[-5]'
          style={{ y: isMobile ? 2278 : palmY }}>
          <Image src={palm} width={790} alt='Anatomy hand' />
        </motion.div>
        <div className='relative ml-[15rem] mobile:ml-[3rem]'>
          <div className='absolute  bottom-[-10rem] flex w-[4rem] flex-col gap-8 overflow-hidden'>
            {socials.map((social) => {
              return (
                <div className='  mobile:max-w-[3rem]' key={social.id}>
                  <a
                    href={social.href}
                    className='cursor-pointer'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image
                      src={social.icon}
                      width={80}
                      height={80}
                      alt={social.alt}
                      className='h-auto w-full'
                    />
                  </a>
                </div>
              );
            })}
            <div className='mx-auto h-[20rem] w-[2px] bg-clBlack mobile:h-[7rem]'></div>
          </div>
        </div>

        <p className='ml-auto mr-[15rem] translate-x-[50rem] translate-y-[10rem] self-end justify-self-end text-4xl  font-thin md:mb-16 mobile:mx-auto mobile:translate-y-5 mobile:text-3xl'>
          designed & built by <span className='font-bold text-primary'>radek</span>
          <span className='font-bold text-clBlack'>kojtych</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
