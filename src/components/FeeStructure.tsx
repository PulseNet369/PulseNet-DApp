type Props = {
  devFee: string;
  liquidityFee: string;
  marketingFee: string;
  reflectionFee: string;
  totalFee: string;
};

const FeeStructure = ({ devFee, liquidityFee, marketingFee, reflectionFee, totalFee }: Props) => (
  <div className="card">
    <h2><i className="fas fa-percentage"></i> Fee Structure</h2>
    <div className="info-item"><span className="label">Dev Fee:</span><span className="value">{devFee}%</span></div>
    <div className="info-item"><span className="label">Liquidity Fee:</span><span className="value">{liquidityFee}%</span></div>
    <div className="info-item"><span className="label">Marketing Fee:</span><span className="value">{marketingFee}%</span></div>
    <div className="info-item"><span className="label">Reflection Fee:</span><span className="value">{reflectionFee}%</span></div>
    <div className="info-item"><span className="label">Total Fee:</span><span className="value">{totalFee}%</span></div>
  </div>
);

export default FeeStructure;