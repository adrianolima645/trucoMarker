import styles from '../styles/components/ButtonTruco.module.css';
import { useContext } from 'react';
import { MatchContext } from '../contexts/MatchContext';

export function ButtonTruco() {
  const { isTruco, trucar } = useContext(MatchContext);
  return (
    <button type="button" onClick={trucar} className={styles.button}>
      <strong>Trucar</strong>
    </button>
  );
}
