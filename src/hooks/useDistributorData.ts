import { useEffect, useState } from 'react';
import { useContracts } from './useContracts';
import { TokenKey } from '../contracts/tokenConfig';

export const useDistributorData = (tokenKey: TokenKey) => {
  const { distributor } = useContracts(tokenKey);
  const [data, setData] = useState({
    minDistribution: '',
    minPeriod: '',
    totalDistributed: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!distributor) return;

      try {
        const [minDistribution, minPeriod, totalDistributed] = await Promise.all([
          distributor.minDistribution(),
          distributor.minPeriod(),
          distributor.totalDistributed()
        ]);

        setData({
          minDistribution: minDistribution.toString(),
          minPeriod: minPeriod.toString(),
          totalDistributed: totalDistributed.toString()
        });
      } catch (err) {
        console.error(`Error fetching distributor data for ${tokenKey}:`, err);
      }
    };

    fetchData();
  }, [distributor, tokenKey]);

  return data;
};