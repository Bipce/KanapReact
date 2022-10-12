import { useEffect, useState } from "react";
import { getProducts } from "../services/backend";
import { getProductsCart } from "../services/cart";

import CartProducts from "../components/CartProducts/CartProducts";

const Cart = () => {
  const [products, setProducts] = useState();
  const [productsCart, setProductsCart] = useState();

  useEffect(() => {
    (async () => {
      setProducts(await getProducts());
      setProductsCart(getProductsCart());
    })();
  }, []);

  if (!products || !productsCart) return null;

  return <CartProducts products={products} productsCart={productsCart} />;
};

export default Cart;
