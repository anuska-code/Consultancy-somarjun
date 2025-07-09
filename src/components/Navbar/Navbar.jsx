import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaPhoneAlt, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import {
  FaWhatsapp,
  FaViber,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuTestOpen, setSubMenuTestOpen] = useState(false);
  const [subMenuAbroadOpen, setSubMenuAbroadOpen] = useState(false);
  const [subMenuServicesOpen, setSubMenuServicesOpen] = useState(false);
  const [subMenuCoursesOpen, setSubMenuCoursesOpen] = useState(false);
  const [subMenuAboutOpen, setSubMenuAboutOpen] = useState(false);
  const [subMenuGalleryOpen, setSubMenuGalleryOpen] = useState(false);
  const [subMenuContactOpen, setSubMenuContactOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(false);
    setSubMenuTestOpen(false);
    setSubMenuAbroadOpen(false);
    setSubMenuServicesOpen(false);
    setSubMenuCoursesOpen(false);
    setSubMenuAboutOpen(false);
    setSubMenuGalleryOpen(false);
    setSubMenuContactOpen(false);
  };

  const handleDropdownToggle = (dropdownName) => {
    // Close all dropdowns first
    setSubMenuTestOpen(false);
    setSubMenuAbroadOpen(false);
    setSubMenuServicesOpen(false);
    setSubMenuCoursesOpen(false);
    setSubMenuAboutOpen(false);
    setSubMenuGalleryOpen(false);
    setSubMenuContactOpen(false);

    // Then open the specific dropdown
    switch(dropdownName) {
      case 'test':
        setSubMenuTestOpen(true);
        break;
      case 'abroad':
        setSubMenuAbroadOpen(true);
        break;
      case 'services':
        setSubMenuServicesOpen(true);
        break;
      case 'courses':
        setSubMenuCoursesOpen(true);
        break;
      case 'about':
        setSubMenuAboutOpen(true);
        break;
      case 'contact':
        setSubMenuContactOpen(true);
        break;
      default:
        break;
    }
  };

  

  return (
    <>
      {/* 🔝 TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.topWrapper}>
<div className={styles.topLeft}>
  <div className={styles.contactGroups}>
    <span>
      <FaGlobe />
      <a
        href="mailto:info@thenext.edu.np"
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        info@thenext.edu.np
      </a>
    </span>
  </div>
  <div className={styles.contactGroup}>
    <span>
      <FaPhoneAlt /> +977–01–5970268
    </span>
  </div>
</div>

          <div className={styles.topRight}>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.viber.com" target="_blank" rel="noopener noreferrer"><FaViber /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* ⬇️ NAVIGATION BAR */}
      <div className={styles.navTop}>
        <div className={styles.navWrapper}>
          <div className={styles.logoBox}>
            <Link to="/" className={styles.logoLink} onClick={handleMenuClick}>
              <img src="\images\Squared Logo 1 (1).svg" alt="logo" className={styles.logoImg} />
             
            </Link>
          </div>

          <div className={styles.menuContainer}>
            <ul className={`${styles.menuBox} ${menuOpen ? styles.menuOpen : ''}`}>
              {/* Test Preparation Dropdown */}
              <li className={styles.hasSubmenu}>
                <div
                  className={styles.dropdownToggle}
                  onClick={() => handleDropdownToggle(subMenuTestOpen ? 'close' : 'test')}
                >
                  Test Preparation ▾
                </div>
                {subMenuTestOpen && (
                  <ul className={styles.submenu}>
                    <li><Link to="/test-preparation/ielts" onClick={handleMenuClick}>IELTS</Link></li>
                    <li><Link to="/test-preparation/sat" onClick={handleMenuClick}>SAT</Link></li>
                    <li><Link to="/test-preparation/pte" onClick={handleMenuClick}>PTE</Link></li>
                  </ul>
                )}
              </li>

              {/* Study Abroad Dropdown */}
              <li className={styles.hasSubmenu}>
                <div className={styles.dropdownToggle} onClick={() => handleDropdownToggle(subMenuAbroadOpen ? 'close' : 'abroad')}>
                  Study Abroad ▾
                </div>
                {subMenuAbroadOpen && (
                  <ul className={styles.submenu}>
                    <li><Link to="/study-abroad/australia" onClick={handleMenuClick}>Study in Australia <span className={styles.arrow}>&rsaquo;</span></Link></li>
                    <li><Link to="/study-abroad/new-zealand" onClick={handleMenuClick}>Study in New Zealand <span className={styles.arrow}>&rsaquo;</span></Link></li>
                    <li><Link to="/study-abroad/canada" onClick={handleMenuClick}>Study in Canada <span className={styles.arrow}>&rsaquo;</span></Link></li>
                    <li><Link to="/study-abroad/uk" onClick={handleMenuClick}>Study in UK <span className={styles.arrow}>&rsaquo;</span></Link></li>
                    <li><Link to="/study-abroad/usa" onClick={handleMenuClick}>Study in USA <span className={styles.arrow}>&rsaquo;</span></Link></li>
                    <li><Link to="/study-abroad/ireland" onClick={handleMenuClick}>Ireland <span className={styles.arrow}>&rsaquo;</span></Link></li>
                    <li><Link to="/study-abroad/denmark" onClick={handleMenuClick}>Study in Denmark <span className={styles.arrow}>&rsaquo;</span></Link></li>
                  </ul>
                )}
              </li>

              {/* Services Dropdown */}
              <li className={styles.hasSubmenu}>
                <div className={styles.dropdownToggle} onClick={() => handleDropdownToggle(subMenuServicesOpen ? 'close' : 'services')}>
                  Services ▾
                </div>
                {subMenuServicesOpen && (
                  <ul className={styles.submenu}>
                    <li><Link to="/services/student-screening" onClick={handleMenuClick}>Student Screening</Link></li>
                    <li><Link to="/services/university-application" onClick={handleMenuClick}>University Application Assistance</Link></li>
                    <li><Link to="/services/documentation" onClick={handleMenuClick}>Documentation Guidance</Link></li>
                    <li><Link to="/services/interview-assistance" onClick={handleMenuClick}>Interview Assistance</Link></li>
                    <li><Link to="/services/scholarship" onClick={handleMenuClick}>Scholarship Assistance</Link></li>
                    <li><Link to="/services/visa-declaration" onClick={handleMenuClick}>Student Visa Declaration Form</Link></li>
                    <li><Link to="/services/offer-confirmation" onClick={handleMenuClick}>I-20/Offer Letter Confirmation</Link></li>
                    <li><Link to="/services/counseling" onClick={handleMenuClick}>Counseling</Link></li>
                    <li><Link to="/services/pre-departure" onClick={handleMenuClick}>Pre Departure Briefing</Link></li>
                    <li><Link to="/services/visa-lodgement" onClick={handleMenuClick}>VISA Lodgement</Link></li>
                  </ul>
                )}
              </li>

              {/* Other Links */}
              <li><Link to="/universities" onClick={handleMenuClick}>Universities </Link></li>
              
              {/* Popular Courses Dropdown */}
              <li className={styles.hasSubmenu}>
                <div className={styles.dropdownToggle} onClick={() => handleDropdownToggle(subMenuCoursesOpen ? 'close' : 'courses')}>
                  Popular Courses ▾
                </div>
                {subMenuCoursesOpen && (
                  <ul className={styles.submenu}>
                    <li><Link to="/courses/information-technology-australia" onClick={handleMenuClick}>Study Information Technology (IT) in Australia</Link></li>
                    <li><Link to="/courses/agriculture-australia" onClick={handleMenuClick}>Study Agriculture in Australia</Link></li>
                    <li><Link to="/courses/mba-australia" onClick={handleMenuClick}>Study MBA in Australia</Link></li>
                    <li><Link to="/courses/architecture-australia" onClick={handleMenuClick}>Study Architecture in Australia</Link></li>
                    <li><Link to="/courses/law-australia" onClick={handleMenuClick}>Study Law in Australia</Link></li>
                    <li><Link to="/courses/applied-pure-sciences-australia" onClick={handleMenuClick}>Study Applied and Pure Sciences in Australia</Link></li>
                    <li><Link to="/courses/arts-australia" onClick={handleMenuClick}>Study Arts in Australia</Link></li>
                  </ul>
                )}
              </li>
              
              <li><Link to="/blogs" onClick={handleMenuClick}>Blogs </Link></li>
              
              {/* About Us Dropdown */}
              <li className={styles.hasSubmenu}>
                <div className={styles.dropdownToggle} onClick={() => handleDropdownToggle(subMenuAboutOpen ? 'close' : 'about')}>
                  About Us ▾
                </div>
                {subMenuAboutOpen && (
                  <ul className={styles.submenu}>
                    <li><Link to="/about/introduction" onClick={handleMenuClick}>Introduction</Link></li>
                    <li><Link to="/about/objectives" onClick={handleMenuClick}>Objectives</Link></li>
                    <li className={styles.hasSubmenu}>
                      <div 
                        className={styles.dropdownToggle} 
                        onClick={() => setSubMenuGalleryOpen(!subMenuGalleryOpen)}
                        style={{ cursor: 'pointer' }}
                      >
                        Gallery <span className={styles.arrow}>&rsaquo;</span>
                      </div>
                      {subMenuGalleryOpen && (
                        <ul className={styles.submenu} style={{ marginLeft: '10px' }}>
                          <li><Link to="/about/gallery/albums" onClick={handleMenuClick}>Albums</Link></li>
                          <li><Link to="/about/gallery/video" onClick={handleMenuClick}>Video Gallery</Link></li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
              
              {/* Contact Us Dropdown */}
              <li className={styles.hasSubmenu}>
                <div className={styles.dropdownToggle} onClick={() => handleDropdownToggle(subMenuContactOpen ? 'close' : 'contact')}>
                  Contact Us ▾
                </div>
                {subMenuContactOpen && (
                  <ul className={styles.submenu}>
                    <li><Link to="/contact/enquiry" onClick={handleMenuClick}>Enquiry</Link></li>
                  </ul>
                )}
              </li>
              
              <li><Link to="/review" onClick={handleMenuClick}>Review </Link></li>
            </ul>

            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div className={styles.buttonBox}>
            <button className={styles.admissionBtn}>
              The Next Admission Day 2025
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;