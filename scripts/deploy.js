const hre = require("hardhat");

async function main() {
  const Ryu369NFT = await hre.ethers.getContractFactory("Ryu369NFT");
  const nft = await Ryu369NFT.deploy();
  await nft.waitForDeployment();
  
  console.log("Ryu369NFT deployed to:", await nft.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
