import styles from './page.module.css';
import { Hero } from '@/components';
import Category from '@/components/category/Category';
import Content from '@/components/content/Content';

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
      <Category />
      <Content />
    </main>
  );
}
