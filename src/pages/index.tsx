import { NextPage } from 'next';
import React from 'react';
import { Box, Card } from 'rebass/styled-components';
import styled from 'styled-components';
import { Navigation } from '../components';

const Page = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
`;

const IndexPage: NextPage = () => (
  <Page>
    <Navigation />
    <Box
      p={3}
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: 'auto',
        gridGap: '1rem',
      }}
    >
      {Array.from(new Array(12)).map((_, index) => (
        <Card key={index.toString()} p={3} textAlign="center">
          <h4>Character {index}</h4>
        </Card>
      ))}
    </Box>
  </Page>
);

export default IndexPage;
