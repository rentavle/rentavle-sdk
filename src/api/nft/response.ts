interface NFTCollection {
  contractAddress: string;
  chainId: string;
  imageUrl: string;
  nftType: string;
  collectionName: string;
  collectionSymbol: string;
  projectName: string;
  projectDescription: string;
  projectProfileImageUrl: string;
  totalSupply: number;
  onSaleCount: number;
  rentedCount: number;
}
