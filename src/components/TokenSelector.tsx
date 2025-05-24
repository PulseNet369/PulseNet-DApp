import { TokenKey } from '../contracts/tokenConfig';

type TokenSelectorProps = {
  selected: TokenKey;
  onChange: (token: TokenKey) => void;
};

const TokenSelector = ({ selected, onChange }: TokenSelectorProps) => {
  return (
    <div className="token-selector">
      <select 
        value={selected} 
        onChange={(e) => onChange(e.target.value as TokenKey)}
      >
        <option value="PLSN">PLSN</option>
        <option value="GAIN">GAIN</option>
      </select>
    </div>
  );
};

export default TokenSelector;