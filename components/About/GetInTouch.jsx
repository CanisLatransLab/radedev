'use client';

import { useFormik } from 'formik';

import * as Yup from 'yup';
import emailjs, { send } from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useRef, useState } from 'react';

export default function GetInTouch() {
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

  return (
    <section className=' mt-[30dvh] flex h-screen w-full flex-col mobile:mt-[30rem] mobile:translate-y-[210rem]'>
      <div>
        <div id='nav-contact'>
          <p className='text-center text-[4rem] font-thin mobile:-translate-y-20'>What's next?</p>
        </div>
        <div>
          <h2 className='mt-[8rem] text-center text-[5rem] font-extralight text-clBlack sm:text-[5rem] md:text-[6rem]'>
            <span className='font-bold text-primary'>Get</span> in Touch.
          </h2>
        </div>
        <div>
          <p className='mx-auto mt-4 max-w-[67rem] text-center text-2xl font-thin md:text-[2.5rem]  md:leading-[3rem] mobile:w-[30rem]'>
            I&apos;m always looking for new opportunities. Whether you have a question or project in
            mind, drop a message and I&apos;ll get beck to you as soon as I can.
          </p>
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={formik.handleSubmit}
        className='relative z-[100] mx-auto mt-[8rem] flex flex-col mobile:hidden'>
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
    </section>
  );
}
