import WalletConnectProvider from '@walletconnect/web3-provider';
import Debug from 'debug';
import { providers, Signer } from 'ethers';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import Web3Modal, { IProviderOptions } from 'web3modal';

const debug = Debug('web:connection.context');

const providerOptions: Partial<IProviderOptions> = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: 'abc',
    },
  },
};

export interface ConnectionProps {
  provider: providers.Web3Provider | null;
  signer: Signer | null;
  address: string | null;
  isConnected: boolean;
  isInitialized: boolean;
  connect?: () => Promise<void>;
  disconnect?: () => Promise<void>;
}

export const ConnectContext = createContext<ConnectionProps>({
  isConnected: false,
  isInitialized: false,
  provider: null,
  signer: null,
  address: null,
});

export const ConnectionProvider: React.FC = ({ children }) => {
  const [web3Modal, setWeb3Modal] = useState<Web3Modal>();
  const [provider, setProvider] = useState<providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<Signer | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    debug('setup web3Modal');

    setWeb3Modal(
      new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        providerOptions,
      })
    );
  }, []);

  const connect = useCallback(async () => {
    if (web3Modal) {
      try {
        const modalProvider = await web3Modal.connect();
        const ethersProvider = new providers.Web3Provider(modalProvider);
        const ethersSigner = ethersProvider.getSigner();
        const ethAddress = await ethersSigner.getAddress();

        setSigner(ethersSigner);
        setAddress(ethAddress);
        setProvider(ethersProvider);
        setIsConnected(true);
      } catch (ex) {
        debug('web3Modal connect: ', ex);
      }
    }
  }, [web3Modal]);

  const disconnect = useCallback(async () => {
    web3Modal?.clearCachedProvider();
    setAddress(undefined);
    setProvider(undefined);
    setIsConnected(false);
  }, [web3Modal]);

  useEffect(() => {
    debug('initialize web3Modal');

    if (web3Modal?.cachedProvider) {
      debug('got cachedProvider');
      // eslint-disable-next-line no-console
      connect()
        .then(() => setIsInitialized(true))
        .catch(ex => {
          debug('connect error: ', ex);
        });
    } else {
      setIsInitialized(true);
    }
  }, [web3Modal, connect]);

  return (
    <ConnectContext.Provider
      value={{
        connect,
        disconnect,
        address,
        signer,
        isConnected,
        isInitialized,
        provider,
      }}
    >
      {children}
    </ConnectContext.Provider>
  );
};
