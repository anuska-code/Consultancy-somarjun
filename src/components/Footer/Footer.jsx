import React from 'react';
import styles from './Footer.module.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          {/* Logo and Description Section */}
          <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
              <div className={styles.logoBox}>
                <span className={styles.logoH}>H</span>
              </div>
              <div className={styles.logoText}>
                <span className={styles.hardford}>HARDFORD</span>
                <span className={styles.education}>EDUCATION</span>
              </div>
            </div>
            <p className={styles.description}>
              Hardford Education was founded with a mission to make education 
              ACCESSIBLE and SIMPLE
            </p>
          </div>

          {/* Quick Links Section */}
          <div className={styles.quickLinksSection}>
            <div className={styles.quickLinksInner}>
              <h4 className={styles.sectionTitle}>Quick Links</h4>
              <div className={styles.quickLinksGrid}>
                <ul className={styles.linksList}>
                  <li><Link to="/test-preparation" className={styles.footerLink}>Test Preparation</Link></li>
                  <li><Link to="/study-abroad" className={styles.footerLink}>Study Abroad</Link></li>
                  <li><Link to="/services" className={styles.footerLink}>Services</Link></li>
                  <li><Link to="/universities" className={styles.footerLink}>Universities</Link></li>
                </ul>
                <ul className={styles.linksList}>
                  <li><Link to="/courses" className={styles.footerLink}>Popular Courses</Link></li>
                  <li><Link to="/blogs" className={styles.footerLink}>Blogs</Link></li>
                  <li><Link to="/about" className={styles.footerLink}>About Us</Link></li>
                  <li><Link to="/contact" className={styles.footerLink}>Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Study Abroad Section */}
          <div className={styles.studyAbroadSection}>
            <div className={styles.studyAbroadInner}>
              <h4 className={styles.sectionTitls}>Study Abroad</h4>
              <ul className={styles.linksList}>
                <li><Link to="/study-abroad/australia" className={styles.footerLink}>Study in Australia</Link></li>
                <li><Link to="/study-abroad/usa" className={styles.footerLink}>Study in USA</Link></li>
                <li><Link to="/study-abroad/japan" className={styles.footerLink}>Study in Japan</Link></li>
                <li><Link to="/study-abroad/canada" className={styles.footerLink}>Study in Canada</Link></li>
                <li><Link to="/study-abroad/new-zealand" className={styles.footerLink}>Study in New Zealand</Link></li>
                <li><Link to="/study-abroad/uk" className={styles.footerLink}>Study in UK</Link></li>
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

        {/* Test Preparation and Copyright */}
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
              © 2023 Hardford Education. All rights reserved. Powered by{' '}
              <a href="#" className={styles.poweredByLink}>Cyclone Nepal Info Tech</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;