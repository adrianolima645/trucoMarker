import { useState, useContext } from 'react';

import styles from '../styles/components/VictoryModal.module.css';
import { MatchContext } from '../contexts/MatchContext';

export function VictoryModal({ name }) {
  const { closeVictoryModal } = useContext(MatchContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{name}</header>

        <strong>Parabéns!</strong>
        <p>Vocês Ganharam!</p>

        <button type="button" onClick={closeVictoryModal}>
          X
        </button>
      </div>
    </div>
  );
}
