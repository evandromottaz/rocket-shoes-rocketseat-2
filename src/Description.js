import styles from '../styles/Home.module.css';

const Description = () => {
  return (
    <div className={styles.description}>
      <h1>Tênis Esportivo Para Corrida Top</h1>
      <p>
        Esse tênis tem o intuito de te deixar ainda mais fitness, focado, e
        musculoso.
      </p>
      <strong className={styles.priece}>R$ 1.000,00</strong>
      <button className={styles.cta}>COMPRAR</button>
    </div>
  );
};

export default Description;
