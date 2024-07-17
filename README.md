# Rentavle SDK Documentation

Welcome to the Rentavle SDK! This guide covers everything you need to start using the Rentavle SDK in your projects.

NOTE: You can use this SDK in both TypeScript and JavaScript (CJS, MJS compatible)

## Table of Contents

- Installation
- Configuration
- Getting Started
- Understanding the Cursor Parameter
- Example code for all functions
- Terms explanation

## Installation

To start using the Rentavle SDK, you first need to install the package via npm:

```bash
npm install rentavle-sdk
```

## Configuration

Before you can interact with the Rentavle APIs, you need to setup your SDK with the necessary configuration:

```javascript
import { RentavleSDK } from "rentavle-sdk";

const sdk = new RentavleSDK({
    apiEndpoint: "https://www.rentavle.com/bapi",
    chainId: "0x100"
});
```

Here, apiEndpoint is the URL of the Rentavle API, and chainId is the ID of the blockchain you are interacting with.

## Getting Started

### getRentavleContractDetail

```javascript
async function getRentavleContractDetail() {
    try {
        const response = await sdk.getRentavleContractDetail("cxfdbfc5b5b330df8481e17f6872d985ade4986ee8");
        console.log('Response:', response);
    } catch (error) {
        console.error('Error fetching contract details:', error);
    }
}

getRentavleContractDetail();
```

## Understanding the Cursor Parameter

The `cursor` parameter is used for pagination in the API responses. It helps in retrieving large sets of data in smaller, manageable chunks.

### How it works:

1. When you make an initial request, leave the cursor empty or omit it.
2. The API response will include a `cursor` value if there are more results available.
3. To fetch the next set of results, use this `cursor` value in your subsequent request.
4. Repeat this process until you receive an empty `cursor`, indicating you've reached the end of the data set.

### Example usage with cursor pagination:

```javascript
async function getAllNFTsByContract(sdk, contractAddress, size = 10) {
    let allNFTs = [];
    let cursor = "";

    while (true) {
        try {
            // Make the API call
            const response = await sdk.getListOfNFTsByContract(contractAddress, size, cursor);
            
            // Extract the NFTs from the response
            const nfts = [...(response.chainItems || []), ...(response.rentavleItems || [])];
            allNFTs = allNFTs.concat(nfts);

            // Get the new cursor
            cursor = response.cursor || "";

            // If there's no cursor, we've reached the end of the data
            if (!cursor) {
                break;
            }
        } catch (error) {
            console.error('Error fetching NFTs:', error);
            break;
        }
    }

    return allNFTs;
}

// Usage
const sdk = new RentavleSDK({
    apiEndpoint: "https://www.rentavle.com/bapi",
    chainId: "0x100"
});
const contractAddress = 'cxfdbfc5b5b330df8481e17f6872d985ade4986ee8';

getAllNFTsByContract(sdk, contractAddress)
    .then(allNFTs => {
        console.log(`Total NFTs retrieved: ${allNFTs.length}`);
    })
    .catch(error => {
        console.error('Failed to retrieve NFTs:', error);
    });
```

In this example:

1. We define an async function `getAllNFTsByContract` that handles the pagination logic.
2. It starts with an empty cursor and makes repeated API calls.
3. In each iteration, it extracts the NFTs from both `chainItems` and `rentavleItems`.
4. It then gets the new cursor from the response.
5. The process continues until an empty cursor is received, indicating the end of the data.
6. Finally, it returns all collected NFTs.

This approach allows you to efficiently retrieve all NFTs for a contract, regardless of the total number, by making multiple smaller requests and following the cursor pagination.

## Example code for all functions

```javascript
import { RentavleSDK } from 'rentavle-sdk';

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
## Terms Explanation

1. rentavleItems: These are items that are rented or borrowed through Rentavle. When you fetch a list of NFTs for a specific contract, rentavleItems will include NFTs that are currently being rented or are available for rent through the Rentavle platform.

2. havahItems: These are items that exist on the Havah chain. When fetching a list of NFTs for a specific contract, havahItems will return all NFTs on the Havah chain for that contract, regardless of whether they are involved in Rentavle transactions or not.

For example, when you use the `getListOfNFTsByContract` function:
- rentavleItems will contain NFTs that are part of the Rentavle ecosystem (rented, available for rent, etc.)
- havahItems will contain all NFTs for that contract on the Havah chain, providing a complete view of the contract's NFTs.
