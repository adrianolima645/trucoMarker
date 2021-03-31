import { useState, useEffect, useContext } from 'react';

import styles from '../styles/components/TimeMatch.module.css';
import { MatchContext } from '../contexts/MatchContext';

export function TimeMatch() {
  const { newMatch } = useContext(MatchContext);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const second = time % 60;
  const minute = Math.floor(time / 60);

  const [minuteLeft, minuteRight] = String(minute).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(second).padStart(2, '0').split('');

  function startTimeMatch() {
    setIsActive(true);
  }

  function stopTimeMatch() {
    setIsActive(false);
  }

  function restartTimeMatch() {
    setTime(0);
  }

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    }
    if (!newMatch) {
      startTimeMatch();
    } else {
      restartTimeMatch();
      stopTimeMatch();
    }
  }, [isActive, time, newMatch]);

  return (
    <div className={styles.timeMatch}>
      <p>Tempo de Partida:</p>
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
  );
}
