import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import styles from './ScrollButton.module.css';

const ScrollToBottomButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset < document.body.scrollHeight - 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return isVisible ? (
    <div className={`${styles.scrollButtonContainer} ${styles.topPosition}`}>
      <button 
        className={`${styles.scrollBtn} ${styles.scrollTopBtn}`} 
        onClick={scrollToBottom}
        aria-label="Scroll to Bottom"
      >
        <FaChevronUp className={styles.scrollIcon} />
      </button>
    </div>
  ) : null;
};

export default ScrollToBottomButton;
