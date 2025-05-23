import { useState } from 'react';

type Props = {
  tokenSymbol: string;
  onTransferFrom: (from: string, to: string, amount: string) => void;
};

const TransferFrom = ({ tokenSymbol, onTransferFrom }: Props) => {
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <div className="action-section">
      <h3>Transfer From</h3>
      <div className="form-group">
        <label>Sender Address:</label>
        <input
          type="text"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          placeholder="0x..."
        />
      </div>
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
      <button className="btn action-btn" onClick={() => onTransferFrom(sender, recipient, amount)}>
        Transfer From
      </button>
    </div>
  );
};

export default TransferFrom;