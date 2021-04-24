/* eslint-disable camelcase */
import { Signer } from 'ethers';
import { ethers } from 'hardhat';
import { NftPoc, NftPoc__factory } from '../typechain';

describe('NftPoc', () => {
  let signers: Signer[];
  let root: string;
  let nftPoc: NftPoc;

  beforeAll(async () => {
    signers = await ethers.getSigners();
    root = await signers[0].getAddress();
  });

  beforeEach(async () => {
    const NftPocFactory = ((await ethers.getContractFactory('NftPoc')) as any) as NftPoc__factory;

    nftPoc = await NftPocFactory.deploy('http://localhost/api/token/');
  });

  it('Should mint a new asset', async () => {
    await nftPoc.mint({
      from: root,
      value: 1,
    });

    // expect(await nftPoc.ownerOf(1)).toEqual(root);
    expect(await nftPoc.tokenURI(0)).toEqual('http://localhost/api/token/0');
  });

  it('Should return underflow with BNB lower than 1', async () => {
    await expect(
      nftPoc.mint({
        from: root,
        value: 0.1,
      })
    ).rejects.toThrow();
  });

  it('Should transfer token ownership to another address', async () => {
    const from = root;
    const to = await signers[1].getAddress();

    await nftPoc.mint({
      from: root,
      value: 10000000,
    });

    const token = await nftPoc.tokenOfOwnerByIndex(from, 0);

    expect(await nftPoc.ownerOf(token)).toEqual(from);

    await nftPoc.transferFrom(from, to, token);

    expect(await nftPoc.ownerOf(token)).toEqual(to);
  });
});

/* eslint-enable camelcase */
