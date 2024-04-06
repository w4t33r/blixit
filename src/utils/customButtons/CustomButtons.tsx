import React from 'react';
import styles from './customButtons.module.css';

type CustomButtonProps = {
  label?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};

export default CustomButton;
