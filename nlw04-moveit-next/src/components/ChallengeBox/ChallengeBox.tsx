import styles from './ChallengeBox.module.css';

function ChallengeBox() {
  const hasActiveChallenge = true;

  const renderContent = () => {
    if(hasActiveChallenge) {
      return (
        <div className={styles.challengeActive}>
          <h3>Ganhe 400xp</h3>
          <div className={styles.content}>
            <img src="icons/body.svg" alt="" />
            <h2>Novo desafio</h2>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </div>
          <div className={styles.btnContainer}>
            <button type="button" className={styles.btnFailed}>Falhei</button>
            <button type="button" className={styles.btnSucceded}>Completei</button>
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
