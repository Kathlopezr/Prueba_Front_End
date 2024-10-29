import axios from 'axios';

const API_URL = 'https://preapi.aquaforce.cl/api/sabores'; 

export const fetchFlavors = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.sabores.map(flavor => flavor.name);
  } catch (error) {
    console.error('Error fetching flavors:', error);
    throw error; 
  }
};
