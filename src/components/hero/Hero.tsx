import Image from 'next/image';
import styles from './hero.module.css';
import CustomSearch from '@/utils/customSearch/CustomSearch';

type HeroProps = {
  text: string;
  title: string;
};
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1>Hitta den perfekta presenten till dina nära och kära!</h1>
          <p>hitta bland gåvor efter kategori eller special erbjudanden</p>
          <CustomSearch placeholder={'Sök efter den perfekta presenten'} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={'./hero/ec-hero-delivery.svg'} width={600} height={600} alt={'alt'}></Image>
      </div>
    </div>
  );
};

export default Hero;
