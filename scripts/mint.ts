import { parseFixed } from '@ethersproject/bignumber';
import '@nomiclabs/hardhat-ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { NftPoc } from '../typechain';

export async function mint(args: MintArgs, hre: HardhatRuntimeEnvironment) {
  const { contract } = args;

  const [account] = await hre.ethers.getSigners();
  const nftPoc = (await (hre.ethers.getContractAt('NftPoc', contract) as any)) as NftPoc;
  let totalSupply = 0;

  try {
    totalSupply = (await nftPoc.totalSupply()).toNumber();
  } catch (ex) {
    // do nothing
  }

  console.log(`totalSupply: ${totalSupply}`);

  const mintTx = await nftPoc.mint({
    from: account.address,
    value: parseFixed('0.1', 18),
  });

  console.log(`mintTx.hash: ${mintTx.hash}`);
  await mintTx.wait();

  try {
    totalSupply = (await nftPoc.totalSupply()).toNumber();
  } catch (ex) {
    // do nothing
  }

  console.log(`totalSupply: ${totalSupply}`);

  console.log('nftPoc minted');
}
