// este archivo contiene las funciones que se encargan de hacer las peticiones al servidor
//el proxy se encuentra en el package.json

export const getItems = async () => {
  try {
    const response = await fetch("/api/items");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getItem = async (id) => {
  try {
    const response = await fetch(`/api/items/${id}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const searchItems = async (query) => {
  try {
    const response = await fetch(`/api/items?q=${query}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
