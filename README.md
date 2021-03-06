# NFT POC

## Tech Stack

| Coding                | Dev/Testing | Deployment    | Public Access                |
|-----------------------|-------------|---------------|------------------------------|
| Open Zeppelin Library | Hardhat     | Truffle Teams | Open Zeppelin Defender Relay |

### Deployment

- CI/CD: Truffle Teams
- Access: OpenZeppelin Defender Relay

### Testing Environment

Hardhat local node
Hardhat Mainnet forking with Alchemy API

### Development Environment

- Local: Hardhat
- Ci/CD: Truffle Teams

### Using Hardhat Interface

- Typescript
- Hardhat
- Ether.js
- Waffle

### Language

solidity 0.8.3

## Scripts

### Deploy(Local)

```shell
# Start local node on 127.0.0.1:8545
npx hardhat node

# Deploy
npx hardhat run --network localhost scripts/deploy.ts
```

### Mint(Local)

```shell
# Mint a nft
export TOKEN_BASE_URI = http://localhost/; npx hardhat run --network localhost scripts/deploy.ts
```

## Environment variables

```shell
# For hardhat
MNEMONIC=...
TOKEN_BASE_URI=http://localhost:3000/api/metadata/

# For NextJS
NEXT_PUBLIC_CONTRACT_ADDRESS=0x5FbDB2315678afecb367f032d93F642f64180aa3
APP_URL=http://localhost:3000
```

## Issues

- Got type casting error with ./typechain build files, probably the ethers-v5 version problem [https://github.com/ethereum-ts/TypeChain/issues/330](https://github.com/ethereum-ts/TypeChain/issues/330), the workaround is manually adding `@ts-ignore` anywhere with type error.
- Transaction error, nonce height mismatch [https://medium.com/singapore-blockchain-dapps/reset-metamask-nonce-766dd4c27ca8](https://medium.com/singapore-blockchain-dapps/reset-metamask-nonce-766dd4c27ca8)