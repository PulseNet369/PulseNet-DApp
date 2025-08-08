import { ethers } from 'ethers';

export const provider = new ethers.JsonRpcProvider('https://rpc.pulsechain.com');

// Helper function to format addresses
export const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};

// Dead addresses for calculating burned supply
export const DEAD_ADDRESSES = [
    '0x0000000000000000000000000000000000000369',
    '0x000000000000000000000000000000000000dead',
    '0x0000000000000000000000000000000000000000'
];
