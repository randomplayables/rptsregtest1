import { useState, useCallback } from 'react'
import { isPrime, getRandomPrime } from '../utils/primeUtils'
import { MAX_ATTEMPTS } from '../constants'
import type { GuessHistoryEntry, GuessFeedback, UsePrimeGameReturn } from '../types'

export function usePrimeGame(): UsePrimeGameReturn {
  const [targetNumber, setTargetNumber] = useState<number>(() => getRandomPrime())
  const [guesses, setGuesses] = useState<GuessHistoryEntry[]>([])
  const [didWin, setDidWin] = useState<boolean>(false)

  const attemptsLeft = MAX_ATTEMPTS - guesses.length
  const isGameOver = didWin || attemptsLeft <= 0

  const handleGuess = useCallback(
    (guess: number) => {
      if (isGameOver) return

      let feedback: GuessFeedback
      if (!isPrime(guess)) {
        feedback = 'notPrime'
      } else if (guess < targetNumber) {
        feedback = 'tooLow'
      } else if (guess > targetNumber) {
        feedback = 'tooHigh'
      } else {
        feedback = 'correct'
      }

      setGuesses(prev => [...prev, { guess, feedback }])

      if (feedback === 'correct') {
        setDidWin(true)
      }
    },
    [isGameOver, targetNumber]
  )

  const resetGame = useCallback(() => {
    setTargetNumber(getRandomPrime())
    setGuesses([])
    setDidWin(false)
  }, [])

  return {
    targetNumber,
    guesses,
    attemptsLeft,
    isGameOver,
    didWin,
    handleGuess,
    resetGame,
  }
}