export const addToCart = (product, color, quantity) => {
  const key = "products";

  let products = JSON.parse(localStorage.getItem(key));

  if (products == null) products = [];
  let hasProduct = false;

  for (const item of products) {
    if (item.id == product._id && item.color == color) {
      item.quantity += quantity;
      hasProduct = true;
    }
  }

  if (hasProduct == false) {
    products.push({ id: product._id, color: color, quantity: quantity });
  }

  localStorage.setItem(key, JSON.stringify(products));
};
