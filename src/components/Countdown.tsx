import React, { useContext, useState, useEffect } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import { CheckIcon } from '../components/icons/CheckIcon';

import { ExitIcon } from '../components/icons/ExitIcon';

import css from '../styles/components/Countdown.module.css';

export function Countdown() {
  const {
    seconds,
    minutes,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={css.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button disabled className={css.countdownButton}>
          Ciclo encerrado <CheckIcon />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${css.countdownButton} ${css.countdownButtonActive}`}
              onClick={resetCountdown}>
              Parar o ciclo <ExitIcon />
            </button>
          ) : (
            <button
              type="button"
              className={css.countdownButton}
              onClick={startCountdown}>
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
