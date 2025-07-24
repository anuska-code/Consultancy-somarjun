import React from 'react';
import styles from './Footer.module.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ScrollToggleButton from '../ScrollToTop/ScrollToggleButton';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>

          {/* Logo Section */}
          <div className={styles.logoSection}>
           <div className={styles.logoContainer}>
  <img 
    src="\images\Squared Logo 1 (2).svg" 
    alt="Somarjun Tech Company logo" 
    className={styles.logoImg} 
  />
</div>

            <p className={styles.description}>
              Somarjun Tech Company serves a wide range of clients, primarily focusing on business leveraging digital transformation through modern design, technology, and software solutions.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className={styles.quickLinksSection}>
            <div className={styles.quickLinksInner}>
              <h4 className={styles.sectionTitle}>Quick Links</h4>
              <div className={styles.quickLinksGrid}>
                <ul className={styles.linksList}>
                  <li><Link to="/test-preparation/ielts" className={styles.footerLink}>Test Preparation</Link></li>
                  <li><Link to="study-abroad/denmark" className={styles.footerLink}>Study Abroad</Link></li>
                  <li><Link to="/services/student-screening" className={styles.footerLink}>Services</Link></li>
                  <li><Link to="/universities" className={styles.footerLink}>Universities</Link></li>
                </ul>
                <ul className={styles.linksList}>
                  <li><Link to="/courses/information-technology-australia" className={styles.footerLink}>Popular Courses</Link></li>
                  <li><Link to="/blogs" className={styles.footerLink}>Blogs</Link></li>
                  <li><Link to="/about/introduction" className={styles.footerLink}>About Us</Link></li>
                  <li><Link to="/contact/enquiry" className={styles.footerLink}>Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Study Abroad Section */}
          <div className={styles.studyAbroadSection}>
            <div className={styles.studyAbroadInner}>
              <h4 className={styles.sectionTitls}>Study Abroad</h4>
              <ul className={styles.linksList}>
                <li><Link to="/study-abroad/uk" className={styles.footerLink}>Study in UK</Link></li>
                <li><Link to="/study-abroad/canada" className={styles.footerLink}>Study in Canada</Link></li>
                <li><Link to="/study-abroad/australia" className={styles.footerLink}>Study in Australia</Link></li>
                <li><Link to="/study-abroad/usa" className={styles.footerLink}>Study in USA</Link></li>
                <li><Link to="/study-abroad/new-zealand" className={styles.footerLink}>Study in New Zealand</Link></li>
                <li><Link to="/study-abroad/denmark" className={styles.footerLink}>Study in Denmark</Link></li> 
              </ul>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className={styles.contactSection}>
            <div className={styles.contactInner}>
              <h4 className={styles.sectionTitls}>Contact Us</h4>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <span>New Baneshwor, Kathmandu, Nepal</span>
                </div>
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <a href="mailto:info@hardford.com.np" className={styles.contactLink}>info@hardford.com.np</a>
                </div>
                <div className={styles.contactItem}>
                  <FaPhoneAlt className={styles.contactIcon} />
                  <span>01-5912063, 01-4730021</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Test Prep + Copyright */}
        <div className={styles.testCopyrightWrapper}>
          <div className={styles.testAndCopyrightBar}>
            <div className={styles.testLinks}>
              <Link to="/test-preparation/ielts" className={styles.testLink}>IELTS</Link>
              <span className={styles.separator}>|</span>
              <Link to="/test-preparation/pte" className={styles.testLink}>PTE</Link>
              <span className={styles.separator}>|</span>
              <Link to="/test-preparation/oet" className={styles.testLink}>OET</Link>
              <span className={styles.separator}>|</span>
              <Link to="/test-preparation/jlpt" className={styles.testLink}>JLPT</Link>
              <span className={styles.separator}>|</span>
              <Link to="/test-preparation/nat" className={styles.testLink}>NAT</Link>
            </div>
            <div className={styles.copyrightText}>
              © 2023 Somarjun. All rights reserved. Powered by{' '}
              <a href="#" className={styles.poweredByLink}>Cyclone Nepal Info Tech</a>
            </div>
          </div>
        </div>
        <ScrollToggleButton/>
      </footer>
    </div>
  );
};

export default Footer;
