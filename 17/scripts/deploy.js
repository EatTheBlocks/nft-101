
const { ethers } = require("hardhat");

async function main() {

  const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorld");
  const superMarioWorld = await SuperMarioWorld.deploy("SuperMarioWorld", "SPRM");

  await superMarioWorld.deployed();
  console.log("Success! Contract was deployed to: ", superMarioWorld.address);

  await superMarioWorld.mint("https://ipfs.io/ipfs/Qmch3m7DEFYRaZiFG6gc8qgkBMS3nrTvM5h5v9xZK6rGEz")

  console.log("NFT successfully minted");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
