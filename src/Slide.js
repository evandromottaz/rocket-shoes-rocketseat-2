import styles from '../styles/Home.module.css';
import Image from 'next/image';

const Slide = () => {
  return (
    <div className={styles.slide}>
      <Image
        src="/assets/tenis-1-galeria.png"
        height={182}
        width={269}
        alt="imagem do tenis em destaque"
      />
      <Image
        src="/assets/tenis-2-galeria.png"
        height={182}
        width={269}
        alt="imagem do tenis em destaque"
      />
      <Image
        src="/assets/tenis-3-galeria.png"
        height={182}
        width={269}
        alt="imagem do tenis em destaque"
      />
    </div>
  );
};

export default Slide;
