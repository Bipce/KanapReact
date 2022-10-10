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

  console.log(products);

  if (!products) return null;

  return (
    <main class="limitedWidthBlockContainer">
      <div class="limitedWidthBlock">
        <div class="titles">
          <h1>Nos produits</h1>
          <h2>Une gamme d'articles exclusifs</h2>
        </div>

        <section class="items" id="items">
          {products.map((product) => {
            return (
              <Link>
                <article>
                  <img src={product.imageUrl} alt={product.altTxt} />
                  <h3 class="productName">{product.name}</h3>
                  <p class="productDescription">{product.description}</p>
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
