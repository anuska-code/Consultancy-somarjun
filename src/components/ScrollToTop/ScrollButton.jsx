import React, { useState, useEffect } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import styles from './ScrollButton.module.css';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({ 
      top: document.body.scrollHeight, 
      behavior: 'smooth' 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className={styles.scrollButtonContainer}>
          <div className={styles.scrollButtons}>
            {/* TOP ARROW = Scroll to Bottom */}
            <button 
              className={`${styles.scrollBtn} ${styles.scrollTopBtn}`} 
              onClick={scrollToBottom}
              aria-label="Scroll to Bottom"
            >
              <FaChevronUp className={styles.scrollIcon} />
            </button>

            {/* BOTTOM ARROW = Scroll to Top */}
            <button 
              className={`${styles.scrollBtn} ${styles.scrollBottomBtn}`} 
              onClick={scrollToTop}
              aria-label="Scroll to Top"
            >
              <FaChevronDown className={styles.scrollIcon} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollButton;
