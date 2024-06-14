# Rentavle SDK Documentation

Welcome to the Rentavle SDK! This guide covers everything you need to start using the Rentavle SDK in your projects.

NOTE: You can use this SDK in both Typesript and Javascript (CJS, MJS compatible)

## Table of Contents

- [Installation](https://www.notion.so/SDK-0e1f1b483964462f8df7c9ed95220b56?pvs=21)
- [Configuration](https://www.notion.so/SDK-0e1f1b483964462f8df7c9ed95220b56?pvs=21)
- [Getting Started](https://www.notion.so/SDK-0e1f1b483964462f8df7c9ed95220b56?pvs=21)

## Installation

To start using the Rentavle SDK, you first need to install the package via npm:

```bash
npm install rentavle-sdk

```

## **Configuration**

Before you can interact with the Rentavle APIs, you need to setup your SDK with the necessary configuration:

```jsx
import { RentavleSDK } from "rentavle-sdk";

const sdk = new RentavleSDK({
    apiEndpoint: "https://www.rentavle.com/bapi",
    chainId: "0x100"
});

```

Here, ﻿apiEndpoint is the URL of the Rentavle API, and ﻿chainId is the ID of the blockchain you are interacting with.

## Getting Started

### getRentavleContractDetail

```jsx
async function getRentavleContractDetail() {
    try {
        const response = await sdk.getRentavleContractDetail("cxfdbfc5b5b330df8481e17f6872d985ade4986ee8");
        console.log('Response:', response);
    } catch (error) {
ae        console.error('Error fetching contract details:', error);
    }
}

getRentavleContractDetail();

```

## Example code for all functions

```jsx
import { RentavleSDK } from '../rentavle';

async function exampleUsage() {
  const sdk = new RentavleSDK({
    apiEndpoint: "https://www.rentavle.com/bapi",
    chainId: "0x100"
  });

  try {
    // Example: Fetching detail of a specific Rentavle contract
    const contractDetail = await sdk.getRentavleContractDetail("contractAddress1");
    console.log('Contract Detail:', contractDetail);

    // Example: Fetching all registered NFT collections
    const collections = await sdk.getAllRegisteredNFTCollections(10, "");
    console.log('Registered NFT Collections:', collections);

    // Example: Fetching list of NFTs owned by an address
    const ownedNFTs = await sdk.getListOfNFTsOwnedBy("ownerAddress1", 10, "");
    console.log('NFTs Owned:', ownedNFTs);

    // Example: Fetching list of NFTs of a specific contract owned by a particular address
    const nftsByContract = await sdk.getListOfNFTsByContractOwnedBy("contractAddress2", "ownerAddress2", 10, "");
    console.log('NFTs By Contract Owned:', nftsByContract);

    // Example: Fetching list of contracts owned by an address
    const contractsOwned = await sdk.getListOfContractsOwnedBy("ownerAddress3", 10, "");
    console.log('Contracts Owned:', contractsOwned);

    // Example: Fetching list of NFTs by specific contract
    const nftsByContractGeneral = await sdk.getListOfNFTsByContract("contractAddress3", 10, "");
    console.log('NFTs By Contract:', nftsByContractGeneral);

    // Example: Borrowed NFTs by a borrower address
    const borrowedNFTs = await sdk.getListOfNFTsBorrowedBy("borrowerAddress1", 10, "");
    console.log('Borrowed NFTs:', borrowedNFTs);

    // Example: Lent NFTs by a lender address
    const lentNFTs = await sdk.getListOfNFTsLentBy("lenderAddress1", 10, "");
    console.log('Lent NFTs:', lentNFTs);
  } catch (error) {
    console.error('Failed to operate SDK:', error);
  }
}

exampleUsage();

```
