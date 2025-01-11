import React, { useState, useEffect } from 'react';
import { FaHome } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { IoImagesOutline } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiDropdownList } from "react-icons/ri";
import { RiContactsBook2Fill } from "react-icons/ri";
import './sidebar.css';
import './Responsive.css';

const Sidebar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [sidebarSlide, setSidebarSlide] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track sidebar visibility
    const [activeLink, setActiveLink] = useState(''); // Track the active link

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        setSidebarSlide(!sidebarSlide);
    };

    // Close sidebar when clicking a link (for mobile)
    const handleLinkClick = () => {
        setIsSidebarOpen(false);
    };

    // Intersection Observer for active link based on scroll position
    useEffect(() => {
        const sections = document.querySelectorAll("section"); // Select all sections by a shared tag or class

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id); // Set the active link based on the section ID
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <div>
                <button className='sidebar-toggle-button' onClick={toggleSidebar}>
                    {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
                </button>
                <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    {/* Toggle button for mobile */}
                    <div className={`first-section ${sidebarSlide ? 'slide-out' : ''}`}>
                        <div className='profile'>
                            <img src="Profile.jpeg" alt="Profile" />
                        </div>
                        <div>
                            <p>Suraj Bhise</p>
                        </div>
                        <div className='social-media-logos'>
                            <div className='social-media-logos-container'>
                                <a href='https://www.facebook.com/share/1FATVHqDVZ/' target="_blank" rel="noopener noreferrer">
                                    <img src="fb.png" alt="Facebook" />
                                </a>
                            </div>
                            <div className='social-media-logos-container'>
                                <a href='https://www.instagram.com/surajbhise.dev?igsh=MWRkeGg3MDhlc2Ntbw==' target="_blank" rel="noopener noreferrer">
                                    <img src="ig.jpg" alt="Instagram" />
                                </a>
                            </div>
                            <div className='social-media-logos-container'>
                                <a href='https://www.linkedin.com/in/suraj-bhise-781310346' target="_blank" rel="noopener noreferrer">
                                    <img src="linkdin.png" alt="LinkedIn" />
                                </a>
                            </div>
                            <div className='social-media-logos-container'>
                                <a href='https://x.com/suraj_bhis71573' target="_blank" rel="noopener noreferrer">
                                    <img src="twitter.jpg" alt="Twitter" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="second-section">
                        {/* Links and Icons */}
                        <div className={`logo-nav ${activeLink === 'home' ? 'active' : ''}`}>
                            <div><FaHome /></div>
                            <div><a href="#home" onClick={handleLinkClick}>Home</a></div>
                        </div>

                        <div className={`logo-nav ${activeLink === 'about' ? 'active' : ''}`}>
                            <div><MdOutlinePersonOutline /></div>
                            <div><a href="#about" onClick={handleLinkClick}>About</a></div>
                        </div>

                        <div className={`logo-nav ${activeLink === 'resume' ? 'active' : ''}`}>
                            <div><FaRegFileAlt /></div>
                            <div><a href="#resume" onClick={handleLinkClick}>Resume</a></div>
                        </div>

                        <div className={`logo-nav ${activeLink === 'portfolio' ? 'active' : ''}`}>
                            <div><IoImagesOutline /></div>
                            <div><a href="#portfolio" onClick={handleLinkClick}>Portfolio</a></div>
                        </div>

                        <div className={`logo-nav ${activeLink === 'service' ? 'active' : ''}`}>
                            <div><MdMiscellaneousServices /></div>
                            <div><a href="#service" onClick={handleLinkClick}>Services</a></div>
                        </div>

                        <div className={`logo-nav ${activeLink === 'contact' ? 'active' : ''}`}>
                            <div><RiContactsBook2Fill /></div>
                            <div><a href="#contact" onClick={handleLinkClick}>Contact</a></div>
                        </div>

                        {/* Dropdown with Toggle Button */}
                        <div className={`logo-nav ${activeLink === 'dropdown' ? 'active' : ''}`}>
                            <div><RiDropdownList /></div>
                            <div className="dropdown-container">
                                <div>Dropdown</div>
                                <button className="dropdown-toggle-button" onClick={toggleDropdown}>
                                    {dropdownVisible ? 'Hide' : 'Show'}
                                </button>
                                {dropdownVisible && (
                                    <div className="dropdown-menu">
                                        <a href="#">Option 1</a>
                                        <a href="#">Option 2</a>
                                        <a href="#">Option 3</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    );
};

export default Sidebar;
