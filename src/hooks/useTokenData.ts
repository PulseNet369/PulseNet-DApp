import { useEffect, useState } from 'react';
import { useContracts } from './useContracts';
import { TokenKey } from '../contracts/tokenConfig';
import { deadAddresses } from '../contracts/tokenConfig';
import { ethers } from 'ethers';

export const useTokenData = (tokenKey: TokenKey) => {
  const { token } = useContracts(tokenKey);
  const [data, setData] = useState({
    name: '',
    symbol: '',
    totalSupply: '',
    deadBalance: '',
    devFee: '',
    liquidityFee: '',
    marketingFee: '',
    reflectionFee: '',
    totalFee: '',
    maxTx: '',
    maxWallet: '',
    swapThreshold: '',
    sellMultiplier: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!token) return;

      try {
        const [
          name,
          symbol,
          totalSupply,
          devFee,
          liquidityFee,
          marketingFee,
          reflectionFee,
          totalFee,
          maxTx,
          maxWallet,
          swapThreshold,
          sellMultiplier
        ] = await Promise.all([
          token.name(),
          token.symbol(),
          token.totalSupply(),
          token.devFee(),
          token.liquidityFee(),
          token.marketingFee(),
          token.reflectionFee(),
          token.totalFee(),
          token._maxTxAmount(),
          token._maxWalletToken(),
          token.swapThreshold(),
          token.sellMultiplier()
        ]);

        // Fetch and sum all dead address balances
        const balances = await Promise.all(
          deadAddresses.map((addr) => token.balanceOf(addr))
        );
        const totalDead = balances.reduce((acc, bal) => acc + BigInt(bal), 0n);

        setData({
          name,
          symbol,
          totalSupply: totalSupply.toString(),
          deadBalance: ethers.formatUnits(totalDead, 18),
          devFee: devFee.toString(),
          liquidityFee: liquidityFee.toString(),
          marketingFee: marketingFee.toString(),
          reflectionFee: reflectionFee.toString(),
          totalFee: totalFee.toString(),
          maxTx: maxTx.toString(),
          maxWallet: maxWallet.toString(),
          swapThreshold: swapThreshold.toString(),
          sellMultiplier: sellMultiplier.toString()
        });
      } catch (err) {
        console.error(`Error fetching token data for ${tokenKey}:`, err);
      }
    };

    fetchData();
  }, [token, tokenKey]);

  return data;
};