import TokenSelector from './TokenSelector';
import { TokenKey } from '../contracts/tokenConfig';

type HeaderProps = {
  selected: TokenKey;
  onTokenChange: (token: TokenKey) => void;
};

const Header = ({ selected, onTokenChange }: HeaderProps) => {
  return (
    <header className="header-top">
      <h1>
        <i className="fas fa-coins"></i> <span id="token-display-name">{selected}</span> Dashboard
      </h1>
      <TokenSelector selected={selected} onChange={onTokenChange} />
    </header>
  );
};

export default Header;