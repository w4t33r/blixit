import styles from './page.module.css';
import { Hero } from '@/components';

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
    </main>
  );
}
