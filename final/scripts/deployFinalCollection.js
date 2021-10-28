const { ethers } = require("hardhat");

async function main() {

  // Get compiled contract by name
  const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorldCollection");
  const superMarioWorld = await SuperMarioWorld.deploy(
    "SuperMarioWorldCollection", 
    "SMWC", 
    "https://ipfs.io/ipfs/Qmb6tWBDLd9j2oSnvSNhE314WFL7SRpQNtfwjFWsStXp5A/"
    );

  await superMarioWorld.deployed();
  console.log("SuperMarioWorld deployed to:", superMarioWorld.address);

  // Here we single mint instead of batch mint
  await superMarioWorld.mint(10) // Mario  x10 copies
  await superMarioWorld.mint(10) // Luigi x10 copies
  await superMarioWorld.mint(10) // Yoshi x10 copies
  await superMarioWorld.mint(10) // Donkey Kong x10 copies
  await superMarioWorld.mint(1)  // Mario Gold x1 Rare copy
  await superMarioWorld.mint(1)  // Luigi Gold x1 Rare copy
  await superMarioWorld.mint(1)  // Yoshi Gold x1 Rare copy
  await superMarioWorld.mint(1)  // Donkey Kong Gold x1 Rare copy
  
  console.log("NFTs successfully minted")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
