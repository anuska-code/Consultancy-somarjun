import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './NepalTime.module.css';

const NepalTime = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let interval;

    const fetchTime = async () => {
      try {
        const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kathmandu');

        if (!response.ok) throw new Error('Failed to fetch time');

        const data = await response.json();

        const serverTime = new Date(data.dateTime);
        const localTime = new Date();
        const offset = serverTime.getTime() - localTime.getTime();

        setLoading(false);
        setError('');

        const updateTime = () => {
          const now = new Date(Date.now() + offset);
          const timeString = now.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          });

          const dateString = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

          setTime(timeString);
          setDate(dateString);
        };

        updateTime();
        interval = setInterval(updateTime, 1000);
      } catch (err) {
        setError('Connection failed');
        setLoading(false);
      }
    };

    fetchTime();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.locationInfo}>
            <MapPin className={styles.locationIcon} />
            <span className={styles.locationText}>Nepal</span>
          </div>
        </div>

        {/* Time Display */}
        <div className={styles.timeSection}>
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div 
                key="loading"
                className={styles.loadingContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className={styles.loadingTime}></div>
                <div className={styles.loadingDate}></div>
              </motion.div>
            ) : error ? (
              <motion.div 
                key="error"
                className={styles.errorContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className={styles.errorMessage}>{error}</div>
                <div className={styles.errorSubtext}>Please check your connection</div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div 
                  className={styles.time}
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {time}
                </motion.div>
                <div className={styles.date}>
                  {date}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom accent */}
        <div className={styles.accent}></div>
      </motion.div>
    </div>
  );
};

export default NepalTime;
