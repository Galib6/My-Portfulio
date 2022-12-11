import React from 'react';
import Skills from './Skills';

// import img

const About = () => {
  return (
    <section className='section bg-secondary' id='about' >
      <div className='container mx-auto grid grid-cols-2' data-aos="fade-up" data-aos-duration="2000">
        <div className='flex flex-col xl:flex-row gap-24'>
          <div className=' '>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 '>
                Md. Asadullah Al Galib
              </h2>
              <p className='mb-4 text-accent'>
                Frontend Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                I am a web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong under-standing of web standards and best practices <br />
                <br />
                and I am passionate about creating websites that users will find easy to use and visually appealing.
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
        <Skills></Skills>
      </div>
    </section>
  );
};

export default About;
