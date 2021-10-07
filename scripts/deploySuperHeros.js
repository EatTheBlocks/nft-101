// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const accounts = await hre.ethers.getSigners();
  const provider = hre.ethers.provider;

  for (const account of accounts) {
    console.log(account.address);
    console.log((await provider.getBalance(account.address)).toString());
  }

  // We get the contract to deploy
  const SuperHeros = await hre.ethers.getContractFactory("SuperHeros");
  const superHeros = await SuperHeros.deploy("SuperHeros", "SPRNFT");

  await superHeros.deployed();

  console.log("SuperHeros deployed to:", superHeros.address);

  await superHeros.mint("https://ipfs.io/ipfs/QmTzfg3CnPJJvg2mFcFH9G4sZ8ZCZXgDYuxYioxm9uHG3L")

  console.log("NFT successfully minted")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
