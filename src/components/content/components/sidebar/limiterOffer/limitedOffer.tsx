'use client';
import React, { useState, useEffect } from 'react';
import styles from './limited.module.css';

const LimitedOffer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timerID);
  }, []);

  const hours: number = currentTime.getHours();
  const minutes: number = currentTime.getMinutes();

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const hourDigits: string[] = formatNumber(hours).split('');
  const minuteDigits: string[] = formatNumber(minutes).split('');

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>LIMITED OFFER</h2>
      <p className={styles.description}>Hurry, limited time left</p>
      <div className={styles.timeContainer}>
        {hourDigits.map((digit, index) => (
          <span key={index} className={styles.time}>
            {digit}
          </span>
        ))}
        <span>:</span>
        {minuteDigits.map((digit, index) => (
          <span key={index} className={styles.time}>
            {digit}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LimitedOffer;
