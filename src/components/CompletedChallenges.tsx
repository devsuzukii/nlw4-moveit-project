import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { MedalIcon } from '../components/icons/MedalIcon';

import css from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={css.CompletedChallengesContainer}>
      <span>
        <MedalIcon /> Desafios Concluídos
      </span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
