import styles from '../styles/components/NameTeam.module.css';

export function NameTeam({ value }) {
  return (
    <div className={styles.titulo}>
      <strong>{value}</strong>
    </div>
  );
}
