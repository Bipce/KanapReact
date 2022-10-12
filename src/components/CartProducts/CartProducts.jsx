import "./CartProducts.css";

const CartProducts = ({ products, productsCart }) => {
  console.log(productsCart);

  return (
    <main className="limitedWidthBlockContainer">
      <div className="limitedWidthBlock" id="limitedWidthBlock">
        <div className="cartAndFormContainer" id="cartAndFormContainer">
          <h1>Votre panier</h1>
          <section className="cart">
            <section id="cart__items">
              {productsCart.map((product, i) => {
                const currentProduct = products.find(
                  (p) => p._id == product.id
                );
                return (
                  <article className="cart__item" key={i} data-id={product.id}>
                    <div className="cart__item__img">
                      <img
                        src={currentProduct.imageUrl}
                        alt="Photographie d'un canapé"
                      />
                    </div>
                    <div className="cart__item__content">
                      <div className="cart__item__content__titlePrice">
                        <h2>{currentProduct.name}</h2>
                        <p>{currentProduct.price} €</p>
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
                            defaultValue={product.quantity}
                          />
                        </div>
                        <div className="cart__item__content__settings__delete">
                          <p className="deleteItem">Supprimer</p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </section>

            <div className="cart__price">
              <p>
                Total (<span id="totalQuantity">{products.quantity}</span>
                {"nbr d'article"} articles) :
                <span id="totalPrice">{"price"}</span> €
              </p>
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
