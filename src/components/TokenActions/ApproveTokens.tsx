import { useState } from 'react';

type Props = {
  tokenSymbol: string;
  onApprove: (spender: string, amount: string) => void;
  onApproveMax: (spender: string) => void;
};

const ApproveTokens = ({ tokenSymbol, onApprove, onApproveMax }: Props) => {
  const [spender, setSpender] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <div className="action-section">
      <h3>Approve Tokens</h3>
      <div className="form-group">
        <label>Spender Address:</label>
        <input
          type="text"
          value={spender}
          onChange={(e) => setSpender(e.target.value)}
          placeholder="0x..."
        />
      </div>
      <div className="form-group">
        <label>Amount ({tokenSymbol}):</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.0"
        />
      </div>
      <div className="button-group">
        <button className="btn action-btn" onClick={() => onApprove(spender, amount)}>Approve</button>
        <button className="btn action-btn" onClick={() => onApproveMax(spender)}>Approve Max</button>
      </div>
    </div>
  );
};

export default ApproveTokens;