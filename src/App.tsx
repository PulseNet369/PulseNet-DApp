import { useState } from 'react';
import { ethers } from 'ethers';
import { TokenKey } from './contracts/tokenConfig';
import { useWeb3 } from './context/Web3Context';
import Header from './components/Header';
import NetworkInfo from './components/NetworkInfo';
import Footer from './components/Footer';
import AccountOverview from './components/AccountOverview';
import TokenInfo from './components/TokenInfo';
import FeeStructure from './components/FeeStructure';
import TokenSettings from './components/TokenSettings';
import DistributorInfo from './components/DistributorInfo';
import ApproveTokens from './components/TokenActions/ApproveTokens';
import TransferTokens from './components/TokenActions/TransferTokens';
import TransferFrom from './components/TokenActions/TransferFrom';

import { useWallet } from './hooks/useWallet';
import { useTokenData } from './hooks/useTokenData';
import { useDistributorData } from './hooks/useDistributorData';
import { useContracts } from './hooks/useContracts';

function App() {
  const [selectedToken, setSelectedToken] = useState<TokenKey>('PLSN');
  const { account, connectWallet } = useWeb3();
  const { plsBalance, tokenBalance, wrappedBalance } = useWallet(selectedToken);
  const tokenData = useTokenData(selectedToken);
  const distributorData = useDistributorData(selectedToken);
  const { token } = useContracts(selectedToken);

  const handleApprove = async (spender: string, amount: string) => {
    if (!token) return;
    try {
      const tx = await token.approve(spender, ethers.parseUnits(amount, 18));
      await tx.wait();
      console.log('Approved:', tx.hash);
    } catch (err) {
      console.error('Approve failed:', err);
    }
  };

  const handleApproveMax = async (spender: string) => {
    if (!token) return;
    try {
      const max = ethers.MaxUint256;
      const tx = await token.approve(spender, max);
      await tx.wait();
      console.log('Approved max:', tx.hash);
    } catch (err) {
      console.error('Approve max failed:', err);
    }
  };

  const handleTransfer = async (to: string, amount: string) => {
    if (!token) return;
    try {
      const tx = await token.transfer(to, ethers.parseUnits(amount, 18));
      await tx.wait();
      console.log('Transferred:', tx.hash);
    } catch (err) {
      console.error('Transfer failed:', err);
    }
  };

  const handleTransferFrom = async (from: string, to: string, amount: string) => {
    if (!token) return;
    try {
      const tx = await token.transferFrom(from, to, ethers.parseUnits(amount, 18));
      await tx.wait();
      console.log('TransferFrom success:', tx.hash);
    } catch (err) {
      console.error('TransferFrom failed:', err);
    }
  };

  return (
    <div className="container">
      <Header selected={selectedToken} onTokenChange={setSelectedToken} />
      <NetworkInfo account={account} onConnect={connectWallet} />
      <AccountOverview
        plsBalance={plsBalance}
        tokenBalance={tokenBalance}
        wrappedBalance={wrappedBalance}
        tokenSymbol={tokenData.symbol}
        hasWrapper={selectedToken === 'PLSN'}
      />
      <TokenInfo
        name={tokenData.name}
        symbol={tokenData.symbol}
        totalSupply={tokenData.totalSupply}
        deadBalance={tokenData.deadBalance}
        address={typeof token?.target === 'string' ? token.target : ''}
      />
      <FeeStructure
        devFee={tokenData.devFee}
        liquidityFee={tokenData.liquidityFee}
        marketingFee={tokenData.marketingFee}
        reflectionFee={tokenData.reflectionFee}
        totalFee={tokenData.totalFee}
      />
      <TokenSettings
        maxTx={tokenData.maxTx}
        maxWallet={tokenData.maxWallet}
        swapThreshold={tokenData.swapThreshold}
        sellMultiplier={tokenData.sellMultiplier}
      />
      <DistributorInfo
        minDistribution={distributorData.minDistribution}
        minPeriod={distributorData.minPeriod}
        totalDistributed={distributorData.totalDistributed}
        distributorAddress={typeof token?.target === 'string' ? token.target : ''}
      />
      <ApproveTokens
        tokenSymbol={tokenData.symbol}
        onApprove={handleApprove}
        onApproveMax={handleApproveMax}
      />
      <TransferTokens
        tokenSymbol={tokenData.symbol}
        onTransfer={handleTransfer}
      />
      <TransferFrom
        tokenSymbol={tokenData.symbol}
        onTransferFrom={handleTransferFrom}
      />
      <Footer />
    </div>
  );
}

export default App;