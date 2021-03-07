import Head from 'next/head';
import ExperienceBar from '../components/ExperienceBar/ExperienceBar';
import Countdown from '../components/Countdown/Countdown';

import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
          <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Countdown />
        </div>
      </section>
    </div>
  );
};
