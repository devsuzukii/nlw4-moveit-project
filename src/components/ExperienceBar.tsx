import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import css from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <header className={css.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className={css.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience}
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
