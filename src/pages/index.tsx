import { NameTeam } from '../components/NameTeam';
import styles from '../styles/pages/Home.module.css';
import { Marker } from '../components/Marker';
import { ButtonTruco } from '../components/ButtonTruco';
import { Victories } from '../components/Victories';
import { useState, useContext } from 'react';
import { TimeMatch } from '../components/TimeMatch';
import { MatchContext } from '../contexts/MatchContext';
import { ButtonNewMatch } from '../components/ButtonNewMatch';

export default function Home() {
  const { newMatch } = useContext(MatchContext);

  return (
    <div className={styles.container}>
      <div className={styles.matchTime}>
        <TimeMatch />
      </div>
      <div className={styles.containerMarker}>
        <section>
          <div>
            <NameTeam value="Equipe 1" />
            <Marker team="1" />
          </div>
          <div>
            <NameTeam value="Equipe 2" />
            <Marker team="2" />
          </div>
        </section>
      </div>
      <div className={styles.btnTruco}>
        {newMatch ? <ButtonNewMatch /> : <ButtonTruco />}
      </div>
      <div className={styles.victories}>
        <Victories />
      </div>
    </div>
  );
}
