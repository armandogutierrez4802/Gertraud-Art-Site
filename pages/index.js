import Head from 'next/head';
import Image from 'next/image'
import HeroPhoto from '../images/Photo.png';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>


      <Image
        src={HeroPhoto}
        alt="Hero photo"
        width={"auto"} //These 2 properties are not required since the images are statically imported
        height={"auto"}
        className={styles.hero}
      />

      <main className={styles.main}>
        <h6 className={styles.hello}>Hello</h6>
        <h4 className={styles.h4}>I am <span className={styles.name}>Gertraud Schindelbacher</span></h4>
        <p>Discover the glamour of my one-of-a-kind ceramics, meticulously crafted by skilled hands to ignite your imagination. Enter the world of Exclusive Ceramics, where imagination knows no limits. Explore my studio, admire the artistry, and stay updated on upcoming exhibitions you won't want to miss.</p>
      </main>

      <div className='placeholder'>SCROLLING TEXT ANIMATION PLACEHOLDER</div>


    </>
  );
}
