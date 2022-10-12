import "./CartProducts.css";

const CartProducts = () => {
  let products = JSON.parse(localStorage.getItem("products"));

  return (
    <main className="limitedWidthBlockContainer">
      <div className="limitedWidthBlock" id="limitedWidthBlock">
        <div className="cartAndFormContainer" id="cartAndFormContainer">
          <h1>Votre panier</h1>
          <section className="cart">
            <section id="cart__items">
              {products.map((product) => (
                <article
                  className="cart__item"
                  key={product.id}
                  data-id={product.id}
                >
                  <div className="cart__item__img">
                    <img
                      src={product.imageUrl}
                      alt="Photographie d'un canapé"
                    />
                  </div>
                  <div className="cart__item__content">
                    <div className="cart__item__content__titlePrice">
                      <h2>Nom du produit</h2>
                      <p>42,00 €</p>
                    </div>
                    <div className="cart__item__content__settings">
                      <div className="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                        <input
                          type="number"
                          className="itemQuantity"
                          name="itemQuantity"
                          min="1"
                          max="100"
                          value="42"
                        />
                      </div>
                      <div className="cart__item__content__settings__delete">
                        <p className="deleteItem">Supprimer</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <div className="cart__price">
              {/* <p>
                Total (<span id="totalQuantity"><!-- 2 --></span> articles) :
                <span id="totalPrice"><!-- 84,00 --></span> €
              </p> */}
            </div>

            <div className="cart__order">
              <form method="get" className="cart__order__form">
                <div className="cart__order__form__question">
                  <label htmlFor="firstName">Prénom: </label>
                  <input type="text" name="firstName" id="firstName" required />
                  {/* <p id="firstNameErrorMsg">
                    <!-- ci est un message d'erreur -->
                  </p> */}
                </div>
                <div className="cart__order__form__question">
                  <label htmlFor="lastName">Nom: </label>
                  <input type="text" name="lastName" id="lastName" required />
                  <p id="lastNameErrorMsg"></p>
                </div>
                <div className="cart__order__form__question">
                  <label htmlFor="address">Adresse: </label>
                  <input type="text" name="address" id="address" required />
                  <p id="addressErrorMsg"></p>
                </div>
                <div className="cart__order__form__question">
                  <label htmlFor="city">Ville: </label>
                  <input type="text" name="city" id="city" required />
                  <p id="cityErrorMsg"></p>
                </div>
                <div className="cart__order__form__question">
                  <label htmlFor="email">Email: </label>
                  <input type="email" name="email" id="email" required />
                  <p id="emailErrorMsg"></p>
                </div>
                <div className="cart__order__form__submit">
                  {/* <input type="submit" value="Commander !" id="order" /> */}
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CartProducts;
