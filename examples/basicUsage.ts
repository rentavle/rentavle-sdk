import { RentavleSDK } from "rentavle-sdk";

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