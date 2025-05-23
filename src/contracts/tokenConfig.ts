import taxTokenABI from '../abis/taxTokenABI.json';
import distributorABI from '../abis/distributorABI.json';
import wrapTokenABI from '../abis/wrapTokenABI.json';

export type TokenKey = 'PLSN' | 'GAIN';

type TokenConfig = {
  name: string;
  hasWrapper: boolean;
  token: {
    address: string;
    abi: any;
  };
  wrappedToken?: {
    address: string;
    abi: any;
  };
  distributor: {
    address: string;
    abi: any;
  };
  rewardtoken: {
    name: string;
    address: string;
  };
};

export const tokenConfigs: Record<TokenKey, TokenConfig> = {
  PLSN: {
    name: 'PLSN',
    hasWrapper: true,
    token: {
      address: '0xf651e3978f1f6ec38a6da6014caa6aa07fbae453',
      abi: taxTokenABI
    },
    wrappedToken: {
      address: '0xb6c636eD29FE9fFc2A7554366e748791B1BA98c0',
      abi: wrapTokenABI
    },
    distributor: {
      address: '0xd097429a1188b79baad4453333466a38a75e4a97',
      abi: distributorABI
    },
    rewardtoken: {
      name: 'USDL',
      address: '0x0dEEd1486bc52aA0d3E6f8849cEC5adD6598A162'
    }
  },

  GAIN: {
    name: 'GAIN',
    hasWrapper: false,
    token: {
      address: '0xA7589c33aF2AEedD0fC5a5e6d51d6af5Bd5F15Fd',
      abi: taxTokenABI
    },
    distributor: {
      address: '0x58eb492e2f481cecef96f343f67602cb7b2b8b89',
      abi: distributorABI
    },
    rewardtoken: {
      name: 'PLSN',
      address: '0xF651E3978f1F6ec38a6da6014caA6AA07fBae453'
    }
  }
};

export const deadAddresses: string[] = [
  '0x0000000000000000000000000000000000000369',
  '0x0000000000000000000000000000000000000000',
  '0x000000000000000000000000000000000000dEaD'
];