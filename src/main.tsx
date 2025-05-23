import React from 'react';
import ReactDOM from 'react-dom/client';
import { Web3Provider } from './context/Web3Context';
import App from './App';
import './styles/index.css';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Web3Provider>
      <App />
    </Web3Provider>
  </React.StrictMode>
);
