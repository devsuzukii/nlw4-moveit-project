import React, { useContext, useState, useEffect } from 'react';

import { Toaster } from 'react-hot-toast';
import css from '../styles/components/ChallengeBox.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';

import { CountdownContext } from '../contexts/CountdownContext';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={css.challengeBoxContainer}>
      <Toaster position="top-right" reverseOrder={false} />
      {activeChallenge ? (
        <div className={css.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={css.challengeFailedButton}
              onClick={handleChallengeFailed}>
              Falhei
            </button>
            <button
              type="button"
              className={css.challengeSucceededButton}
              onClick={handleChallengeSucceeded}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={css.challengeNotActive}>
          <strong>Inicie um ciclo para receber desafios a serem completados</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Complete-os para ganhar experiência e avançar de level.
          </p>
        </div>
      )}
    </div>
  );
}
