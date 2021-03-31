import { useState } from 'react';

import styles from '../styles/components/Button.module.css';

export function Button() {
  return (
    <div className={styles.buttonRed}>
      <strong>+</strong>
    </div>
  );
}
