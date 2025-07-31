import React from 'react'
import type { GuessHistoryProps, GuessFeedback } from '../types'

const GuessHistory: React.FC<GuessHistoryProps> = ({ history }) => {
  if (history.length === 0) return null

  const getFeedbackMessage = (feedback: GuessFeedback): string => {
    switch (feedback) {
      case 'tooLow':
        return 'Too low'
      case 'tooHigh':
        return 'Too high'
      case 'notPrime':
        return 'Not a prime'
      case 'correct':
        return 'Correct'
      default:
        return ''
    }
  }

  return (
    <section>
      <h2>Guess History</h2>
      <ul>
        {history.map(({ guess, feedback }, index) => (
          <li key={index}>
            Attempt {index + 1}: {guess} - {getFeedbackMessage(feedback)}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GuessHistory