import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useWeb3 } from '../context/Web3Context';
import { useContracts } from './useContracts';
import { TokenKey } from '../contracts/tokenConfig';

export const useWallet = (tokenKey: TokenKey) => {
  const { account, provider } = useWeb3();
  const { token, wrappedToken } = useContracts(tokenKey);
  const [plsBalance, setPlsBalance] = useState('0');
  const [tokenBalance, setTokenBalance] = useState('0');
  const [wrappedBalance, setWrappedBalance] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalances = async () => {
      if (!account || !provider || !token) return;

      try {
        const [ethBal, tokenBal] = await Promise.all([
          provider.getBalance(account),
          token.balanceOf(account)
        ]);

        setPlsBalance(ethers.formatEther(ethBal));
        setTokenBalance(ethers.formatUnits(tokenBal, 18));

        if (wrappedToken) {
          const wrappedBal = await wrappedToken.balanceOf(account);
          setWrappedBalance(ethers.formatUnits(wrappedBal, 18));
        } else {
          setWrappedBalance(null);
        }
      } catch (err) {
        console.error(`Error fetching wallet balances for ${tokenKey}:`, err);
      }
    };

    fetchBalances();
  }, [account, provider, token, wrappedToken, tokenKey]);

  return { plsBalance, tokenBalance, wrappedBalance };
};