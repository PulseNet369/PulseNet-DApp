import React from 'react';
import tokens from '../config/tokens';

interface TokenSelectorProps {
    selectedToken: string;
    onTokenChange: (token: string) => void;
}

const TokenSelector: React.FC<TokenSelectorProps> = ({ selectedToken, onTokenChange }) => {
    return (
        <div className="select-container">
            <select
                value={selectedToken}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onTokenChange(e.target.value)}
                className="token-select"
            >
                {Object.keys(tokens).map((tokenKey) => (
                    <option key={tokenKey} value={tokenKey}>
                        {tokens[tokenKey as keyof typeof tokens].name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TokenSelector;
