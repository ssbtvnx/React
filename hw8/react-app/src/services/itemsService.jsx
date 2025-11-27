const API_BASE = "https://dummyjson.com/products";

export const getItems = async (search = "") => {
  try {
    const res = await fetch(`${API_BASE}/search?q=${search}`);
    if (!res.ok) throw new Error("Failed to fetch items");
    const data = await res.json();
    return data.products;
  } catch (error) {
    throw error;
  }
};

export const getItemById = async (id) => {
  try {
    const res = await fetch(`${API_BASE}/${id}`);
    if (!res.ok) throw new Error("Item not found");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
