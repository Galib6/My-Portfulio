import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

// import woman image
import mypic from '../assets/img/photo_2022-12-08_18-28-37.png';
import Socials from './Socials';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[90vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start' data-aos="fade-up" data-aos-duration="2000">
            <p className='text-2xl text-accent text-md mb-[22px]'>
              Hey, I'm Md. Asadullah Al Galib
            </p>
            {/* <h1 className='text-4xl leading-[20px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Forntend <br />Web Developer
            </h1> */}
            <h2 className='text-3xl leading-[20px] md:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              a
              <span className='text-accent'>
                <Typewriter words={[" Professional Coder.", " Frontend Web Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>
            <p className='pt-4 pb-8 md:pt-6 md:pb-6 max-w-[480px] text-lg text-center lg:text-left'>
              1 year + experience in web development.
            </p>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-md
             transition-all rounded-lg'>
              <a href="https://drive.google.com/file/d/1Cni5nJPZApDFeNsYMfuFHSTjUe6_bYXO/view?usp=share_link">My Resume</a>
            </button>
            <div className='hidden lg:block mt-10'>
              <Socials />
            </div>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full '>
            <img className='h-[80vh]' src={mypic} alt='' />
          </div>
          {/* Socials */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
