/* este archivo contiene las funciones que se encargan de hacer las peticiones al servidor
el proxy se encuentra en el package.json */

const API_URL = process.env.REACT_APP_API_URL;

export const getItems = async () => {
  try {
    const response = await fetch(`${API_URL}/items`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getItem = async (id) => {
  try {
    const response = await fetch(`${API_URL}/items/${id}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const searchItems = async (query) => {
  try {
    const response = await fetch(`${API_URL}/items?q=${query}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
