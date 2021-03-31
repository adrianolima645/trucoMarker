import styles from '../styles/components/Victories.module.css';
import { MatchContext } from '../contexts/MatchContext';
import { useContext } from 'react';

export function Victories() {
  const { victoriesT1, victoriesT2 } = useContext(MatchContext);
  return (
    <div className={styles.victories}>
      <p>{victoriesT1}</p>
      <strong>Vitórias</strong>
      <p>{victoriesT2}</p>
    </div>
  );
}
