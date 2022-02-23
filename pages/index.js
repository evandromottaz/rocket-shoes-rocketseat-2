import Description from '../src/Description';
import Product from '../src/Product';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Description />
      <Product />
    </div>
  );
}
