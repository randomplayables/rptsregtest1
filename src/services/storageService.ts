import { HIGH_SCORES_KEY } from '../constants'
import { RoundData } from '../types'

function loadRounds(): RoundData[] {
  try {
    const data = localStorage.getItem(HIGH_SCORES_KEY)
    if (!data) return []
    return JSON.parse(data) as RoundData[]
  } catch (error) {
    console.error('Error loading game data from localStorage:', error)
    return []
  }
}

function saveRounds(rounds: RoundData[]): void {
  try {
    localStorage.setItem(HIGH_SCORES_KEY, JSON.stringify(rounds))
  } catch (error) {
    console.error('Error saving game data to localStorage:', error)
  }
}

export function getAllRounds(): RoundData[] {
  return loadRounds()
}

export function saveRoundData(roundData: RoundData): void {
  const rounds = loadRounds()
  rounds.push(roundData)
  saveRounds(rounds)
}

export function getHighScores(limit: number = 10): RoundData[] {
  const wins = loadRounds().filter(r => r.didWin)
  wins.sort((a, b) => a.guesses.length - b.guesses.length)
  return wins.slice(0, limit)
}

export function clearGameData(): void {
  try {
    localStorage.removeItem(HIGH_SCORES_KEY)
  } catch (error) {
    console.error('Error clearing game data from localStorage:', error)
  }
}