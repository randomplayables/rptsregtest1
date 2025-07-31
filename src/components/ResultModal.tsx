import React from 'react'
import type { ResultModalProps } from '../types'

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
}

const modalStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '8px',
  maxWidth: '90%',
  width: '400px',
  textAlign: 'center',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
}

const buttonStyle: React.CSSProperties = {
  marginTop: '1rem',
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  cursor: 'pointer',
  backgroundColor: 'var(--color-primary)',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
}

const ResultModal: React.FC<ResultModalProps> = ({ didWin, targetNumber, attempts, onReset }) => (
  <div style={overlayStyle}>
    <div style={modalStyle}>
      <h2>{didWin ? 'Congratulations!' : 'Game Over'}</h2>
      <p>
        {didWin
          ? `You guessed the prime number ${targetNumber} in ${attempts} attempt${attempts !== 1 ? 's' : ''}!`
          : `The prime number was ${targetNumber}. Better luck next time!`}
      </p>
      <button type="button" onClick={onReset} style={buttonStyle}>
        {didWin ? 'Play Again' : 'Try Again'}
      </button>
    </div>
  </div>
)

export default ResultModal