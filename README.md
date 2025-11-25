# Ryu369Token 🐉

My first ERC-20 token built with Solidity and OpenZeppelin.

## Overview

- **Token Name:** Ryu369Token
- **Symbol:** RYU369
- **Total Supply:** 1,000,000 RYU369
- **Standard:** ERC-20
- **Blockchain:** Ethereum (Remix VM)

## Technology Stack

- Solidity ^0.8.20
- OpenZeppelin Contracts
- Remix IDE

## Contract Code
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Ryu369Token is ERC20 {
    constructor() ERC20("Ryu369Token", "RYU369") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
```

## Deployment

Deployed on Remix VM (Prague) for testing and learning purposes.

## Learning Journey

This token was created as part of my blockchain development learning path:
- ✅ Completed CryptoZombies Lessons 1-6
- ✅ Created first ERC-20 token
- 🎯 Goal: Become a top DeFi developer

## Author

**code-craftsman369**
- Aspiring blockchain developer
- Learning Solidity and DeFi

## Date

November 22, 2025

---

*This is my first step towards becoming a blockchain developer! 🚀*
