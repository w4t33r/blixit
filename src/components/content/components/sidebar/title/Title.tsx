import React, { FC } from 'react';
import styles from './title.module.css';

type Props = { offer?: string };

const Title: FC<Props> = ({ offer }) => {
  return <h2 className={styles.title}>{offer}</h2>;
};

export default Title;
