type Props = {
  maxTx: string;
  maxWallet: string;
  swapThreshold: string;
  sellMultiplier: string;
};

const TokenSettings = ({ maxTx, maxWallet, swapThreshold, sellMultiplier }: Props) => (
  <div className="card">
    <h2><i className="fas fa-sliders-h"></i> Token Settings</h2>
    <div className="info-item"><span className="label">Max TX Amount:</span><span className="value">{maxTx}</span></div>
    <div className="info-item"><span className="label">Max Wallet Token:</span><span className="value">{maxWallet}</span></div>
    <div className="info-item"><span className="label">Swap Threshold:</span><span className="value">{swapThreshold}</span></div>
    <div className="info-item"><span className="label">Sell Multiplier:</span><span className="value">{sellMultiplier}%</span></div>
  </div>
);

export default TokenSettings;