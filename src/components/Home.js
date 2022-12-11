import React from 'react';
import About from './About';
import BackTopBtn from './BackTopBtn';
import Contact from './Contact';
import Hero from './Hero';
import Portfolio from './Portfolio';

const Home = () => {
    return (
        <div className='bg-white relative'>

            <Hero />
            <About />
            <Portfolio />
            {/* <Services />
            <Testimonials /> */}
            <Contact />
            <BackTopBtn />
        </div>
    );
};

export default Home;