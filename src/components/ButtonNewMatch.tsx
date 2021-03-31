import styles from '../styles/components/ButtonNewMatch.module.css';
import { useContext } from 'react';
import { MatchContext } from '../contexts/MatchContext';

export function ButtonNewMatch() {
  const { startedMatch } = useContext(MatchContext);
  return (
    <button type="button" onClick={startedMatch} className={styles.button}>
      <strong>Nova Partida</strong>
    </button>
  );
}
