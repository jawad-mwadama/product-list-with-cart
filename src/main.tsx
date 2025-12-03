import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen bg-rose-100">
      <div className="max-w-[1440px]">
        <App />
      </div>
    </div>
  </StrictMode>
);
