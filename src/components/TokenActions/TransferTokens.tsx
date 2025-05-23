import { useState } from 'react';

type Props = {
  tokenSymbol: string;
  onTransfer: (to: string, amount: string) => void;
};

const TransferTokens = ({ tokenSymbol, onTransfer }: Props) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <div className="action-section">
      <h3>Transfer Tokens</h3>
      <div className="form-group">
        <label>Recipient Address:</label>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
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
      <button className="btn action-btn" onClick={() => onTransfer(recipient, amount)}>Transfer</button>
    </div>
  );
};

export default TransferTokens;