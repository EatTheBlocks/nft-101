
const { ethers } = require("hardhat");

async function main() {

  const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorldCollection");
  const superMarioWorld = await SuperMarioWorld.deploy(
    "SuperMarioWorldCollection", 
    "SPWC",
    "https://ipfs.io/ipfs/Qmb6tWBDLd9j2oSnvSNhE314WFL7SRpQNtfwjFWsStXp5A/"
    );

  await superMarioWorld.deployed();
  console.log("Success! Contract was deployed to: ", superMarioWorld.address);

  await superMarioWorld.mint(10) // 1 Mario
  await superMarioWorld.mint(10) // 2 Luigi
  await superMarioWorld.mint(10)
  await superMarioWorld.mint(10)
  await superMarioWorld.mint(1) // 5 Mario Gold (rare)
  await superMarioWorld.mint(1) // 6 Luigi Gold (rare)
  await superMarioWorld.mint(1)
  await superMarioWorld.mint(1)

  console.log("NFT successfully minted");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
