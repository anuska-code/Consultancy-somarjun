import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from './ScrollButton.module.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisible ? (
    <div className={`${styles.scrollButtonContainer} ${styles.bottomPosition}`}>
      <button 
        className={`${styles.scrollBtn} ${styles.scrollBottomBtn}`} 
        onClick={scrollToTop}
        aria-label="Scroll to Top"
      >
        <FaChevronDown className={styles.scrollIcon} />
      </button>
    </div>
  ) : null;
};

export default ScrollToTopButton;
