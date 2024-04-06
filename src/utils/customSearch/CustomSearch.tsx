import React from 'react';
import styles from './customSearch.module.css';
import CustomButton from '@/utils/customButtons/CustomButtons';
import Image from 'next/image';

type Props = {
  placeholder?: string;
};

const CustomSearch: React.FC<Props> = ({ placeholder }) => {
  return (
    <div className={styles.searchField}>
      <div className={styles.customSearchContainer}>
        <input className={styles.customSearch} placeholder={placeholder} />
        <Image
          className={styles.customSearchIcon}
          src={'./header-icons/search.svg'}
          alt={'search icon'}
          width={40}
          height={40}
        />
      </div>
      <CustomButton label={'SÖK'} />
    </div>
  );
};

export default CustomSearch;
