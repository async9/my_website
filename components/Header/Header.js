import s from './Header.module.scss';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoWrap}>
        <Image src='/alien.svg' width={45} height={45} alt='alien logo' />
      </div>

      <nav className={s.nav}>
        <a className={s.navLink} href='#'>
          GitHub
        </a>
        <a className={s.navLink} href='#'>
          LinkedIn
        </a>
        <a className={s.contactLink} href='#contact'>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
