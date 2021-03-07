import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDown: () => void;
  resetCountdown: () => void;
};

interface CountdownProviderProps {
  children: ReactNode;
}

const MINUTES_PER_CYCLE = 0.1;
const ONE_MINUTE_IN_SECOND = 60;
let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {  
  const { startNewChallenge } = useContext(ChallengesContext);
  
  const [time, setTime] = useState(MINUTES_PER_CYCLE * ONE_MINUTE_IN_SECOND);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / ONE_MINUTE_IN_SECOND);
  const seconds = time % ONE_MINUTE_IN_SECOND;

  const startCountDown = () => {
    setIsActive(true);
  };

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(MINUTES_PER_CYCLE * ONE_MINUTE_IN_SECOND);
    setHasFinished(false);
  };

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    };
  }, [isActive, time]);

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountDown,
      resetCountdown,
    }}>
        { children }
    </CountdownContext.Provider>
  );
};
