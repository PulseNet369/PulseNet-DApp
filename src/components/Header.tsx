import React from 'react';
import TokenSelector from './TokenSelector';

const Header = () => {
  const [selected, setSelected] = React.useState('PLSN');
  return (
    <header className="header-top">
      <h1>
        <i className="fas fa-coins"></i> <span id="token-display-name">PLSN</span> Dashboard
      </h1>
      <TokenSelector selected={selected} onChange={setSelected} />
    </header>
  );
};

export default Header;