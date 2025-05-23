type Props = {
  plsBalance: string;
  tokenBalance: string;
  wrappedBalance?: string | null;
  tokenSymbol: string;
  hasWrapper: boolean;
};

const AccountOverview = ({ plsBalance, tokenBalance, wrappedBalance, tokenSymbol, hasWrapper }: Props) => {
  return (
    <div className="card account-section">
      <h2><i className="fas fa-wallet"></i> Account Overview</h2>
      <div className="grid-container">
        <div className="info-item">
          <span className="label">PLS Balance:</span>
          <span className="value">{plsBalance}</span>
        </div>
        <div className="info-item">
          <span className="label">{tokenSymbol} Balance:</span>
          <span className="value">{tokenBalance}</span>
        </div>
        {hasWrapper && (
          <div className="info-item">
            <span className="label">W{tokenSymbol} Balance:</span>
            <span className="value">{wrappedBalance || '-'}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountOverview;