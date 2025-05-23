# PulseNet-DApp

PulseNet-DApp is a decentralized application (DApp) dashboard for managing and interacting with tokens on the PulseChain network. This project is built with React and TypeScript, using a modular component structure.

## Features
- Token selection and dashboard overview
- Token actions: transfer, approve, and transfer from
- Account and network information display
- Fee structure and distributor info
- Utility hooks and context for Web3 integration

## Project Structure
```
src/
  App.tsx                # Main App component
  main.tsx               # Entry point
  abis/                  # Contract ABIs
  components/            # UI components (Header, TokenSelector, etc.)
  context/               # React context for Web3
  contracts/             # Token configuration
  hooks/                 # Custom React hooks
  styles/                # CSS variables and styles
  utils/                 # Utility functions
```

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser at `http://localhost:5173` (or the port shown in your terminal).

## Requirements
- Node.js (v16 or higher recommended)
- npm

## License
MIT