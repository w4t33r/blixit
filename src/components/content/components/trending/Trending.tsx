import React from 'react';
import styles from './trending.module.css';
import Title from '../sidebar/title/Title';
import TrendingCard from '../trending/components/trendCards/TrendingCard';

const Trending = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title offer={'Trending'} />
      </div>
      <div className={styles.trending}>
        <TrendingCard title={'Gourmet chocolate box'} price={250} />
        <TrendingCard title={'Gourmet chocolate box'} price={250} />
        <TrendingCard title={'Gourmet chocolate box'} price={250} />
        <TrendingCard title={'Gourmet chocolate box'} price={250} />
        <TrendingCard title={'Gourmet chocolate box'} price={250} />
        <TrendingCard title={'Gourmet chocolate box'} price={250} />
      </div>
      <div className={styles.title}>
        <Title offer={'Trending'} />
      </div>
      <div className={styles.trending}>
        <TrendingCard title={'f'} price={20} className={styles.customCard} hideContent={true} />
        <TrendingCard
          title={'f'}
          price={20}
          className={styles.customCard} // Вот здесь
          hideContent={true}
        />
      </div>
    </div>
  );
};

export default Trending;
