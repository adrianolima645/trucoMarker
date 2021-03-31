import styles from '../styles/components/Marker.module.css';
import { useState, useContext, useEffect } from 'react';
import { Button } from './Button';
import { MatchContext } from '../contexts/MatchContext';

export function Marker({ team }) {
  const {
    isTruco,
    zerar,
    victoryT1,
    victoryT2,
    startNewMatch,
    newMatch,
  } = useContext(MatchContext);
  const [marker, setMarker] = useState(0);
  const [pontos, setPontos] = useState(1);

  useEffect(() => {
    if (isTruco) {
      setPontos(3);
      return;
    }
    setPontos(1);
    if (newMatch) {
      setMarker(0);
    }
  }, [isTruco, newMatch]);

  function decrement() {
    if (marker > 0) setMarker(marker - 1);
  }
  function increment() {
    if (marker < 15) {
      if (!isTruco) {
        setMarker(marker + 1);
      } else {
        setMarker(marker + 3);
      }
    }
  }

  function resetMatch() {
    setMarker(0);
    startNewMatch();
  }

  function victory() {
    console.log(marker);
    if (marker != 14) {
      return;
    }

    const _team = Number(team);
    switch (_team) {
      case 1:
        victoryT1();
        resetMatch();
        break;
      case 2:
        victoryT2();
        resetMatch();
        break;
    }
  }

  function handleChangeIncrement() {
    increment();
    zerar();
    victory();
  }
  return (
    <div>
      <div className={styles.points}>
        <strong>{marker}</strong>
      </div>
      <div className={styles.buttons}>
        <button type="button" className={styles.buttonRed} onClick={decrement}>
          -
        </button>
        <strong>+{pontos}</strong>
        <button
          type="button"
          className={styles.buttonGreen}
          onClick={handleChangeIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}
