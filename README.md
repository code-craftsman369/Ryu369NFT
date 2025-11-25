# Ryu369NFT 🐉🎨

My first ERC-721 NFT collection built with Solidity and OpenZeppelin.

## Overview

- **NFT Name:** Ryu369NFT
- **Symbol:** RYUNFT
- **Standard:** ERC-721
- **Blockchain:** Ethereum (Sepolia Testnet)
- **Contract Address:** 0x22fDfF2B43e2DfaD91060A7e03477f98f1F29EF3

## Technology Stack

- Solidity ^0.8.20
- OpenZeppelin Contracts (ERC721, Ownable)
- Hardhat
- Ethers.js

## Contract Code
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Ryu369NFT is ERC721, Ownable {
    uint256 private _tokenIdCounter;

    constructor() ERC721("Ryu369NFT", "RYUNFT") Ownable(msg.sender) {}

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter++;
        _safeMint(to, tokenId);
    }
}
```

## Deployment

Deployed on Sepolia Testnet using Hardhat.

**View on Etherscan:**  
https://sepolia.etherscan.io/address/0x22fDfF2B43e2DfaD91060A7e03477f98f1F29EF3

## Setup
```bash
npm install
```

## Deploy
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## Learning Journey

This NFT collection was created as part of my blockchain development learning path:

- ✅ Completed CryptoZombies Lessons 1-6
- ✅ Created first ERC-20 token (Ryu369Token)
- ✅ Created first ERC-721 NFT collection
- ✅ Deployed to Sepolia testnet with Hardhat
- 🎯 Goal: Become a top DeFi developer

## Author

**code-craftsman369**
- Aspiring blockchain developer
- Learning Solidity and DeFi

## Date

November 26, 2025

---

*Building my blockchain portfolio one project at a time! 🚀*
