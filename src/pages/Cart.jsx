import { useEffect, useState } from "react";
import { getProducts } from "../services/backend";
import { getProductsCart } from "../services/cart";

import CartProducts from "../components/CartProducts/CartProducts";

const Cart = () => {
  const [finalProducts, setFinalProducts] = useState();
  const cartArr = [];

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      const productsCart = getProductsCart();

      for (const product of productsCart) {
        const currentProduct = products.find((p) => p._id == product.id);
        cartArr.push({
          ...product,
          imageUrl: currentProduct.imageUrl,
          price: currentProduct.price,
          name: currentProduct.name,
        });
      }
      setFinalProducts(cartArr);
    })();
  }, []);

  if (!finalProducts) return null;

  return <CartProducts products={finalProducts} />;
};

export default Cart;
