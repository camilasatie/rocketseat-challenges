import { useState, useEffect } from 'react';

import styles from './Countdown.module.css';

const MINUTES_PER_CYCLE = 0.1;
const ONE_MINUTE_IN_SECOND = 60;
let countdownTimeout: NodeJS.Timeout;

function Countdown() {
  const [time, setTime] = useState(MINUTES_PER_CYCLE * ONE_MINUTE_IN_SECOND);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / ONE_MINUTE_IN_SECOND);
  const seconds = time % ONE_MINUTE_IN_SECOND;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const startCountDown = () => {
    setIsActive(true);
  };

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(MINUTES_PER_CYCLE * ONE_MINUTE_IN_SECOND);
  };

  const renderButton = () => {
    if(hasFinished) {
      return (
        <button disabled className={styles.countdownButton}>
          Ciclo Encerrado
          <img src="icons/check_circle.svg" alt="" />        
        </button>
      );
    }; 
  
    if(isActive) {
      return (
        <button 
        type="button" 
        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
        onClick={resetCountdown} 
        >
          Abandonar ciclo
          <img src="icons/close.svg" alt="" />
        </button>
      );  
    } else {
      return (
        <button onClick={startCountDown} type="button" className={styles.countdownButton}>
          Iniciar ciclo
        </button>
      );
    };
  };

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    };
  }, [isActive, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        
        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {renderButton()}      
    </div>
  );
};

export default Countdown;
