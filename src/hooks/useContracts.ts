import { useMemo } from 'react';
import { ethers } from 'ethers';
import { tokenConfigs, TokenKey } from '../contracts/tokenConfig';
import { useWeb3 } from '../context/Web3Context';

export const useContracts = (tokenKey: TokenKey) => {
  const { signer } = useWeb3();

  return useMemo(() => {
    if (!signer) return { token: null, distributor: null, wrappedToken: null };

    const config = tokenConfigs[tokenKey];

    const token = new ethers.Contract(config.token.address, config.token.abi, signer);
    const distributor = new ethers.Contract(config.distributor.address, config.distributor.abi, signer);
    const wrappedToken =
      config.hasWrapper && config.wrappedToken
        ? new ethers.Contract(config.wrappedToken.address, config.wrappedToken.abi, signer)
        : null;

    return { token, distributor, wrappedToken };
  }, [signer, tokenKey]);
};