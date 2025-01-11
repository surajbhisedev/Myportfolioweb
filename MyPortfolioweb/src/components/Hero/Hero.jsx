import React, { useState } from 'react';
import Sidebar from '../Sidebardir/Sidebar'; // Ensure Sidebar is correctly imported
import Intro from '../Intro/Intro'; // Import the Intro component
import './hero.css'; // Include the Hero-specific styles
import Resume from '../../pages/Resume/Resume';
import Service from '../../pages/Services/Service';
import Contact from '../../pages/Contact/Contact';
import About from '../../pages/About/About'
import Footer from '../Footer/Footer';
import './hero-responsive.css'
const Hero = () => {
  const [activeSection, setActiveSection] = useState('home'); // Track active section

  return (
    <div className="Hero-container">
      <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      <div className="content-container">
        <div className='right-section'>
          <div className='hero-intro'>
            <Intro setActiveSection={setActiveSection} />
          </div>
          <div>
            <About setActiveSection={setActiveSection} />
          </div>
          <div className='hero-resume'>
            <Resume setActiveSection={setActiveSection} />
          </div>
          <div className='hero-sevices'>
            <Service setActiveSection={setActiveSection} />
          </div>
          <div className='hero-contact'>
            <Contact />
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
