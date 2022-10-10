import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/backend";
import "./ProductsList.css";

const ProductsList = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    (async () => {
      setProducts(await getProducts());
    })();
  }, []);

  if (!products) return null;

  return (
    <main className="limitedWidthBlockContainer">
      <div className="limitedWidthBlock">
        <div className="titles">
          <h1>Nos produits</h1>
          <h2>Une gamme d'articles exclusifs</h2>
        </div>

        <section className="items" id="items">
          {products.map((product) => {
            return (
              <Link to={`./products/${product._id}`} key={product._id}>
                <article>
                  <img src={product.imageUrl} alt={product.altTxt} />
                  <h3 className="productName">{product.name}</h3>
                  <p className="productDescription">{product.description}</p>
                </article>
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default ProductsList;
