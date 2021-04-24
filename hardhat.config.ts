import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import { config as dotEnvConfig } from 'dotenv';
import 'hardhat-gas-reporter';
import 'hardhat-jest-plugin';
import 'hardhat-typechain';
import { HardhatUserConfig, task, types } from 'hardhat/config';
import 'solidity-coverage';
import { mint } from './scripts/mint';

const ALCHEMY_API_URI_FORKING = process.env.ALCHEMY_API_URI_FORKING || '';

dotEnvConfig({
  path: './.env',
});

const { MNEMONIC } = process.env;

if (!MNEMONIC) {
  console.error('✖ Please set your MNEMONIC in environment variable or .env file');
  process.exit(1);
}

const accounts = {
  mnemonic: MNEMONIC,
};

task('mint', 'mint token')
  .addOptionalParam(
    'contract',
    'erc721 contract address',
    '0x13De85CdA63e334b873EC1316b5f4B40F82C5bF6',
    types.string
  )
  .setAction(async (taskArgs: MintArgs, hre) => {
    await mint(taskArgs, hre);
  });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  solidity: {
    version: '0.8.3',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    gasPrice: 75,
  },
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    coverage: {
      url: 'http://127.0.0.1:8555', // Coverage launches its own ganache-cli client
    },
    hardhat: {
      ...(ALCHEMY_API_URI_FORKING
        ? {
            forking: {
              url: ALCHEMY_API_URI_FORKING,
            },
          }
        : {}),
    },
    testnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      chainId: 97,
      gasPrice: 20000000000,
      accounts,
    },
    mainnet: {
      url: 'https://bsc-dataseed.binance.org/',
      chainId: 56,
      gasPrice: 20000000000,
      accounts,
    },
  },
};

export default config;
