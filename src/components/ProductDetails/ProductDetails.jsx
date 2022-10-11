import { useState } from "react";
import { addToCart } from "../../services/cart";
import "./ProductDetails.css";

const ProductDetails = ({ product }) => {
  const [color, setColor] = useState();
  const [quantity, setQuantity] = useState(0);

  const colorHandler = (e) => {
    setColor(e.target.value);
  };

  const quantityHandler = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const addCartHandler = () => {
    if (quantity <= 0 || quantity > 100 || !color) {
      return alert(
        "Veuillez sélectionner une couleur et un nombre entre 1 et 100."
      );
    }

    addToCart(product, color, quantity);

    alert("Produit ajouté au panier.");
  };

  return (
    <main className="limitedWidthBlockContainer">
      <div className="limitedWidthBlock">
        <section className="item">
          <article>
            <div className="item__img">
              <img src={product.imageUrl} alt={product.altTxt} />
            </div>
            <div className="item__content">
              <div className="item__content__titlePrice">
                <h1 id="title">{product.name}</h1>
                <p>
                  Prix : <span id="price">{product.price}</span>€
                </p>
              </div>

              <div className="item__content__description">
                <p className="item__content__description__title">
                  Description :
                </p>
                <p id="description">{product.description}</p>
              </div>

              <div className="item__content__settings">
                <div className="item__content__settings__color">
                  <label htmlFor="color-select">Choisir une couleur :</label>
                  <select
                    name="color-select"
                    id="colors"
                    onChange={colorHandler}
                  >
                    <option value="">--SVP, choisissez une couleur -- </option>
                    {product.colors.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="item__content__settings__quantity">
                  <label htmlFor="itemQuantity">
                    Nombre d'article(s) (1-100) :
                  </label>
                  <input
                    type="number"
                    name="itemQuantity"
                    min="1"
                    max="100"
                    defaultValue="0"
                    id="quantity"
                    onChange={quantityHandler}
                  />
                </div>
              </div>

              <div className="item__content__addButton">
                <button type="submit" onClick={addCartHandler} id="addToCart">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default ProductDetails;
