import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import React from 'react'


const Main: React.FC = () => {
    return (
        <div className='lg:mx-32 md:mx-4 '>
            <Intro />
            <About />
            <Projects />
            <Contact />
            <Footer/>
        </div>
    )
}

export default Main;