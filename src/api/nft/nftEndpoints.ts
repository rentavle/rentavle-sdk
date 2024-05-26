import { RentavleSDK } from '../rentavle';

// Extend the NFTEndpoints interface to include the new methods
export interface NFTEndpoints {
  getRentavleContractDetail(contractAddress: string): Promise<any>;
  getAllRegisteredNFTCollections(size: number, cursor: string): Promise<any>;
  getListOfNFTsOwnedBy(ownerAddress: string, size: number, cursor: string): Promise<any>;
  getListOfNFTsByContractOwnedBy(contractAddress: string, ownerAddress: string, size: number, cursor: string): Promise<any>;
  getListOfContractsOwnedBy(ownerAddress: string, size: number, cursor: string): Promise<any>;
  getListOfNFTsByContract(contractAddress: string, size: number, cursor: string): Promise<any>;
  getListOfNFTsBorrowedBy(borrowerAddress: string, size: number, cursor: string): Promise<any>;
  getListOfNFTsLentBy(lenderAddress: string, size: number, cursor: string): Promise<any>;
}

// Add functions to implement the endpoints
export function addNFTEndpoints(sdk: RentavleSDK) {
  sdk.getRentavleContractDetail = async function (contractAddress: string): Promise<any> {
    const url = `/v1/nfts/contracts/${contractAddress}/rentavle/detail`;
    return this.get(url);
  };

  sdk.getAllRegisteredNFTCollections = async function (size: number = 10, cursor: string = ''): Promise<NFTCollection[]> {
    const url = `/v1/nfts/contracts/rentavle`;
    const params = { size, cursor };
    return this.get(url, { params });
  };

  sdk.getListOfNFTsOwnedBy = async function (ownerAddress: string, size: number = 10, cursor: string = ''): Promise<any> {
    const url = `/v1/nfts/tokens/owners/${ownerAddress}`;
    return this.get(url, { params: { size, cursor } });
  };

  sdk.getListOfNFTsByContractOwnedBy = async function (contractAddress: string, ownerAddress: string, size: number = 10, cursor: string = ''): Promise<any> {
    const url = `/v1/nfts/tokens/contracts/${contractAddress}/owners/${ownerAddress}`;
    return this.get(url, { params: { size, cursor } });
  };

  sdk.getListOfContractsOwnedBy = async function (ownerAddress: string, size: number = 10, cursor: string = ''): Promise<any> {
    const url = `/v1/nfts/contracts/owners/${ownerAddress}`;
    return this.get(url, { params: { size, cursor } });
  };

  sdk.getListOfNFTsByContract = async function (contractAddress: string, size: number = 10, cursor: string = ''): Promise<any> {
    const url = `/v1/nfts/tokens/contracts/${contractAddress}`;
    const params = { size, cursor };
    return this.get(url, { params });
  };

  sdk.getListOfNFTsBorrowedBy = async function (borrowerAddress: string, size: number = 10, cursor: string = ''): Promise<any> {
    const url = `/v1/nfts/tokens/borrowers/${borrowerAddress}`;
    const params = { size, cursor };
    return this.get(url, { params });
  };

  sdk.getListOfNFTsLentBy = async function (lenderAddress: string, size: number = 10, cursor: string = ''): Promise<any> {
    const url = `/v1/nfts/tokens/lenders/${lenderAddress}`;
    return this.get(url, { params: { size, cursor } });
  };
}
