const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const SuperMarioWorld = await hre.ethers.getContractFactory("SuperMarioWorld");
  const superMarioWorld = await SuperMarioWorld.deploy("SuperMarioWorld", "SPRM");

  await superMarioWorld.deployed();

  console.log("SuperMarioWorld deployed to:", superMarioWorld.address);

  // await superMarioWorld.mint("https://ipfs.io/ipfs/QmTzfg3CnPJJvg2mFcFH9G4sZ8ZCZXgDYuxYioxm9uHG3L")
  // Mint Mario
  await superMarioWorld.mint("https://ipfs.io/ipfs/QmSZWdn3Xd9WAo4zgRPGywEvrLgUQ4XLYB9Qcfk4a1Ydta")

  // Homework: Mint Luigi
  
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
