import Head from 'next/head';
import ExperienceBar from '../components/ExperienceBar/ExperienceBar';

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
          Section
        </div>
      </section>
    </div>
  );
};
