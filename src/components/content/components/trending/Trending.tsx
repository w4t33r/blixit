import React from 'react';
import styles from './trending.module.css';
import Title from '../sidebar/title/Title';
const Trending = () => {
  return (
    <div className={styles.container}>
      <Title offer={'Trending'} />
    </div>
  );
};

export default Trending;
