import styles from './navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>logos</div>
      <nav className={styles.links}>
        <span>Home</span>
        <span>Gifts</span>
        <span>About us</span>
      </nav>
      <div className={styles.links}>
        <Image src={'./header-icons/search.svg'} width={32} height={32} alt={'searching-icon'} />
        <Image
          src={'./header-icons/shopping-cart.svg'}
          width={32}
          height={32}
          alt={'searching-icon'}
        />
        <Image src={'./header-icons/user.svg'} width={32} height={32} alt={'searching-icon'} />
      </div>
    </header>
  );
};

export default Navbar;
