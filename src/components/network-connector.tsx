import React, { useContext } from 'react';
import { Button, Flex, FlexProps, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { ConnectContext } from '../contexts/connection.context';

declare global {
  interface Window {
    ethereum: any;
  }
}

export type NetworkConnectorProps = FlexProps;

const Container = styled(Flex)`
  height: 100%;
`;

export const NetworkConnector: React.FC<NetworkConnectorProps> = () => {
  const { address, isConnected, disconnect, connect } = useContext(ConnectContext);
  const shortAddress = address ? `${address.substr(0, 5)}…${address.substr(-4)}` : '';
  const ConnectedButton = (
    <Flex flexDirection="row">
      <Text lineHeight={2}>{shortAddress}</Text>
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
    <Container alignItems="center" flexDirection="column" justifyContent="center" px={3}>
      {isConnected ? ConnectedButton : DisconnectedButton}
    </Container>
  );
};
