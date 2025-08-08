import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { provider, formatAddress, DEAD_ADDRESSES } from '../utils/web3';
import tokens from '../config/tokens';

interface TokenInfo {
    name: string;
    symbol: string;
    totalSupply: string;
    burnedSupply: string;
}

interface TokenCardProps {
    tokenKey: string;
}

const TokenCard: React.FC<TokenCardProps> = ({ tokenKey }) => {
    const [tokenData, setTokenData] = useState<TokenInfo>({
        totalSupply: '0',
        burnedSupply: '0',
        name: '',
        symbol: '',
    });

    const tokenConfig = tokens[tokenKey as keyof typeof tokens];

    useEffect(() => {
        const fetchTokenData = async () => {
            const tokenContract = new ethers.Contract(
                tokenConfig.token.address,
                tokenConfig.token.abi,
                provider
            );

            try {
                const [name, symbol, totalSupply] = await Promise.all([
                    tokenContract.name(),
                    tokenContract.symbol(),
                    tokenContract.totalSupply(),
                ]);

                // Calculate burned supply
                const burnedBalances = await Promise.all(
                    DEAD_ADDRESSES.map(address => 
                        tokenContract.balanceOf(address)
                    )
                );

                const burnedSupply = burnedBalances.reduce(
                    (acc, curr) => acc + BigInt(curr),
                    BigInt(0)
                );

                setTokenData({
                    name,
                    symbol,
                    totalSupply: ethers.formatEther(totalSupply),
                    burnedSupply: ethers.formatEther(burnedSupply),
                });
            } catch (error) {
                console.error('Error fetching token data:', error);
            }
        };

        fetchTokenData();
    }, [tokenKey, tokenConfig]);

    return (
        <div className="card">
            <div className="card-header">
                <h2 className="card-title">{tokenData.name}</h2>
                <span className="badge">{tokenData.symbol}</span>
            </div>

            <div className="info-row">
                <div className="info-label">Contract Address</div>
                <div className="info-value">
                    {formatAddress(tokenConfig.token.address)}
                </div>
            </div>

            <div className="info-row">
                <div className="info-label">Total Supply</div>
                <div className="info-value">
                    {Number(tokenData.totalSupply).toLocaleString()} {tokenData.symbol}
                </div>
            </div>

            <div className="info-row">
                <div className="info-label">Burned Supply</div>
                <div className="info-value">
                    {Number(tokenData.burnedSupply).toLocaleString()} {tokenData.symbol}
                </div>
            </div>

            {tokenConfig.hasWrapper && 'wrappedToken' in tokenConfig && (
                <div className="info-row">
                    <div className="info-label">Wrapped Token Address</div>
                    <div className="info-value">
                        {formatAddress((tokenConfig as any).wrappedToken.address || '')}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TokenCard;
