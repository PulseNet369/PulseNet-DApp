type NetworkInfoProps = {
  account: string | null;
  onConnect: () => void;
};

const NetworkInfo = ({ account, onConnect }: NetworkInfoProps) => {
  return (
    <div className="network-info">
      <span className="network-badge">PulseChain</span>
      <span id="account-address" className="truncate">
        {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Not connected'}
      </span>
      <button id="connect-wallet" className="btn" onClick={onConnect}>
        Connect Wallet
      </button>
    </div>
  );
};

export default NetworkInfo;