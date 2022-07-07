import s from './Header.module.scss';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <header className={s.header}>
      <div className={s.logoWrap}>
        <Image src='/alien.svg' width={45} height={45} alt='alien logo' />
      </div>

      <nav className={`${!showMenu ? s.navHide : s.nav}`}>
        <a className={s.navLink} href='#'>
          GitHub
        </a>
        <a className={s.navLink} href='#'>
          LinkedIn
        </a>
        <a className={s.navLink} href='#'>
          Contact
        </a>

        <div className={s.bgCircle1}></div>
        <div className={s.bgCircle2}></div>
      </nav>

      <button onClick={menuHandler} className={s.burger}>
        <span
          className={`${s.line1} ${showMenu ? s.line1Active : s.line1}`}
        ></span>
        <span
          className={`${s.line2} ${showMenu ? s.line2Active : s.line2}`}
        ></span>
      </button>
    </header>
  );
};

export default Header;
