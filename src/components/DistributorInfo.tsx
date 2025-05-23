type Props = {
  minDistribution: string;
  minPeriod: string;
  totalDistributed: string;
  distributorAddress: string;
};

const DistributorInfo = ({ minDistribution, minPeriod, totalDistributed, distributorAddress }: Props) => (
  <div className="card">
    <h2><i className="fas fa-hand-holding-usd"></i> Distributor Info</h2>
    <div className="info-item"><span className="label">Min Distribution:</span><span className="value">{minDistribution}</span></div>
    <div className="info-item"><span className="label">Min Period:</span><span className="value">{minPeriod}</span></div>
    <div className="info-item"><span className="label">Total Distributed:</span><span className="value">{totalDistributed}</span></div>
    <div className="info-item">
      <span className="label">Contract Address:</span>
      <span className="value">
        <span className="truncate">{distributorAddress}</span>
        <button className="copy-btn" onClick={() => navigator.clipboard.writeText(distributorAddress)}>
          <i className="far fa-copy"></i>
        </button>
      </span>
    </div>
  </div>
);

export default DistributorInfo;