import React from 'react';
import styles from './trendingCard.module.css';
import Image from 'next/image';

type CardProps = {
  title?: string;
  price?: number;
  imgWidth?: number;
  imgHeight?: number;
  className?: string;
  hideContent?: boolean;
};

const TrendingCard: React.FC<CardProps> = ({
  title,
  className,
  price,
  hideContent,
  imgWidth,
  imgHeight,
}) => {
  return (
    <div className={`${styles.container} ${className ? className : ''}`}>
      <Image
        className={styles.image}
        src={'./hero/ec-hero-delivery.svg'}
        width={imgWidth ?? 250}
        height={imgHeight ?? 150}
        alt={'ucon'}
      />
      <button className={styles.buyButton}>KÖP</button>
      <div className={`${styles.content} ${hideContent ? styles.hideContent : ''}`}>
        <div className={styles.title}>
          <span>{title}</span>
          <Image src={'./icons/like.svg'} width={16} height={16} alt={'alt'} />
        </div>
        <div className={styles.price}>{price} kr</div>
      </div>
    </div>
  );
};

export default TrendingCard;
