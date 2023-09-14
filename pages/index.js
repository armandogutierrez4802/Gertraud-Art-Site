import Head from 'next/head';
import Image from 'next/image'
import Hero from '../images/Hero.png';
import Family from '../images/Family.png';
import Art_1 from '../images/Art_1.png';
import Art_2 from '../images/Art_2.png';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Title</title>
      </Head>


      <Image
        src={Hero}
        alt="Hero photo"
        //width={"auto"} //These 2 properties are not required since the images are statically imported
        //height={"auto"}
        className={styles.hero}
      />

      <main className={styles.main}>
        <h6 className={styles.hello}>Hello</h6>
        <h4 className={styles.h4}>I am <span className={styles.name}>Gertraud Schindelbacher</span></h4>
        <p>Discover the glamour of my one-of-a-kind ceramics, meticulously crafted by skilled hands to ignite your imagination. Enter the world of Exclusive Ceramics, where imagination knows no limits. Explore my studio, admire the artistry, and stay updated on upcoming exhibitions you won't want to miss.</p>
      </main>

      <div className='placeholder'>SCROLLING TEXT ANIMATION PLACEHOLDER</div>

      <div className={styles.discoverMore}>
        <section className={styles.discoverSection}>
          <Image
            src={Family}
            alt="Family photo"
            className={styles.family}
          />
          <div className={styles.discoverSectionText}>
            <h4>ABOUT</h4>
            <p>There are many stations in life, the most formative events during my career are recorded in the following lines.
              In addition to these usual milestones, the most important things in life inspire me in my artistic work. Time with the family, the grandchildren, beautiful walks in nature - that's where I draw my strength from and I always find my muse.</p>
          </div>

        </section>
        <section className={styles.discoverSection}>
          <Image
            src={Art_1}
            alt="Art work photo"
            className={styles.art1}
          />
          <div className={styles.discoverSectionText}>
            <h4>WORK</h4>
            <p>In the more than 40 years of activity as a freelance artist, new techniques have been tried and developed again and again, and the craft and artistic skills continuously improved. During this time I have created my own style for my ceramics both in the design and in the firing and glazing technique.</p>
          </div>
        </section>
        <section className={styles.discoverSection}>
          <Image
            src={Art_2}
            alt="Art work photo"
            className={styles.art2}
          />
          <div className={styles.discoverSectionText}>
            <h4>EVENTS</h4>
            <p>Twice a year, at the end of November and in the spring, there are major exhibitions. Long-time customers and friends receive an invitation by mail. The current dates can now also be found on my website, on request I will gladly send an invitation by e-mail.</p>
          </div>
        </section>

      </div>

    </>
  );
}
