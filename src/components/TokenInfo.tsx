type Props = {
  name: string;
  symbol: string;
  totalSupply: string;
  deadBalance: string;
  address: string;
};

const TokenInfo = ({ name, symbol, totalSupply, deadBalance, address }: Props) => (
  <div className="card main-card">
    <h2><i className="fas fa-info-circle"></i> {name} Token Info</h2>
    <div className="grid-container">
      <div className="info-item"><span className="label">Name:</span><span className="value">{name}</span></div>
      <div className="info-item"><span className="label">Symbol:</span><span className="value">{symbol}</span></div>
      <div className="info-item"><span className="label">Total Supply:</span><span className="value">{totalSupply}</span></div>
      <div className="info-item"><span className="label">Dead Balance:</span><span className="value">{deadBalance}</span></div>
      <div className="info-item">
        <span className="label">Contract Address:</span>
        <span className="value">
          <span className="truncate">{address}</span>
          <button className="copy-btn" onClick={() => navigator.clipboard.writeText(address)}>
            <i className="far fa-copy"></i>
          </button>
        </span>
      </div>
    </div>
  </div>
);

export default TokenInfo;