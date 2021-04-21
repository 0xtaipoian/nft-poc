import { BigNumber } from 'ethers';
import { ethers } from 'hardhat';
import { NftPoc } from '../typechain';

describe('NftPoc', () => {
  it('Should mint a new asset', async () => {
    const signers = await ethers.getSigners();
    const NftPocFactory = await ethers.getContractFactory('NftPoc');
    const nftPoc = (await NftPocFactory.deploy('http://localhost/api/token/')) as NftPoc;

    await nftPoc.mint(signers[0].address);

    expect(await nftPoc.getOwner(1)).toEqual(signers[0].address);
    expect(await nftPoc.tokenURI(1)).toEqual('http://localhost/api/token/1');
    expect(await nftPoc.totalSupply()).toEqual(BigNumber.from(1));

    // mint second nft
    await nftPoc.mint(signers[0].address);

    expect(await nftPoc.getOwner(2)).toEqual(signers[0].address);
    expect(await nftPoc.tokenURI(2)).toEqual('http://localhost/api/token/2');
    expect(await nftPoc.totalSupply()).toEqual(BigNumber.from(2));
  });

  it('Should transfer token ownership to another address', async () => {
    const signers = await ethers.getSigners();
    const NftPocFactory = await ethers.getContractFactory('NftPoc');
    const nftPoc = (await NftPocFactory.deploy('http://localhost/api/token/')) as NftPoc;

    const from = signers[0].address;
    const to = signers[1].address;

    await nftPoc.mint(from);
    const token = await nftPoc.tokenOfOwnerByIndex(from, 0);
    expect(await nftPoc.getOwner(token)).toEqual(from);

    await nftPoc.transferAsset(from, to, token);
    expect(await nftPoc.getOwner(token)).toEqual(to);
  });
});
