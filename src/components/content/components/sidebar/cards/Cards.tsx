import React from 'react';
import styles from './cards.module.css';
import Image from 'next/image';

type CardProps = {
  title: string;
  price: number;
  discount?: number;
  description?: string;
};

const Cards: React.FC<CardProps> = ({ title, price, discount, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={'./content/offers.svg'}
            width={220}
            height={220}
            alt={'ucon'}
          />
          {discount && <div className={styles.discountCircle}>{discount + '%'}</div>}
        </div>
        <div className={styles.details}>
          <button className={styles.actionButton}>Action</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
