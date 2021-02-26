import { useContext } from 'react';

import css from '../styles/components/Profile.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={css.profileContainer}>
      <img src="https://github.com/devsuzukii.png" alt="Suzukii" />

      <div>
        <strong>Suzukii</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
