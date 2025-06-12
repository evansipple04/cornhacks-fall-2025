'use client';

import React, { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const calculateTimeLeft = () => {
      try {
        const eventDate = new Date('2025-09-15T00:00:00');
        const now = new Date();
        const difference = eventDate.getTime() - now.getTime();

        if (difference > 0) {
          const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
          const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          setTimeLeft({ months, days, hours, minutes, seconds });
        }
      } catch (error) {
        console.error('Error calculating time left:', error);
      }
    };

    // Initial calculation
    calculateTimeLeft();

    // Set up interval
    timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  return (
    <div className={styles.countdown}>
      <div className={styles.timeGrid}>
        <div className={styles.timeUnit}>
          <span className={styles.number}>{timeLeft.months}</span>
          <span className={styles.label}>Months</span>
        </div>
        <div className={styles.timeUnit}>
          <span className={styles.number}>{timeLeft.days}</span>
          <span className={styles.label}>Days</span>
        </div>
        <div className={styles.timeUnit}>
          <span className={styles.number}>{timeLeft.hours}</span>
          <span className={styles.label}>Hours</span>
        </div>
        <div className={styles.timeUnit}>
          <span className={styles.number}>{timeLeft.minutes}</span>
          <span className={styles.label}>Minutes</span>
        </div>
        <div className={styles.timeUnit}>
          <span className={styles.number}>{timeLeft.seconds}</span>
          <span className={styles.label}>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown; 