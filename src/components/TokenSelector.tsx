type TokenSelectorProps = {
  selected: string;
  onChange: (token: string) => void;
};

const TokenSelector = ({ selected, onChange }: TokenSelectorProps) => {
  return (
    <div className="token-selector">
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        <option value="PLSN">PLSN</option>
        <option value="GAIN">GAIN</option>
      </select>
    </div>
  );
};

export default TokenSelector;