import '@nomiclabs/hardhat-ethers';
import { BigNumber } from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { NftPoc } from '../typechain';

export async function mint(args: MintArgs, hre: HardhatRuntimeEnvironment) {
  const { contract } = args;

  const [account] = await hre.ethers.getSigners();
  const nftPoc = (await hre.ethers.getContractAt('NftPoc', contract)) as NftPoc;
  let totalSupply: BigNumber = BigNumber.from(0);

  try {
    totalSupply = await nftPoc.totalSupply();
  } catch (ex) {}

  console.log(`totalSupply: ${totalSupply.toNumber()}`);

  const mintTx = await nftPoc.mint(account.address);
  console.log(`mintTx.hash: ${mintTx.hash}`);
  await mintTx.wait();

  console.log(await nftPoc.tokenURI(1));

  try {
    totalSupply = await nftPoc.totalSupply();
  } catch (ex) {}

  console.log(`totalSupply: ${totalSupply.toNumber()}`);

  console.log('nftPoc minted');
}
