import React from 'react';
import styles from './sidebar.module.css';
import Title from '@/components/content/components/sidebar/title/Title';
import Cards from '@/components/content/components/sidebar/cards/Cards';
import LimitedOffer from '@/components/content/components/sidebar/limiterOffer/limitedOffer';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Title offer={'Special Offers'} />
      <Cards
        title={'Personalized'}
        discount={30}
        description={'Discover our latest collection'}
        price={500}
      />
      <Cards title={'Personalized Gifts'} discount={20} description={'by GiftXpress'} price={30} />
      <LimitedOffer />
    </div>
  );
};

export default Sidebar;
