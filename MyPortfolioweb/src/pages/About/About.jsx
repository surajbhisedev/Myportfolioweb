import React from 'react';
import './About.css';
import { IoIosArrowForward } from "react-icons/io";
import Skills from './Skills';

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className='a1'>
        <p>About</p>
      </div>
      <div className='hr'>
        <hr />
      </div>
      <div className='introduction'>
        <p>
          Welcome! I’m Suraj Bhise, a Full-Stack Web Developer with a strong foundation in modern web technologies and security practices. I have a knack for building dynamic, responsive, and secure websites using JavaScript, React, HTML, and CSS.
        </p>
      </div>
      <div className='information'>
        <div>
          <img src="Profile.jpeg" alt="" />
        </div>

        <div className='data'>
          <div className='heading-1'>
            <p>FullStack Web Developer.</p>
          </div>
          <div>
            <div>
              <p className='para-1'>Beyond development, I specialize in web penetration testing, ensuring the applications I create are not only functional but also resilient against vulnerabilities. My work reflects a perfect blend of creativity, technical expertise, and a passion for innovation.</p>
              <div className='contact-info'>
                <div>
                  <ul className='list'>
                    <li>Suraj Bhise</li>
                  </ul>
                </div>
                <div className='inf-1'>
                  <div className='inf'>
                    <div className='inf-2'>
                      <div className='site-info'>
                        <div><IoIosArrowForward /></div>
                        <div>
                          <div>
                            <span>Website</span>:<span>demo.com</span>
                          </div>
                        </div>
                      </div>
                      <div className='site-info'>
                        <div><IoIosArrowForward /></div>
                        <div>
                          <div>
                            <span>Phone</span>:<span>+91000000000</span>
                          </div>
                        </div>
                      </div>
                      <div className='site-info'>
                        <div><IoIosArrowForward /></div>
                        <div>
                          <div>
                            <span>City</span>:<span>Parbhani</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='inf-2'>
                      <div className='site-info'>
                        <div><IoIosArrowForward /></div>
                        <div>
                          <div>
                            <span>Degree</span>:<span>BCA,BCS</span>
                          </div>
                        </div>
                      </div>
                      <div className='site-info'>
                        <div><IoIosArrowForward /></div>
                        <div>
                          <div>
                            <span>Email</span>:<span>Sbhise906@gmail.com</span>
                          </div>
                        </div>
                      </div>
                      <div className='site-info'>
                        <div><IoIosArrowForward /></div>
                        <div>
                          <div>
                            <span>Freelance</span>:<span>Available</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default About;
