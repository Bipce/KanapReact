import axios from "axios";

export const getProducts = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return res.data;
};

export const getProduct = async (id) => {
  const res = await axios.get(`http://localhost:3000/api/products/${id}`);
  return res.data;
};
