import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/backend";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const Product = () => {
  const [product, setProduct] = useState();

  let { id } = useParams();

  useEffect(() => {
    (async () => {
      setProduct(await getProduct(id));
    })();
  }, []);

  if (!product) return null;

  return <ProductDetails product={product} />;
};

export default Product;
