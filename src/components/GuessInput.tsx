import React, { useState } from 'react'
import type { GuessInputProps } from '../types'
import { MIN_NUMBER, MAX_NUMBER } from '../constants'

const GuessInput: React.FC<GuessInputProps> = ({ onGuess, attemptsLeft, disabled }) => {
  const [value, setValue] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const num = parseInt(value, 10)
    if (isNaN(num)) {
      setValue('')
      return
    }
    onGuess(num)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter your guess ({MIN_NUMBER}-{MAX_NUMBER}):</label>
      <input
        id="guess-input"
        type="number"
        min={MIN_NUMBER}
        max={MAX_NUMBER}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        required
      />
      <button type="submit" disabled={disabled || !value.trim()}>Guess</button>
      <p>Attempts left: {attemptsLeft}</p>
    </form>
  )
}

export default GuessInput