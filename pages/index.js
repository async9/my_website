import s from '../styles/Home.module.scss';
import Image from 'next/image';
import Head from 'next/head';
import techIcons from '../data/techIcons';

const Home = () => {
  return (
    <>
      <Head></Head>
      <section className={s.hero}>
        <h1 className='h1'>
          Web <br /> Developer
        </h1>
        <div className={s.heroInfoWrap}>
          <div className={s.heroImageWrap}>
            <Image src='/me.jpeg' width={160} height={160} alt='my photo' />
          </div>
          <div className={s.heroInfo}>
            <h2 className='h2'>Maxim Zavatyi</h2>
            <p className='p'>
              Building custom Web Apps & Websites from scratch to Your heart’s
              desire… <br /> That’s what I do!
            </p>
            <div className={s.heroLinks}>
              <div className={s.linkWrap}>
                <a className={s.cvLink} href='#'>
                  CV link
                </a>
              </div>
              <div className={s.linkWrap}>
                <a className={s.githubLink} href='#'>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={s.tech}>
        <div className={s.techItems}>
          {techIcons &&
            techIcons.map((item) => (
              <div key={item.id} className={s.icon}>
                <Image
                  src={item.image.url}
                  alt={item.image.altText}
                  width={30}
                  height={30}
                />
                <span className={s.iconText}>{item.title}</span>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Home;
