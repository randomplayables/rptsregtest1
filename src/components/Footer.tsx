import React from 'react'
import type { FooterProps } from '../types'
import { MIN_NUMBER, MAX_NUMBER, MAX_ATTEMPTS } from '../constants'

const Footer: React.FC<FooterProps> = () => (
  <footer>
    <p>Guess a prime number between {MIN_NUMBER} and {MAX_NUMBER}. You have {MAX_ATTEMPTS} attempts.</p>
    <p>Built with React and Vite for RandomPlayables.</p>
  </footer>
)

export default Footer