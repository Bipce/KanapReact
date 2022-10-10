import { useEffect, useState } from "react";
import { getProducts } from "../services/backend";
import ProductsList from "../components/ProductsList/ProductsList";

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    (async () => {
      setProducts(await getProducts());
    })();
  }, []);

  if (!products) return null;

  return <ProductsList products={products} />;
};

export default Home;
