import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import {FaTelegram, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();

    useEffect(() => {
        // Only run scroll spy on the home page
        if (location.pathname !== '/') {
            setActiveSection(location.pathname.substring(1) || 'home');
            return;
        }

        const handleScroll = () => {
            const sections = ['home', 'about', 'resume', 'portfolio', 'services', 'contact'];
            let currentSection = 'home';

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 200) {
                        currentSection = sectionId;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const scrollToSection = (sectionId) => {
        if (sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setActiveSection(sectionId);
    };

    const navItems = [
        { id: 'home', label: 'Home', icon: FaHome },
        { id: 'about', label: 'About', icon: FaUser },
        { id: 'resume', label: 'Resume', icon: FaFileAlt },
        { id: 'portfolio', label: 'Portfolio', icon: FaBriefcase },
        { id: 'services', label: 'Services', icon: FaCogs },
        { id: 'contact', label: 'Contact', icon: FaEnvelope },
    ];

    return (
        <div className="position-fixed top-0 start-0 p-3 m-0 vh-100 w-25 d-flex flex-column justify-content-between align-items-center">
            <nav className="navbar nav-flex-column col-10 align-items-start my-5 ms-4 border border-danger rounded">

                <div className="text-white">
                      
                    <ul className="list-unstyled ps-4">
                        {navItems.map((item) => {
                            const IconComponent = item.icon;
                            const isActive = activeSection === item.id;
                            return (
                                <li key={item.id} className="nav-item mb-5 mt-4">
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className={`nav-link d-flex align-items-center gap-2 ms-2 border-0 bg-transparent cursor-pointer ${
                                            isActive ? 'text-danger fw-bold' : 'text-white'
                                        }`}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <IconComponent size={16} />
                                        {item.label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>  


                <div className="d-flex justify-content-evenly w-100 mb-3 gap-1">
                    <Link to="https://wa.me/2347026578749" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="rounded-circle btn btn-danger p-2 border border-light justify-content-center align-items-center">< FaWhatsapp size={20} color='white' /></button>
                    </Link>

                    <Link to="https://t.me/MideDev" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="rounded-circle btn btn-danger p-2 border border-light justify-content-center align-items-center">< FaTelegram size={20} color='white' /></button>
                    </Link>

                    <Link to="https://www.instagram.com/zeedigitalsolutions/" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="rounded-circle btn btn-danger p-2 border border-light justify-content-center align-items-center">< FaInstagram size={20} color='white' /></button>
                    </Link>

                    <Link to="https://www.linkedin.com/in/salami-aminat-62749b192/" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="rounded-circle btn btn-danger p-2 border border-light justify-content-center align-items-center">< FaLinkedin size={20} color='white' /></button>
                    </Link>

                </div>
                   
            </nav>
              
        </div>
    )
}

export default Navbar