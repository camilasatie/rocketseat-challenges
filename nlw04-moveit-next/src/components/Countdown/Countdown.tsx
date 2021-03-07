import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import styles from './Countdown.module.css';

function Countdown() {
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountDown, 
    resetCountdown 
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
