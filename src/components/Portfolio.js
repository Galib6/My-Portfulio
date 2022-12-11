import React from 'react';
import Project from './Project';

// import components
import { projectsData } from '../data';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary ' >
      <div className='container mx-auto' data-aos="fade-up" data-aos-duration="2000">
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title '>
            My latest work
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <section className='grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8'>
          {projectsData.map((item) => {
            return <Project item={item} key={item.id} />;
          })}
        </section>
      </div>
    </section>
  );
};

export default Portfolio;
