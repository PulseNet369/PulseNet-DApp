import React, { createContext, useContext, useEffect, useState } from 'react';
import { BrowserProvider, ethers } from 'ethers';

type Web3ContextType = {
  account: string | null;
  provider: BrowserProvider | null;
  signer: ethers.JsonRpcSigner | null;
  connectWallet: () => Promise<void>;
};

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export const Web3Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);

  const connectWallet = async () => {
    if (!(window as any).ethereum) {
      alert('Please install MetaMask or another Web3 wallet.');
      return;
    }

    try {
      const ethProvider = new ethers.BrowserProvider((window as any).ethereum);
      const accounts = await ethProvider.send('eth_requestAccounts', []);
      const signer = await ethProvider.getSigner();

      setProvider(ethProvider);
      setSigner(signer);
      setAccount(accounts[0]);
    } catch (err) {
      console.error('Failed to connect wallet:', err);
    }
  };

  useEffect(() => {
    if ((window as any).ethereum) {
      (window as any).ethereum.on('accountsChanged', (accounts: string[]) => {
        setAccount(accounts[0] || null);
      });

      (window as any).ethereum.on('disconnect', () => {
        setAccount(null);
        setProvider(null);
        setSigner(null);
      });
    }
  }, []);

  return (
    <Web3Context.Provider value={{ account, provider, signer, connectWallet }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};