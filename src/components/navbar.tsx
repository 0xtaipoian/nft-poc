import React from 'react';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { NetworkConnector } from './network-connector';

const Container = styled(Flex)`
  background-color: white;
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: content-box;
  position: sticky;
  z-index: 999;
  border-bottom: 1px solid #eaeaea;

  & > div {
    height: 100%;
  }
`;

export interface NavigationProps {
  activeMenuItem?: string;
}

export const menuItems = {
  dashboard: 'Dashboard',
  dapps: 'Your dApps',
};

export const Navigation: React.FC<NavigationProps> = ({ ...props }) => (
  <Container {...props} justifyContent="flex-start">
    <Box ml="auto">
      <NetworkConnector />
    </Box>
  </Container>
);
