import { ethers } from 'hardhat';

const TOKEN_BASE_URI = process.env.TOKEN_BASE_URI;

console.log(TOKEN_BASE_URI);
async function main() {
  const factory = await ethers.getContractFactory('NftPoc');
  const nftPoc = await factory.deploy(TOKEN_BASE_URI);

  await nftPoc.deployed();

  console.log('\nYour contract was deployed to:', nftPoc.address);
}

main()
  .then(() => process.exit())
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
