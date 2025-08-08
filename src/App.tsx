import React, { useState } from 'react';
import TokenSelector from './components/TokenSelector';
import TokenCard from './components/TokenCard';
import './App.css';

function App() {
  const [selectedToken, setSelectedToken] = useState('PLSN');

  return (
    <div className="container">
      <div className="content">
        <h1>PulseNet Ecosystem</h1>
        <TokenSelector 
          selectedToken={selectedToken} 
          onTokenChange={setSelectedToken} 
        />
        <TokenCard tokenKey={selectedToken} />
      </div>
    </div>
  );
}

export default App;
