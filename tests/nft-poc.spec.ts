/* eslint-disable camelcase */
import { parseFixed } from '@ethersproject/bignumber';
import { Signer } from 'ethers';
import { ethers } from 'hardhat';
import { NftPoc, NftPoc__factory } from '../typechain';

describe('NftPoc', () => {
  let signers: Signer[];
  let root: string;
  let contract: NftPoc;

  beforeAll(async () => {
    signers = await ethers.getSigners();
    root = await signers[0].getAddress();
  });

  beforeEach(async () => {
    const contractFactory = ((await ethers.getContractFactory('NftPoc')) as any) as NftPoc__factory;

    contract = await contractFactory.deploy('http://localhost/api/token/');
  });

  it('Should mint a new asset', async () => {
    await contract.mint({
      value: parseFixed('0.1', 18),
    });

    // expect(await contract.ownerOf(1)).toEqual(root);
    expect(await contract.tokenURI(0)).toEqual('http://localhost/api/token/0');
  });

  it('Should return underflow with BNB lower than 1', async () => {
    await expect(
      contract.mint({
        value: parseFixed('0.01', 18),
      })
    ).rejects.toThrow();
  });

  it('Should transfer token ownership to another address', async () => {
    const from = root;
    const to = await signers[1].getAddress();

    await contract.mint({
      value: parseFixed('0.1', 18),
    });

    const token = await contract.tokenOfOwnerByIndex(from, 0);

    expect(await contract.ownerOf(token)).toEqual(from);

    await contract.transferFrom(from, to, token);

    expect(await contract.ownerOf(token)).toEqual(to);
  });
});

/* eslint-enable camelcase */
