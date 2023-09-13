import Head from 'next/head';
import Image from 'next/image'
import HeroPhoto from '../images/Photo.png';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>Home</title>
      </Head>


      <Image
        src={HeroPhoto}
        alt="Hero photo"
        // width={500} These 2 properties are not required since the images are statically imported
        // height={500}
        className='photo'
      />

      <main>
        <h2>Hello</h2>
        <h1><span className={styles.introSpan}>I am </span> <span className={styles.name}>Gertraud Schindelbacher</span></h1>
      </main>

    </div>
  );
}
