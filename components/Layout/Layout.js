import Header from '../Header/Header';
import s from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={s.pageWrap}>
      <div className={s.componentsWrap}>
        <div className={s.bgCircle1}></div>
        <div className={s.bgCircle2}></div>
        <Header />
        <main className={s.mainWrap}>{children}</main>
      </div>
    </div>
  );
}
