import React, { useContext } from 'react';
import { Button, Flex, FlexProps, Text } from 'rebass/styled-components';
import { ConnectContext } from '../contexts/connection.context';

declare global {
  interface Window {
    ethereum: any;
  }
}

export type NetworkConnectorProps = FlexProps;

export const NetworkConnector: React.FC<NetworkConnectorProps> = () => {
  const { address, isConnected, disconnect, connect } = useContext(ConnectContext);
  const ellipsizedText = address ? `${address.substr(0, 5)}…${address.substr(-4)}` : '';
  const ConnectedButton = (
    <Flex flexDirection="row">
      <Text
        backgroundColor="black"
        color="white"
        lineHeight={2}
        px={3}
        sx={{
          borderRadius: 'circle',
        }}
      >
        {ellipsizedText}
      </Text>
      <Button ml={2} variant="outline" onClick={disconnect}>
        Disconnect
      </Button>
    </Flex>
  );
  const DisconnectedButton = (
    <Button variant="primary" onClick={connect}>
      Connect
    </Button>
  );

  return (
    <Flex alignItems="center" flexDirection="column" height="100%" justifyContent="center" px={3}>
      {isConnected ? ConnectedButton : DisconnectedButton}
    </Flex>
  );
};
