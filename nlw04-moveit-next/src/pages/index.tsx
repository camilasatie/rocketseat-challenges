import Head from 'next/head';
import ExperienceBar from '../components/ExperienceBar/ExperienceBar';
import Profile from '../components/Profile/Profile';
import CompletedChallenges from '../components/CompletedChallenges/CompletedChallenges';
import Countdown from '../components/Countdown/Countdown';
import ChallengeBox from '../components/ChallengeBox/ChallengeBox';

import styles from './index.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
          <title>Início | move.it</title>
      </Head>

      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
};
