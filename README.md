# Ryu369NFT 🐉🎨

My first ERC-721 NFT collection built with Solidity and OpenZeppelin.

## Overview

- **Collection Name:** Ryu369NFT
- **Symbol:** RYUNFT
- **Standard:** ERC-721 (NFT)
- **Blockchain:** Ethereum (Remix VM)

## Features

- Unique NFT minting
- Owner-only minting rights
- OpenZeppelin security standards
- Counter-based token IDs

## Technology Stack

- Solidity ^0.8.20
- OpenZeppelin Contracts (ERC721, Ownable)
- Remix IDE

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

Deployed on Remix VM (Prague) for testing and learning purposes.

## Comparison: ERC-20 vs ERC-721

| Feature | Ryu369Token (ERC-20) | Ryu369NFT (ERC-721) |
|---------|---------------------|---------------------|
| Type | Fungible Token | Non-Fungible Token |
| Total Supply | 1,000,000 | Unlimited (mint on demand) |
| Use Case | Currency/Utility | Digital Collectibles |

## Learning Journey

This NFT collection was created as my second blockchain project:
- ✅ Completed CryptoZombies Lessons 1-6
- ✅ Created ERC-20 token (Ryu369Token)
- ✅ Created ERC-721 NFT collection (Ryu369NFT)
- 🎯 Goal: Become a top DeFi developer

## Author

**code-craftsman369**
- Aspiring blockchain developer
- Learning Solidity and DeFi

## Date

November 24, 2025

---

*My second blockchain project! 🚀*
