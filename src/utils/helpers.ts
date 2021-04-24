import { parseFixed } from '@ethersproject/bignumber';
import Debug from 'debug';
import { Signer } from 'ethers';
import fetch from 'isomorphic-unfetch';
import { NftPoc__factory } from '../../typechain'; // eslint-disable-line camelcase
import { Metadata } from '../interfaces';

const debug = Debug('web:helpers');

const NEXT_PUBLIC_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x';

export async function getTokens(address: string, signer: Signer) {
  debug('getTokens');

  let tokens: Metadata[] = [];
  const nftPoc = NftPoc__factory.connect(NEXT_PUBLIC_CONTRACT_ADDRESS, signer);

  try {
    const tokenIdBigNumbers = await nftPoc.getTokensByOwner(address);

    tokens = await Promise.all(
      (tokenIdBigNumbers || []).map(async bigNumber => {
        const tokenId = bigNumber.toNumber();
        const tokenUri = await nftPoc.tokenURI(tokenId);

        debug('tokenUri: %s for #%d', tokenUri, tokenId);

        const json = await fetch(tokenUri).then(r => r.json());

        return json as Metadata;
      })
    );
  } catch (ex) {
    debug('getTokens error: %O', ex);

    throw ex;
  }

  return tokens;
}

export async function claim(address: string, signer: Signer) {
  debug('claim');

  const nftPoc = NftPoc__factory.connect(NEXT_PUBLIC_CONTRACT_ADDRESS, signer);

  try {
    const txn = await nftPoc.mint({
      from: address,
      value: parseFixed('0.1', 18),
    });

    await txn.wait(1);

    return txn;
  } catch (ex) {
    debug('claim error: %O', ex);

    throw ex;
  }
}
