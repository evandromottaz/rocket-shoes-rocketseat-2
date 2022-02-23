import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Slide from './Slide';
import Highlight from './Highlight';

const Product = () => {
  return (
    <div className={styles.product}>
      <Highlight />
      <Slide />
    </div>
  );
};

export default Product;
