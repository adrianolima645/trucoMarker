import { createContext, ReactNode, useState } from 'react';
import { VictoryModal } from '../components/VictoryModal';

interface MatchContextData {
  isTruco: boolean;
  trucar: () => void;
  zerar: () => void;
  victoriesT1: number;
  victoriesT2: number;
  victoryT1: () => void;
  victoryT2: () => void;
  closeVictoryModal: () => void;
  startedMatch: () => void;
  startNewMatch: () => void;
  newMatch: boolean;
}

interface MatchProviderProps {
  children: ReactNode;
}

export const MatchContext = createContext({} as MatchContextData);

export function MatchProvider({ children }: MatchProviderProps) {
  const [isTruco, setIsTruco] = useState(false);
  const [victoriesT1, setvictoriesT1] = useState(0);
  const [victoriesT2, setvictoriesT2] = useState(0);
  const [timeIsActive, setTimeIsActive] = useState(false);
  const [isVictoryModalOpen, setIsVictoryModalOpen] = useState(false);
  const [newMatch, setNewMatch] = useState(true);
  const [nameTeam1, setNameTeam1] = useState('Equipe 1');
  const [nameTeam2, setNameTeam2] = useState('Equipe 2');
  const [teamWinner, setTeamWinner] = useState('');

  function trucar() {
    setIsTruco(true);
  }

  function zerar() {
    setIsTruco(false);
  }

  function victoryT1() {
    setvictoriesT1(victoriesT1 + 1);
    setIsVictoryModalOpen(true);
    setNewMatch(true);
    setTeamWinner(nameTeam1);
  }

  function victoryT2() {
    setvictoriesT2(victoriesT2 + 1);
    setIsVictoryModalOpen(true);
    setNewMatch(true);
    setTeamWinner(nameTeam2);
  }

  function closeVictoryModal() {
    setIsVictoryModalOpen(false);
  }

  function startNewMatch() {
    setNewMatch(true);
  }

  function startedMatch() {
    setNewMatch(false);
  }

  return (
    <MatchContext.Provider
      value={{
        isTruco,
        trucar,
        zerar,
        victoryT1,
        victoryT2,
        victoriesT1,
        victoriesT2,
        closeVictoryModal,
        startedMatch,
        newMatch,
        startNewMatch,
      }}
    >
      {children}
      {isVictoryModalOpen && <VictoryModal name={teamWinner} />}
    </MatchContext.Provider>
  );
}
