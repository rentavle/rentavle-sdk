import axios from 'axios';

export const get = async (url: string): Promise<any> => {
    try {
        return await axios.get(url);
    } catch (error) {
        console.error('HTTP GET request failed:', error);
        throw error;
    }
};
