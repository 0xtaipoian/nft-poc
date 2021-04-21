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
