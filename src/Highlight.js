import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Highlight = () => {
  return (
    <Image
      src="/assets/tenis-1-ampliado.png"
      width={597}
      height={510}
      alt="Produto em destaque"
    />
  );
};

export default Highlight;
