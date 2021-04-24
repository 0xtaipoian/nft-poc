import { NextPage } from 'next';
import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Card, Heading, Image, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { Navigation } from '../components';
import { ConnectContext } from '../contexts/connection.context';
import { Metadata } from '../interfaces';
import { claim, getTokens } from '../utils/helpers';

const Page = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
`;

const IndexPage: NextPage = () => {
  const [tokens, setTokens] = useState<Metadata[]>([]);
  const { signer, address } = useContext(ConnectContext);
  const [error, setError] = useState<string>();

  async function mint() {
    setError(null);

    try {
      await claim(address, signer);
      const myTokens = await getTokens(address, signer);

      setTokens(myTokens);
    } catch (ex) {
      setError(ex.message);
    }
  }

  useEffect(() => {
    if (address) {
      getTokens(address, signer)
        .then(tokenIds => {
          setTokens(tokenIds);

          return null;
        })
        .catch(ex => {
          setError(ex.message);
        });
    }
  }, [address]);

  return (
    <Page>
      <Navigation />
      {error ? (
        <Text color="red" p={3} textAlign="center">
          {error}
        </Text>
      ) : null}
      {tokens && tokens.length ? (
        <Box
          mb={4}
          p={3}
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: 'auto',
            gridGap: '1rem',
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          {tokens.map((token, index) => (
            <Card key={index.toString()} height="372px" p={3} textAlign="center" width="100%">
              <Image alt={token.name} mb={2} src={token.image} />
              <Heading as="h4" mb={2}>
                {token.name}
              </Heading>
              <Text>{token.description}</Text>
            </Card>
          ))}
        </Box>
      ) : (
        <Box mb={3} py={4} textAlign="center">
          <Heading fontSize={5} mb={3}>
            No Cards!
          </Heading>
          <Text>Please click claim</Text>
        </Box>
      )}
      <Box textAlign="center">
        {address ? (
          <Button fontSize="1.5em" onClick={mint}>
            Claim
          </Button>
        ) : (
          <Text>Please connect wallet</Text>
        )}
      </Box>
    </Page>
  );
};

export default IndexPage;
