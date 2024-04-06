import React from 'react';
import styles from './category.module.css';
import Image from 'next/image';

const Category = () => {
  const images = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <div className={styles.container}>
      <h2>Category</h2>
      <div className={styles.cards}>
        {images.map((image, index) => (
          <div key={index} className={styles.card}>
            <div>
              <h3 className={styles.cardTitle}>Name</h3>
            </div>
            <Image
              className={styles.cardImage}
              src={'./category/image.svg'}
              width={96}
              height={96}
              alt={'category'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
