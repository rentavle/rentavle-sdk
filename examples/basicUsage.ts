import { RentavleSDK } from "rentavle-ts";

const runExample = async (): Promise<void> => {
    try {
        const sdk = new RentavleSDK({
            apiEndpoint: "https://api.example.com",
            chainId: "1",
            debug: true
          });
        await sdk.getContractDetail("0x1234567890123456789012345678901234567890")
    } catch (error) {
        console.error('Failed to fetch block data:', error);
    }
};

runExample();
