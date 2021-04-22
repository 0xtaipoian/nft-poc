import '@nomiclabs/hardhat-ethers';
import { BigNumber } from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

export async function mint(args: MintArgs, hre: HardhatRuntimeEnvironment) {
  const { contract } = args;

  const [account] = await hre.ethers.getSigners();
  const nftPoc = await hre.ethers.getContractAt('NftPoc', contract);
  let totalSupply: BigNumber = BigNumber.from(0);

  try {
    totalSupply = await nftPoc.totalSupply();
  } catch (ex) {
    // do nothing
  }

  console.log(`totalSupply: ${totalSupply.toNumber()}`);

  const mintTx = await nftPoc.mint({
    from: account.address,
    value: 1,
  });

  console.log(`mintTx.hash: ${mintTx.hash}`);
  await mintTx.wait();

  try {
    totalSupply = await nftPoc.totalSupply();
  } catch (ex) {
    // do nothing
  }

  console.log(`totalSupply: ${totalSupply.toNumber()}`);

  console.log('nftPoc minted');
}
