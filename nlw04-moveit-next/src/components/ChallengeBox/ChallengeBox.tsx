import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import styles from './ChallengeBox.module.css';

function ChallengeBox() {
  const { 
    activeChallenge, 
    resetChallenge, 
    completeChallenge 
  } = useContext(ChallengesContext);

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  const renderContent = () => {
    if(activeChallenge) {
      return (
        <div className={styles.challengeActive}>
          <h3>Ganhe {activeChallenge.amount}xp</h3>
          <div className={styles.content}>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <h2>Novo desafio</h2>
            <p>{activeChallenge.description}</p>
          </div>
          <div className={styles.btnContainer}>
            <button 
              type="button" 
              className={styles.btnFailed}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button 
              type="button" 
              className={styles.btnSucceded}
              onClick={handleChallengeSucceded}
            >
              Completei
            </button>
          </div>
        </div>
      );
    };

    return (
      <div className={styles.challengeNotActive}>
        <p>Finalize um ciclo para receber um desafio</p>
        <div>
          <img src="icons/level-up.svg" alt="Level up" />
          <span>Avance de level completando os desafios.</span>
        </div>
      </div>
    )
  };

  return (
    <div className={styles.challengeBoxContainer}>
      { renderContent() }
    </div>
  );
};

export default ChallengeBox;
