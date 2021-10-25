const { ethers } = require("hardhat");

async function main() {

  // Get compiled contract by name
  const SuperMarioWorld = await ethers.getContractFactory("MyNFT");
  const superMarioWorld = await SuperMarioWorld.deploy("MyNFT", "MNFT");

  await superMarioWorld.deployed();
  console.log("SuperMarioWorld deployed to:", superMarioWorld.address);

  await superMarioWorld.mint(10,"https://ipfs.io/ipfs/QmedqBK4vuAPsCgGC2r5udPTf3dC2wKbBgW9i6TaxeGXtm")
  
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
