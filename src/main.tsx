import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="h-screen max-w-[1440px] bg-rose-50">
      <App />
    </div>
  </StrictMode>
);
