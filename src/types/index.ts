export interface SessionData {
  sessionId: string;
  surveyMode?: boolean;
  surveyQuestionId?: string;
}

export type SaveGameDataFn = (sessionId: string, roundNumber: number, roundData: RoundData) => Promise<any>;

export interface AppProps {
  sessionData: SessionData;
  saveGameData: SaveGameDataFn;
}

export type GuessFeedback = 'tooLow' | 'tooHigh' | 'notPrime' | 'correct';

export interface GuessHistoryEntry {
  guess: number;
  feedback: GuessFeedback;
}

export interface RoundData {
  targetNumber: number;
  guesses: GuessHistoryEntry[];
  didWin: boolean;
}

export interface UsePrimeGameReturn {
  targetNumber: number;
  guesses: GuessHistoryEntry[];
  attemptsLeft: number;
  isGameOver: boolean;
  didWin: boolean;
  handleGuess: (guess: number) => void;
  resetGame: () => void;
}

export interface HeaderProps {
  onReset: () => void;
}

export interface GuessInputProps {
  onGuess: (guess: number) => void;
  attemptsLeft: number;
  disabled: boolean;
}

export interface GuessHistoryProps {
  history: GuessHistoryEntry[];
}

export interface ResultModalProps {
  didWin: boolean;
  targetNumber: number;
  attempts: number;
  onReset: () => void;
}

export interface FooterProps {}