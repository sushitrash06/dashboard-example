import axios from 'axios';
const URL = 'https://mocki.io/v1/2ea856b9-9595-4ef9-ad68-c8676e5bd454'

export const ApiGetDataBalance = async () => {
  try {
      const response = await axios.get(URL);
      return response.data;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
};