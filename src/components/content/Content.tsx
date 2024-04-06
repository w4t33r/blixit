import React from 'react';
import styles from './content.module.css';
import Sidebar from '@/components/content/components/sidebar/Sidebar';
import Trending from '@/components/content/components/trending/Trending';

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <Trending />
    </div>
  );
};

export default Content;
