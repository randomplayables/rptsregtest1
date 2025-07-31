import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initGameSession, saveGameData } from './services/apiService';

async function main() {
  const sessionData = await initGameSession();
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('Root element not found');
    return;
  }
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App sessionData={sessionData} saveGameData={saveGameData} />
    </React.StrictMode>
  );
}

main();