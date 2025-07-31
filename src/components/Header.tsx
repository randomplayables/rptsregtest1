import React from 'react'
import type { HeaderProps } from '../types'

const Header: React.FC<HeaderProps> = ({ onReset }) => (
  <header>
    <h1>Prime Number Guessing Game</h1>
    <button type="button" onClick={onReset}>New Game</button>
  </header>
)

export default Header